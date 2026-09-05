import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-[#080B0A] text-white border border-[#B4FFD7]/10 hover:border-accent-primary hover:shadow-[0_0_20px_rgba(49,92,255,0.25)] hover:-translate-y-0.5",
                primary:
                    "bg-white text-black hover:bg-[#F1F4F2] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5",
                outline:
                    "border border-[#B4FFD7]/10 bg-transparent text-white hover:bg-white/5 hover:-translate-y-0.5 hover:border-white/20",
                secondary:
                    "bg-surface text-cream hover:bg-surface-hover hover:-translate-y-0.5 border border-white/5",
                ghost: "hover:bg-white/5 text-white/80 hover:text-white",
                link: "text-accent-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 px-4 text-sm",
                lg: "h-14 px-8 text-lg",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // Basic fallback if radix slot isn't installed. We'll use a normal button if asChild is not used often, or install radix slot
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
