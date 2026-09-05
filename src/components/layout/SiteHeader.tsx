"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
    { name: "Services", href: "/services" },
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
                    {/* Custom logo shape or text */}
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-accent-primary rounded-md flex items-center justify-center transform transition-transform group-hover:scale-105 group-hover:rotate-3">
                        <span className="font-display font-bold text-base text-lg text-black leading-none mt-1">A</span>
                    </div>
                    <span className="font-sans font-semibold tracking-wide text-lg hidden sm:block transition-colors group-hover:text-cream">
                        AGENCY
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-cream transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-sm"
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent-primary rounded-full"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/contact">Contact</Link>
                    </Button>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden p-2 text-muted hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-full relative z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-expanded={mobileMenuOpen}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
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
                            ))}
                            <Link
                                href="/contact"
                                className={cn(
                                    "font-display text-4xl sm:text-5xl transition-colors",
                                    pathname === "/contact" ? "text-accent-primary" : "text-cream hover:text-muted"
                                )}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                </motion.div>
            )}
        </header>
    );
}
