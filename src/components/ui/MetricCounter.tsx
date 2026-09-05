"use client";

import { useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useRef } from "react";

interface MetricCounterProps {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

export function MetricCounter({
    value,
    label,
    suffix = "",
    prefix = "",
    decimals = 0,
}: MetricCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated && ref.current) {
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate(v) {
                    if (ref.current) {
                        ref.current.textContent = v.toFixed(decimals);
                    }
                },
            });
            setHasAnimated(true);
            return () => controls.stop();
        }
    }, [isInView, value, hasAnimated, decimals]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center p-6"
        >
            <div className="font-display text-4xl sm:text-5xl md:text-6xl text-cream mb-2 flex items-baseline">
                <span className="text-xl sm:text-3xl text-accent-primary font-sans font-medium mr-1">{prefix}</span>
                <span ref={ref}>0</span>
                <span className="text-xl sm:text-3xl text-accent-primary font-sans font-medium ml-1">{suffix}</span>
            </div>
            <span className="font-sans text-sm sm:text-base text-muted uppercase tracking-widest font-medium">
                {label}
            </span>
        </motion.div>
    );
}
