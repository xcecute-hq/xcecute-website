import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Capabilities | Xcecute",
    description: "What we build.",
};

const capabilities = [
    {
        number: "01",
        title: "Custom Software",
        description: "Software built around the way your business actually works.\n\nOff-the-shelf software can only take you so far. We build custom applications around your workflows, users, data, and business logic. From internal tools to customer-facing platforms, we focus on making complex systems simple to use and easy to evolve.",
        deliverables: ["Custom web applications", "Internal tools & portals", "API-driven applications", "Legacy modernization"]
    },
    {
        number: "02",
        title: "SaaS & Product Development",
        description: "From an idea to a product people can use.\n\nBuilding a SaaS product involves more than creating a polished interface. We help turn an idea into a working product — shaping the architecture, user experience, core functionality, and systems behind it. Whether you're validating an MVP or developing an existing product, we build with the next stage in mind.",
        deliverables: ["SaaS platforms", "MVPs & prototypes", "Multi-user applications", "Role & permission systems"]
    },
    {
        number: "03",
        title: "AI Solutions",
        description: "Practical AI for real problems.\n\nAI is most useful when it solves something specific. We integrate AI into products and business processes where it can genuinely improve how people work — from understanding information to generating content and assisting users.",
        deliverables: ["AI-powered applications", "AI assistants & copilots", "Retrieval-augmented generation (RAG)", "LLM integrations"]
    },
    {
        number: "04",
        title: "Workflow Automation",
        description: "Less repetitive work. More time for meaningful work.\n\nMany businesses still depend on repetitive manual processes spread across emails, spreadsheets, forms, and different software. We connect those systems and automate the work between them.",
        deliverables: ["Business workflow automation", "API integrations", "Automated data processing", "CRM and business process automation"]
    },
    {
        number: "05",
        title: "Data & Analytics",
        description: "Turn scattered data into something useful.\n\nData is valuable when it helps you understand what's happening and make better decisions. We build systems that bring data together, structure it, and turn it into clear, useful information.",
        deliverables: ["Analytics dashboards", "Business intelligence systems", "Data pipelines", "Data visualization"]
    },
    {
        number: "06",
        title: "Machine Learning",
        description: "From data to models that solve specific problems.\n\nWhen traditional software isn't enough, machine learning can help systems identify patterns, make predictions, and support better decisions. We work with your data and use machine learning where it provides a meaningful advantage — not simply because it is possible.",
        deliverables: ["Predictive models", "Classification systems", "Data-driven decision systems", "Model evaluation & optimization"]
    },
    {
        number: "07",
        title: "CMS & Digital Platforms",
        description: "Content systems that give your team control.\n\nWe build fast, flexible digital platforms where your team can manage content without depending on developers for every change. From marketing websites to larger content ecosystems, we connect modern CMS platforms with custom frontends and business systems.",
        deliverables: ["Headless CMS implementations", "Content management systems", "Custom publishing platforms", "Marketing websites"]
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col w-full bg-[#080B0A] min-h-screen">
            {/* HEADER SECTION */}
            <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
                <div className="max-w-5xl mx-auto flex flex-col pt-12">
                    <ScrollReveal>
                        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#707A75] mb-8 block">Capabilities</span>
                        <h1 className="font-sans font-medium text-5xl sm:text-7xl lg:text-[100px] leading-[1.0] tracking-tight text-[#F1F4F2] mb-12">
                            What we build.
                        </h1>
                        <p className="font-sans text-xl sm:text-2xl text-[#A7B0AB] leading-relaxed max-w-3xl">
                            We build digital products and systems around real business problems — from custom software and SaaS platforms to AI, automation, data, and machine learning.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="pb-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
                <div className="max-w-6xl mx-auto">
                    {capabilities.map((cap, index) => (
                        <ScrollReveal key={cap.number} delay={index * 0.05} className="group border-b border-[#B4FFD7]/10 last:border-b-0">
                            <div className="py-16 sm:py-24 hover:bg-[#111714]/60 transition-all duration-500 ease-out px-4 sm:px-8 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#35D07F]/0 group-hover:bg-[#35D07F]/40 group-hover:shadow-[0_0_20px_rgba(53,208,127,0.4)] transition-all duration-500 ease-out" />

                                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 transform group-hover:translate-x-3 transition-transform duration-500 ease-out">
                                    <div className="lg:w-2/5 flex flex-col">
                                        <div className="mb-6 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                                            <span className="font-sans font-medium text-2xl text-[#35D07F]">{cap.number}</span>
                                            <ArrowRight className="w-5 h-5 text-[#35D07F] -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" />
                                        </div>
                                        <h2 className="font-sans font-medium text-4xl sm:text-5xl text-[#F1F4F2] tracking-tight mb-6">
                                            {cap.title}
                                        </h2>
                                    </div>

                                    <div className="lg:w-3/5">
                                        <div className="font-sans text-[17px] text-[#A7B0AB] leading-relaxed mb-12 whitespace-pre-line group-hover:text-[#F1F4F2]/90 transition-colors duration-500">
                                            {cap.description}
                                        </div>

                                        <div>
                                            <h4 className="font-sans font-semibold text-[#A7B0AB] uppercase tracking-wider text-[11px] mb-6">What We Build</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                                {cap.deliverables.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <Check className="w-4 h-4 text-[#35D07F]/40 group-hover:text-[#35D07F] transition-colors duration-500 shrink-0" />
                                                        <span className="font-sans text-[15px] text-[#707A75] group-hover:text-[#A7B0AB] transition-colors duration-500">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* TECHNOLOGY PHILOSOPHY */}
            <section className="py-32 sm:py-48 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollReveal>
                        <h2 className="font-sans font-medium text-4xl sm:text-6xl text-[#F1F4F2] tracking-tight mb-12">
                            The technology is the tool.<br />
                            <span className="text-[#35D07F]">The problem is what we're here to solve.</span>
                        </h2>

                        <div className="font-sans text-xl text-[#A7B0AB] leading-relaxed max-w-2xl mx-auto space-y-6">
                            <p>We don't believe every problem needs AI. We don't believe every business needs a custom platform. And we don't believe adding more technology automatically creates more value.</p>
                            <p>We start with the problem. Then we choose the technology that makes the most sense.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0D1210]">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <ScrollReveal className="text-center">
                        <h2 className="font-sans font-medium text-4xl sm:text-6xl text-[#F1F4F2] tracking-tight mb-10">
                            Have a problem worth solving?
                        </h2>
                        <Link href="/contact" className="inline-flex items-center text-[15px] tracking-wide font-medium text-[#F1F4F2] bg-[#111714] border border-[#B4FFD7]/10 px-8 py-4 rounded-full group hover:bg-[#151D19] hover:border-[#35D07F]/25 hover:shadow-[0_0_30px_rgba(53,208,127,0.06)] transition-all duration-300">
                            Contact Us
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:text-[#35D07F] transition-all" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
