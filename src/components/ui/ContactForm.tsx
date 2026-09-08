"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().optional(),
    website: z.string().optional(),
    service: z.string().min(1, "Please select a service").refine(val => val !== "default", {
        message: "Please select a service"
    }),
    source: z.string().min(1, "Please select an option").refine(val => val !== "default", {
        message: "Please select an option"
    }),
    message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            website: "",
            service: "default",
            source: "default",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormValues) => {

        if (data.website) {
            return;
        }

        setStatus("loading");
        try {
            const payload = {
                name: data.name,
                email: data.email,
                phone: data.phone || "",
                service: data.service,
                source: data.source,
                message: data.message || "",
                website: data.website || "",
            };

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => null);
                throw new Error(errData?.message || `Request failed with status: ${response.status}`);
            }

            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || "Backend reported failure");
            }

            setStatus("success");
            reset();

        } catch (error) {
            console.error("Caught error during submission:", error);
            setStatus("error");
        }
    };

    return (
        <div className="space-y-6">
            {status === "success" && (
                <div className="p-6 bg-[#10A882]/10 border border-[#10A882]/20 rounded-2xl text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-12 h-12 bg-[#10A882]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#10A882]/40">
                        <svg className="w-6 h-6 text-[#10A882]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="font-sans text-xl font-medium text-[#F1F4F2] mb-2">Message sent successfully.</h3>
                    <p className="text-[#A7B0AB]">We'll get back to you soon.</p>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* HONEYPOT FIELD (Hidden) */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                    <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
                </div>

                {/* NAME FIELD */}
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#F1F4F2]">Full Name</label>
                    <input
                        id="name"
                        {...register("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-[#080B0A]/50 border border-[#B4FFD7]/10 rounded-xl px-4 py-3.5 text-[#F1F4F2] placeholder:text-[#A7B0AB]/50 focus:outline-none focus:border-[#10A882] focus:ring-1 focus:ring-[#10A882] transition-all"
                    />
                    {errors.name && <p id="name-error" role="alert" className="text-xs text-red-400">{errors.name.message}</p>}
                </div>

                {/* EMAIL FIELD */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#F1F4F2]">Email</label>
                    <input
                        id="email"
                        {...register("email")}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        type="email"
                        placeholder="yourname@email.com"
                        className="w-full bg-[#080B0A]/50 border border-[#B4FFD7]/10 rounded-xl px-4 py-3.5 text-[#F1F4F2] placeholder:text-[#A7B0AB]/50 focus:outline-none focus:border-[#10A882] focus:ring-1 focus:ring-[#10A882] transition-all"
                    />
                    {errors.email && <p id="email-error" role="alert" className="text-xs text-red-400">{errors.email.message}</p>}
                </div>

                {/* PHONE FIELD */}
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-[#F1F4F2]">Phone Number (Optional)</label>
                    <input
                        id="phone"
                        {...register("phone")}
                        type="tel"
                        placeholder="Your Phone Number"
                        className="w-full bg-[#080B0A]/50 border border-[#B4FFD7]/10 rounded-xl px-4 py-3.5 text-[#F1F4F2] placeholder:text-[#A7B0AB]/50 focus:outline-none focus:border-[#10A882] focus:ring-1 focus:ring-[#10A882] transition-all"
                    />
                </div>

                {/* SERVICE FIELD */}
                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-[#F1F4F2]">What service are you looking for?</label>
                    <div className="relative">
                        <select
                            id="service"
                            {...register("service")}
                            aria-invalid={!!errors.service}
                            aria-describedby={errors.service ? "service-error" : undefined}
                            className="w-full bg-[#080B0A]/50 border border-[#B4FFD7]/10 rounded-xl px-4 py-3.5 text-[#F1F4F2] focus:outline-none focus:border-[#10A882] focus:ring-1 focus:ring-[#10A882] transition-all appearance-none cursor-pointer"
                        >
                            <option value="default" className="text-gray-500 bg-[#111714]">Select a service category...</option>
                            <option value="AI Services" className="bg-[#111714]">AI Services</option>
                            <option value="Data Analytics" className="bg-[#111714]">Data Analytics</option>
                            <option value="Custom Software" className="bg-[#111714]">Custom Software</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-[#A7B0AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {errors.service && <p id="service-error" role="alert" className="text-xs text-red-400">{errors.service.message}</p>}
                </div>

                {/* SOURCE FIELD */}
                <div className="space-y-2">
                    <label htmlFor="source" className="text-sm font-medium text-[#F1F4F2]">How did you hear about us?</label>
                    <div className="relative">
                        <select
                            id="source"
                            {...register("source")}
                            aria-invalid={!!errors.source}
                            aria-describedby={errors.source ? "source-error" : undefined}
                            className="w-full bg-[#080B0A]/50 border border-[#B4FFD7]/10 rounded-xl px-4 py-3.5 text-[#F1F4F2] focus:outline-none focus:border-[#10A882] focus:ring-1 focus:ring-[#10A882] transition-all appearance-none cursor-pointer"
                        >
                            <option value="default" className="text-gray-500 bg-[#111714]">How did you hear about us?</option>
                            <option value="Google Search" className="bg-[#111714]">Google Search</option>
                            <option value="Instagram" className="bg-[#111714]">Instagram</option>
                            <option value="LinkedIn" className="bg-[#111714]">LinkedIn</option>
                            <option value="YouTube" className="bg-[#111714]">YouTube</option>
                            <option value="Friend / Referral" className="bg-[#111714]">Friend / Referral</option>
                            <option value="Event / Conference" className="bg-[#111714]">Event / Conference</option>
                            <option value="School / College" className="bg-[#111714]">School / College</option>
                            <option value="Other" className="bg-[#111714]">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-[#A7B0AB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {errors.source && <p id="source-error" role="alert" className="text-xs text-red-400">{errors.source.message}</p>}
                </div>

                {/* MESSAGE FIELD */}
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#F1F4F2]">Message (Optional)</label>
                    <textarea
                        id="message"
                        {...register("message")}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        placeholder="Tell us a little about what you're looking for..."
                        rows={4}
                        className="w-full bg-[#080B0A]/50 border border-[#B4FFD7]/10 rounded-xl px-4 py-3.5 text-[#F1F4F2] placeholder:text-[#A7B0AB]/50 focus:outline-none focus:border-[#10A882] focus:ring-1 focus:ring-[#10A882] transition-all resize-none"
                    />
                    {errors.message && <p id="message-error" role="alert" className="text-xs text-red-400">{errors.message.message}</p>}
                </div>

                {status === "error" && (
                    <div role="alert" className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center space-y-1">
                        <p>Something went wrong. Please try again.</p>
                        <p className="text-xs text-[#A7B0AB]">Or email us directly at{" "}
                            <a href="mailto:xcecute.hq@gmail.com" className="underline hover:text-[#10A882] transition-colors">xcecute.hq@gmail.com</a>
                        </p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn(
                        "w-full flex items-center justify-center gap-3 bg-[#111714] border border-[#10A882]/30 px-8 py-4 rounded-xl text-[15px] font-medium text-white hover:border-[#10A882] hover:bg-[#10A882]/10 hover:shadow-[0_0_30px_rgba(16,168,130,0.15)] transition-all duration-300 group cursor-pointer",
                        status === "loading" && "opacity-70 cursor-not-allowed"
                    )}
                >
                    {status === "loading" ? (
                        <Loader2 className="w-5 h-5 text-[#10A882] animate-spin" />
                    ) : (
                        <>
                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#10A882]/20 transition-colors duration-300 border border-white/5">
                                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-[#10A882] transition-colors" />
                            </div>
                            Submit
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
