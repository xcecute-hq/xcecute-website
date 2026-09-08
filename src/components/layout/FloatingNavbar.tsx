"use client";

import Link from "next/link";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ArrowRight,
    ChevronDown,
    Bot,
    Database,
    Code2,
    Sparkles,
    Briefcase
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SERVICE_CATEGORIES } from "@/data/servicesData";
import { PRODUCTS_DATA } from "@/data/productsData";

const CATEGORY_ICONS = {
    ai: Bot,
    data: Database,
    software: Code2
};

export function FloatingNavbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<"services" | "products" | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);

    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    // Close dropdowns on route change
    useEffect(() => {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
    }, [pathname]);

    // Click outside handler
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (name: "services" | "products") => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
        }
        closeTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200);
    };

    const handleKeyDownDropdown = (e: React.KeyboardEvent, name: "services" | "products") => {
        if (e.key === "Enter" || e.key === " ") {
            if (activeDropdown !== name) {
                e.preventDefault();
                handleMouseEnter(name);
            }
        }
    };

    useEffect(() => {
        const handleGlobalKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveDropdown(null);
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener("keydown", handleGlobalKeyDown);
        return () => document.removeEventListener("keydown", handleGlobalKeyDown);
    }, []);

    return (
        <motion.header
            ref={navRef}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 transition-all duration-300 w-full",
                isScrolled ? "py-3" : "py-5"
            )}
        >
            <div className={cn(
                "rounded-full px-5 sm:px-6 py-3 flex items-center justify-between max-w-6xl mx-auto transition-all duration-500 relative",
                isScrolled
                    ? "bg-black/80 backdrop-blur-xl border border-[#B4FFD7]/15 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                    : "bg-black/60 backdrop-blur-md border border-[#10A882]/20"
            )}>

                {/* Left Side: Brand Logo */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <img
                            src="/Logo%20without%20name.svg"
                            alt="XCECUTE Logo"
                            className="h-6 sm:h-7 w-auto object-contain transform transition-transform group-hover:scale-105"
                        />
                        <span className="text-[#F1F4F2] font-semibold text-lg tracking-tight">Xcecute</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 text-[13px] tracking-wide font-medium">
                        {/* HOME */}
                        <Link
                            href="/"
                            className={cn(
                                "px-3.5 py-1.5 rounded-full transition-all duration-300 text-center",
                                pathname === "/"
                                    ? "text-white bg-white/10"
                                    : "text-[#A7B0AB] hover:text-white hover:bg-white/5"
                            )}
                        >
                            HOME
                        </Link>

                        {/* SERVICES DROPDOWN TRIGGER */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("services")}
                            onMouseLeave={handleMouseLeave}
                            onFocus={() => handleMouseEnter("services")}
                        >
                            <Link
                                href="/services"
                                onClick={() => setActiveDropdown(null)}
                                onKeyDown={(e) => handleKeyDownDropdown(e, "services")}
                                className={cn(
                                    "px-3.5 py-1.5 rounded-full transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10A882]",
                                    activeDropdown === "services" || pathname.startsWith("/services")
                                        ? "text-white bg-[#10A882]/15 text-[#10A882] border border-[#10A882]/30"
                                        : "text-[#A7B0AB] hover:text-white hover:bg-white/5 border border-transparent"
                                )}
                            >
                                <span>SERVICES</span>
                                <ChevronDown className={cn(
                                    "w-3.5 h-3.5 transition-transform duration-300",
                                    activeDropdown === "services" ? "rotate-180 text-[#10A882]" : ""
                                )} />
                            </Link>
                        </div>

                        {/* PRODUCTS DROPDOWN TRIGGER */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("products")}
                            onMouseLeave={handleMouseLeave}
                            onFocus={() => handleMouseEnter("products")}
                        >
                            <Link
                                href="/products"
                                onClick={() => setActiveDropdown(null)}
                                onKeyDown={(e) => handleKeyDownDropdown(e, "products")}
                                className={cn(
                                    "px-3.5 py-1.5 rounded-full transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10A882]",
                                    activeDropdown === "products" || pathname.startsWith("/products")
                                        ? "text-white bg-[#10A882]/15 text-[#10A882] border border-[#10A882]/30"
                                        : "text-[#A7B0AB] hover:text-white hover:bg-white/5 border border-transparent"
                                )}
                            >
                                <span>PRODUCTS</span>
                                <ChevronDown className={cn(
                                    "w-3.5 h-3.5 transition-transform duration-300",
                                    activeDropdown === "products" ? "rotate-180 text-[#10A882]" : ""
                                )} />
                            </Link>
                        </div>

                        {/* ABOUT */}
                        <Link
                            href="/about"
                            className={cn(
                                "px-3.5 py-1.5 rounded-full transition-all duration-300 text-center",
                                pathname === "/about"
                                    ? "text-white bg-white/10"
                                    : "text-[#A7B0AB] hover:text-white hover:bg-white/5"
                            )}
                        >
                            ABOUT
                        </Link>

                        {/* CONTACT */}
                        <Link
                            href="/contact"
                            className={cn(
                                "px-3.5 py-1.5 rounded-full transition-all duration-300 text-center",
                                pathname === "/contact"
                                    ? "text-white bg-white/10"
                                    : "text-[#A7B0AB] hover:text-white hover:bg-white/5"
                            )}
                        >
                            CONTACT
                        </Link>
                    </nav>
                </div>

                {/* Right Side: CTA Button */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="rounded-full px-5 py-2 text-[13px] tracking-wide font-semibold text-white bg-black/50 border border-[#10A882]/40 hover:bg-[#10A882]/10 hover:border-[#10A882]/70 shadow-[0_0_15px_rgba(16,168,130,0.15)] transition-all duration-300 hidden sm:block group"
                    >
                        <span className="flex items-center gap-2 text-white">
                            Contact Us
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-[#A7B0AB] hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* ========================================================= */}
            {/* DESKTOP MEGA-MENU: SERVICES */}
            {/* ========================================================= */}
            <AnimatePresence>
                {activeDropdown === "services" && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.99 }}
                        onMouseEnter={() => handleMouseEnter("services")}
                        onMouseLeave={handleMouseLeave}
                        onFocus={() => handleMouseEnter("services")}
                        className="hidden lg:block absolute left-4 right-4 max-w-6xl mx-auto top-full mt-2 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 p-8 rounded-3xl bg-[#080B0A]/95 backdrop-blur-2xl border border-[#B4FFD7]/20 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-50 overflow-hidden"
                    >
                        {/* Ambient subtle glow inside mega-menu */}
                        <div className="absolute top-0 right-1/4 w-96 h-48 bg-[#10A882]/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="grid grid-cols-3 gap-8 relative z-10">
                            {SERVICE_CATEGORIES.map((category) => {
                                const CatIcon = CATEGORY_ICONS[category.categorySlug] || Bot;
                                return (
                                    <div key={category.categorySlug} className="flex flex-col">
                                        <div className="flex items-center gap-2.5 mb-2 pb-2 border-b border-white/5">
                                            <div className="w-6 h-6 rounded-md bg-[#10A882]/10 border border-[#10A882]/20 flex items-center justify-center text-[#10A882]">
                                                <CatIcon className="w-3.5 h-3.5" />
                                            </div>
                                            <h3 className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
                                                {category.title}
                                            </h3>
                                        </div>
                                        <p className="text-[11px] text-[#A7B0AB] mb-4 font-sans leading-relaxed">
                                            {category.description}
                                        </p>

                                        <ul className="space-y-1">
                                            {category.services.map((item) => (
                                                <li key={item.slug}>
                                                    <Link
                                                        href={item.path}
                                                        onClick={() => setActiveDropdown(null)}
                                                        className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#10A882]/10 hover:border hover:border-[#10A882]/30 border border-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10A882]"
                                                    >
                                                        <div className="flex flex-col">
                                                            <span className="text-xs font-medium text-[#F1F4F2] group-hover:text-[#10A882] transition-colors flex items-center gap-1.5">
                                                                {item.name}
                                                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-[#10A882] transition-all duration-200" />
                                                            </span>
                                                            <span className="text-[11px] text-[#707A75] group-hover:text-[#A7B0AB] transition-colors line-clamp-1">
                                                                {item.shortDesc}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Mega-menu footer link */}
                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#A7B0AB]">
                            <span>Looking for a complete custom build?</span>
                            <Link
                                href="/services"
                                onClick={() => setActiveDropdown(null)}
                                className="inline-flex items-center gap-1 text-[#10A882] hover:underline font-medium"
                            >
                                View all services &amp; capabilities overview →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========================================================= */}
            {/* DESKTOP DROPDOWN: PRODUCTS */}
            {/* ========================================================= */}
            <AnimatePresence>
                {activeDropdown === "products" && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.99 }}
                        onMouseEnter={() => handleMouseEnter("products")}
                        onMouseLeave={handleMouseLeave}
                        onFocus={() => handleMouseEnter("products")}
                        className="hidden lg:block absolute left-1/4 right-1/4 max-w-3xl mx-auto top-full mt-2 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 p-6 rounded-3xl bg-[#080B0A]/95 backdrop-blur-2xl border border-[#B4FFD7]/20 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-50 overflow-hidden"
                    >
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            {PRODUCTS_DATA.map((cat) => (
                                <div key={cat.categorySlug} className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
                                        <Sparkles className="w-3.5 h-3.5 text-[#10A882]" />
                                        <h3 className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
                                            {cat.title}
                                        </h3>
                                    </div>
                                    <p className="text-[11px] text-[#A7B0AB] mb-3 leading-relaxed">
                                        {cat.description}
                                    </p>

                                    <ul className="space-y-1.5">
                                        {cat.products.map((prod) => (
                                            <li key={prod.id}>
                                                <Link
                                                    href={prod.href}
                                                    onClick={() => setActiveDropdown(null)}
                                                    className="group flex flex-col p-2 rounded-xl hover:bg-[#10A882]/10 hover:border hover:border-[#10A882]/30 border border-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10A882]"
                                                >
                                                    <div className="flex items-center justify-between mb-0.5">
                                                        <span className="text-xs font-medium text-white group-hover:text-[#10A882] transition-colors">
                                                            {prod.name}
                                                        </span>
                                                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#10A882]/10 text-[#10A882] border border-[#10A882]/20">
                                                            {prod.status}
                                                        </span>
                                                    </div>
                                                    <span className="text-[11px] text-[#A7B0AB] line-clamp-1">
                                                        {prod.headline}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#A7B0AB]">
                            <span className="text-[11px]">Turnkey engines available for pilot integration.</span>
                            <Link
                                href="/products"
                                onClick={() => setActiveDropdown(null)}
                                className="inline-flex items-center gap-1 text-[#10A882] hover:underline font-medium text-xs"
                            >
                                Explore all products →
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========================================================= */}
            {/* MOBILE NAVIGATION DRAWER */}
            {/* ========================================================= */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden mt-3 p-6 rounded-3xl bg-[#080B0A]/95 backdrop-blur-2xl border border-[#B4FFD7]/20 shadow-2xl max-h-[85vh] overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4">
                            {/* HOME */}
                            <Link
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium text-white hover:text-[#10A882] py-1 border-b border-white/5"
                            >
                                Home
                            </Link>

                            {/* SERVICES ACCORDION */}
                            <div className="border-b border-white/5 pb-2">
                                <button
                                    onClick={() => setMobileCategoryOpen(mobileCategoryOpen === "services" ? null : "services")}
                                    className="w-full flex items-center justify-between text-base font-medium text-white py-2 cursor-pointer"
                                >
                                    <span>Services</span>
                                    <ChevronDown className={cn("w-4 h-4 transition-transform", mobileCategoryOpen === "services" ? "rotate-180 text-[#10A882]" : "")} />
                                </button>

                                {mobileCategoryOpen === "services" && (
                                    <div className="pl-3 pt-2 space-y-4">
                                        {SERVICE_CATEGORIES.map((cat) => (
                                            <div key={cat.categorySlug} className="space-y-1.5">
                                                <span className="text-[11px] font-mono uppercase text-[#10A882] font-semibold block">
                                                    {cat.title}
                                                </span>
                                                <div className="space-y-1 pl-2">
                                                    {cat.services.map((s) => (
                                                        <Link
                                                            key={s.slug}
                                                            href={s.path}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="block py-1 text-xs text-[#A7B0AB] hover:text-white"
                                                        >
                                                            {s.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* PRODUCTS ACCORDION */}
                            <div className="border-b border-white/5 pb-2">
                                <button
                                    onClick={() => setMobileCategoryOpen(mobileCategoryOpen === "products" ? null : "products")}
                                    className="w-full flex items-center justify-between text-base font-medium text-white py-2 cursor-pointer"
                                >
                                    <span>Products</span>
                                    <ChevronDown className={cn("w-4 h-4 transition-transform", mobileCategoryOpen === "products" ? "rotate-180 text-[#10A882]" : "")} />
                                </button>

                                {mobileCategoryOpen === "products" && (
                                    <div className="pl-3 pt-2 space-y-3">
                                        {PRODUCTS_DATA.map((cat) => (
                                            <div key={cat.categorySlug} className="space-y-1.5">
                                                <span className="text-[11px] font-mono uppercase text-[#10A882] font-semibold block">
                                                    {cat.title}
                                                </span>
                                                <div className="space-y-1 pl-2">
                                                    {cat.products.map((p) => (
                                                        <Link
                                                            key={p.id}
                                                            href={p.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="flex items-center justify-between py-1 text-xs text-[#A7B0AB] hover:text-white"
                                                        >
                                                            <span>{p.name}</span>
                                                            <span className="text-[9px] text-[#10A882] font-mono">{p.status}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* ABOUT */}
                            <Link
                                href="/about"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium text-white hover:text-[#10A882] py-1 border-b border-white/5"
                            >
                                About
                            </Link>

                            {/* CONTACT */}
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium text-white hover:text-[#10A882] py-1"
                            >
                                Contact
                            </Link>

                            <div className="pt-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-[#10A882] py-3 rounded-full text-xs font-semibold"
                                >
                                    <span>Contact Us</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
