"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function GlobalAtmosphere() {
    const [isTouch, setIsTouch] = useState(true);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    const springConfig = { damping: 45, stiffness: 150, mass: 1.2 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Slightly stronger background illumination when hovering over links, per instructions
            const target = e.target as HTMLElement;
            const clickable =
                target.closest('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])') !== null ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(clickable);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-50] overflow-hidden">
            {/* Global Static Ambience */}
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[#10A882]/[0.015] to-transparent" />
            <div className="absolute bottom-0 right-0 w-[70vw] h-[60vh] bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,168,130,0.02),transparent_50%)]" />
            <div className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(16,168,130,0.01),transparent_50%)]" />

            {/* Mouse following Atmospheric Glow */}
            {!isTouch && (
                <motion.div
                    className="absolute top-0 left-0 rounded-full mix-blend-screen"
                    animate={{
                        opacity: isHovering ? 1 : 0.7,
                        scale: isHovering ? 1.1 : 1
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut"
                    }}
                    style={{
                        width: 500,
                        height: 500,
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                        translateY: "-50%",
                        background: "radial-gradient(circle, rgba(16, 168, 130, 0.12) 0%, rgba(16, 168, 130, 0.05) 30%, transparent 65%)",
                        filter: "blur(40px)",
                    }}
                />
            )}
        </div>
    );
}
