import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
    status: "available" | "unavailable" | "limited";
    text?: string;
    className?: string;
}

export function AvailabilityBadge({
    status,
    text,
    className,
}: AvailabilityBadgeProps) {
    const defaultText = {
        available: "AVAILABLE FOR SELECT PROJECTS",
        unavailable: "BOOKED FOR Q4",
        limited: "LIMITED AVAILABILITY",
    };

    const statusColors = {
        available: "bg-accent-success",
        unavailable: "bg-accent-secondary",
        limited: "bg-accent-primary",
    };

    const glowColors = {
        available: "bg-accent-success/50",
        unavailable: "bg-accent-secondary/50",
        limited: "bg-accent-primary/50",
    };

    return (
        <div
            className={cn(
                "inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border-subtle bg-surface/50 backdrop-blur-sm",
                className
            )}
        >
            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span
                    className={cn(
                        "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                        glowColors[status]
                    )}
                />
                <span
                    className={cn(
                        "relative inline-flex rounded-full h-2 w-2",
                        statusColors[status]
                    )}
                />
            </div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] font-sans text-muted uppercase">
                {text || defaultText[status]}
            </span>
        </div>
    );
}
