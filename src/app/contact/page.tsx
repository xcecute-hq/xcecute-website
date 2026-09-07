import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
    title: "Contact | Xcecute",
    description: "Tell us what's on your mind.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full min-h-screen relative z-10">
            <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10A882]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* LEFT EDITORIAL COLUMN */}
                    <div className="lg:w-1/2 flex flex-col pt-4">
                        <ScrollReveal>
                            <h1 className="font-sans font-medium text-5xl sm:text-7xl leading-[1.05] tracking-tight text-[#F1F4F2] mb-12">
                                Tell us what's<br />on your mind.
                            </h1>

                            <div className="font-sans text-xl text-[#A7B0AB] leading-relaxed space-y-6 max-w-lg mb-16">
                                <p>You don't need a perfect brief.</p>
                                <p>Tell us what you're trying to build, what's not working, or simply what's been on your mind.</p>
                                <p>Give us as much or as little detail as you have.</p>
                                <p className="text-[#F1F4F2] font-medium">We'll take it from there.</p>
                            </div>

                            <div className="h-[1px] w-full bg-[#B4FFD7]/10 mb-12" />

                            <div className="flex flex-col gap-1">
                                <h4 className="font-sans font-semibold text-[#A7B0AB] text-[11px] uppercase tracking-wider mb-2">Direct</h4>
                                <a href="mailto:xcecute.hq@gmail.com" className="font-sans text-lg text-[#F1F4F2] hover:text-[#10A882] transition-colors">xcecute.hq@gmail.com</a>
                                <a href="tel:+917204009267" className="font-sans text-lg text-[#F1F4F2] hover:text-[#10A882] transition-colors">+91 72040 09267</a>
                                <a href="tel:+918904350725" className="font-sans text-lg text-[#F1F4F2] hover:text-[#10A882] transition-colors">+91 89043 50725</a>
                                <a href="tel:+919551091144" className="font-sans text-lg text-[#F1F4F2] hover:text-[#10A882] transition-colors">+91 95510 91144</a>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* RIGHT FORM COLUMN */}
                    <div className="lg:w-1/2">
                        <ScrollReveal delay={0.1}>
                            <div className="bg-[#111714] p-8 sm:p-12 rounded-3xl border border-[#B4FFD7]/10 hover:border-[#10A882]/20 hover:shadow-[0_0_40px_rgba(53,208,127,0.04)] transition-all duration-500">
                                <ContactForm />
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </section>
        </div>
    );
}
