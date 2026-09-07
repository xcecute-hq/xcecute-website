"use client";


interface TimelineStep {
    number: string;
    title: string;
    description: string;
}

interface ProcessTimelineProps {
    steps: TimelineStep[];
    bgClassName?: string;
}

export function ProcessTimeline({ steps, bgClassName = "bg-[#080B0A]" }: ProcessTimelineProps) {
    return (
        <div className="flex flex-col w-full relative">
            <div className="absolute left-[27px] sm:left-[35px] top-3 bottom-3 w-[1px] bg-[#B4FFD7]/10 pointer-events-none" />

            {steps.map((step) => (
                <div
                    key={step.number}
                    className="relative flex items-start group py-5 sm:py-7 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-xl hover:bg-[#111714]/40 transition-all duration-300"
                >
                    <div className={`flex-shrink-0 w-[56px] sm:w-[72px] ${bgClassName} group-hover:bg-transparent relative z-10 py-1 transition-colors duration-300`}>
                        <span className="font-sans font-medium text-2xl sm:text-3xl lg:text-4xl text-[#10A882]/30 group-hover:text-[#10A882] transition-colors duration-300 tracking-tight">
                            {step.number}
                        </span>
                    </div>

                    <div className="flex-1 ml-4 sm:ml-8 mt-0.5 max-w-2xl transform group-hover:translate-x-1.5 transition-transform duration-300">
                        <h3 className="font-sans font-medium text-xl sm:text-2xl text-[#F1F4F2] group-hover:text-white mb-2 tracking-tight transition-colors duration-300">
                            {step.title}
                        </h3>
                        <p className="font-sans text-[15px] sm:text-base text-[#A7B0AB] leading-relaxed whitespace-pre-line group-hover:text-white transition-colors duration-300">
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
