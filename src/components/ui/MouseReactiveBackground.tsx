"use client";

import React, { useEffect, useRef } from 'react';

export function MouseReactiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let W = 0, H = 0;
        let animationFrameId: number;

        const resize = () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const mouse = { x: W / 2, y: H / 2, active: false, lastMoveTime: 0, glowIntensity: 0 };

        const onMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
            mouse.lastMoveTime = performance.now();
        };

        const onMouseLeave = () => { mouse.active = false; };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseleave', onMouseLeave);

        const GREEN = '16, 168, 130'; // #10A882 in RGB

        function makeParticle(spawnAnywhere: boolean) {
            const z = Math.random(); // 0 = far, 1 = near
            return {
                x: spawnAnywhere ? Math.random() * W : 0,
                y: spawnAnywhere ? Math.random() * H : 0,
                z: z,
                vx: (Math.random() - 0.5) * 0.35 * (0.4 + z),
                vy: (Math.random() - 0.5) * 0.35 * (0.4 + z),
                r: 0.6 + z * 1.6,
                phase: Math.random() * Math.PI * 2,
                bobSpeed: 0.6 + z * 0.4
            };
        }

        const COUNT = 750;
        const particles: ReturnType<typeof makeParticle>[] = [];
        for (let i = 0; i < COUNT; i++) {
            particles.push(makeParticle(true));
        }

        const MOUSE_RADIUS = 260;
        const LINK_DIST = 120;
        let t = 0;

        function animate() {
            if (!ctx) return;

            t += 0.016;
            ctx.clearRect(0, 0, W, H);

            // Handle glowing retraction logic
            const timeSinceMove = performance.now() - mouse.lastMoveTime;
            const isIdle = timeSinceMove > 150 || !mouse.active;

            if (isIdle) {
                // retract smoothly
                mouse.glowIntensity = Math.max(0, mouse.glowIntensity - 0.04);
            } else {
                // ramp up quickly 
                mouse.glowIntensity = Math.min(1, mouse.glowIntensity + 0.1);
            }

            // soft glow following mouse scaled by intensity
            if (mouse.glowIntensity > 0.01) {
                const currentRadius = 300 * mouse.glowIntensity;
                const currentOpacity = 0.12 * mouse.glowIntensity;
                const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, currentRadius);
                grad.addColorStop(0, `rgba(${GREEN}, ${currentOpacity})`);
                grad.addColorStop(1, `rgba(${GREEN}, 0)`);
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, W, H);
            }

            const margin = 20;
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -margin || p.x > W + margin || p.y < -margin || p.y > H + margin) {
                    const np = makeParticle(false);
                    const edge = Math.floor(Math.random() * 4);
                    if (edge === 0) { np.x = -margin; np.y = Math.random() * H; }
                    else if (edge === 1) { np.x = W + margin; np.y = Math.random() * H; }
                    else if (edge === 2) { np.y = -margin; np.x = Math.random() * W; }
                    else { np.y = H + margin; np.x = Math.random() * W; }
                    particles[i] = np;
                    p = particles[i];
                }

                const bobX = Math.cos(t * p.bobSpeed + p.phase) * (0.3 + p.z * 0.5);
                const bobY = Math.sin(t * p.bobSpeed + p.phase) * (0.3 + p.z * 0.5);
                const drawX = p.x + bobX;
                const drawY = p.y + bobY;

                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MOUSE_RADIUS) {
                        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
                        const push = force * (1.4 + p.z * 2.6);
                        p.x += (dx / dist) * push;
                        p.y += (dy / dist) * push;
                    }
                }

                const alpha = 0.35 + p.z * 0.55;
                ctx.beginPath();
                ctx.arc(drawX, drawY, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${GREEN}, ${alpha})`;
                ctx.fill();
            }

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i], b = particles[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < LINK_DIST) {
                        const depthFactor = (a.z + b.z) / 2;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(${GREEN}, ${0.18 * depthFactor * (1 - dist / LINK_DIST)})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseleave', onMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ display: 'block', background: '#080B0A' }}
        />
    );
}
