import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";

export const metadata: Metadata = {
    title: "Work | Xcecute",
    description: "Real problems we have worked on.",
};

const caseStudies = [
    {
        slug: "fintech-dashboard",
        category: "SaaS / Web App",
        title: "Global Fintech Analytics Dashboard",
        problem: "Existing analytics infrastructure could not scale to process increasing volumes of transaction data in real time.",
        approach: "Re-architected the data fetching pipeline to utilize server-side aggregation and optimized caching layers.",
        build: "A custom UI frontend integrated with a high-performance backend, designed specifically for rapid data visualization.",
        outcome: "300% increase in load speed for large datasets."
    },
    {
        slug: "ai-workflow",
        category: "AI Automation",
        title: "Autonomous Supply Chain AI",
        problem: "Manual supply chain data entry was bottlenecking operations and causing compliance delays.",
        approach: "Integrated an AI-driven extraction layer to identify and structure data from invoices and shipping manifests automatically.",
        build: "A custom internal tool featuring automated document ingestion, AI-based OCR, and a human-in-the-loop review interface.",
        outcome: "Saved 40hrs/week in manual data entry."
    },
    {
        slug: "ecommerce-scale",
        category: "E-commerce",
        title: "Direct-to-Consumer Custom Architecture",
        problem: "Legacy architecture was failing under extreme traffic spikes during seasonal sales events.",
        approach: "Migrated to a headless architecture with edge caching to decouple the frontend experience from backend processing.",
        build: "A custom storefront utilizing modern headless commerce frameworks, focused on reliability and edge-network performance.",
        outcome: "$10M+ Black Friday seamlessly handled."
    },
    {
        slug: "health-app",
        category: "Mobile App",
        title: "Clinician Mobile Companion",
        problem: "Clinicians needed mobile access to critical patient updates without navigating complex, legacy desktop portals.",
        approach: "Focused on creating an extremely fast, simplified interface targeting only the highest-frequency clinician workflows.",
        build: "A secure, HIPAA-compliant mobile companion application connected directly to existing hospital infrastructure.",
        outcome: "Deployed to 5,000+ hospital workers."
    },
    {
        slug: "medtech-portal",
        category: "Web Application",
        title: "Patient Data Platform",
        problem: "The existing patient data architecture was difficult to maintain and struggling with shifting compliance requirements.",
        approach: "Standardized the data models and implemented strict role-based access control across the entire ecosystem.",
        build: "A robust web application for patient management, featuring deep audit logging and secure data visualization.",
        outcome: "HIPAA Compliant architectural overhaul."
    },
    {
        slug: "proptech-platform",
        category: "SaaS Platform",
        title: "Real Estate Property Management",
        problem: "Property managers were managing multiple disparate systems for billing, maintenance, and tenant communication.",
        approach: "Consolidated core operations into a unified platform focused on multi-tenant architecture and rapid onboarding.",
        build: "A comprehensive SaaS platform engineered for scalability, featuring custom billing integrations and communication workflows.",
        outcome: "Scaled to 10k+ active property groups."
    }
];

export default function WorkPage() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-32">
            <section className="pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col pt-12">
                    <ScrollReveal>
                        <h1 className="font-sans font-medium text-5xl sm:text-7xl lg:text-[100px] leading-[1.0] tracking-tight text-[#F1F4F2] mb-6">
                            Selected work.
                        </h1>
                        <p className="font-sans text-xl sm:text-2xl text-[#A7B0AB] leading-relaxed">
                            Things we've built, explored, and learned from.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="pb-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
                <div className="max-w-7xl mx-auto flex flex-col">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard
                            key={study.slug}
                            {...study}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
