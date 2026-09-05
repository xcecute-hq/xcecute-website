"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface FeatureGridProps {
    features: {
        title: string;
        description: string;
    }[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col gap-4 p-8 rounded-2xl bg-[#111714] border border-[#B4FFD7]/10 hover:border-white/20 transition-colors duration-300"
                >
                    <CheckCircle2 className="w-8 h-8 text-accent-primary mb-2" />
                    <h3 className="font-sans font-medium text-xl text-white">{feature.title}</h3>
                    <p className="font-sans text-[#A7B0AB] leading-relaxed text-sm">
                        {feature.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
