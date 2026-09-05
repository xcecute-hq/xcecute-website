"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    once?: boolean;
}

export function ScrollReveal({
    children,
    className,
    delay = 0,
    direction = "up",
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });

    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: 40, x: 0 };
            case "down":
                return { y: -40, x: 0 };
            case "left":
                return { x: 40, y: 0 };
            case "right":
                return { x: -40, y: 0 };
            default:
                return { x: 0, y: 0 };
        }
    };

    const initialOffset = getDirectionOffset();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...initialOffset }}
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, ...initialOffset }
            }
            transition={{
                duration: 0.7,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
