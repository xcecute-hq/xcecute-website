import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: React.ReactNode;
    eyebrow?: string;
    description?: React.ReactNode;
    className?: string;
    align?: "left" | "center" | "right";
    eyebrowColor?: "accent" | "muted" | "cream";
}

export function SectionHeading({
    title,
    eyebrow,
    description,
    className,
    align = "left",
    // Color argument is technically deprecated now in favor of absolute minimal design, but left for backward prop compatibility
}: SectionHeadingProps) {
    const alignClasses = {
        left: "text-left items-start",
        center: "text-center items-center mx-auto",
        right: "text-right items-end ml-auto",
    };

    const textClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    return (
        <div className={cn("flex flex-col gap-6 max-w-4xl", alignClasses[align], className)}>
            {eyebrow && (
                <span className="text-[10px] md:text-[12px] font-sans uppercase tracking-[0.18em] font-medium text-white/50 relative overflow-hidden">
                    {eyebrow}
                </span>
            )}
            <h2
                className={cn(
                    "font-sans font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white",
                    textClasses[align]
                )}
            >
                {title}
            </h2>
            {description && (
                <div
                    className={cn(
                        "text-base sm:text-lg lg:text-xl text-[#A7B0AB] max-w-2xl mt-1 leading-relaxed font-sans",
                        textClasses[align]
                    )}
                >
                    {description}
                </div>
            )}
        </div>
    );
}
