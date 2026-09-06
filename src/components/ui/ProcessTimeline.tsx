"use client";

import { motion } from "framer-motion";

interface TimelineStep {
    number: string;
    title: string;
    description: string;
}

interface ProcessTimelineProps {
    steps: TimelineStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
    return (
        <div className="flex flex-col w-full relative">
            <div className="absolute left-[39px] sm:left-[59px] top-4 bottom-4 w-[1px] bg-[#B4FFD7]/10" />

            {steps.map((step, index) => (
                <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className="relative flex items-start group py-12 sm:py-20"
                >
                    <div className="flex-shrink-0 w-[80px] sm:w-[120px] bg-[#080B0A] relative z-10 py-1">
                        <span className="font-sans font-medium text-4xl sm:text-5xl lg:text-7xl text-[#10A882]/20 group-hover:text-[#10A882] transition-colors duration-500">
                            {step.number}
                        </span>
                    </div>

                    <div className="flex-1 ml-4 sm:ml-12 mt-1 sm:mt-3 max-w-3xl transform group-hover:translate-x-2 transition-transform duration-500">
                        <h3 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl text-[#F1F4F2] mb-6 tracking-tight">
                            {step.title}
                        </h3>
                        <p className="font-sans text-lg sm:text-xl text-[#A7B0AB] leading-relaxed whitespace-pre-line group-hover:text-[#F1F4F2] transition-colors duration-500">
                            {step.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
