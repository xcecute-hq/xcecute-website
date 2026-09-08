"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Products", href: "#", comingSoon: true },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
];

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    React.useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4 sm:py-6",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <div
                className={cn(
                    "w-full max-w-7xl flex items-center justify-between transition-all duration-300 rounded-full px-6",
                    isScrolled
                        ? "bg-gradient-to-r from-[#0f172a]/90 via-[#064e3b]/90 to-[#022c22]/90 backdrop-blur-lg border border-border-subtle py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                        : "bg-transparent border-transparent py-4"
                )}
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-md"
                >
                    <Image src="/Logo%20without%20name.svg" alt="XCECUTE Logo" width={100} height={36} className="h-7 sm:h-9 w-auto object-contain transform transition-transform group-hover:scale-105" />
                    <span className="font-sans font-semibold tracking-widest text-lg hidden sm:block transition-colors group-hover:text-cream">
                        XCECUTE
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        link.comingSoon ? (
                            <span
                                key={link.name}
                                className="text-sm font-medium text-muted hover:text-cream transition-colors relative group flex items-center gap-1.5 cursor-default"
                            >
                                {link.name}
                                <span className="px-1.5 py-0.5 rounded text-[8px] font-bold tracking-widest bg-[#E6C65C]/10 text-[#E6C65C] border border-[#E6C65C]/20 uppercase">
                                    Coming Soon
                                </span>
                            </span>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-sm transition-all duration-300 relative group",
                                    pathname === link.href
                                        ? "bg-[#10A882] text-black font-semibold shadow-[0_0_15px_rgba(16,168,130,0.4)]"
                                        : "font-medium text-muted hover:text-cream hover:bg-white/5"
                                )}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>

                {/* Mobile menu and Top Panel Actions */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        className="p-2 text-muted hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-full relative z-50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-40 bg-base/95 backdrop-blur-xl md:hidden overflow-y-auto"
                >
                    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
                        <nav className="flex flex-col items-center gap-6 text-center">
                            {NAV_LINKS.map((link) => (
                                link.comingSoon ? (
                                    <span
                                        key={link.name}
                                        className="font-display text-4xl sm:text-5xl text-cream/50 cursor-default flex items-center gap-3 relative"
                                    >
                                        {link.name}
                                        <span className="px-2 py-1 rounded text-xs font-sans font-bold tracking-widest bg-[#E6C65C]/10 text-[#E6C65C] border border-[#E6C65C]/20 uppercase absolute -right-4 translate-x-full">
                                            Coming Soon
                                        </span>
                                    </span>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "font-display text-4xl sm:text-5xl transition-colors",
                                            pathname === link.href ? "text-accent-primary" : "text-cream hover:text-muted"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                            <Link
                                href="/contact"
                                className={cn(
                                    "font-display text-4xl sm:text-5xl transition-colors",
                                    pathname === "/contact" ? "text-accent-primary" : "text-cream hover:text-muted"
                                )}
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </motion.div>
            )}
        </header>
    );
}
