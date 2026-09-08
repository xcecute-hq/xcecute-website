import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Team | Xcecute",
    description: "The people behind Xcecute.",
};

export default function TeamPage() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-32 relative z-10 overflow-hidden bg-black">

            {/* Atmospheric Backgrounds */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* PAGE HERO */}
            <section className="pb-32 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#10A882] mb-6 block">Our Team</span>
                        <h1 className="font-sans font-medium text-5xl sm:text-7xl lg:text-[90px] leading-[1.05] tracking-tight text-white mb-12">
                            The people behind XCECUTE.
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="max-w-3xl font-sans text-xl sm:text-2xl text-white leading-relaxed">
                            <p>
                                We bring together engineering, software, AI services, and data to turn complex ideas into products and solutions that work in the real world.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FOUNDERS AS LEADERSHIP */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black relative">
                {/* Subtle Ambient Glow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10A882]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                        {/* FOUNDER 1: HARISH */}
                        <ScrollReveal delay={0.1}>
                            <div className="group relative p-8 rounded-3xl bg-[#080B0A] border border-white/5 hover:border-[#10A882]/30 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#10A882]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                <div>
                                    <h3 className="font-sans text-2xl font-medium text-white mb-2 pt-2">HARISH M P</h3>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#10A882] mb-8 block font-semibold">Co-Founder · AI Services Team Lead</span>
                                    <p className="font-sans text-white leading-relaxed text-[15px]">
                                        Leads the AI services team, working on intelligent systems and the engineering behind them. Focuses on turning ideas into practical solutions and moving projects from concept to execution.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* FOUNDER 2: VINDKASH */}
                        <ScrollReveal delay={0.2}>
                            <div className="group relative p-8 rounded-3xl bg-[#080B0A] border border-white/5 hover:border-[#10A882]/30 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#10A882]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                <div>
                                    <h3 className="font-sans text-2xl font-medium text-white mb-2 pt-2">VINDKASH C M REDDY</h3>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#10A882] mb-8 block font-semibold">Co-Founder · Software Development Team Lead</span>
                                    <p className="font-sans text-white leading-relaxed text-[15px]">
                                        Leads software development, building the systems and applications that turn ideas into reliable products. Focuses on thoughtful engineering and solving practical problems through software.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* FOUNDER 3: VIKASHH */}
                        <ScrollReveal delay={0.3}>
                            <div className="group relative p-8 rounded-3xl bg-[#080B0A] border border-white/5 hover:border-[#10A882]/30 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#10A882]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                <div>
                                    <h3 className="font-sans text-2xl font-medium text-white mb-2 pt-2">VIKASHH K ADAIKALAVAN</h3>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#10A882] mb-8 block font-semibold">Co-Founder · Data Analytics Team Lead</span>
                                    <p className="font-sans text-white leading-relaxed text-[15px]">
                                        Leads data analytics, working with data to uncover useful patterns and support better decisions. Focuses on making complex information clear, practical, and useful.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </section>

            {/* TEAM STRUCTURE */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#030504]">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal>
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#10A882] mb-6 block md:text-left text-center">Disciplines</span>
                        <h2 className="font-sans font-medium text-3xl sm:text-4xl tracking-tight text-white mb-16 md:text-left text-center">
                            BUILT ACROSS DISCIPLINES
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        {[
                            { title: "Engineering" },
                            { title: "AI Services" },
                            { title: "Software Development" },
                            { title: "Data Analytics" }
                        ].map((v, i) => (
                            <ScrollReveal key={v.title} delay={i * 0.1}>
                                <div className="group flex items-center justify-between border-b border-white/10 pb-6 hover:border-[#10A882]/40 transition-colors">
                                    <h4 className="font-sans font-medium text-xl text-white">{v.title}</h4>
                                    <div className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-[#10A882] transition-colors" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM APPROACH */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    <ScrollReveal>
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#10A882] mb-6 block">Our Approach</span>
                        <h2 className="font-sans font-medium text-2xl sm:text-3xl tracking-tight text-white mb-6">
                            ONE STANDARD. BUILD IT WELL.
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="font-sans text-lg text-white leading-relaxed">
                            <p>
                                Different disciplines approach problems from different angles, but the goal remains the same: understand the problem, build thoughtfully, and create something that delivers real value.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CLOSING / CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-[#10A882]/10 bg-black relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10A882]/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute right-[-10%] bottom-[10%] w-[40%] h-[80%] border-r-[1px] border-[#10A882]/10 rounded-[100%] pointer-events-none blur-[1px]" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <h2 className="font-sans font-medium text-4xl sm:text-6xl text-white tracking-tight mb-8">
                            BUILD WITH US.
                        </h2>

                        <p className="font-sans text-lg text-white leading-relaxed mb-12">
                            Have an idea, a problem, or something worth building?<br />Let's talk.
                        </p>

                        <Link href="/contact" className="inline-flex items-center text-[13px] tracking-wide font-semibold text-white bg-black/50 border border-[#10A882]/40 hover:bg-[#10A882]/10 hover:border-[#10A882]/70 px-8 py-4 rounded-full shadow-[0_0_20px_rgba(16,168,130,0.15)] transition-all duration-300 group">
                            Contact Us
                            <ArrowRight className="w-4 h-4 ml-3 text-white group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

        </div>
    );
}
