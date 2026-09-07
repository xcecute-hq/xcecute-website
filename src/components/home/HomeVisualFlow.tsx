"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Cpu, Layers, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowNode {
    id: string;
    step: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    accent: string;
}

const FLOW_NODES: FlowNode[] = [
    {
        id: "input",
        step: "01 // INPUT",
        title: "IDEA / PROBLEM",
        description: "A business challenge, a manual bottleneck, or an opportunity worth pursuing.",
        icon: Sparkles,
        accent: "#F1F4F2"
    },
    {
        id: "catalyst",
        step: "02 // CATALYST",
        title: "XCECUTE",
        description: "Engineering strategy, architectural clarity, and rapid technical execution.",
        icon: Cpu,
        accent: "#10A882"
    },
    {
        id: "engine",
        step: "03 // ENGINE",
        title: "INTELLIGENCE + DATA + SOFTWARE",
        description: "Bespoke AI systems, automated data pipelines, and scalable digital products.",
        icon: Layers,
        accent: "#10A882"
    },
    {
        id: "outcome",
        step: "04 // OUTCOME",
        title: "REAL-WORLD OUTCOME",
        description: "Production technology that operates 24/7, eliminates waste, and scales your business.",
        icon: CheckCircle2,
        accent: "#5EE6A0"
    }
];

export function HomeVisualFlow() {
    const [hoveredNode, setHoveredNode] = useState<string | null>("catalyst");

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-full flex flex-col items-center relative">

                {FLOW_NODES.map((node, index) => {
                    const IconComp = node.icon;
                    const isHovered = hoveredNode === node.id;
                    const isSpecial = node.id === "catalyst" || node.id === "engine";

                    return (
                        <div key={node.id} className="w-full flex flex-col items-center">
                            {/* Interactive Stage Card */}
                            <motion.div
                                onMouseEnter={() => setHoveredNode(node.id)}
                                className={cn(
                                    "w-full max-w-2xl p-6 sm:p-8 rounded-3xl transition-all duration-500 cursor-pointer relative overflow-hidden group",
                                    isHovered
                                        ? "bg-[#111714] border-[#10A882]/60 shadow-[0_0_40px_rgba(16,168,130,0.18)] scale-[1.02]"
                                        : "bg-[#0D1210]/90 border-white/10 hover:border-white/20"
                                )}
                                style={{
                                    borderWidth: "1px",
                                }}
                            >
                                {/* Ambient glow on hover */}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-r from-[#10A882]/0 via-[#10A882]/5 to-[#10A882]/0 transition-opacity duration-500 pointer-events-none",
                                    isHovered ? "opacity-100" : "opacity-0"
                                )} />

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0",
                                            isHovered
                                                ? "bg-[#10A882] text-black shadow-[0_0_20px_rgba(16,168,130,0.4)]"
                                                : "bg-white/5 border border-white/10 text-white group-hover:text-[#10A882]"
                                        )}>
                                            <IconComp className="w-5 h-5" />
                                        </div>

                                        <div>
                                            <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#10A882] uppercase block mb-1">
                                                {node.step}
                                            </span>
                                            <h3 className={cn(
                                                "font-sans font-semibold text-lg sm:text-2xl tracking-tight transition-colors",
                                                isSpecial ? "text-[#10A882]" : "text-white"
                                            )}>
                                                {node.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="font-sans text-xs sm:text-sm text-[#A7B0AB] sm:max-w-xs sm:text-right leading-relaxed">
                                        {node.description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Connecting Pulse Line */}
                            {index < FLOW_NODES.length - 1 && (
                                <div className="py-3 sm:py-4 flex flex-col items-center relative">
                                    <div className="w-[2px] h-8 sm:h-12 bg-gradient-to-b from-white/10 via-[#10A882]/50 to-white/10 relative overflow-hidden">
                                        <motion.div
                                            animate={{ y: ["-100%", "200%"] }}
                                            transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
                                            className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#10A882] to-transparent"
                                        />
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-[#080B0A] border border-[#10A882]/40 flex items-center justify-center text-[#10A882] my-[-6px] z-10">
                                        <ArrowDown className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}

            </div>
        </div>
    );
}
