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
        <div className="flex flex-col w-full min-h-screen pt-28 sm:pt-32">
            <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col pt-8 sm:pt-12">
                    <ScrollReveal>
                        <h1 className="font-sans font-medium text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F1F4F2] mb-6 sm:mb-8">
                            How we work.
                        </h1>
                        <h3 className="font-sans font-medium text-xl sm:text-2xl text-[#707A75] mb-4">
                            You don't need to have everything figured out.
                        </h3>
                    </ScrollReveal>
                </div>
            </section>

            <section className="pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-[#0D1210] border-t border-[#B4FFD7]/10">
                <div className="max-w-4xl mx-auto pt-12 sm:pt-16">
                    <ProcessTimeline steps={processSteps} bgClassName="bg-[#0D1210]" />
                </div>
            </section>
        </div>
    );
}
