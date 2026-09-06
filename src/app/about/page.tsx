import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "About | Xcecute",
    description: "We're building something of our own.",
};

const values = [
    { num: "01", title: "Curiosity", description: "We ask questions before jumping to solutions." },
    { num: "02", title: "Ownership", description: "If we're building it, we care about what happens to it." },
    { num: "03", title: "Honesty", description: "If something doesn't make sense, we'll tell you." },
    { num: "04", title: "Craft", description: "We care about writing good software and creating good experiences." },
    { num: "05", title: "Simplicity", description: "We look for the simplest solution that genuinely solves the problem." },
    { num: "06", title: "Growth", description: "Every project should leave us better than when we started." }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full bg-[#080B0A] min-h-screen pt-32 relative z-10 overflow-hidden">

            {/* THE AGENCY */}
            <section className="pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#707A75] mb-8 block">Xcecute</span>
                        <h1 className="font-sans font-medium text-5xl sm:text-7xl lg:text-[90px] leading-[1.05] tracking-tight text-[#F1F4F2] mb-16">
                            We're building<br />something of our own.
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="max-w-2xl font-sans text-xl sm:text-2xl text-[#A7B0AB] leading-relaxed space-y-8">
                            <p>
                                We're engineers, designers, and builders who decided to stop waiting for the perfect idea and start building. We started this company because we enjoy solving difficult problems. Not just writing code, but understanding <span className="text-[#F1F4F2]">why something needs to exist, who it is for, and how it can actually make a difference.</span>
                            </p>
                            <p>
                                We know what it feels like to start with an idea and not have everything figured out yet. That's why we don't believe in making things unnecessarily complicated. You bring us the problem, the idea, or even just a rough direction. <span className="text-[#10A882]">We figure it out with you.</span>
                            </p>
                            <p>
                                Sometimes that means building a product from scratch. Sometimes it's automating a process your team is tired of doing manually. Sometimes it's fixing something that has grown messy over time. Whatever the problem is, we want to understand it before we start building.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* WE'RE LEARNING TOO */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0D1210]">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="lg:w-1/2">
                        <ScrollReveal>
                            <h2 className="font-sans font-medium text-5xl sm:text-7xl leading-[1.1] tracking-tight text-[#F1F4F2] mb-8">
                                We're learning too.
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="lg:w-1/2">
                        <ScrollReveal delay={0.2} className="font-sans text-xl text-[#A7B0AB] leading-relaxed space-y-6 lg:mt-4">
                            <p>We're not going to pretend we've built everything or know everything.</p>
                            <p>We're growing, experimenting, and improving with every project.</p>
                            <p>And we think there's something valuable about working with people who are <span className="text-[#F1F4F2]">still hungry to prove themselves.</span></p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* WHY WORK WITH US */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                    <ScrollReveal>
                        <h2 className="font-sans text-[#707A75] text-2xl sm:text-3xl font-medium tracking-tight mb-12">
                            Why work with us?
                        </h2>

                        <div className="font-sans text-xl sm:text-2xl text-[#A7B0AB] leading-relaxed max-w-2xl mx-auto mb-16 space-y-4">
                            <p>Not because we're the biggest. We're not.</p>
                            <p>Not because we've been around for decades. We haven't.</p>
                            <p>And we're not going to make promises just to win a project.</p>
                        </div>

                        <h3 className="font-sans font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#F1F4F2] mb-12 max-w-4xl mx-auto">
                            We'd rather earn your trust through the work.
                        </h3>

                        <p className="font-sans text-lg sm:text-xl text-[#A7B0AB] leading-relaxed max-w-2xl mx-auto">
                            You'll get people who care about the problem, communicate openly, learn quickly, and take ownership of what they're building. We're building this company the same way we'd build a product: <span className="text-[#F1F4F2]">start small, listen carefully, improve constantly, and make something worth keeping.</span>
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* VALUES */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
                <div className="max-w-5xl mx-auto">
                    <ScrollReveal>
                        <h2 className="font-sans font-medium text-4xl sm:text-5xl tracking-tight text-[#F1F4F2] mb-16">
                            Our Values
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {values.map((v, i) => (
                            <ScrollReveal key={v.num} delay={i * 0.05} className="group flex items-start gap-8">
                                <span className="font-sans text-sm text-[#10A882]/40 font-medium pt-1 shrink-0 group-hover:text-[#10A882] transition-colors">{v.num}</span>
                                <div>
                                    <h4 className="font-sans font-medium text-2xl text-[#F1F4F2] mb-3 group-hover:drop-shadow-[0_0_8px_rgba(53,208,127,0.3)] transition-all">{v.title}</h4>
                                    <p className="font-sans text-[#A7B0AB] text-[15px] leading-relaxed">{v.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0D1210] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10A882]/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <ScrollReveal>
                        <h2 className="font-sans font-medium text-3xl sm:text-5xl text-[#F1F4F2] tracking-tight mb-8">
                            One Last Thing.
                        </h2>
                        <p className="font-sans text-xl text-[#A7B0AB] leading-relaxed mb-12">
                            We're not interested in being just another company you send a brief to. We'd rather understand what you're trying to do, figure things out together, and build something we're both proud to put our names behind.
                            <br /><br />
                            <span className="text-[#F1F4F2]">If you have an idea, a problem, or something you've been putting off fixing – tell us about it.</span>
                        </p>

                        <Link href="/contact" className="inline-flex items-center text-[15px] tracking-wide font-medium text-[#F1F4F2] bg-[#111714] border border-[#B4FFD7]/10 px-8 py-4 rounded-full group hover:bg-[#151D19] hover:border-[#10A882]/25 hover:shadow-[0_0_30px_rgba(53,208,127,0.06)] transition-all duration-300">
                            Contact Us
                            <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:text-[#10A882] transition-all" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
