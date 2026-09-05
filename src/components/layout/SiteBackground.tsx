import { ReactNode } from "react";

export function SiteBackground({ children }: { children: ReactNode }) {
    return (
        <div className="relative min-h-screen bg-[#080B0A] w-full flex flex-col w-screen overflow-x-hidden">
            {/* Cinematic Specular/Atmospheric Glow */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(ellipse at 50% -10%, rgba(49, 92, 255, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 110%, rgba(117, 72, 255, 0.05) 0%, transparent 60%)'
                }}
            />

            {/* Micro-Noise Texture */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.25] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay"
                }}
            />

            {/* Deep Vignette */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    boxShadow: 'inset 0 0 200px rgba(0,0,0,0.95)'
                }}
            />

            <div className="relative z-10 flex-grow flex flex-col">
                {children}
            </div>
        </div>
    );
}
