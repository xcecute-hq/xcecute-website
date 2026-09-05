"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
    slug: string;
    category: string;
    title: string;
    problem: string;
    approach: string;
    build: string;
    outcome?: string;
    delay?: number;
}

export function CaseStudyCard({
    category,
    title,
    problem,
    approach,
    build,
    outcome,
    delay = 0,
}: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay }}
            className="group relative w-full block border-t border-[#B4FFD7]/10 py-16 sm:py-24 hover:bg-[#111714]/50 transition-colors duration-500 ease-out"
        >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#35D07F]/0 group-hover:bg-[#35D07F]/50 group-hover:shadow-[0_0_20px_rgba(53,208,127,0.4)] transition-all duration-500 ease-out" />

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transform group-hover:translate-x-2 transition-transform duration-500 ease-out">
                {/* Left Side: Title & Meta */}
                <div className="flex-1 lg:max-w-md">
                    <div className="mb-6 flex items-center justify-between">
                        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-[#707A75] border border-[#B4FFD7]/10 bg-[#080B0A]">
                            {category}
                        </span>
                        <ArrowRight className="text-[#707A75] w-5 h-5 -rotate-45 group-hover:rotate-0 group-hover:text-[#35D07F] transition-all duration-500 ease-out" />
                    </div>

                    <h3 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F1F4F2] mb-8 leading-[1.05]">
                        {title}
                    </h3>
                </div>

                {/* Right Side: Narrative */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                    <div>
                        <h4 className="font-sans font-semibold text-[#A7B0AB] uppercase tracking-wider text-[11px] mb-3">The Problem</h4>
                        <p className="font-sans text-[#F1F4F2] text-base leading-relaxed opacity-80">{problem}</p>
                    </div>
                    <div>
                        <h4 className="font-sans font-semibold text-[#A7B0AB] uppercase tracking-wider text-[11px] mb-3">The Approach</h4>
                        <p className="font-sans text-[#F1F4F2] text-base leading-relaxed opacity-80">{approach}</p>
                    </div>
                    <div className="sm:col-span-2 border-t border-[#B4FFD7]/10 pt-8 mt-auto">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-8">
                            <div className="flex-1">
                                <h4 className="font-sans font-semibold text-[#A7B0AB] uppercase tracking-wider text-[11px] mb-3">The Build</h4>
                                <p className="font-sans text-[#F1F4F2] text-base leading-relaxed opacity-80">{build}</p>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-sans font-semibold text-[#35D07F] uppercase tracking-wider text-[11px] mb-3 group-hover:drop-shadow-[0_0_10px_rgba(53,208,127,0.3)] transition-all">The Outcome</h4>
                                <p className="font-sans text-[#F1F4F2] font-medium text-base leading-relaxed">
                                    {outcome || "Deployed and integrated into active production environments."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
