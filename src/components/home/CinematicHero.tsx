"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import Link from "next/link";

export function CinematicHero() {
    return (
        <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 z-10 overflow-hidden shrink-0">
            <BackgroundVideo />

            <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center justify-center w-full gap-8 sm:gap-11 pt-20">


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="font-sans text-[44px] sm:text-6xl md:text-[84px] lg:text-[100px] font-medium tracking-tight leading-[1.05] max-w-5xl text-[#F1F4F2]"
                >
                    Put the best brains <br className="hidden sm:block" /> at your service.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed mt-[-10px] md:mt-[-20px] font-sans"
                >
                    We turn ideas, problems, and possibilities into things that work.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-6 flex justify-center"
                >
                    <Link
                        href="/contact"
                        className="flex items-center gap-3 bg-[#111714] border border-[#B4FFD7]/10 px-8 py-3.5 rounded-full text-[14px] font-medium text-white hover:border-[#35D07F] hover:shadow-[0_0_30px_rgba(53,208,127,0.06)] transition-all duration-300 group cursor-pointer"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#35D07F]/20 transition-colors duration-300 border border-white/5">
                            <ArrowRight className="w-4 h-4 text-white group-hover:text-[#35D07F] transition-colors" />
                        </div>
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
