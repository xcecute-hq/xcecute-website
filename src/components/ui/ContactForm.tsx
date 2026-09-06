"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().optional(),
    projectType: z.string().min(1, "Please select a project type"),
    budget: z.string().min(1, "Please select a budget range"),
    timeline: z.string().optional(),
    message: z.string().min(10, "Please briefly describe your project"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError(null);

        // Simulate server action/API delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // For now, let's pretend it always succeeds
        setIsSuccess(true);
        setIsSubmitting(false);
        reset();
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center bg-[#0D1310] rounded-3xl border border-[#B4FFD7]/10 h-[600px] transition-all">
                <CheckCircle2 className="w-16 h-16 text-[#10A882] mb-6" />
                <h3 className="font-sans font-medium text-3xl sm:text-4xl text-white mb-4">Request Received</h3>
                <p className="font-sans text-[#A7B0AB] max-w-md mx-auto mb-8">
                    Thank you for reaching out. We will review your project details and get back to you within 24 hours to schedule a discovery call.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                    Submit another request
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {error && (
                <div className="flex items-center gap-3 p-4 bg-red-900/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-sans font-medium text-white/80 ml-1">Name <span className="text-[#10A882]">*</span></label>
                    <input
                        {...register("name")}
                        id="name"
                        className={cn(
                            "w-full bg-[#0D1310] border rounded-xl px-4 py-3 text-[#F1F4F2] font-sans placeholder:text-[#A7B0AB]/50 focus:outline-none focus:ring-1 focus:ring-[#10A882] focus:border-[#10A882] transition-colors",
                            errors.name ? "border-red-500/50" : "border-[#B4FFD7]/10"
                        )}
                        placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-sans font-medium text-cream ml-1">Work Email <span className="text-red-500">*</span></label>
                    <input
                        {...register("email")}
                        id="email"
                        type="email"
                        className={cn(
                            "w-full bg-[#0D1310] border rounded-xl px-4 py-3 text-[#F1F4F2] font-sans placeholder:text-[#A7B0AB]/50 focus:outline-none focus:ring-1 focus:ring-[#10A882] focus:border-[#10A882] transition-colors",
                            errors.email ? "border-red-500/50" : "border-[#B4FFD7]/10"
                        )}
                        placeholder="jane@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-sans font-medium text-white/80 ml-1">Company</label>
                    <input
                        {...register("company")}
                        id="company"
                        className="w-full bg-[#0D1310] border border-[#B4FFD7]/10 rounded-xl px-4 py-3 text-[#F1F4F2] font-sans placeholder:text-[#A7B0AB]/50 focus:outline-none focus:ring-1 focus:ring-[#10A882] focus:border-[#10A882] transition-colors"
                        placeholder="Company Ltd"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-sans font-medium text-cream ml-1">Project Type <span className="text-red-500">*</span></label>
                    <select
                        {...register("projectType")}
                        id="projectType"
                        className={cn(
                            "w-full bg-[#0D1310] border rounded-xl px-4 py-3 text-[#F1F4F2] font-sans focus:outline-none focus:ring-1 focus:ring-[#10A882] focus:border-[#10A882] transition-colors appearance-none",
                            errors.projectType ? "border-red-500/50" : "border-[#B4FFD7]/10"
                        )}
                    >
                        <option value="" disabled selected>Select an option</option>
                        <option value="custom_software">Custom Software / Dashboard</option>
                        <option value="ai_agent">AI Agent / Automation</option>
                        <option value="mobile_app">Mobile App</option>
                        <option value="ecommerce">E-commerce / Web App</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.projectType && <p className="text-red-500 text-xs mt-1 ml-1">{errors.projectType.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-sans font-medium text-cream ml-1">Estimated Budget <span className="text-red-500">*</span></label>
                    <select
                        {...register("budget")}
                        id="budget"
                        className={cn(
                            "w-full bg-[#0D1310] border rounded-xl px-4 py-3 text-[#F1F4F2] font-sans focus:outline-none focus:ring-1 focus:ring-[#10A882] focus:border-[#10A882] transition-colors appearance-none",
                            errors.budget ? "border-red-500/50" : "border-[#B4FFD7]/10"
                        )}
                    >
                        <option value="" disabled selected>Select an option</option>
                        <option value="10k-25k">$10k to $25k</option>
                        <option value="25k-50k">$25k to $50k</option>
                        <option value="50k-100k">$50k to $100k</option>
                        <option value="100k+">$100k+</option>
                    </select>
                    {errors.budget && <p className="text-red-500 text-xs mt-1 ml-1">{errors.budget.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-sans font-medium text-white/80 ml-1">Timeline</label>
                    <select
                        {...register("timeline")}
                        id="timeline"
                        className="w-full bg-[#0D1310] border border-[#B4FFD7]/10 rounded-xl px-4 py-3 text-[#F1F4F2] font-sans focus:outline-none focus:ring-1 focus:ring-[#10A882] focus:border-[#10A882] transition-colors appearance-none"
                    >
                        <option value="" disabled selected>Select an option</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3_months">1-3 Months</option>
                        <option value="3-6_months">3-6 Months</option>
                        <option value="flexible">Flexible</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-sans font-medium text-cream ml-1">Project Details <span className="text-red-500">*</span></label>
                <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className={cn(
                        "w-full bg-[#0D1310] border rounded-xl px-4 py-3 text-[#F1F4F2] font-sans placeholder:text-[#A7B0AB]/50 focus:outline-none focus:ring-1 focus:ring-[#10A882] focus:border-[#10A882] transition-colors resize-none",
                        errors.message ? "border-red-500/50" : "border-[#B4FFD7]/10"
                    )}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending Request...
                    </>
                ) : (
                    "Send Project Request"
                )}
            </Button>

            <p className="text-center text-[#A7B0AB]/60 text-[11px] leading-relaxed mt-4">
                By submitting this form, you acknowledge our <Link href="/privacy" className="text-[#A7B0AB] hover:text-[#10A882] underline underline-offset-2 transition-colors">Privacy Policy</Link> and agree that we may use the information provided to respond to your inquiry.
            </p>
        </form>
    );
}
