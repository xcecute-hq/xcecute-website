import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Bot, PhoneCall, Database, Workflow, Briefcase, Check } from "lucide-react";
import { PRODUCTS_DATA } from "@/data/productsData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "Products & Platforms | Xcecute",
    description: "Packaged AI engines and modular business infrastructure engineered by Xcecute.",
};

const PRODUCT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    "ai-chatbot": Bot,
    "ai-voice-agent": PhoneCall,
    "ai-knowledge-assistant": Database,
    "ai-automation-platform": Workflow,
    "enterprise-core": Briefcase,
};

export default function ProductsPage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-transparent text-[#F1F4F2]">

            {/* HERO */}
            <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
                <ScrollReveal>
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10A882]/10 border border-[#10A882]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10A882] animate-pulse" />
                        XCECUTE / PRODUCTS &amp; PLATFORMS
                    </span>
                    <h1 className="font-sans font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F1F4F2] leading-[1.05] mb-6">
                        Packaged intelligence.<br />
                        Built for instant deployment.
                    </h1>
                    <p className="font-sans text-lg sm:text-xl text-[#A7B0AB] leading-relaxed max-w-3xl">
                        While our Services team builds custom software for clients, our Products division engineers modular AI engines and business platforms available for pilot deployment and enterprise integration.
                    </p>
                </ScrollReveal>
            </section>

            {/* PRODUCT CATEGORIES */}
            {PRODUCTS_DATA.map((cat, catIdx) => (
                <section
                    key={cat.categorySlug}
                    className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 ${catIdx % 2 === 0 ? "bg-[#080B0A]" : "bg-[#0A0F0D]"}`}
                >
                    <div className="max-w-6xl mx-auto">
                        <ScrollReveal>
                            <div className="mb-12">
                                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-2">
                                    {cat.title}
                                </span>
                                <h2 className="font-sans font-medium text-3xl sm:text-4xl text-white tracking-tight mb-2">
                                    {cat.title === "AI PRODUCTS" ? "Turnkey AI Systems" : "Modular Enterprise Infrastructure"}
                                </h2>
                                <p className="font-sans text-sm sm:text-base text-[#A7B0AB] max-w-2xl">
                                    {cat.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {cat.products.map((product) => {
                                    const IconComp = PRODUCT_ICONS[product.slug] || Sparkles;
                                    return (
                                        <div
                                            key={product.id}
                                            id={product.slug}
                                            className="p-8 rounded-3xl bg-[#0D1210] border border-[#B4FFD7]/10 hover:border-[#10A882]/40 transition-all duration-300 flex flex-col justify-between group scroll-mt-32"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-6">
                                                    <div className="w-12 h-12 rounded-2xl bg-[#10A882]/10 border border-[#10A882]/20 flex items-center justify-center text-[#10A882] group-hover:bg-[#10A882] group-hover:text-black transition-all duration-300">
                                                        <IconComp className="w-6 h-6" />
                                                    </div>
                                                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-[#10A882]/10 text-[#10A882] border border-[#10A882]/25 uppercase">
                                                        {product.status}
                                                    </span>
                                                </div>

                                                <h3 className="font-sans font-semibold text-2xl text-white mb-2 group-hover:text-[#10A882] transition-colors">
                                                    {product.name}
                                                </h3>
                                                <p className="font-sans text-sm text-[#F1F4F2]/80 font-medium mb-4">
                                                    {product.headline}
                                                </p>
                                                <p className="font-sans text-sm text-[#A7B0AB] leading-relaxed mb-6">
                                                    {product.description}
                                                </p>

                                                <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                                                    {product.features.map((feat, i) => (
                                                        <div key={i} className="flex items-center gap-2.5 text-xs text-[#A7B0AB]">
                                                            <Check className="w-3.5 h-3.5 text-[#10A882] shrink-0" />
                                                            <span>{feat}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                                <Link
                                                    href={`/contact?product=${product.slug}`}
                                                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#10A882] transition-colors"
                                                >
                                                    <span>Request Early Access</span>
                                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                                <span className="text-[10px] font-mono text-white/40">Enterprise pilot</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A] text-center">
                <div className="max-w-3xl mx-auto">
                    <ScrollReveal>
                        <h2 className="font-sans font-medium text-4xl sm:text-5xl text-[#F1F4F2] tracking-tight mb-6">
                            Need a custom software solution?
                        </h2>
                        <p className="font-sans text-base sm:text-lg text-[#A7B0AB] leading-relaxed mb-8">
                            If our packaged products don't fit your exact workflow, our engineering team can build a fully bespoke software platform or AI system tailored to your requirements.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 bg-[#10A882] hover:bg-[#0ea07a] text-black px-8 py-4 rounded-full text-sm font-semibold shadow-[0_0_25px_rgba(16,168,130,0.3)] transition-all duration-300 group"
                            >
                                EXPLORE SERVICES
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
                            >
                                TALK TO US
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

        </div>
    );
}
