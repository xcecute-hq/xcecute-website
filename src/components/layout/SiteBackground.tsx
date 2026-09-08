import { ReactNode } from "react";

export function SiteBackground({ children }: { children: ReactNode }) {
    return (
        <div className="relative min-h-screen bg-[#080B0A] w-full flex flex-col w-screen overflow-x-hidden">
            {/* Base Underlay Glow */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(ellipse 1000px 800px at 100% 0%, rgba(16, 168, 130, 0.15) 0%, rgba(16, 168, 130, 0.08) 30%, rgba(16, 168, 130, 0.02) 60%, transparent 80%)'
                }}
            />

            {/* Micro-Noise Texture */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.20] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay"
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex-grow flex flex-col">
                {children}
            </div>

            {/* Top-Right Emerald Gradient Glow Overlay (#10A882) */}
            {/* Positioned at z-20 so it illuminates the top-right corner across all viewports and scroll positions */}
            <div
                className="fixed top-0 right-0 w-[600px] sm:w-[850px] lg:w-[1100px] h-[600px] sm:h-[850px] lg:h-[950px] pointer-events-none z-20 overflow-hidden"
                style={{
                    background: 'radial-gradient(circle at 100% 0%, rgba(16, 168, 130, 0.15) 0%, rgba(16, 168, 130, 0.08) 30%, rgba(16, 168, 130, 0.02) 60%, transparent 80%)',
                }}
            />
            <div
                className="fixed -top-24 -right-24 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] pointer-events-none z-20 rounded-full blur-[140px] bg-[#10A882]/10"
            />
        </div>
    );
}
