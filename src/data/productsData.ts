export interface ProductItem {
    id: string;
    name: string;
    slug: string;
    category: "ai" | "business";
    headline: string;
    description: string;
    status: "Private Beta" | "Early Access" | "In Development" | "Planned";
    features: string[];
    href: string;
}

export interface ProductCategory {
    title: string;
    description: string;
    categorySlug: "ai" | "business";
    products: ProductItem[];
}

export const PRODUCTS_DATA: ProductCategory[] = [
    {
        title: "AI PRODUCTS",
        description: "Turnkey AI platforms and proprietary agents engineered by XCECUTE.",
        categorySlug: "ai",
        products: [
            {
                id: "ai-chatbot-product",
                name: "AI Chatbot",
                slug: "ai-chatbot",
                category: "ai",
                headline: "Turnkey enterprise customer & lead conversation platform.",
                description: "Pre-configured, brand-aligned conversational widget with native CRM syncing, RAG knowledge groundings, and automated lead capture.",
                status: "Early Access",
                features: ["Zero-hallucination guardrails", "Live CRM sync", "Multilingual support", "Instant deployment widget"],
                href: "/products#ai-chatbot"
            },
            {
                id: "ai-voice-agent-product",
                name: "AI Voice Agent",
                slug: "ai-voice-agent",
                category: "ai",
                headline: "Autonomous telephony agent for inbound answering and outbound calls.",
                description: "Low-latency voice engine with calendar booking, qualification logic, and seamless SIP/Twilio telephony integration.",
                status: "Private Beta",
                features: ["Sub-500ms voice response", "Intelligent interruption handling", "Automatic CRM logging", "Call recording & transcription"],
                href: "/products#ai-voice-agent"
            },
            {
                id: "ai-knowledge-assistant-product",
                name: "AI Knowledge Assistant",
                slug: "ai-knowledge-assistant",
                category: "ai",
                headline: "Internal semantic search engine across enterprise documentation.",
                description: "Unified search across company drives, Notion, and PDFs with citation transparency and role-based permissions.",
                status: "Early Access",
                features: ["Vector semantic search", "Role-based document filters", "Source citation links", "Automated sync connectors"],
                href: "/products#ai-knowledge-assistant"
            },
            {
                id: "ai-automation-platform-product",
                name: "AI Automation Platform",
                slug: "ai-automation-platform",
                category: "ai",
                headline: "Event-driven orchestration platform connecting tools and AI agents.",
                description: "Visually trigger, monitor, and execute multi-step business workflows with automated error-recovery and auditing.",
                status: "In Development",
                features: ["Event-driven triggers", "Multi-app connectors", "Human approval gates", "Detailed audit trails"],
                href: "/products#ai-automation-platform"
            }
        ]
    },
    {
        title: "BUSINESS PRODUCTS",
        description: "Modular enterprise operating software and vertical platforms.",
        categorySlug: "business",
        products: [
            {
                id: "modular-business-suite",
                name: "Enterprise Core Platform",
                slug: "enterprise-core",
                category: "business",
                headline: "Unified business operations and workflow infrastructure.",
                description: "Modular backend architecture designed for enterprises looking to consolidate internal operations without legacy bloat.",
                status: "Planned",
                features: ["Centralized identity", "Audit logging", "Modular APIs", "Custom permission grids"],
                href: "/products#enterprise-core"
            }
        ]
    }
];
