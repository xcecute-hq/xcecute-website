"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    number: string;
    title: string;
    description: string;
    href: string;
    icon: React.ReactNode;
    delay?: number;
}

export function ServiceCard({
    number,
    title,
    description,
    href,
    icon,
    delay = 0,
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay }}
            className="group relative"
        >
            <Link href={href} className="block relative h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-2xl">
                <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0 border border-t-accent-primary/50 pointer-events-none" />

                <div className="relative h-full flex flex-col p-8 rounded-2xl border border-[#B4FFD7]/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 hover:bg-white/[0.035] overflow-hidden shadow-none group-hover:shadow-[0_15px_40px_-15px_rgba(49,92,255,0.15)] group-hover:border-accent-primary/30">

                    {/* Accent glow on hover */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-accent-primary/20 rounded-full blur-[60px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

                    <div className="flex items-center justify-between mb-8">
                        <span className="font-sans font-medium text-white/50 tabular-nums">
                            {number}
                        </span>
                        <div className="text-white/50 group-hover:text-accent-primary transition-colors duration-300">
                            {icon}
                        </div>
                    </div>

                    <h3 className="font-sans text-2xl sm:text-3xl text-white font-medium mb-4 tracking-tight">
                        {title}
                    </h3>

                    <p className="font-sans text-[#A7B0AB] leading-relaxed mb-8 flex-grow tracking-wide">
                        {description}
                    </p>

                    <div className="flex items-center text-sm font-sans font-medium text-white/80 group-hover:text-accent-primary transition-colors mt-auto uppercase tracking-wider">
                        Explore service
                        <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
