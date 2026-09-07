export interface Capability {
    title: string;
    description: string;
    icon: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

export interface UseCase {
    title: string;
    description: string;
    tag?: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface ServiceData {
    slug: string;
    categorySlug: "ai" | "data" | "software";
    categoryTitle: string;
    categoryEyebrow: string;
    name: string;
    title: string;
    heroHeadline: string;
    heroDescription: string;
    problemHeadline?: string;
    problemPoints: string[];
    solutionHeadline?: string;
    solutionArchitecture: string[]; // Steps in the diagram e.g. ["INPUT", "INTELLIGENCE", "ACTION", "OUTCOME"]
    solutionDescription: string;
    capabilities: Capability[];
    processSteps: ProcessStep[];
    technologies: string[];
    useCases: UseCase[];
    businessImpact: string[];
    faqs: FAQItem[];
    relatedSlugs: { slug: string; category: "ai" | "data" | "software"; name: string; headline: string }[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
    // =========================================================================
    // 1. AI CHATBOTS
    // =========================================================================
    "chatbots": {
        slug: "chatbots",
        categorySlug: "ai",
        categoryTitle: "AI Services",
        categoryEyebrow: "XCECUTE / AI SERVICES",
        name: "AI Chatbots",
        title: "AI Chatbots & Conversational Assistants",
        heroHeadline: "CONVERSATIONS THAT MOVE YOUR BUSINESS FORWARD.",
        heroDescription: "We build intelligent conversational agents that comprehend complex queries, ground themselves in proprietary knowledge bases, qualify high-intent leads, and trigger actions across your software stack.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Customers expect instant, contextual answers at any hour of the day.",
            "Support and sales teams repeatedly answer identical, low-value questions.",
            "High-intent leads fall through the cracks outside normal operational hours.",
            "Crucial company information is scattered across silos, PDFs, and disconnected tools."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["USER", "AI", "KNOWLEDGE", "ACTION", "RESPONSE"],
        solutionDescription: "Instead of rigid decision trees, our chatbots leverage advanced language models paired with custom retrieval pipelines, guardrails, and direct API execution.",
        capabilities: [
            { title: "Customer Support", description: "Resolve tier-1 and tier-2 customer inquiries instantly with context-aware responses.", icon: "MessageSquare" },
            { title: "Sales & Lead Qualification", description: "Engage visitors proactively, capture key requirements, and score leads in real time.", icon: "Target" },
            { title: "Product Recommendations", description: "Guide buyers toward suitable products or service packages using preference matching.", icon: "Sparkles" },
            { title: "FAQ Automation", description: "Turn sprawling static help centers into dynamic, self-serve conversation flows.", icon: "HelpCircle" },
            { title: "Knowledge Assistants", description: "Ground answers in uploaded internal documentation, contracts, and knowledge bases.", icon: "Database" },
            { title: "Website AI Assistants", description: "Embed native, styled widgets that mirror your company branding and interactive tone.", icon: "Globe" },
            { title: "WhatsApp AI", description: "Deploy automated conversation flows directly on WhatsApp Business and messaging channels.", icon: "Smartphone" },
            { title: "Internal AI Assistants", description: "Empower staff to search internal policies, standard operating procedures, and technical docs.", icon: "Users" },
            { title: "Human Handoff", description: "Detect sentiment and escalate complex tickets smoothly to live human operators.", icon: "UserCheck" },
            { title: "CRM / API Integration", description: "Read and write data to HubSpot, Salesforce, Notion, or custom database backends.", icon: "Layers" }
        ],
        processSteps: [
            { step: "01", title: "DISCOVER", description: "Audit existing communication touchpoints, FAQs, knowledge sources, and user journeys." },
            { step: "02", title: "DESIGN", description: "Define conversation architecture, persona tone, security policies, and handoff triggers." },
            { step: "03", title: "BUILD", description: "Integrate model logic, vector indexing, business APIs, and frontend client widgets." },
            { step: "04", title: "TEST", description: "Evaluate responses against edge cases, hallucinations, latency, and security thresholds." },
            { step: "05", title: "DEPLOY", description: "Launch securely across web, messaging platforms, and internal workspaces." },
            { step: "06", title: "OPTIMIZE", description: "Review real interaction transcripts to continuously refine prompts and retrieval accuracy." }
        ],
        technologies: ["OpenAI", "Anthropic Claude", "LangChain", "Pinecone", "Next.js", "Webhooks", "FastAPI"],
        useCases: [
            { title: "E-Commerce", description: "Instant order tracking, product recommendations, and return policy guidance.", tag: "Retail" },
            { title: "Education", description: "24/7 student admissions counseling, course syllabus Q&A, and campus onboarding.", tag: "EdTech" },
            { title: "Healthcare", description: "Pre-appointment screening, clinic hours, intake questions, and department routing.", tag: "Health" },
            { title: "SaaS Platforms", description: "Interactive product onboarding, documentation troubleshooting, and feature discovery.", tag: "Tech" },
            { title: "Real Estate", description: "Property inquiry filtering, tour scheduling, and buyer qualification.", tag: "Property" },
            { title: "Customer Support", description: "Automated ticket triage and instant resolution for multi-tier support teams.", tag: "Operations" }
        ],
        businessImpact: [
            "24/7 immediate inquiry resolution without hiring overnight shifts",
            "Up to 60% reduction in repetitive support tickets reaching human agents",
            "Faster lead qualification turning website traffic into booked sales calls",
            "Consistent, brand-aligned answers delivered across all digital touchpoints"
        ],
        faqs: [
            { question: "How does the chatbot prevent hallucinations?", answer: "We enforce strict Retrieval-Augmented Generation (RAG) guardrails. The model is constrained to only answer from your verified knowledge base, citing sources and declaring when information is unavailable." },
            { question: "Can the chatbot connect to our existing CRM or ticketing software?", answer: "Yes. We integrate with platforms like HubSpot, Salesforce, Zendesk, Jira, and custom REST or GraphQL APIs to log leads, check statuses, and create support tickets." },
            { question: "What happens when the bot cannot answer a question?", answer: "The system identifies low-confidence scenarios or user escalation requests and transfers the conversation smoothly to a human team member with full chat context." },
            { question: "Can we customize the visual design of the chat widget?", answer: "Every chatbot widget is custom-styled to match your typography, color palette, dark/light modes, and branding guidelines." },
            { question: "Is our business data kept private and secure?", answer: "Yes. We utilize enterprise-grade API agreements where client data is never used to train foundational public models." }
        ],
        relatedSlugs: [
            { slug: "voice-agents", category: "ai", name: "AI Voice Agents", headline: "AI that answers, understands, and acts via natural voice." },
            { slug: "rag", category: "ai", name: "RAG Solutions", headline: "Ground model responses in your proprietary knowledge base." },
            { slug: "agents", category: "ai", name: "AI Agents", headline: "Autonomous agents that plan, reason, and use tools." }
        ]
    },

    // =========================================================================
    // 2. AI VOICE AGENTS
    // =========================================================================
    "voice-agents": {
        slug: "voice-agents",
        categorySlug: "ai",
        categoryTitle: "AI Services",
        categoryEyebrow: "XCECUTE / AI SERVICES",
        name: "AI Voice Agents",
        title: "AI Voice Agents & Telephony Automation",
        heroHeadline: "AI THAT ANSWERS, UNDERSTANDS, AND ACTS.",
        heroDescription: "Deploy voice agents capable of handling natural, low-latency phone conversations. From answering inbound inquiries to booking appointments and qualifying prospective clients, our systems handle the phone with human fluency.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Inbound phone calls go unanswered during peak business hours and weekends.",
            "Manual phone outreach and follow-ups consume huge operational hours.",
            "Traditional IVR phone menus ('Press 1 for Sales') frustrate callers and lead to drop-offs.",
            "Call logging and CRM updates remain inconsistent across human sales reps."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["CALL", "UNDERSTAND", "RESPOND", "ACT", "ANALYZE"],
        solutionDescription: "We combine ultra-low-latency speech-to-text, cognitive reasoning models, and natural voice synthesis connected directly to your telephony infrastructure.",
        capabilities: [
            { title: "Inbound Call Answering", description: "Answer every customer call on the first ring with tailored conversational intelligence.", icon: "PhoneCall" },
            { title: "Natural Speech Understanding", description: "Comprehend natural interruptions, accents, colloquial phrases, and contextual nuances.", icon: "Mic" },
            { title: "Lead Qualification", description: "Ask key discovery questions, verify budget and timeline, and qualify prospective callers.", icon: "CheckCircle2" },
            { title: "Appointment Booking", description: "Check real-time calendar availability and schedule consultations directly on the call.", icon: "Calendar" },
            { title: "Customer Support", description: "Answer status inquiries, confirm service windows, and provide step-by-step assistance.", icon: "Headphones" },
            { title: "Outbound Calling", description: "Execute proactive reminder calls, confirm appointments, and collect feedback at scale.", icon: "PhoneOutgoing" },
            { title: "Intelligent Call Routing", description: "Determine caller intent through conversation and transfer smoothly to the right department.", icon: "GitFork" },
            { title: "Human Transfer", description: "Seamlessly patch in human agents with warm transfer notes when high complexity arises.", icon: "UserCheck" },
            { title: "Call Transcription & Analysis", description: "Transcribe audio instantly, extract sentiment, and summarize key customer action items.", icon: "FileText" },
            { title: "Multilingual Voice Support", description: "Engage callers in multiple native languages and regional accents without staffing friction.", icon: "Globe" }
        ],
        processSteps: [
            { step: "01", title: "DISCOVER", description: "Map phone call volume, peak hours, call scripts, and integration needs." },
            { step: "02", title: "VOICE DESIGN", description: "Select latency-optimized acoustic voices, craft guardrails, and establish routing protocols." },
            { step: "03", title: "INTEGRATE", description: "Connect SIP trunking, Twilio/Telnyx pipelines, CRM databases, and calendar tools." },
            { step: "04", title: "BENCHMARK", description: "Conduct rigorous multi-scenario audio stress testing for latency and interruptions." },
            { step: "05", title: "PILOT", description: "Route a percentage of inbound or outbound lines through monitored testing phases." },
            { step: "06", title: "SCALE", description: "Expand capacity across all phone lines with continuous transcription analysis." }
        ],
        technologies: ["Deepgram", "Cartesia", "ElevenLabs", "Twilio", "LiveKit", "WebRTC", "Python"],
        useCases: [
            { title: "Healthcare Clinics", description: "Handling after-hours appointment scheduling, cancellations, and clinic inquiries.", tag: "Health" },
            { title: "Real Estate Agencies", description: "Qualifying property buyers and scheduling viewings for licensed brokers.", tag: "Real Estate" },
            { title: "Home Services & Trades", description: "Capturing emergency service requests and dispatching contractors 24/7.", tag: "Field Service" },
            { title: "Automotive Dealerships", description: "Service department booking, inventory checks, and test-drive scheduling.", tag: "Auto" },
            { title: "Restaurants & Hospitality", description: "Managing table reservations, private event inquiries, and dietary questions.", tag: "Hospitality" },
            { title: "Education & Admissions", description: "Answering prospective student queries and scheduling admissions tours.", tag: "EdTech" }
        ],
        businessImpact: [
            "Zero missed customer calls regardless of call spikes or after-hours timing",
            "Sub-second voice response latency for natural, interruptible conversations",
            "Automatic synchronization of every call summary and recording into your CRM",
            "Substantial operational cost savings over traditional outsourced call centers"
        ],
        faqs: [
            { question: "How natural does the AI voice sound?", answer: "We deploy state-of-the-art neural speech synthesis that replicates human cadence, inflection, and breathing pauses with sub-500ms end-to-end latency." },
            { question: "Can a caller interrupt the voice agent while it is speaking?", answer: "Yes. Our speech pipeline features native Voice Activity Detection (VAD) that halts speech the moment the caller speaks, mirroring human conversation." },
            { question: "How does the system connect to our existing phone numbers?", answer: "We connect seamlessly via standard SIP trunking, Twilio, Telnyx, or carrier forwarding from your current telephone provider." },
            { question: "Can the voice agent transfer to a live human?", answer: "Yes. The agent can dial an internal extension or external mobile number, briefing the human agent on caller details before completing the transfer." },
            { question: "Does the voice agent support multiple languages?", answer: "Yes, our voice agents can detect and speak in dozens of languages including English, Spanish, French, German, Hindi, and more." }
        ],
        relatedSlugs: [
            { slug: "chatbots", category: "ai", name: "AI Chatbots", headline: "Conversational text bots for websites and messaging apps." },
            { slug: "workflow-automation", category: "ai", name: "Workflow Automation", headline: "Automate downstream actions and CRM workflows." },
            { slug: "agents", category: "ai", name: "AI Agents", headline: "Autonomous reasoning and multi-step execution." }
        ]
    },

    // =========================================================================
    // 3. GENERATIVE AI & LLM SOLUTIONS
    // =========================================================================
    "generative-ai": {
        slug: "generative-ai",
        categorySlug: "ai",
        categoryTitle: "AI Services",
        categoryEyebrow: "XCECUTE / AI SERVICES",
        name: "Generative AI & LLM Solutions",
        title: "Generative AI & Large Language Model Solutions",
        heroHeadline: "BUILD WITH INTELLIGENCE.",
        heroDescription: "We engineer production-grade Generative AI applications, custom domain copilots, and enterprise LLM integrations that solve concrete business challenges with precision, privacy, and speed.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Off-the-shelf AI tools lack context regarding your business operations and data.",
            "Unstructured documents (contracts, emails, research) require tedious human hours to parse.",
            "Concerns around data privacy, compliance, and IP leakage inhibit enterprise adoption.",
            "Naive LLM implementations struggle with reliability, token costs, and high latency."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["BUSINESS DATA", "LLM", "APPLICATION", "USER"],
        solutionDescription: "We build secure middleware, fine-tuning pipelines, and domain-adapted inference systems that turn frontier models into enterprise-grade software products.",
        capabilities: [
            { title: "Custom LLM Applications", description: "Bespoke software products powered by state-of-the-art language models.", icon: "Cpu" },
            { title: "AI Copilots & Assistants", description: "In-app intelligent copilots that guide users through complex software tasks.", icon: "Bot" },
            { title: "Document Intelligence", description: "Automatically parse, extract, synthesize, and categorize dense documents.", icon: "FileCode" },
            { title: "Content Generation Engines", description: "Structured, brand-governed generation of marketing, technical, or legal copy.", icon: "Feather" },
            { title: "Multimodal AI Systems", description: "Process and reason over images, audio, structured data, and video alongside text.", icon: "Eye" },
            { title: "Enterprise API Gateways", description: "Cost tracking, rate limiting, and model routing across OpenAI, Claude, and Gemini.", icon: "Key" },
            { title: "Model Fine-Tuning", description: "Adapt smaller, private models to your specific nomenclature and tasks.", icon: "Sliders" },
            { title: "Private AI Deployments", description: "Deploy self-hosted models in isolated VPCs for complete data sovereignty.", icon: "ShieldCheck" }
        ],
        processSteps: [
            { step: "01", title: "FEASIBILITY", description: "Evaluate use case viability, token economics, latency requirements, and model fit." },
            { step: "02", title: "DATA PREP", description: "Clean, format, and structure domain data for few-shot prompting or fine-tuning." },
            { step: "03", title: "PROTOTYPE", description: "Build working prototypes with evaluation benchmarks to quantify output accuracy." },
            { step: "04", title: "HARDENING", description: "Implement prompt defense, caching layers, fallbacks, and cost optimization." },
            { step: "05", title: "INTEGRATE", description: "Embed directly into user-facing web, mobile, or enterprise application workflows." },
            { step: "06", title: "GOVERN", description: "Establish observability dashboards monitoring quality, latency, and drift." }
        ],
        technologies: ["OpenAI API", "Anthropic Claude", "Gemini 1.5", "vLLM", "Ollama", "Langfuse", "Next.js"],
        useCases: [
            { title: "Legal Tech", description: "Contract analysis, clause comparison, and risk summary generation.", tag: "Legal" },
            { title: "Financial Analysis", description: "Automating earnings report synthesis and regulatory document parsing.", tag: "Finance" },
            { title: "Healthcare Administration", description: "Clinical note structuring, patient intake summary, and referral drafting.", tag: "Health" },
            { title: "Engineering Teams", description: "Code intelligence, internal API documentation generation, and bug triage.", tag: "Engineering" },
            { title: "Media & Publishing", description: "Structured research aggregation and multiformat draft creation.", tag: "Publishing" }
        ],
        businessImpact: [
            "Transform weeks of manual document review into minutes of automated synthesis",
            "Eliminate data privacy risks via VPC-isolated or enterprise-compliant model hosting",
            "Substantial productivity gains for knowledge workers across core workflows",
            "Controlled model inference costs through prompt caching and intelligent routing"
        ],
        faqs: [
            { question: "Is our proprietary data used to train the public models?", answer: "No. All enterprise integrations use commercial APIs that explicitly prohibit training on customer data, or we deploy private open-weight models in your dedicated VPC." },
            { question: "Which LLM model do you recommend for our project?", answer: "We evaluate your needs across latency, cost, and complexity. Often we combine models—using faster, economical models for classification and frontier models for reasoning." },
            { question: "How do you evaluate and maintain LLM accuracy?", answer: "We implement automated evaluation suites (evals) that score model outputs against verified ground truth datasets on every code release." }
        ],
        relatedSlugs: [
            { slug: "rag", category: "ai", name: "RAG Solutions", headline: "Connect LLMs to real-time enterprise databases and documents." },
            { slug: "agents", category: "ai", name: "AI Agents", headline: "Equip models with tools and autonomous execution loops." },
            { slug: "machine-learning", category: "ai", name: "Machine Learning", headline: "Custom predictive models trained on your tabular data." }
        ]
    },

    // =========================================================================
    // 4. RAG SOLUTIONS
    // =========================================================================
    "rag": {
        slug: "rag",
        categorySlug: "ai",
        categoryTitle: "AI Services",
        categoryEyebrow: "XCECUTE / AI SERVICES",
        name: "RAG Solutions",
        title: "Retrieval-Augmented Generation (RAG) Architecture",
        heroHeadline: "GIVE AI ACCESS TO THE KNOWLEDGE THAT MATTERS.",
        heroDescription: "Connect frontier AI models directly to your enterprise knowledge base. RAG eliminates hallucinations by grounding answers in your internal documents, databases, and policies with transparent citations.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "General AI models do not know your proprietary products, policies, or client histories.",
            "Models invent facts (hallucinate) when asked about specific company details.",
            "Employees waste up to 20% of their work week hunting for internal answers.",
            "Access-control permissions are difficult to enforce when sharing company data with AI."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["DOCUMENTS", "RETRIEVAL", "LLM", "GROUNDED ANSWER"],
        solutionDescription: "We architect hybrid search pipelines combining semantic dense vector search with lexical BM25 retrieval, reranking, and document-level permission filters.",
        capabilities: [
            { title: "Enterprise Knowledge Search", description: "Query millions of internal documents in milliseconds with natural language.", icon: "Search" },
            { title: "Document Q&A", description: "Ask questions against complex PDFs, Word docs, spreadsheets, and presentations.", icon: "FileText" },
            { title: "Source-Aware Citations", description: "Every answer includes clickable citations pointing to exact document page numbers.", icon: "ExternalLink" },
            { title: "Semantic & Hybrid Retrieval", description: "Combine vector embeddings with keyword search and reciprocal rank fusion.", icon: "Network" },
            { title: "Automated Ingestion Pipelines", description: "Auto-sync with Google Drive, SharePoint, Notion, and databases as files change.", icon: "RefreshCw" },
            { title: "Role-Based Access Control", description: "Users only receive answers generated from documents they have permission to read.", icon: "Lock" },
            { title: "Vector Database Setup", description: "Production deployments of Pinecone, Qdrant, Milvus, or pgvector.", icon: "Database" },
            { title: "Advanced Chunking & Reranking", description: "Context-aware chunking strategies paired with Cohere or cross-encoder rerankers.", icon: "Layers" }
        ],
        processSteps: [
            { step: "01", title: "AUDIT", description: "Catalog source documents, formats, update frequencies, and security levels." },
            { step: "02", title: "CHUNKING", description: "Design semantic partitioning strategies tailored to tables, text, and code." },
            { step: "03", title: "INDEXING", description: "Generate vector embeddings and construct high-performance vector indexes." },
            { step: "04", title: "PIPELINE", description: "Implement hybrid retrieval, cross-encoder reranking, and context synthesis." },
            { step: "05", title: "SECURITY", description: "Enforce user identity authentication and document access validation." },
            { step: "06", title: "MONITOR", description: "Track retrieval hit rate, context relevancy, and groundedness metrics." }
        ],
        technologies: ["Pinecone", "Qdrant", "pgvector", "LangChain", "LlamaIndex", "Cohere Rerank", "FastAPI"],
        useCases: [
            { title: "Financial Due Diligence", description: "Query hundreds of audit reports and prospectuses during M&A reviews.", tag: "Finance" },
            { title: "Internal HR & Policies", description: "Provide employees instant answers on benefits, leave policies, and SOPs.", tag: "HR" },
            { title: "Technical Customer Support", description: "Help support engineers resolve obscure technical tickets with legacy manuals.", tag: "Support" },
            { title: "Compliance & Regulatory", description: "Search evolving industry standards and internal compliance records.", tag: "Legal" }
        ],
        businessImpact: [
            "Eliminate hallucinations by forcing models to cite verified company sources",
            "Accelerate employee onboarding and information retrieval across teams",
            "Preserve institutional knowledge when team members transition",
            "Safeguard confidential information with strict document access filtering"
        ],
        faqs: [
            { question: "What is RAG in simple terms?", answer: "Retrieval-Augmented Generation (RAG) is a technique where the AI first searches your company's documents for the exact answer, and then uses that context to write a clear, factual response citing the source." },
            { question: "Can RAG handle scanned PDFs and tables?", answer: "Yes. We use advanced OCR and vision models to parse tables, forms, and handwritten scans into structured markdown before indexing." },
            { question: "How quickly are new documents reflected in the search?", answer: "Our automated ingestion pipelines can update vector indexes within seconds of a document being added or modified in your repository." }
        ],
        relatedSlugs: [
            { slug: "chatbots", category: "ai", name: "AI Chatbots", headline: "Deploy RAG directly into conversational customer widgets." },
            { slug: "agents", category: "ai", name: "AI Agents", headline: "Let autonomous agents query your enterprise knowledge base." },
            { slug: "data-engineering", category: "data", name: "Data Engineering", headline: "Build resilient pipelines to feed your vector databases." }
        ]
    },

    // =========================================================================
    // 5. AI AGENTS
    // =========================================================================
    "agents": {
        slug: "agents",
        categorySlug: "ai",
        categoryTitle: "AI Services",
        categoryEyebrow: "XCECUTE / AI SERVICES",
        name: "AI Agents",
        title: "Autonomous AI Agents & Multi-Agent Systems",
        heroHeadline: "AI THAT DOESN'T JUST ANSWER. IT EXECUTES.",
        heroDescription: "We engineer goal-oriented autonomous AI agents that can decompose complex business objectives, formulate multi-step plans, interact with software tools, and verify outcomes with human supervision.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Standard chat models only provide passive answers rather than taking active measures.",
            "Cross-application workflows require humans to manually copy, paste, and reconcile data.",
            "Complex operational tasks require planning, dynamic reasoning, and recovery from errors.",
            "Unsupervised automation carries risk without dependable human-in-the-loop controls."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["GOAL", "PLAN", "REASON", "USE TOOLS", "EXECUTE", "VERIFY"],
        solutionDescription: "We construct stateful agent loops featuring memory, structured tool calling, sandboxed execution, and explicit validation checkpoints before final commits.",
        capabilities: [
            { title: "Autonomous Goal Execution", description: "Provide a high-level target and allow the agent to plan and execute steps.", icon: "Target" },
            { title: "Tool & API Calling", description: "Agents securely authenticate and execute actions across external REST APIs.", icon: "Wrench" },
            { title: "Research & Synthesis Agents", description: "Scrape web sources, analyze competitor metrics, and draft structured memos.", icon: "BookOpen" },
            { title: "Multi-Agent Orchestration", description: "Coordinate specialized agents (planner, coder, reviewer) working in tandem.", icon: "Users" },
            { title: "Human-in-the-Loop Safeguards", description: "Pause execution for human confirmation before irreversible financial or data steps.", icon: "Shield" },
            { title: "Long-Term & Short-Term Memory", description: "Store session state, user preferences, and learnings in persistent databases.", icon: "Database" },
            { title: "Self-Correction & Reflection", description: "Detect failed API calls or invalid outputs and retry with alternative strategies.", icon: "RotateCcw" },
            { title: "Sandboxed Code Execution", description: "Execute dynamically generated Python/SQL scripts inside isolated secure runtimes.", icon: "Terminal" }
        ],
        processSteps: [
            { step: "01", title: "GOAL SPECIFICATION", description: "Define measurable outcomes, allowed tools, and operational boundaries." },
            { step: "02", title: "TOOL DEFINITION", description: "Expose clean, validated schema definitions for your internal APIs and databases." },
            { step: "03", title: "COGNITIVE ARCHITECTURE", description: "Select orchestration frameworks (LangGraph, CrewAI) and memory tiers." },
            { step: "04", title: "GUARDRAILS", description: "Build permission walls, rate limiters, and approval gates for critical actions." },
            { step: "05", title: "BENCHMARKING", description: "Run automated stress runs across diverse edge cases to measure completion rates." },
            { step: "06", title: "SUPERVISED ROLLOUT", description: "Deploy with live telemetry and gradual autonomy progression." }
        ],
        technologies: ["LangGraph", "CrewAI", "Autogen", "Python", "Docker Sandbox", "FastAPI", "PostgreSQL"],
        useCases: [
            { title: "Sales Prospecting & Outreach", description: "Researching target accounts, finding verified emails, and drafting tailored introductions.", tag: "Sales" },
            { title: "Finance Reconciliation", description: "Matching invoices against bank records, identifying discrepancies, and proposing adjustments.", tag: "Finance" },
            { title: "Software Triage & QA", description: "Reproducing user bug tickets, inspecting logs, and generating pull request drafts.", tag: "Engineering" },
            { title: "Procurement Due Diligence", description: "Gathering supplier quotes, comparing specification compliance, and summarizing trade-offs.", tag: "Operations" }
        ],
        businessImpact: [
            "Shift knowledge workers from manual execution to strategic oversight",
            "Enable autonomous operations that run 24/7 without human latency bottlenecks",
            "Consistent application of business logic and verification standards",
            "Enterprise-grade security with strict human approval gates for critical operations"
        ],
        faqs: [
            { question: "What is the difference between a chatbot and an AI agent?", answer: "A chatbot produces conversational text. An AI agent is given a goal, decides what steps to take, calls software APIs, interacts with tools, verifies results, and completes multi-step workflows." },
            { question: "How do you ensure an agent does not take harmful actions?", answer: "We enforce strict Human-in-the-Loop (HITL) checkpoints for any sensitive actions (e.g., sending emails to clients, charging cards, deleting data) requiring one-click manager authorization." },
            { question: "Can agents recover if an external API fails?", answer: "Yes. Our agents feature recursive reflection loops that read API error codes, alter their approach or parameters, and retry gracefully." }
        ],
        relatedSlugs: [
            { slug: "workflow-automation", category: "ai", name: "Workflow Automation", headline: "Connect agents to broader event-driven business workflows." },
            { slug: "chatbots", category: "ai", name: "AI Chatbots", headline: "Deploy conversational interfaces that trigger agent workflows." },
            { slug: "generative-ai", category: "ai", name: "Generative AI Solutions", headline: "Explore foundational model integration and fine-tuning." }
        ]
    },

    // =========================================================================
    // 6. WORKFLOW AUTOMATION
    // =========================================================================
    "workflow-automation": {
        slug: "workflow-automation",
        categorySlug: "ai",
        categoryTitle: "AI Services",
        categoryEyebrow: "XCECUTE / AI SERVICES",
        name: "Workflow Automation",
        title: "Intelligent Business Process & Workflow Automation",
        heroHeadline: "TURN REPETITIVE WORK INTO INTELLIGENT WORKFLOWS.",
        heroDescription: "Connect siloed applications, eliminate manual data entry, and orchestrate complex business processes with event-driven automation powered by AI decision logic.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Team members spend hours daily copying data between email, spreadsheets, and software tools.",
            "Manual approval chains cause operational delays, missed deadlines, and lost momentum.",
            "Disconnected software tools create fragmented customer records and duplicate entries.",
            "Human data entry inevitably produces costly typographical and financial errors."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["TRIGGER", "AI", "DECISION", "ACTION", "RESULT"],
        solutionDescription: "We combine rock-solid event-driven pipelines, webhook orchestrators, and AI intelligence blocks to automate end-to-end operational loops with high reliability.",
        capabilities: [
            { title: "Business Process Automation", description: "Automate cross-department workflows spanning CRM, ERP, and customer messaging.", icon: "Workflow" },
            { title: "Intelligent Document Processing", description: "Extract structured data from receipts, invoices, and bills of lading into databases.", icon: "FileSpreadsheet" },
            { title: "CRM & Lead Automation", description: "Enrich inbound leads, route to ideal reps, and trigger tailored drip sequences.", icon: "UserPlus" },
            { title: "Approval Chains", description: "Automate Slack, Teams, or email approvals with one-click decision buttons.", icon: "CheckSquare" },
            { title: "Email & Communication Triggers", description: "Draft and dispatch transactional updates, client onboarding guides, and renewal notices.", icon: "Mail" },
            { title: "Automated Report Generation", description: "Aggregate cross-platform analytics and distribute weekly PDF summaries to leadership.", icon: "BarChart" },
            { title: "RPA + AI Integration", description: "Bridge legacy systems lacking APIs using modern headless browser automation.", icon: "Bot" },
            { title: "API Integrations", description: "Connect proprietary databases with Stripe, HubSpot, QuickBooks, and Shopify.", icon: "Share2" }
        ],
        processSteps: [
            { step: "01", title: "MAP", description: "Document existing manual procedures, handoffs, input formats, and bottlenecks." },
            { step: "02", title: "ARCHITECT", description: "Design resilient event triggers, error fallback strategies, and data transforms." },
            { step: "03", title: "DEVELOP", description: "Build webhook endpoints, orchestration logic, and authentication handshakes." },
            { step: "04", title: "SIMULATE", description: "Run edge-case test payloads to verify idempotency and payload integrity." },
            { step: "05", title: "DEPLOY", description: "Launch with comprehensive audit logging and automated failure alert monitors." },
            { step: "06", title: "REFINE", description: "Analyze throughput telemetry to identify further optimization opportunities." }
        ],
        technologies: ["Temporal", "Node.js", "Python", "AWS Lambda", "Kafka", "Webhooks", "PostgreSQL"],
        useCases: [
            { title: "Client Onboarding", description: "Trigger contract generation, invoice dispatch, account setup, and welcome emails.", tag: "Operations" },
            { title: "Accounts Payable", description: "Parse vendor invoices, match purchase orders, and route for executive sign-off.", tag: "Finance" },
            { title: "E-Commerce Fulfillment", description: "Sync orders, update multi-channel warehouse inventory, and issue tracking links.", tag: "Retail" },
            { title: "Employee Lifecycle", description: "Provision software licenses, schedule training, and record compliance signatures.", tag: "HR" }
        ],
        businessImpact: [
            "Eliminate up to 80% of repetitive data entry and manual administrative tasks",
            "Instantaneous process execution without waiting for human availability",
            "Zero clerical errors in customer records, invoices, and compliance submissions",
            "Full auditability with timestamped logs for every automated transaction"
        ],
        faqs: [
            { question: "What happens if an external software API goes down?", answer: "Our automation pipelines incorporate retry mechanisms with exponential backoff, dead-letter queues, and instant Slack alerts so no data is ever lost." },
            { question: "Can we automate legacy software without an API?", answer: "Yes. We combine secure database connectors and robotic browser automation (RPA) to interface with legacy on-premises software reliably." },
            { question: "Is workflow automation secure for confidential financial data?", answer: "All data in transit is encrypted with TLS 1.3, secrets are stored in dedicated key vaults, and we adhere to zero-trust architecture principles." }
        ],
        relatedSlugs: [
            { slug: "agents", category: "ai", name: "AI Agents", headline: "Add autonomous cognitive decision-making to workflow steps." },
            { slug: "data-engineering", category: "data", name: "Data Engineering", headline: "Streamline raw enterprise data into synchronized pipelines." },
            { slug: "erp", category: "software", name: "ERP & Business Systems", headline: "Consolidate core operations into one unified software platform." }
        ]
    },

    // =========================================================================
    // 7. MACHINE LEARNING
    // =========================================================================
    "machine-learning": {
        slug: "machine-learning",
        categorySlug: "ai",
        categoryTitle: "AI Services",
        categoryEyebrow: "XCECUTE / AI SERVICES",
        name: "Machine Learning",
        title: "Custom Machine Learning Models & MLOps",
        heroHeadline: "MODELS BUILT AROUND YOUR DATA.",
        heroDescription: "We engineer proprietary predictive models, classification systems, and production MLOps pipelines that extract high-value foresight from your historical business data.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Valuable historical data sits dormant in warehouses without delivering actionable foresight.",
            "Heuristic rules fail to scale as customer behavior and market conditions shift.",
            "Customer churn and equipment failures occur unexpectedly without early warning indicators.",
            "Experimental ML notebooks often languish without being successfully deployed to production."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["DATA", "TRAIN", "EVALUATE", "DEPLOY", "MONITOR"],
        solutionDescription: "We bridge data science and software engineering, taking models from exploratory feature engineering to containerized, monitored low-latency microservices.",
        capabilities: [
            { title: "Custom ML Models", description: "Bespoke algorithms trained specifically on your proprietary historical datasets.", icon: "Binary" },
            { title: "Classification & Tagging", description: "Categorize incoming items, tickets, images, or leads automatically at scale.", icon: "Tag" },
            { title: "Regression & Forecasting", description: "Predict future revenue, demand spikes, and inventory requirements.", icon: "TrendingUp" },
            { title: "Recommendation Systems", description: "Deliver personalized product and content recommendations that elevate conversion.", icon: "Sparkles" },
            { title: "Anomaly Detection", description: "Detect fraud, network intrusions, and manufacturing defects in real time.", icon: "AlertTriangle" },
            { title: "Customer Churn Prediction", description: "Identify at-risk accounts weeks prior to cancellation so teams can intervene.", icon: "UserMinus" },
            { title: "MLOps & CI/CD for Models", description: "Automate retraining pipelines, model registry tracking, and container deployment.", icon: "Cpu" },
            { title: "Continuous Model Monitoring", description: "Track data drift, concept drift, latency, and prediction confidence in production.", icon: "Activity" }
        ],
        processSteps: [
            { step: "01", title: "DATA AUDIT", description: "Assess dataset quality, labeling completeness, skew, and missing variables." },
            { step: "02", title: "BASELINE", description: "Establish heuristic baselines to quantify the true ROI of ML intervention." },
            { step: "03", title: "TRAINING", description: "Conduct feature engineering, hyperparameter tuning, and cross-validation." },
            { step: "04", title: "EVALUATION", description: "Validate precision, recall, ROC-AUC, and inference latency on holdout sets." },
            { step: "05", title: "SERVING", description: "Deploy as containerized REST or gRPC APIs with auto-scaling capabilities." },
            { step: "06", title: "MONITORING", description: "Implement real-time dashboards to flag data drift and trigger scheduled retraining." }
        ],
        technologies: ["PyTorch", "Scikit-Learn", "XGBoost", "MLflow", "Docker", "FastAPI", "PostgreSQL"],
        useCases: [
            { title: "Retail Demand Forecasting", description: "Predict regional SKU demand to optimize warehouse replenishment and reduce stockouts.", tag: "Retail" },
            { title: "Financial Risk Scoring", description: "Assess credit risk and loan default probability using multi-variable underwriting data.", tag: "Finance" },
            { title: "Industrial Predictive Maintenance", description: "Analyze IoT vibration and temperature telemetry to service machinery before breakdown.", tag: "Industrial" },
            { title: "Subscription Churn Prevention", description: "Detect subtle engagement drops to trigger timely retention campaigns.", tag: "SaaS" }
        ],
        businessImpact: [
            "Anticipate future market dynamics rather than merely reacting to past reports",
            "Eliminate costly manual inspection and repetitive classification bottlenecks",
            "Boost customer lifetime value through targeted churn intervention",
            "Reliable, monitored inference APIs that scale seamlessly with traffic"
        ],
        faqs: [
            { question: "How much data is required to train a custom model?", answer: "It depends on the complexity of the task. Tabular prediction tasks can often succeed with thousands of high-quality records, while vision or complex NLP tasks benefit from larger datasets or transfer learning." },
            { question: "How do you prevent model performance from degrading over time?", answer: "We deploy MLOps monitoring that continuously tracks data drift. When input distributions deviate from training baselines, automated retraining pipelines are triggered." },
            { question: "Do you provide APIs that integrate into our existing applications?", answer: "Yes, our models are packaged as ultra-fast, containerized REST or gRPC microservices that integrate into any web, mobile, or backend architecture." }
        ],
        relatedSlugs: [
            { slug: "predictive-analytics", category: "data", name: "Predictive Analytics", headline: "Translate model outputs into business decision support." },
            { slug: "data-engineering", category: "data", name: "Data Engineering", headline: "Clean and structure the data needed for robust model training." },
            { slug: "generative-ai", category: "ai", name: "Generative AI Solutions", headline: "Explore frontier LLMs alongside traditional predictive ML." }
        ]
    },

    // =========================================================================
    // 8. BUSINESS INTELLIGENCE & DASHBOARDS
    // =========================================================================
    "business-intelligence": {
        slug: "business-intelligence",
        categorySlug: "data",
        categoryTitle: "Data Analytics",
        categoryEyebrow: "XCECUTE / DATA ANALYTICS",
        name: "Business Intelligence & Dashboards",
        title: "Executive Dashboards & Business Intelligence",
        heroHeadline: "SEE WHAT YOUR BUSINESS IS TELLING YOU.",
        heroDescription: "We design high-performance, real-time analytics dashboards and bespoke BI platforms that turn scattered operational metrics into crystal-clear executive decision-making tools.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Leadership waits days or weeks for manual end-of-month spreadsheet consolidations.",
            "Different departments calculate the same metric differently, eroding trust in numbers.",
            "Crucial business trends and anomalies go unnoticed until it is too late to react.",
            "Clunky legacy BI tools have low team adoption and sluggish load times."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["DATA", "ANALYTICS", "DASHBOARD", "DECISION"],
        solutionDescription: "We build modern, lightning-fast web analytics dashboards powered by unified data models, role-based controls, and automated reporting scheduled digests.",
        capabilities: [
            { title: "Executive Dashboards", description: "High-level North Star metrics giving C-suite leadership instant visibility.", icon: "LayoutDashboard" },
            { title: "Real-Time Reporting", description: "Stream live telemetry for revenue, orders, inventory, and operational status.", icon: "Activity" },
            { title: "KPI Definition & Tracking", description: "Establish consistent, mathematically sound metrics across all business units.", icon: "Target" },
            { title: "Interactive Visualizations", description: "Drill down from high-level summaries into individual granular transactions.", icon: "PieChart" },
            { title: "Automated Report Delivery", description: "Dispatch scheduled PDF/Slack digests to key stakeholders every Monday morning.", icon: "Send" },
            { title: "Custom Web Analytics Portals", description: "White-labeled analytics portals for your external clients or franchisees.", icon: "Globe" },
            { title: "Department Analytics", description: "Dedicated views for Sales, Marketing, Operations, Customer Success, and Finance.", icon: "Grid" },
            { title: "Role-Based Data Access", description: "Ensure managers only see data pertaining to their specific regional territory.", icon: "Lock" }
        ],
        processSteps: [
            { step: "01", title: "METRIC AUDIT", description: "Align leadership on authoritative KPI formulas, source tables, and reporting goals." },
            { step: "02", title: "DATA MODELING", description: "Construct performant dimensional tables, aggregations, and query layers." },
            { step: "03", title: "UX PROTOTYPE", description: "Wireframe dashboard layouts focused on visual hierarchy and rapid comprehension." },
            { step: "04", title: "ENGINEERING", description: "Build custom interactive charts using modern visualization libraries and fast APIs." },
            { step: "05", title: "VALIDATION", description: "Cross-examine dashboard figures against source databases to ensure 100% parity." },
            { step: "06", title: "ENABLEMENT", description: "Onboard operational teams and establish automated alerting thresholds." }
        ],
        technologies: ["Next.js", "Tremor", "Tailwind CSS", "DuckDB", "PostgreSQL", "ClickHouse", "Cube.js"],
        useCases: [
            { title: "SaaS Revenue Operations", description: "Tracking MRR, ARR, net revenue retention, churn cohorts, and CAC payback.", tag: "SaaS" },
            { title: "E-Commerce Multi-Channel", description: "Consolidating Shopify, Amazon, and ad spend metrics into real-time ROAS views.", tag: "Retail" },
            { title: "Supply Chain & Logistics", description: "Monitoring fleet transit times, warehouse dwell, and on-time fulfillment rates.", tag: "Logistics" },
            { title: "Healthcare Network Operations", description: "Tracking patient throughput, bed utilization, and clinic doctor availability.", tag: "Health" }
        ],
        businessImpact: [
            "Replace static monthly retrospectives with real-time continuous visibility",
            "Single source of truth eliminating conflicting numbers between departments",
            "Faster executive decisions backed by empirical data rather than guesswork",
            "High team adoption through clean, responsive, modern interface design"
        ],
        faqs: [
            { question: "Can we embed these dashboards into our existing software?", answer: "Yes. We build headless, embeddable dashboard components that integrate natively into your existing SaaS products or internal web portals." },
            { question: "How do you handle massive datasets without slowing down the page?", answer: "We implement analytical database engines like ClickHouse or DuckDB with pre-computed rollups and cached query layers for sub-second responses." },
            { question: "Can we export data and receive automated emails?", answer: "Yes, our systems support one-click CSV/PDF exports and scheduled automated digests sent via email or Slack." }
        ],
        relatedSlugs: [
            { slug: "data-engineering", category: "data", name: "Data Engineering", headline: "Clean and consolidate the data pipelines behind your dashboards." },
            { slug: "predictive-analytics", category: "data", name: "Predictive Analytics", headline: "Forecast future trajectory on top of historical reporting." },
            { slug: "saas", category: "software", name: "SaaS Development", headline: "Build custom customer-facing analytics inside your SaaS platform." }
        ]
    },

    // =========================================================================
    // 9. DATA ENGINEERING & INTEGRATION
    // =========================================================================
    "data-engineering": {
        slug: "data-engineering",
        categorySlug: "data",
        categoryTitle: "Data Analytics",
        categoryEyebrow: "XCECUTE / DATA ANALYTICS",
        name: "Data Engineering & Integration",
        title: "Enterprise Data Pipelines & Cloud Lakehouses",
        heroHeadline: "CONNECT YOUR DATA. BUILD THE FOUNDATION.",
        heroDescription: "We architect resilient data pipelines, scalable lakehouses, and real-time streaming integrations that transform messy, disconnected data sources into clean, reliable fuel for analytics and AI.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Data is trapped across incompatible SaaS tools, SQL databases, and flat files.",
            "Manual ETL scripts break frequently without logging or automated alerting.",
            "Queries on production databases slow down client applications during business hours.",
            "Data teams spend 80% of their effort cleaning anomalies instead of delivering value."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["DATA SOURCES", "PIPELINES", "DATA PLATFORM", "ANALYTICS"],
        solutionDescription: "We design decoupled, modern ELT pipelines with automated schema migration, data quality contracts, and enterprise cloud data warehousing.",
        capabilities: [
            { title: "Automated ETL / ELT Pipelines", description: "Extract, transform, and load data from hundreds of disparate sources reliably.", icon: "Repeat" },
            { title: "Cloud Data Warehouses", description: "Architecture and configuration of Snowflake, BigQuery, ClickHouse, or Redshift.", icon: "Server" },
            { title: "Data Lakehouses", description: "Unified storage for structured, semi-structured, and unstructured files using Parquet.", icon: "Database" },
            { title: "Real-Time Event Streaming", description: "Stream high-throughput telemetry using Apache Kafka, RabbitMQ, or AWS Kinesis.", icon: "Zap" },
            { title: "API Integrations", description: "Custom connectors for payment gateways, marketing tools, and internal microservices.", icon: "Link2" },
            { title: "Data Quality Contracts", description: "Automated schema validation and anomaly checks that block corrupted records.", icon: "ShieldCheck" },
            { title: "Historical Data Migration", description: "Zero-downtime migration from legacy on-premises databases to the cloud.", icon: "ArrowRightLeft" },
            { title: "Database Optimization", description: "Index tuning, query profiling, and partitioning for lightning-fast reads.", icon: "Sliders" }
        ],
        processSteps: [
            { step: "01", title: "INGESTION AUDIT", description: "Map source schemas, velocity, volumes, network restrictions, and security policies." },
            { step: "02", title: "ARCHITECTURE", description: "Select storage engines, pipeline orchestration frameworks, and partitioning keys." },
            { step: "03", title: "TRANSFORMATIONS", description: "Write deterministic transformation models with unit tests using dbt or SQL." },
            { step: "04", title: "RELIABILITY", description: "Implement idempotent retry logic, circuit breakers, and dead-letter queues." },
            { step: "05", title: "MIGRATION", description: "Execute backfills and parallel-run verification to ensure 100% data parity." },
            { step: "06", title: "MAINTAIN", description: "Monitor pipeline lag, pipeline compute costs, and automated data freshness alerts." }
        ],
        technologies: ["dbt", "PostgreSQL", "Snowflake", "ClickHouse", "Apache Kafka", "Python", "Airflow"],
        useCases: [
            { title: "Customer 360 Consolidation", description: "Unifying website visits, CRM activity, support tickets, and billing into one profile.", tag: "Enterprise" },
            { title: "Financial Audit Trail", description: "Building immutable, append-only transaction ledgers for regulatory compliance.", tag: "Finance" },
            { title: "High-Volume IoT Telemetry", description: "Ingesting sensor pings from thousands of distributed hardware devices.", tag: "IoT" },
            { title: "AI Training Pipeline", description: "Streaming clean, preprocessed data directly into model fine-tuning repositories.", tag: "AI" }
        ],
        businessImpact: [
            "Eliminate data silos by uniting all company assets into one queryable foundation",
            "Guaranteed 99.9% pipeline uptime with automated failure recovery",
            "Dramatic reductions in analytical query times from minutes to milliseconds",
            "Readiness for advanced machine learning, predictive models, and RAG search"
        ],
        faqs: [
            { question: "How do you ensure zero data loss during pipeline failures?", answer: "We enforce idempotency and dead-letter queues. If an external service is unavailable, data is safely held in replayable buffers until the destination recovers." },
            { question: "Can you work within our existing cloud provider?", answer: "Yes. We engineer solutions across AWS, Google Cloud, Microsoft Azure, or dedicated bare-metal infrastructure based on your preferences." }
        ],
        relatedSlugs: [
            { slug: "business-intelligence", category: "data", name: "BI & Dashboards", headline: "Visualize clean data flowing out of your newly built pipelines." },
            { slug: "rag", category: "ai", name: "RAG Solutions", headline: "Feed your vector databases with automated document ingestion." },
            { slug: "predictive-analytics", category: "data", name: "Predictive Analytics", headline: "Leverage clean historical data to forecast future trends." }
        ]
    },

    // =========================================================================
    // 10. PREDICTIVE ANALYTICS
    // =========================================================================
    "predictive-analytics": {
        slug: "predictive-analytics",
        categorySlug: "data",
        categoryTitle: "Data Analytics",
        categoryEyebrow: "XCECUTE / DATA ANALYTICS",
        name: "Predictive Analytics",
        title: "Predictive Analytics & Forecasting Models",
        heroHeadline: "UNDERSTAND WHAT'S NEXT.",
        heroDescription: "Transform historical data patterns into forward-looking foresight. We build statistical forecasting and predictive systems that anticipate customer behavior, demand surges, and operational risks.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Standard dashboards only tell you what already happened, not what will happen next.",
            "Inventory stockouts or overages tie up vital working capital needlessly.",
            "Customer churn is identified only after cancellations have already occurred.",
            "Budget allocation is often dictated by intuition rather than statistical probability."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["HISTORICAL DATA", "MODEL", "FORECAST", "DECISION"],
        solutionDescription: "We combine statistical time-series models, gradient boosting, and probabilistic simulations to produce actionable, confidence-weighted forecasts.",
        capabilities: [
            { title: "Demand & Inventory Forecasting", description: "Predict future SKU demand by region to prevent costly stockouts and overstock.", icon: "Package" },
            { title: "Customer Churn Prediction", description: "Identify early indicators of disengagement before accounts cancel subscriptions.", icon: "UserX" },
            { title: "Customer Lifetime Value (LTV)", description: "Estimate long-term customer profitability to optimize customer acquisition spend.", icon: "DollarSign" },
            { title: "Predictive Maintenance", description: "Forecast equipment failures based on operational wear patterns and sensor metrics.", icon: "Wrench" },
            { title: "Scenario & Sensitivity Analysis", description: "Simulate what-if business scenarios (price changes, market shocks, expansion).", icon: "Sliders" },
            { title: "Anomaly & Fraud Detection", description: "Identify deviations from normal transaction behaviors before losses accumulate.", icon: "ShieldAlert" },
            { title: "Dynamic Pricing Models", description: "Calculate optimal pricing curves based on real-time supply, demand, and season.", icon: "TrendingUp" }
        ],
        processSteps: [
            { step: "01", title: "PROBLEM FRAMING", description: "Determine the exact predictive metric, prediction horizon, and error tolerance." },
            { step: "02", title: "FEATURE ENGINEERING", description: "Extract seasonal, cyclical, and behavioral features from historical data." },
            { step: "03", title: "MODEL BENCHMARKING", description: "Compare regression, time-series (Prophet, ARIMA), and tree-based ensembles." },
            { step: "04", title: "BACKTESTING", description: "Conduct rigorous out-of-time validation across historical business periods." },
            { step: "05", title: "DEPLOYMENT", description: "Integrate predictions directly into executive dashboards and ERP systems." },
            { step: "06", title: "RE-CALIBRATION", description: "Regularly update model weights as macroeconomic conditions evolve." }
        ],
        technologies: ["Python", "XGBoost", "Prophet", "LightGBM", "Scikit-Learn", "PostgreSQL", "Next.js"],
        useCases: [
            { title: "Retail Inventory Allocation", description: "Forecasting seasonal holiday sales volumes to optimize warehouse pre-orders.", tag: "Retail" },
            { title: "B2B SaaS Churn Defense", description: "Flagging enterprise accounts with declining seat usage for customer success calls.", tag: "SaaS" },
            { title: "Logistics Route Planning", description: "Predicting fuel consumption and transit delays across seasonal shipping routes.", tag: "Logistics" },
            { title: "Financial Cash Flow Modeling", description: "Forecasting working capital runway and accounts receivable collections.", tag: "Finance" }
        ],
        businessImpact: [
            "Proactively seize commercial opportunities before market competitors react",
            "Substantial reduction in inventory holding costs and obsolete stock write-offs",
            "Enhanced customer retention by identifying disengagement early",
            "Data-backed confidence when presenting future forecasts to board members"
        ],
        faqs: [
            { question: "How accurate are predictive models?", answer: "Accuracy depends on data consistency and market predictability. We provide confidence intervals (e.g., 90% probability ranges) rather than single deterministic guesses." },
            { question: "Can predictive analytics integrate into our daily software?", answer: "Yes. Predictions can be surfaced directly as badges in your CRM, alerts in Slack, or tables in your executive dashboard." }
        ],
        relatedSlugs: [
            { slug: "machine-learning", category: "ai", name: "Machine Learning", headline: "Explore deeper custom algorithmic model training." },
            { slug: "business-intelligence", category: "data", name: "BI & Dashboards", headline: "Visualize predictive cones alongside historical trends." },
            { slug: "data-strategy", category: "data", name: "Data Strategy & Insights", headline: "Align predictive outputs with strategic business milestones." }
        ]
    },

    // =========================================================================
    // 11. DATA STRATEGY & INSIGHTS
    // =========================================================================
    "data-strategy": {
        slug: "data-strategy",
        categorySlug: "data",
        categoryTitle: "Data Analytics",
        categoryEyebrow: "XCECUTE / DATA ANALYTICS",
        name: "Data Strategy & Insights",
        title: "Enterprise Data Strategy & Decision Systems",
        heroHeadline: "MAKE DATA PART OF EVERY DECISION.",
        heroDescription: "We help leadership teams design pragmatic data roadmaps, establish sound governance, define authoritative KPIs, and build high-leverage data cultures that drive measurable business outcomes.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Heavy investments in data tools that fail to translate into tangible commercial value.",
            "No clear data governance, resulting in conflicting definitions and security vulnerabilities.",
            "Teams work in functional silos with zero visibility into cross-department metrics.",
            "Lack of a technical roadmap for moving from reactive reporting to predictive AI."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["DATA", "INSIGHT", "DECISION", "ACTION", "OUTCOME"],
        solutionDescription: "We bridge executive leadership and technical execution, crafting phased data blueprints focused on immediate high-ROI deliverables and long-term scalability.",
        capabilities: [
            { title: "Data Architecture Roadmap", description: "Phased technical plans outlining tool selection, infrastructure, and milestones.", icon: "Compass" },
            { title: "Authoritative KPI Design", description: "Define standardized, company-wide formulas for core operational metrics.", icon: "CheckCircle" },
            { title: "Data Governance & Compliance", description: "Establish role-based access policies, PII anonymization, and audit controls.", icon: "Shield" },
            { title: "Data Quality Auditing", description: "Evaluate accuracy, completeness, and freshness across all active data assets.", icon: "CheckSquare" },
            { title: "Decision-Support Architecture", description: "Structure reporting interfaces that guide managers toward optimal decisions.", icon: "Zap" },
            { title: "AI Readiness Assessment", description: "Audit internal data maturity and identify viable AI/ML implementation opportunities.", icon: "Cpu" }
        ],
        processSteps: [
            { step: "01", title: "DISCOVERY", description: "Interview stakeholders, audit existing tools, and catalog data bottlenecks." },
            { step: "02", title: "GOAL ALIGNMENT", description: "Tie technical data initiatives directly to top-line revenue and margin goals." },
            { step: "03", title: "ROADMAP", description: "Deliver an actionable 6-to-18 month execution plan with phased ROI milestones." },
            { step: "04", title: "GOVERNANCE", description: "Codify metric dictionaries, security tiers, and data ownership responsibilities." },
            { step: "05", title: "IMPLEMENTATION", description: "Guide the engineering buildout of core pipelines, warehouses, and dashboards." },
            { step: "06", title: "REVIEW", description: "Conduct quarterly reviews to ensure data capabilities evolve with business strategy." }
        ],
        technologies: ["dbt", "Snowflake", "BigQuery", "PostgreSQL", "Notion", "Figma"],
        useCases: [
            { title: "Post-Merger Data Consolidation", description: "Harmonizing divergent reporting systems and customer records after an acquisition.", tag: "M&A" },
            { title: "AI Modernization Plan", description: "Restructuring legacy ERP databases to prepare for autonomous agent workflows.", tag: "Enterprise" },
            { title: "Investor-Ready Analytics", description: "Standardizing cohort metrics and financial unit economics ahead of fundraising.", tag: "Growth" }
        ],
        businessImpact: [
            "Avoid costly tool sprawl by investing only in high-utility data infrastructure",
            "Single, shared language for business performance across all departments",
            "Clear technical path from manual reporting to automated intelligence",
            "Strict compliance with regional data privacy laws and enterprise security"
        ],
        faqs: [
            { question: "How long does a data strategy engagement take?", answer: "Typically 2 to 4 weeks for an initial comprehensive audit, metric dictionary, and phased implementation roadmap." },
            { question: "Do you also build the systems recommended in the strategy?", answer: "Yes. Unlike pure management consultancies, XCECUTE is an engineering company that directly implements pipelines, dashboards, and AI systems." }
        ],
        relatedSlugs: [
            { slug: "business-intelligence", category: "data", name: "BI & Dashboards", headline: "Turn strategic KPIs into interactive visual dashboards." },
            { slug: "data-engineering", category: "data", name: "Data Engineering", headline: "Implement the recommended cloud warehouse architecture." },
            { slug: "generative-ai", category: "ai", name: "Generative AI Solutions", headline: "Leverage clean enterprise data for cutting-edge LLM applications." }
        ]
    },

    // =========================================================================
    // 12. SAAS DEVELOPMENT
    // =========================================================================
    "saas": {
        slug: "saas",
        categorySlug: "software",
        categoryTitle: "Custom Software",
        categoryEyebrow: "XCECUTE / CUSTOM SOFTWARE",
        name: "SaaS Development",
        title: "Full-Cycle SaaS Product Development",
        heroHeadline: "BUILD PRODUCTS PEOPLE CAN SCALE WITH.",
        heroDescription: "We engineer resilient, multi-tenant SaaS platforms from initial MVP architecture through enterprise scaling—handling authentication, billing, permissions, and lightning-fast user interfaces.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Building an MVP with sloppy architecture leads to total technical rewrites at scale.",
            "Subscription billing, tax compliance, and multi-tenant security are difficult to get right.",
            "Slow, clunky web applications frustrate paying users and drive churn.",
            "Development agencies often build prototypes that lack production security and DevOps."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["IDEA", "MVP", "PRODUCT", "SCALE"],
        solutionDescription: "We build modern SaaS products using clean modular architecture, battle-tested cloud frameworks, resilient database schemas, and intuitive design systems.",
        capabilities: [
            { title: "SaaS MVPs & Prototypes", description: "Launch core validated software products in weeks without sacrificing code quality.", icon: "Rocket" },
            { title: "Multi-Tenant Architecture", description: "Secure, isolated data partitioning with shared or dedicated database models.", icon: "Layers" },
            { title: "Subscription & Billing Systems", description: "Seamless integration with Stripe, Lemon Squeezy, or Paddle for recurring billing.", icon: "CreditCard" },
            { title: "Role-Based Access Control", description: "Granular permissions, team workspaces, invite flows, and audit logs.", icon: "UserCheck" },
            { title: "High-Performance Web Apps", description: "Sub-second page loads powered by Next.js Server Components and edge caching.", icon: "Zap" },
            { title: "Public & Partner APIs", description: "Secure REST / GraphQL APIs with API key generation, rate limiting, and webhooks.", icon: "Code" },
            { title: "Customer Admin Dashboards", description: "Powerful internal dashboards for managing users, impersonation, and refunds.", icon: "Shield" },
            { title: "Enterprise SSO & SAML", description: "Okta, Google Workspace, and Azure AD single sign-on integration.", icon: "Lock" }
        ],
        processSteps: [
            { step: "01", title: "PRODUCT SCOPING", description: "Prioritize core features, user journeys, database schemas, and billing models." },
            { step: "02", title: "DESIGN SYSTEM", description: "Craft modern, accessible Figma component libraries and interactive mockups." },
            { step: "03", title: "CORE BUILD", description: "Develop database schemas, multi-tenant isolation, auth, and billing logic." },
            { step: "04", title: "FEATURE BUILD", description: "Implement key software modules with automated tests and CI/CD pipelines." },
            { step: "05", title: "SECURITY AUDIT", description: "Perform vulnerability scans, permission checks, and load test benchmarks." },
            { step: "06", title: "SCALE & ITERATE", description: "Deploy to production cloud with APM monitoring, telemetry, and fast feature cycles." }
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Stripe", "Docker", "AWS"],
        useCases: [
            { title: "B2B Workflow Platforms", description: "Cloud software streamlining operations for specialized vertical industries.", tag: "B2B SaaS" },
            { title: "Consumer Subscription Apps", description: "High-volume web and mobile subscription applications with recurring memberships.", tag: "B2C" },
            { title: "Two-Sided Marketplaces", description: "Connecting buyers and service providers with escrow payments and reviews.", tag: "Marketplace" },
            { title: "Internal Enterprise SaaS", description: "Proprietary software tools shared across global subsidiary branches.", tag: "Enterprise" }
        ],
        businessImpact: [
            "Accelerate time to market by months with proven architectural foundations",
            "Zero rewrite anxiety: software built from day one to support enterprise scale",
            "Smooth self-service customer onboarding and automated subscription revenue",
            "Enterprise readiness with SOC2-compliant patterns, SSO, and data security"
        ],
        faqs: [
            { question: "Do we own the full intellectual property and source code?", answer: "Yes, 100%. All source code, designs, documentation, and cloud infrastructure belong entirely to you with zero vendor lock-in." },
            { question: "How do you handle multi-tenancy?", answer: "We architect multi-tenant databases with Row Level Security (RLS) or schema-isolated patterns depending on your compliance requirements, preventing cross-tenant data leaks." },
            { question: "Can you help launch our MVP within 8 weeks?", answer: "Yes. By utilizing our production-tested modular SaaS boilerplates, we cut repetitive setup time and focus immediately on your proprietary product logic." }
        ],
        relatedSlugs: [
            { slug: "web-mobile-apps", category: "software", name: "Web & Mobile Apps", headline: "Extend your SaaS platform to iOS and Android applications." },
            { slug: "generative-ai", category: "ai", name: "Generative AI Solutions", headline: "Embed native AI copilots and intelligence into your SaaS." },
            { slug: "business-intelligence", category: "data", name: "BI & Dashboards", headline: "Build embedded analytics and client dashboards." }
        ]
    },

    // =========================================================================
    // 13. ERP & BUSINESS SYSTEMS
    // =========================================================================
    "erp": {
        slug: "erp",
        categorySlug: "software",
        categoryTitle: "Custom Software",
        categoryEyebrow: "XCECUTE / CUSTOM SOFTWARE",
        name: "ERP & Business Systems",
        title: "Custom ERP & Business Operations Systems",
        heroHeadline: "CONNECT YOUR BUSINESS THROUGH SOFTWARE.",
        heroDescription: "Off-the-shelf ERPs force you to warp your business to fit their rigid molds. We engineer custom enterprise systems tailored to your exact manufacturing, inventory, procurement, and field workflows.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Off-the-shelf ERP platforms are overly expensive, clunky, and rigid to customize.",
            "Staff maintain shadow spreadsheets because the corporate ERP is too painful to use.",
            "Crucial operational updates are delayed as information crosses disjointed software.",
            "Extending or integrating legacy ERPs incurs astronomical consultant fees."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["PEOPLE", "DATA", "PROCESSES", "ONE SYSTEM"],
        solutionDescription: "We build intuitive, unified business platforms that mirror your actual operational handoffs, giving staff fast web/mobile interfaces and management real-time visibility.",
        capabilities: [
            { title: "Custom ERP Architecture", description: "Bespoke operations platforms built precisely around your operational rules.", icon: "Briefcase" },
            { title: "Inventory & Warehouse Systems", description: "Track stock levels, barcode scanning, bin locations, and reorder thresholds.", icon: "Package" },
            { title: "Procurement & Purchase Orders", description: "Manage vendor bids, purchase approvals, receiving slips, and payments.", icon: "ShoppingCart" },
            { title: "Order Fulfillment & Dispatch", description: "Route orders from creation to packing, carrier dispatch, and delivery tracking.", icon: "Truck" },
            { title: "Custom CRM & Account Tracking", description: "Manage client relationships, enterprise contracts, and communication histories.", icon: "Users" },
            { title: "Human Resources & Payroll Tracking", description: "Employee records, attendance, shift scheduling, and compensation tracking.", icon: "UserCheck" },
            { title: "Role-Based Access & Audit Logs", description: "Ensure staff only view records relevant to their clearance with full audit trails.", icon: "Shield" },
            { title: "Legacy System Integration", description: "Bridge modern custom frontends to legacy SAP, NetSuite, or AS400 backends.", icon: "RefreshCw" }
        ],
        processSteps: [
            { step: "01", title: "PROCESS DISCOVERY", description: "Shadow operational personnel to map real-world workflows, exceptions, and handoffs." },
            { step: "02", title: "SYSTEM ARCHITECTURE", description: "Design centralized relational schemas and state-machine business workflows." },
            { step: "03", title: "MODULAR BUILD", description: "Develop and deploy core modules (e.g. inventory first, then purchasing)." },
            { step: "04", title: "DATA MIGRATION", description: "Extract, clean, and transfer historical records from legacy databases." },
            { step: "05", title: "PILOT TESTING", description: "Run parallel operations with select teams to validate accuracy and usability." },
            { step: "06", title: "ROLLOUT & TRAINING", description: "Conduct team enablement and transition fully to the new platform." }
        ],
        technologies: ["Next.js", "PostgreSQL", "Node.js", "Docker", "Redis", "Tailwind CSS", "REST APIs"],
        useCases: [
            { title: "Manufacturing Operations", description: "Tracking raw materials, bill of materials (BOM), assembly stations, and quality checks.", tag: "Manufacturing" },
            { title: "Wholesale Distribution", description: "Managing multi-warehouse inventory, bulk customer pricing, and freight logistics.", tag: "Distribution" },
            { title: "Construction & Contracting", description: "Project budgeting, equipment scheduling, subcontractor billing, and jobsite logs.", tag: "Construction" },
            { title: "Professional Services", description: "Resource utilization, client project milestones, time tracking, and invoicing.", tag: "Services" }
        ],
        businessImpact: [
            "Eliminate millions in recurring enterprise licensing and implementation fees",
            "Drastic reduction in operational cycle times from order entry to fulfillment",
            "High employee adoption due to modern, responsive, consumer-grade UX",
            "Real-time visibility into operational bottlenecks and inventory cash tied up"
        ],
        faqs: [
            { question: "Why build a custom ERP instead of buying NetSuite or SAP?", answer: "Standard ERPs force your team into rigid processes and charge hundreds of thousands in licensing and custom consultant fees. A custom system fits your unique competitive advantage perfectly and belongs to you forever." },
            { question: "Can we transition gradually in phases?", answer: "Yes. We recommend a phased modular rollout—replacing your most critical bottleneck (e.g., inventory or order management) first before expanding to other departments." }
        ],
        relatedSlugs: [
            { slug: "finance-accounting", category: "software", name: "Finance & Accounting", headline: "Integrate custom general ledgers and invoicing into your ERP." },
            { slug: "workflow-automation", category: "ai", name: "Workflow Automation", headline: "Automate cross-department notifications and approvals." },
            { slug: "business-intelligence", category: "data", name: "BI & Dashboards", headline: "Generate real-time executive reports across all ERP modules." }
        ]
    },

    // =========================================================================
    // 14. WEB & MOBILE APPS
    // =========================================================================
    "web-mobile-apps": {
        slug: "web-mobile-apps",
        categorySlug: "software",
        categoryTitle: "Custom Software",
        categoryEyebrow: "XCECUTE / CUSTOM SOFTWARE",
        name: "Web & Mobile Apps",
        title: "Custom Web Applications & Mobile Engineering",
        heroHeadline: "DIGITAL PRODUCTS BUILT FOR REAL USERS.",
        heroDescription: "We build intuitive web applications and cross-platform mobile apps that combine premium design, native fluidity, rock-solid backends, and offline-capable reliability.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Sluggish performance and awkward user interfaces frustrate customers and harm reviews.",
            "Building separate native iOS and Android apps doubles engineering and maintenance costs.",
            "Apps crash or freeze under flaky network conditions without proper offline caching.",
            "Design and engineering teams frequently disconnect, leading to compromised end products."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["DESIGN", "DEVELOP", "TEST", "LAUNCH", "SCALE"],
        solutionDescription: "We design and build cohesive digital applications using modern cross-platform mobile frameworks (React Native/Flutter) and Next.js web architectures backed by scalable cloud APIs.",
        capabilities: [
            { title: "Progressive Web Applications", description: "Lightning-fast, responsive web apps accessible across desktop, tablet, and mobile.", icon: "Monitor" },
            { title: "iOS & Android Mobile Apps", description: "Native-performing mobile applications deployed to the Apple App Store and Google Play.", icon: "Smartphone" },
            { title: "Cross-Platform Codebases", description: "Single codebase efficiency sharing business logic across iOS, Android, and web.", icon: "Layers" },
            { title: "Customer Portals", description: "Secure client dashboards for tracking accounts, orders, documents, and support.", icon: "UserCheck" },
            { title: "Offline Data Sync", description: "Enable field workers or mobile users to operate smoothly even with zero internet connectivity.", icon: "WifiOff" },
            { title: "Push Notifications", description: "Automated, segmented push notification campaigns that drive engagement.", icon: "Bell" },
            { title: "Biometric Authentication", description: "FaceID, TouchID, and multi-factor authentication for frictionless security.", icon: "Lock" },
            { title: "Location & Mapping Features", description: "Real-time GPS tracking, geofencing, and map route visualizations.", icon: "MapPin" }
        ],
        processSteps: [
            { step: "01", title: "USER RESEARCH", description: "Define user personas, core task flows, and mobile ergonomics." },
            { step: "02", title: "UI/UX DESIGN", description: "Design high-fidelity visual prototypes in Figma with micro-interactions." },
            { step: "03", title: "FRONTEND & MOBILE", description: "Engineer responsive layouts with 60fps animations and gesture handling." },
            { step: "04", title: "BACKEND API", description: "Construct secure REST or GraphQL endpoints with robust caching." },
            { step: "05", title: "DEVICE TESTING", description: "Test on actual physical iOS and Android hardware across diverse screen sizes." },
            { step: "06", title: "APP STORE SUBMISSION", description: "Manage Apple App Store and Google Play review approval and release." }
        ],
        technologies: ["React Native", "Flutter", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
        useCases: [
            { title: "On-Demand Field Services", description: "Mobile dispatch app for field technicians with offline job forms and signature capture.", tag: "Field Service" },
            { title: "Healthcare Patient Portal", description: "Telehealth video calls, prescription tracking, and appointment booking.", tag: "Healthcare" },
            { title: "Fintech Client App", description: "Mobile account management, transaction ledgers, and biometric transfers.", tag: "Fintech" },
            { title: "Logistics Driver App", description: "Route optimization, manifest scanning, and proof-of-delivery photos.", tag: "Logistics" }
        ],
        businessImpact: [
            "Deliver unified, branded digital experiences across all user devices",
            "Reduce ongoing mobile maintenance costs via modern cross-platform engineering",
            "High app store ratings driven by smooth performance and zero-lag interactions",
            "Reliable operation in field environments with intermittent connectivity"
        ],
        faqs: [
            { question: "Should we build a web app or a mobile app first?", answer: "We evaluate your primary user behavior. If users are desk-based or need heavy keyboard input, web comes first. If users are mobile or require push notifications and camera access, we recommend mobile or a synchronized cross-platform release." },
            { question: "Do you handle App Store and Google Play submissions?", answer: "Yes. We manage the entire store submission process, compliance checklists, screenshots, and guidelines to ensure first-pass approval." }
        ],
        relatedSlugs: [
            { slug: "saas", category: "software", name: "SaaS Development", headline: "Build full web subscription platforms with client portals." },
            { slug: "internal-communication", category: "software", name: "Internal Communication", headline: "Keep remote and field teams connected via dedicated apps." },
            { slug: "erp", category: "software", name: "ERP & Business Systems", headline: "Equip operational staff with mobile entry tools." }
        ]
    },

    // =========================================================================
    // 15. FINANCE & ACCOUNTING SOFTWARE
    // =========================================================================
    "finance-accounting": {
        slug: "finance-accounting",
        categorySlug: "software",
        categoryTitle: "Custom Software",
        categoryEyebrow: "XCECUTE / CUSTOM SOFTWARE",
        name: "Finance & Accounting Software",
        title: "Custom Financial Systems & Ledger Engineering",
        heroHeadline: "SOFTWARE FOR THE NUMBERS THAT MATTER.",
        heroDescription: "We engineer secure financial platforms, double-entry ledgers, automated invoicing engines, and real-time reconciliation systems built around rigorous transactional integrity.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Finance teams spend days manually reconciling bank feeds against internal records.",
            "Complex multi-tier commission structures or revenue splits cannot be handled by basic software.",
            "Spreadsheet errors in accounting models create massive financial and audit liabilities.",
            "Generic accounting software lacks custom approval hierarchies and custom invoice formats."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["TRANSACTIONS", "PROCESSING", "REPORTING", "INSIGHTS"],
        solutionDescription: "We build immutable, double-entry transactional engines with automated bank syncing, granular approval gates, and tamper-evident audit logs.",
        capabilities: [
            { title: "Double-Entry Ledger Engines", description: "Mathematically balanced, immutable transactional ledgers built on SQL transactions.", icon: "Book" },
            { title: "Automated Invoicing & Billing", description: "Generate and dispatch dynamic, recurring, or usage-based customer invoices.", icon: "FileText" },
            { title: "Bank Feed Reconciliation", description: "Automatically match bank statements against open receivables and expenses.", icon: "RefreshCw" },
            { title: "Expense & Payout Management", description: "Employee receipt scanning, approval hierarchies, and automated vendor payouts.", icon: "CreditCard" },
            { title: "Custom Revenue Split Engines", description: "Calculate complex royalties, partner splits, and sales commissions automatically.", icon: "PieChart" },
            { title: "Financial Reporting & P&L", description: "Real-time balance sheets, income statements, and cash-flow projections.", icon: "TrendingUp" },
            { title: "Multi-Currency Transactions", description: "Real-time FX conversion, multi-currency wallets, and localized tax calculations.", icon: "Globe" },
            { title: "Audit Trail & Compliance Logs", description: "Every balance change is cryptographically logged with user identity and timestamp.", icon: "ShieldCheck" }
        ],
        processSteps: [
            { step: "01", title: "ACCOUNTING AUDIT", description: "Review ledger charts of accounts, revenue recognition rules, and currency requirements." },
            { step: "02", title: "SCHEMA DESIGN", description: "Construct immutable double-entry relational database schemas with strict constraints." },
            { step: "03", title: "INTEGRATION", description: "Connect banking APIs (Plaid, Stripe, banking feeds) and payment gateways." },
            { step: "04", title: "RECONCILIATION BUILD", description: "Develop matching algorithms with exception queues for human review." },
            { step: "05", title: "AUDIT TESTING", description: "Stress-test ledger balance integrity under concurrent transactions and network dropouts." },
            { step: "06", title: "DEPLOYMENT", description: "Launch with encrypted database backups and role-based permissions." }
        ],
        technologies: ["PostgreSQL", "Node.js", "Next.js", "Stripe Connect", "Plaid", "Redis", "Docker"],
        useCases: [
            { title: "Marketplace Payouts", description: "Splitting payments between buyers, platform fees, and vendor accounts with escrow.", tag: "Marketplace" },
            { title: "Complex Commission Tracking", description: "Calculating multi-tier sales agent commissions across varying deal structures.", tag: "Sales Ops" },
            { title: "Usage-Based Billing", description: "Metering API or cloud usage and billing customers automatically at month-end.", tag: "Fintech" },
            { title: "Inter-Company Ledgers", description: "Reconciling transactions across multiple international subsidiary holding entities.", tag: "Corporate" }
        ],
        businessImpact: [
            "100% transactional accuracy guaranteed through double-entry database constraints",
            "Reconciliation time slashed from weeks of month-end grind to continuous daily sync",
            "Eliminate costly manual calculation errors in partner payouts and invoices",
            "Instant readiness for external audits with immutable timestamped change logs"
        ],
        faqs: [
            { question: "How do you guarantee that ledger numbers never get corrupted?", answer: "We enforce strict database-level ACID transactions and double-entry accounting where every debit is paired with an equal credit. Modifying past transactions is impossible; adjustments must be posted as offsetting entries." },
            { question: "Does XCECUTE provide tax filing or accounting advice?", answer: "No. We build custom software that executes your specified financial logic and rules. We avoid making regulatory or tax compliance claims, building the technical tools for your finance team." }
        ],
        relatedSlugs: [
            { slug: "erp", category: "software", name: "ERP & Business Systems", headline: "Connect custom financial ledgers directly into operations." },
            { slug: "saas", category: "software", name: "SaaS Development", headline: "Implement subscription billing and payment gateways." },
            { slug: "predictive-analytics", category: "data", name: "Predictive Analytics", headline: "Forecast cash flow runway and debtor payment likelihood." }
        ]
    },

    // =========================================================================
    // 16. INTERNAL COMMUNICATION PLATFORMS
    // =========================================================================
    "internal-communication": {
        slug: "internal-communication",
        categorySlug: "software",
        categoryTitle: "Custom Software",
        categoryEyebrow: "XCECUTE / CUSTOM SOFTWARE",
        name: "Internal Communication Platforms",
        title: "Secure Internal Communication & Team Portals",
        heroHeadline: "CONNECT YOUR PEOPLE.",
        heroDescription: "We engineer private, secure internal messaging systems, team knowledge portals, and employee communication hubs that safeguard corporate IP while keeping distributed teams tightly aligned.",
        problemHeadline: "THE PROBLEM",
        problemPoints: [
            "Proprietary company discussions and files leak onto consumer chat applications.",
            "Important announcements get buried in email inboxes and ignored.",
            "Field personnel and remote workers feel disconnected from central headquarters.",
            "Third-party messaging tools lock enterprise data in proprietary formats with escalating per-seat fees."
        ],
        solutionHeadline: "THE XCECUTE APPROACH",
        solutionArchitecture: ["PEOPLE", "COMMUNICATION", "COLLABORATION", "EXECUTION"],
        solutionDescription: "We build private, branded communication platforms with end-to-end encryption, threaded channels, company-wide broadcasts, and seamless enterprise tool integrations.",
        capabilities: [
            { title: "Threaded Channels & DMs", description: "Organize discussions by project, department, or office with private 1-on-1 messaging.", icon: "MessageSquare" },
            { title: "Company Broadcasts & Alerts", description: "Send priority announcements with mandatory read receipts and push notifications.", icon: "Megaphone" },
            { title: "Secure File & Asset Sharing", description: "Centralized media and document sharing protected by enterprise encryption.", icon: "Folder" },
            { title: "Employee Directory & Profiles", description: "Searchable directory highlighting organizational chart, skills, and office locations.", icon: "Users" },
            { title: "Knowledge Base Integration", description: "Pin standard operating procedures, handbook policies, and guides into channels.", icon: "BookOpen" },
            { title: "Encrypted Audio & Video Calls", description: "One-click browser and mobile group video meetings with screen sharing.", icon: "Video" },
            { title: "Enterprise Access Control", description: "Integrate with Google Workspace, Okta, or Active Directory for immediate de-provisioning.", icon: "Lock" },
            { title: "Full Data Ownership", description: "Host communication databases inside your own cloud without per-seat licensing fees.", icon: "HardDrive" }
        ],
        processSteps: [
            { step: "01", title: "NEEDS ASSESSMENT", description: "Identify communication gaps between executive leadership, office, and field teams." },
            { step: "02", title: "SECURITY ARCHITECTURE", description: "Define encryption protocols, retention policies, and single sign-on integration." },
            { step: "03", title: "APPLICATION BUILD", description: "Engineer web and mobile applications using WebSocket infrastructure for real-time sync." },
            { step: "04", title: "INTEGRATION", description: "Connect internal task management, ticket alerts, and HR databases." },
            { step: "05", title: "MIGRATION & ONBOARDING", description: "Seed user directories, configure channels, and run pilot group testing." },
            { step: "06", title: "LAUNCH", description: "Roll out company-wide with live telemetry and uptime monitoring." }
        ],
        technologies: ["WebSockets", "WebRTC", "Next.js", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
        useCases: [
            { title: "Distributed Remote Companies", description: "Asynchronous communication hub for global teams across multiple time zones.", tag: "Remote Work" },
            { title: "Field & HQ Coordination", description: "Connecting jobsite crews and construction supervisors with central project managers.", tag: "Field Ops" },
            { title: "Confidential R&D Teams", description: "Isolated, highly secure messaging for sensitive intellectual property and defense work.", tag: "Security" },
            { title: "Franchise Networks", description: "Broadcasting operational standards and promotional assets to dozens of franchise owners.", tag: "Retail" }
        ],
        businessImpact: [
            "Complete ownership and sovereignty over sensitive corporate communications",
            "Eliminate escalating per-user monthly SaaS fees from generic chat providers",
            "Drastically reduce information silos and keep distributed staff aligned",
            "Guaranteed delivery of critical compliance and safety announcements"
        ],
        faqs: [
            { question: "Why build a private communication tool instead of using Slack or Teams?", answer: "Organizations with strict security, defense, legal, or intellectual property concerns often cannot host sensitive chat data on third-party cloud servers. A private platform gives you total data sovereignty, zero per-seat fees, and custom workflow integrations." },
            { question: "Is the messaging real-time?", answer: "Yes. Our platforms utilize high-performance WebSockets and Redis pub/sub backends for instantaneous message delivery and typing indicators." }
        ],
        relatedSlugs: [
            { slug: "web-mobile-apps", category: "software", name: "Web & Mobile Apps", headline: "Deploy native mobile versions of your internal communication hub." },
            { slug: "erp", category: "software", name: "ERP & Business Systems", headline: "Link communication threads directly to operational orders." },
            { slug: "rag", category: "ai", name: "RAG Solutions", headline: "Enable employees to search chat history and internal policies using AI." }
        ]
    }
};

export interface ServiceCategory {
    title: string;
    description: string;
    categorySlug: "ai" | "data" | "software";
    services: { name: string; slug: string; path: string; shortDesc: string }[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        title: "AI SERVICES",
        description: "Intelligent systems, autonomous agents, and model-driven business solutions.",
        categorySlug: "ai",
        services: [
            { name: "AI Chatbots", slug: "chatbots", path: "/services/ai/chatbots", shortDesc: "Intelligent conversational agents grounded in your knowledge base." },
            { name: "AI Voice Agents", slug: "voice-agents", path: "/services/ai/voice-agents", shortDesc: "Natural, low-latency telephony and voice automation." },
            { name: "Generative AI & LLM Solutions", slug: "generative-ai", path: "/services/ai/generative-ai", shortDesc: "Enterprise LLM applications, fine-tuning, and domain copilots." },
            { name: "RAG Solutions", slug: "rag", path: "/services/ai/rag", shortDesc: "Connect frontier AI models to your proprietary enterprise documents." },
            { name: "AI Agents", slug: "agents", path: "/services/ai/agents", shortDesc: "Autonomous agents that plan, reason, and use tools." },
            { name: "Workflow Automation", slug: "workflow-automation", path: "/services/ai/workflow-automation", shortDesc: "Turn repetitive cross-app tasks into intelligent automated workflows." },
            { name: "Machine Learning", slug: "machine-learning", path: "/services/ai/machine-learning", shortDesc: "Custom predictive models and production MLOps pipelines." }
        ]
    },
    {
        title: "DATA ANALYTICS",
        description: "Transform raw enterprise data into reliable pipelines, intelligence, and predictive clarity.",
        categorySlug: "data",
        services: [
            { name: "Business Intelligence & Dashboards", slug: "business-intelligence", path: "/services/data/business-intelligence", shortDesc: "Real-time executive dashboards and interactive KPI metrics." },
            { name: "Data Engineering & Integration", slug: "data-engineering", path: "/services/data/data-engineering", shortDesc: "Resilient ETL pipelines, cloud lakehouses, and data warehouses." },
            { name: "Predictive Analytics", slug: "predictive-analytics", path: "/services/data/predictive-analytics", shortDesc: "Forecasting models that anticipate churn, demand, and risk." },
            { name: "Data Strategy & Insights", slug: "data-strategy", path: "/services/data/data-strategy", shortDesc: "Executive blueprints, KPI design, and data governance." }
        ]
    },
    {
        title: "CUSTOM SOFTWARE DEVELOPMENT",
        description: "Scalable platforms, mission-critical systems, and bespoke digital infrastructure.",
        categorySlug: "software",
        services: [
            { name: "SaaS Development", slug: "saas", path: "/services/software/saas", shortDesc: "Multi-tenant software products built for enterprise scale." },
            { name: "ERP & Business Systems", slug: "erp", path: "/services/software/erp", shortDesc: "Connected enterprise software replacing rigid off-the-shelf tools." },
            { name: "Web & Mobile Apps", slug: "web-mobile-apps", path: "/services/software/web-mobile-apps", shortDesc: "Fluid, high-performance web and native cross-platform mobile apps." },
            { name: "Finance & Accounting Software", slug: "finance-accounting", path: "/services/software/finance-accounting", shortDesc: "Double-entry ledgers, billing engines, and automated reconciliation." },
            { name: "Internal Communication Platforms", slug: "internal-communication", path: "/services/software/internal-communication", shortDesc: "Private, encrypted messaging and collaboration hubs." }
        ]
    }
];

export function getServiceBySlug(category: string, slug: string): ServiceData | undefined {
    const service = SERVICES_DATA[slug];
    if (service && service.categorySlug === category) {
        return service;
    }
    return undefined;
}
