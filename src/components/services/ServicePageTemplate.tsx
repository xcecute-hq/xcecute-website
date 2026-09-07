"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ArrowLeft,
    ChevronDown,
    Check,
    Bot,
    MessageSquare,
    PhoneCall,
    Mic,
    Target,
    Calendar,
    Headphones,
    PhoneOutgoing,
    GitFork,
    UserCheck,
    FileText,
    Globe,
    Cpu,
    FileCode,
    Feather,
    Eye,
    Key,
    Sliders,
    ShieldCheck,
    Search,
    ExternalLink,
    Network,
    RefreshCw,
    Lock,
    Database,
    Layers,
    Wrench,
    BookOpen,
    Users,
    Shield,
    RotateCcw,
    Terminal,
    Workflow,
    FileSpreadsheet,
    UserPlus,
    CheckSquare,
    Mail,
    BarChart,
    Share2,
    Binary,
    Tag,
    TrendingUp,
    Sparkles,
    AlertTriangle,
    UserMinus,
    Activity,
    LayoutDashboard,
    PieChart,
    Send,
    Grid,
    Repeat,
    Server,
    Zap,
    Link2,
    ArrowRightLeft,
    Package,
    UserX,
    DollarSign,
    ShieldAlert,
    Compass,
    CheckCircle,
    Rocket,
    CreditCard,
    Code,
    Briefcase,
    ShoppingCart,
    Truck,
    Monitor,
    Smartphone,
    WifiOff,
    Bell,
    MapPin,
    Book,
    Megaphone,
    Folder,
    Video,
    HardDrive,
    HelpCircle
} from "lucide-react";
import { ServiceData } from "@/data/servicesData";
import { ServiceVisual } from "./visuals/ServiceVisuals";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Helper map for dynamic capability icon resolution
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
    Bot, MessageSquare, PhoneCall, Mic, Target, Calendar, Headphones, PhoneOutgoing,
    GitFork, UserCheck, FileText, Globe, Cpu, FileCode, Feather, Eye, Key, Sliders,
    ShieldCheck, Search, ExternalLink, Network, RefreshCw, Lock, Database, Layers,
    Wrench, BookOpen, Users, Shield, RotateCcw, Terminal, Workflow, FileSpreadsheet,
    UserPlus, CheckSquare, Mail, BarChart, Share2, Binary, Tag, TrendingUp, Sparkles,
    AlertTriangle, UserMinus, Activity, LayoutDashboard, PieChart, Send, Grid, Repeat,
    Server, Zap, Link2, ArrowRightLeft, Package, UserX, DollarSign, ShieldAlert,
    Compass, CheckCircle, Rocket, CreditCard, Code, Briefcase, ShoppingCart, Truck,
    Monitor, Smartphone, WifiOff, Bell, MapPin, Book, Megaphone, Folder, Video, HardDrive,
    HelpCircle
};

interface ServicePageTemplateProps {
    service: ServiceData;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col w-full min-h-screen bg-transparent text-[#F1F4F2]">

            {/* BREADCRUMBS & BACK LINK */}
            <div className="pt-28 sm:pt-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
                <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-white/5 text-xs text-[#A7B0AB]">
                    <div className="flex items-center gap-2 flex-wrap">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        <span>/</span>
                        <span className="text-[#A7B0AB]">{service.categoryTitle}</span>
                        <span>/</span>
                        <span className="text-[#10A882] font-medium">{service.name}</span>
                    </div>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-xs text-[#A7B0AB] hover:text-[#10A882] transition-colors group"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>
                </div>
            </div>

            {/* SECTION 01: HERO */}
            <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    <div className="lg:col-span-7 flex flex-col items-start">
                        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10A882]/10 border border-[#10A882]/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10A882] animate-pulse" />
                            {service.categoryEyebrow}
                        </span>

                        <h1 className="font-sans font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#F1F4F2] leading-[1.08] mb-6">
                            {service.heroHeadline}
                        </h1>

                        <p className="font-sans text-base sm:text-lg text-[#A7B0AB] leading-relaxed mb-8 max-w-xl">
                            {service.heroDescription}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href={`/contact?service=${service.slug}`}
                                className="inline-flex items-center gap-2 bg-[#10A882] hover:bg-[#0ea07a] hover:brightness-105 text-black px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(16,168,130,0.3)] hover:shadow-[0_0_30px_rgba(16,168,130,0.5)] transition-all duration-300 group"
                            >
                                BUILD WITH XCECUTE
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
                            >
                                TALK TO US
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 w-full flex justify-center">
                        <ServiceVisual slug={service.slug} />
                    </div>
                </div>
            </section>

            {/* SECTION 02: THE PROBLEM */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-12">
                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-2">Pain Points</span>
                            <h2 className="font-sans font-medium text-3xl sm:text-4xl text-[#F1F4F2] tracking-tight">
                                {service.problemHeadline || "THE PROBLEM"}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.problemPoints.map((point, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-[#0D1210] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <span className="text-xs font-mono text-[#A7B0AB] mb-6">0{idx + 1}</span>
                                    <p className="font-sans text-sm text-[#A7B0AB] group-hover:text-white leading-relaxed transition-colors">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 03: THE XCECUTE SOLUTION (ARCHITECTURE) */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-2">Solution Architecture</span>
                            <h2 className="font-sans font-medium text-3xl sm:text-5xl text-[#F1F4F2] tracking-tight mb-4">
                                {service.solutionHeadline || "THE XCECUTE APPROACH"}
                            </h2>
                            <p className="font-sans text-base text-[#A7B0AB] leading-relaxed">
                                {service.solutionDescription}
                            </p>
                        </div>

                        {/* Pipeline Node Diagram */}
                        <div className="p-8 sm:p-10 rounded-3xl bg-[#0D1210] border border-[#B4FFD7]/10 shadow-[0_0_50px_rgba(16,168,130,0.03)]">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                {service.solutionArchitecture.map((step, idx) => (
                                    <div key={idx} className="flex flex-col md:flex-row items-center w-full">
                                        <div className="flex-1 w-full p-5 rounded-2xl bg-[#111714] border border-[#B4FFD7]/15 text-center hover:border-[#10A882]/50 transition-all duration-300 group">
                                            <span className="text-[10px] font-mono text-[#10A882] block mb-1">STAGE 0{idx + 1}</span>
                                            <span className="font-sans font-semibold text-sm sm:text-base text-white tracking-wide group-hover:text-[#10A882] transition-colors">
                                                {step}
                                            </span>
                                        </div>
                                        {idx < service.solutionArchitecture.length - 1 && (
                                            <div className="py-2 md:py-0 md:px-3 text-[#10A882]/40">
                                                <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 04: CAPABILITIES */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-14">
                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-2">Core Features</span>
                            <h2 className="font-sans font-medium text-3xl sm:text-5xl text-[#F1F4F2] tracking-tight">
                                WHAT IT CAN DO
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.capabilities.map((cap, idx) => {
                                const IconComp = ICON_MAP[cap.icon] || Sparkles;
                                return (
                                    <div
                                        key={idx}
                                        className="p-6 rounded-2xl bg-[#0D1210] border border-[#B4FFD7]/10 hover:border-[#10A882]/40 hover:bg-[#111714] transition-all duration-300 group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-[#10A882]/10 border border-[#10A882]/20 flex items-center justify-center mb-4 text-[#10A882] group-hover:bg-[#10A882] group-hover:text-black transition-all duration-300">
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-sans font-semibold text-lg text-white mb-2 group-hover:text-[#10A882] transition-colors">
                                            {cap.title}
                                        </h3>
                                        <p className="font-sans text-sm text-[#A7B0AB] leading-relaxed">
                                            {cap.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 05: HOW IT WORKS */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-14">
                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-2">Delivery Lifecycle</span>
                            <h2 className="font-sans font-medium text-3xl sm:text-5xl text-[#F1F4F2] tracking-tight">
                                HOW IT WORKS
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.processSteps.map((step) => (
                                <div
                                    key={step.step}
                                    className="p-6 rounded-2xl bg-[#0D1210] border border-white/5 relative overflow-hidden group hover:border-[#10A882]/30 transition-all duration-300"
                                >
                                    <div className="font-mono text-2xl font-bold text-[#10A882] mb-3">
                                        {step.step}
                                    </div>
                                    <h3 className="font-sans font-semibold text-base text-white mb-2 uppercase tracking-wide">
                                        {step.title}
                                    </h3>
                                    <p className="font-sans text-sm text-[#A7B0AB] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 06: INTEGRATIONS / TECHNOLOGY */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                            <div>
                                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-1">Architecture Stack</span>
                                <h2 className="font-sans font-medium text-2xl sm:text-3xl text-white">
                                    TECHNOLOGIES &amp; INTEGRATIONS
                                </h2>
                            </div>
                            <span className="text-xs text-[#A7B0AB]">Production-proven tooling &bull; Zero vendor lock-in</span>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {service.technologies.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="px-4 py-2 rounded-full bg-[#0D1210] border border-white/10 hover:border-[#10A882]/40 text-xs font-mono text-[#F1F4F2] transition-colors"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 07: USE CASES */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-14">
                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-2">Industry Applications</span>
                            <h2 className="font-sans font-medium text-3xl sm:text-5xl text-[#F1F4F2] tracking-tight">
                                BUILT FOR REAL-WORLD USE
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.useCases.map((useCase, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-[#0D1210] border border-white/5 hover:border-[#10A882]/30 transition-all duration-300 group"
                                >
                                    {useCase.tag && (
                                        <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#10A882]/10 text-[#10A882] border border-[#10A882]/20 uppercase mb-3">
                                            {useCase.tag}
                                        </span>
                                    )}
                                    <h3 className="font-sans font-semibold text-lg text-white mb-2 group-hover:text-[#10A882] transition-colors">
                                        {useCase.title}
                                    </h3>
                                    <p className="font-sans text-sm text-[#A7B0AB] leading-relaxed">
                                        {useCase.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 08: BUSINESS IMPACT */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-14">
                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-2">Tangible Outcomes</span>
                            <h2 className="font-sans font-medium text-3xl sm:text-5xl text-[#F1F4F2] tracking-tight">
                                WHAT CHANGES
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {service.businessImpact.map((impact, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-[#0D1210] border border-[#B4FFD7]/10 flex items-start gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-[#10A882]/10 border border-[#10A882]/20 flex items-center justify-center shrink-0 text-[#10A882] mt-0.5">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="font-sans text-base sm:text-lg text-white font-medium leading-snug">
                                            {impact}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 09: FAQ ACCORDION */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-14 text-center">
                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-2">Common Questions</span>
                            <h2 className="font-sans font-medium text-3xl sm:text-5xl text-[#F1F4F2] tracking-tight">
                                FREQUENTLY ASKED QUESTIONS
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {service.faqs.map((faq, idx) => {
                                const isOpen = openFaqIndex === idx;
                                return (
                                    <div
                                        key={idx}
                                        className="rounded-2xl bg-[#0D1210] border border-white/5 overflow-hidden transition-colors"
                                    >
                                        <button
                                            onClick={() => toggleFaq(idx)}
                                            className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                                        >
                                            <span className="font-sans font-medium text-base sm:text-lg text-white">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-[#10A882] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-6 pb-6 font-sans text-sm sm:text-base text-[#A7B0AB] leading-relaxed border-t border-white/5 pt-4">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 10: FINAL CTA */}
            <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A] relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <h2 className="font-sans font-medium text-4xl sm:text-6xl text-[#F1F4F2] tracking-tight mb-6">
                            READY TO BUILD SOMETHING INTELLIGENT?
                        </h2>
                        <p className="font-sans text-lg sm:text-xl text-[#A7B0AB] leading-relaxed max-w-2xl mx-auto mb-10">
                            Tell us what you're trying to build. We'll help turn the idea into a practical solution.
                        </p>
                        <Link
                            href={`/contact?service=${service.slug}`}
                            className="inline-flex items-center gap-3 bg-[#10A882] hover:bg-[#0ea07a] hover:brightness-105 text-black px-8 py-4 rounded-full text-sm sm:text-base font-semibold shadow-[0_0_30px_rgba(16,168,130,0.3)] hover:shadow-[0_0_40px_rgba(16,168,130,0.5)] transition-all duration-300 group cursor-pointer"
                        >
                            START A PROJECT
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            {/* SECTION 11: EXPLORE MORE RELATED SERVICES */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-10">
                        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-2">Related Capabilities</span>
                        <h2 className="font-sans font-medium text-2xl sm:text-3xl text-white">
                            EXPLORE MORE
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {service.relatedSlugs.map((rel, idx) => (
                            <Link
                                key={idx}
                                href={`/services/${rel.category}/${rel.slug}`}
                                className="p-6 rounded-2xl bg-[#0D1210] border border-white/5 hover:border-[#10A882]/40 hover:bg-[#111714] transition-all duration-300 group flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-[10px] font-mono text-[#10A882] uppercase block mb-2">
                                        {rel.category.toUpperCase()} SERVICE
                                    </span>
                                    <h3 className="font-sans font-semibold text-lg text-white group-hover:text-[#10A882] transition-colors mb-2">
                                        {rel.name}
                                    </h3>
                                    <p className="font-sans text-xs text-[#A7B0AB] leading-relaxed">
                                        {rel.headline}
                                    </p>
                                </div>
                                <div className="mt-6 flex items-center gap-1.5 text-xs text-[#10A882] font-semibold group-hover:translate-x-1 transition-transform">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
