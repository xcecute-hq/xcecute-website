"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Globe, Menu, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingNavbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 transition-all duration-300 w-full",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <div className={cn(
                "rounded-full px-6 py-3.5 flex items-center justify-between max-w-5xl mx-auto transition-all duration-500",
                isScrolled ? "bg-black/40 backdrop-blur-md border border-[#B4FFD7]/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]" : "bg-transparent border border-transparent"
            )}>

                {/* Left Side */}
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Globe className="w-5 h-5 text-[#F1F4F2] group-hover:text-[#35D07F] transition-colors duration-300" />
                        <span className="text-[#F1F4F2] font-semibold text-lg tracking-tight">Xcecute</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-[#A7B0AB] text-[13px] tracking-wide font-medium">
                        <Link href="/services" className="hover:text-[#F1F4F2] hover:drop-shadow-[0_0_8px_rgba(53,208,127,0.4)] transition-all duration-300 flex flex-col relative group">
                            Services
                            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#35D07F] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="/work" className="hover:text-[#F1F4F2] hover:drop-shadow-[0_0_8px_rgba(53,208,127,0.4)] transition-all duration-300 flex flex-col relative group">
                            Work
                            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#35D07F] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="/process" className="hover:text-[#F1F4F2] hover:drop-shadow-[0_0_8px_rgba(53,208,127,0.4)] transition-all duration-300 flex flex-col relative group">
                            Process
                            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#35D07F] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="/about" className="hover:text-[#F1F4F2] hover:drop-shadow-[0_0_8px_rgba(53,208,127,0.4)] transition-all duration-300 flex flex-col relative group">
                            About
                            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#35D07F] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </nav>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="rounded-full px-6 py-2 text-[13px] tracking-wide font-medium text-[#F1F4F2] border border-[#B4FFD7]/10 hover:border-[#35D07F] hover:text-[#35D07F] hover:shadow-[0_0_15px_rgba(53,208,127,0.06)] transition-all duration-300 hidden sm:block bg-[#111714] group"
                    >
                        <span className="flex items-center gap-2">
                            Contact Us
                            <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </span>
                    </Link>
                    <button className="md:hidden text-[#A7B0AB] hover:text-[#F1F4F2] p-2">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </motion.header>
    );
}
