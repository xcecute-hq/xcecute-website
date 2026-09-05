"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    delay?: number;
}

export function PricingCard({
    title,
    price,
    description,
    features,
    highlighted = false,
    delay = 0,
}: PricingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "relative flex flex-col p-8 sm:p-10 rounded-3xl h-full transition-transform duration-500 hover:-translate-y-2",
                highlighted
                    ? "bg-surface border-2 border-accent-primary"
                    : "bg-base border border-border-subtle"
            )}
        >
            {highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-accent-primary text-black font-sans font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(216,174,67,0.3)]">
                        Most Popular
                    </span>
                </div>
            )}

            {highlighted && (
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-accent-primary/10 rounded-full blur-[60px] pointer-events-none" />
            )}

            <h3 className="font-display text-2xl sm:text-3xl text-cream mb-2">{title}</h3>
            <p className="font-sans text-muted text-sm mb-6 h-10">{description}</p>

            <div className="mb-8">
                <span className="font-display text-5xl sm:text-6xl text-cream tracking-tight">{price}</span>
            </div>

            <div className="flex-grow mb-10 space-y-4">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={cn("w-5 h-5 flex-shrink-0 mt-0.5", highlighted ? "text-accent-primary" : "text-muted")} />
                        <span className="font-sans text-muted text-sm leading-relaxed">{feature}</span>
                    </div>
                ))}
            </div>

            <Button
                variant={highlighted ? "primary" : "outline"}
                size="lg"
                className="w-full group mt-auto"
                asChild
            >
                <Link href="/contact">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </motion.div>
    );
}
