import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";

export const metadata: Metadata = {
    title: "Process | Xcecute",
    description: "How we work.",
};

const processSteps = [
    {
        number: "01",
        title: "Understand",
        description: "We learn about your business, your users, your existing systems, and the problem you're trying to solve."
    },
    {
        number: "02",
        title: "Define",
        description: "We turn the problem into a clear direction.\n\nWhat should we build?\nWhat shouldn't we build?\nWhat matters most right now?"
    },
    {
        number: "03",
        title: "Design",
        description: "We think through the experience, workflows, interfaces, and technical structure before going deep into implementation."
    },
    {
        number: "04",
        title: "Build",
        description: "We turn the plan into working software.\n\nWe share progress throughout the process so you can see where things are heading and give feedback along the way."
    },
    {
        number: "05",
        title: "Learn & Improve",
        description: "Launch isn't necessarily the end.\n\nWe learn from what happens in the real world and improve from there."
    }
];

export default function ProcessPage() {
    return (
        <div className="flex flex-col w-full bg-[#080B0A] min-h-screen pt-32">
            <section className="pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col pt-12">
                    <ScrollReveal>
                        <h1 className="font-sans font-medium text-5xl sm:text-7xl lg:text-[100px] leading-[1.0] tracking-tight text-[#F1F4F2] mb-12">
                            How we work.
                        </h1>
                        <h3 className="font-sans font-medium text-2xl sm:text-4xl text-[#707A75] mb-8">
                            You don't need to have everything figured out.
                        </h3>
                    </ScrollReveal>
                </div>
            </section>

            <section className="pb-32 px-4 sm:px-6 lg:px-8 bg-[#0D1210] border-t border-[#B4FFD7]/10">
                <div className="max-w-5xl mx-auto pt-16">
                    <ProcessTimeline steps={processSteps} />
                </div>
            </section>
        </div>
    );
}
