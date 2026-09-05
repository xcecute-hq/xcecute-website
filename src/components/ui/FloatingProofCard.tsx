"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingProofCardProps {
    title: string;
    subtitle: string;
    icon?: React.ReactNode;
    className?: string;
    delay?: number;
}

export function FloatingProofCard({
    title,
    subtitle,
    icon,
    className,
    delay = 0,
}: FloatingProofCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={cn(
                "flex items-center gap-4 p-4 rounded-2xl bg-surface/80 backdrop-blur-md border border-border-subtle shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
                className
            )}
        >
            {icon && (
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-accent-primary/10 text-accent-primary">
                    {icon}
                </div>
            )}
            <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl text-cream leading-none mb-1">
                    {title}
                </span>
                <span className="font-sans text-xs sm:text-sm text-muted">
                    {subtitle}
                </span>
            </div>
        </motion.div>
    );
}
