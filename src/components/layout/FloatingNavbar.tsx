"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function FloatingNavbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

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
                        <img src="/Logo%20without%20name.svg" alt="XCECUTE Logo" className="h-6 sm:h-8 w-auto object-contain transform transition-transform group-hover:scale-105" />
                        <span className="text-[#F1F4F2] font-semibold text-lg tracking-tight">Xcecute</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-2 text-[13px] tracking-wide font-medium">
                        {[
                            { name: "Services", href: "/services" },
                            { name: "Work", href: "/work" },
                            { name: "Products", href: "#", comingSoon: true },
                            { name: "Process", href: "/process" },
                            { name: "About", href: "/about" },
                        ].map((link) => {
                            if (link.comingSoon) {
                                return (
                                    <span key={link.name} className="flex items-center gap-1.5 cursor-default hover:text-[#F1F4F2] transition-colors duration-300 group px-4 py-1.5 text-[#A7B0AB]">
                                        {link.name}
                                        <span className="px-1.5 py-0.5 rounded text-[8px] font-bold tracking-widest bg-[#E6C65C]/10 text-[#E6C65C] border border-[#E6C65C]/20 uppercase">
                                            Coming Soon
                                        </span>
                                    </span>
                                );
                            }

                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-1.5 rounded-full transition-all duration-300 relative group text-center",
                                        isActive
                                            ? "bg-[#10A882] text-black font-semibold shadow-[0_0_15px_rgba(16,168,130,0.4)]"
                                            : "text-[#A7B0AB] hover:text-[#F1F4F2] hover:bg-white/5"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="rounded-full px-6 py-2 text-[13px] tracking-wide font-medium text-[#F1F4F2] border border-[#B4FFD7]/10 hover:border-[#10A882] hover:text-[#10A882] hover:shadow-[0_0_15px_rgba(53,208,127,0.06)] transition-all duration-300 hidden sm:block bg-[#111714] group"
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
