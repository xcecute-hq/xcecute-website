import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    return (
        <div className="flex flex-col w-full bg-[#080B0A] min-h-screen relative z-10">
            <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="max-w-4xl mx-auto flex flex-col pt-12">
                    <ScrollReveal>
                        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#707A75] mb-8 block">Legal</span>
                        <h1 className="font-sans font-medium text-4xl sm:text-5xl lg:text-6xl text-[#F1F4F2] mb-6">
                            {title}
                        </h1>
                        <p className="font-sans text-lg text-[#A7B0AB] mb-16">
                            Last updated: {lastUpdated}
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div className="prose prose-invert prose-lg font-sans max-w-none text-[#A7B0AB] prose-headings:text-[#F1F4F2] prose-headings:font-medium prose-a:text-[#10A882] hover:prose-a:text-[#5EE6A0] prose-a:transition-colors prose-strong:text-[#F1F4F2]">
                            {children}
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
