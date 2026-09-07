import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Bot, Database, Code2 } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/servicesData";

export const metadata: Metadata = {
    title: "Services & Capabilities | Xcecute",
    description: "Full-spectrum AI, Data Analytics, and Custom Software Engineering capabilities built around real business problems.",
};

const CATEGORY_ICONS = {
    ai: Bot,
    data: Database,
    software: Code2
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-transparent text-[#F1F4F2]">
            {/* HEADER SECTION */}
            <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-10">
                <ScrollReveal>
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10A882]/10 border border-[#10A882]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10A882] animate-pulse" />
                        XCECUTE / CAPABILITIES
                    </span>
                    <h1 className="font-sans font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F1F4F2] leading-[1.05] mb-6">
                        What we build.
                    </h1>
                    <p className="font-sans text-lg sm:text-xl text-[#A7B0AB] leading-relaxed max-w-3xl">
                        We build digital products, data pipelines, and intelligent systems around real business problems: from custom software and SaaS platforms to autonomous AI, automation, and machine learning.
                    </p>
                </ScrollReveal>
            </section>

            {/* 3 PILLARS DIRECTORY */}
            {SERVICE_CATEGORIES.map((cat, catIdx) => {
                const CategoryIcon = CATEGORY_ICONS[cat.categorySlug] || Bot;
                return (
                    <section
                        key={cat.categorySlug}
                        id={cat.categorySlug}
                        className={`py-24 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 ${catIdx % 2 === 0 ? "bg-[#080B0A]" : "bg-[#0A0F0D]"}`}
                    >
                        <div className="max-w-6xl mx-auto">
                            <ScrollReveal>
                                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#10A882]/10 border border-[#10A882]/20 flex items-center justify-center text-[#10A882]">
                                                <CategoryIcon className="w-4 h-4" />
                                            </div>
                                            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882]">
                                                {cat.title}
                                            </span>
                                        </div>
                                        <h2 className="font-sans font-medium text-3xl sm:text-4xl text-white tracking-tight">
                                            {cat.title}
                                        </h2>
                                    </div>
                                    <p className="font-sans text-sm sm:text-base text-[#A7B0AB] max-w-md">
                                        {cat.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {cat.services.map((item, idx) => (
                                        <Link
                                            key={item.slug}
                                            href={item.path}
                                            className="p-6 rounded-2xl bg-[#0D1210] border border-white/5 hover:border-[#10A882]/40 hover:bg-[#111714] transition-all duration-300 group flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-xs font-mono text-[#10A882]">
                                                        {cat.categorySlug.toUpperCase()} // 0{idx + 1}
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 text-[#10A882] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                </div>
                                                <h3 className="font-sans font-semibold text-lg text-white group-hover:text-[#10A882] transition-colors mb-2">
                                                    {item.name}
                                                </h3>
                                                <p className="font-sans text-sm text-[#A7B0AB] leading-relaxed">
                                                    {item.shortDesc}
                                                </p>
                                            </div>

                                            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#10A882] font-semibold">
                                                <span>View detailed capability</span>
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>
                );
            })}

            {/* TECHNOLOGY PHILOSOPHY */}
            <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="font-sans font-medium text-3xl sm:text-5xl text-[#F1F4F2] tracking-tight mb-8">
                            The technology is the tool.<br />
                            <span className="text-[#10A882]">The problem is what we're here to solve.</span>
                        </h2>
                        <div className="font-sans text-lg text-[#A7B0AB] leading-relaxed max-w-2xl mx-auto">
                            <p>We start with your operational bottlenecks and commercial objectives. Then we engineer the software and intelligence that makes the most sense.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <ScrollReveal className="text-center">
                        <h2 className="font-sans font-medium text-4xl sm:text-6xl text-[#F1F4F2] tracking-tight mb-10">
                            Have a problem worth solving?
                        </h2>
                        <Link href="/contact" className="inline-flex items-center text-[15px] tracking-wide font-semibold text-black bg-white border-2 border-[#10A882] hover:bg-[#F1F4F2] px-8 py-4 rounded-full shadow-[0_0_30px_rgba(16,168,130,0.25)] hover:shadow-[0_0_35px_rgba(16,168,130,0.4)] transition-all duration-300 group">
                            Contact Us
                            <ArrowRight className="w-5 h-5 ml-3 text-black group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
