"use client";

import { motion } from "framer-motion";
import {
    Bot,
    CheckCircle2,
    Database,
    Sparkles,
    Terminal,
    Search,
    Wrench,
    Server,
    Shield,
    FileText,
    PieChart,
    Layers,
    DollarSign,
    Lock,
    Users,
    Smartphone,
    Activity,
    ArrowRight
} from "lucide-react";

interface VisualProps {
    slug: string;
}

export function ServiceVisual({ slug }: VisualProps) {
    switch (slug) {
        case "chatbots":
            return <ChatbotVisual />;
        case "voice-agents":
            return <VoiceAgentVisual />;
        case "generative-ai":
            return <GenerativeAiVisual />;
        case "rag":
            return <RagVisual />;
        case "agents":
            return <AgentVisual />;
        case "workflow-automation":
            return <WorkflowVisual />;
        case "machine-learning":
            return <MlVisual />;
        case "business-intelligence":
            return <BiDashboardVisual />;
        case "data-engineering":
            return <DataEngineeringVisual />;
        case "predictive-analytics":
            return <PredictiveVisual />;
        case "data-strategy":
            return <DataStrategyVisual />;
        case "saas":
            return <SaasVisual />;
        case "erp":
            return <ErpVisual />;
        case "web-mobile-apps":
            return <WebMobileVisual />;
        case "finance-accounting":
            return <FinanceVisual />;
        case "internal-communication":
            return <InternalCommVisual />;
        default:
            return <DefaultVisual />;
    }
}

// 1. AI CHATBOTS VISUAL
function ChatbotVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl shadow-[0_0_40px_rgba(16,168,130,0.08)]">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#10A882]/15 border border-[#10A882]/30 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-[#10A882]" />
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-white">Xcecute Concierge AI</div>
                        <div className="text-[10px] text-[#10A882] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10A882] animate-pulse" />
                            Active &bull; Verified Knowledge Base
                        </div>
                    </div>
                </div>
                <span className="text-[10px] text-white/40 font-mono">latency: 180ms</span>
            </div>

            <div className="space-y-3 font-sans text-xs">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-white/80 max-w-[85%]"
                >
                    Can your platform integrate with our HubSpot CRM and schedule custom product demos?
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="p-3 rounded-xl bg-[#10A882]/10 border border-[#10A882]/25 text-white ml-auto max-w-[90%] space-y-2"
                >
                    <p>Yes. I can sync your contact record directly to HubSpot and book a slot with our enterprise engineering team.</p>
                    <div className="flex items-center gap-2 pt-1 border-t border-[#10A882]/20 text-[10px] text-[#10A882]">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Source: integrations_manual.pdf (p.14)</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="p-2.5 rounded-lg bg-black/40 border border-[#B4FFD7]/10 flex items-center justify-between text-[11px]"
                >
                    <span className="text-white/60">Action: Calendar slot reserved (Thursday 3:00 PM)</span>
                    <span className="text-[#10A882] font-semibold text-[10px] uppercase">Executed</span>
                </motion.div>
            </div>
        </div>
    );
}

// 2. AI VOICE AGENTS VISUAL
function VoiceAgentVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl shadow-[0_0_40px_rgba(16,168,130,0.08)]">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#10A882] animate-ping" />
                    <span className="text-xs font-semibold text-white tracking-wider uppercase">Inbound Call Connected</span>
                </div>
                <span className="text-xs font-mono text-[#10A882] bg-[#10A882]/10 px-2 py-0.5 rounded border border-[#10A882]/20">01:42</span>
            </div>

            {/* Audio Waveform */}
            <div className="h-16 flex items-center justify-center gap-1.5 px-4 mb-5 bg-black/40 rounded-xl border border-white/5">
                {[20, 35, 60, 40, 80, 50, 95, 70, 45, 85, 65, 30, 75, 55, 35, 65, 45, 25].map((height, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: [`${height * 0.4}%`, `${height}%`, `${height * 0.3}%`] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
                        className="w-1.5 rounded-full bg-gradient-to-t from-[#10A882] to-[#B4FFD7]"
                    />
                ))}
            </div>

            <div className="space-y-2 text-xs font-sans">
                <div className="flex items-center justify-between text-white/50 text-[11px]">
                    <span>Caller: Dr. Marcus Vance</span>
                    <span className="text-[#10A882]">Sentiment: Positive (+0.91)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-white/80">
                    <span className="text-white/40 text-[10px] block uppercase font-mono">Live Transcription</span>
                    "I need to reschedule our surgery consultation to Tuesday morning if there's a slot open."
                </div>
                <div className="p-3 rounded-xl bg-[#10A882]/10 border border-[#10A882]/20 text-white flex items-center justify-between">
                    <div>
                        <span className="text-[10px] text-[#10A882] uppercase font-mono block">Agent Action</span>
                        <span className="text-xs">Tuesday 9:30 AM confirmed & calendar invite dispatched</span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-[#10A882] shrink-0" />
                </div>
            </div>
        </div>
    );
}

// 3. GENERATIVE AI & LLM VISUAL
function GenerativeAiVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-xs">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#10A882]" />
                    <span className="text-white font-medium">Enterprise LLM Pipeline</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/60 border border-white/10">vLLM Inference</span>
            </div>

            <div className="space-y-3 font-mono text-[11px]">
                <div className="p-3 rounded-lg bg-black/50 border border-white/5 text-white/70">
                    <span className="text-[#10A882]">system_prompt:</span> You are an enterprise intelligence engine. Synthesize legal obligations from the uploaded contract and flag liability caps.
                </div>

                <div className="p-3 rounded-lg bg-[#10A882]/10 border border-[#10A882]/20 text-white space-y-1.5 font-sans">
                    <div className="flex items-center justify-between text-[10px] text-[#10A882] font-mono">
                        <span>EXTRACTED RISK MATRIX</span>
                        <span>Confidence: 99.4%</span>
                    </div>
                    <p className="text-xs text-white/90">
                        &bull; Section 14.2: Maximum liability aggregate capped at 12 months fees.<br />
                        &bull; Section 18.1: Mutual indemnity for third-party intellectual property claims.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                        <span className="text-white/40 block">Input Tokens</span>
                        <span className="text-white font-semibold">14,280</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                        <span className="text-white/40 block">Time to 1st Token</span>
                        <span className="text-[#10A882] font-semibold">142ms</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                        <span className="text-white/40 block">Guardrails</span>
                        <span className="text-white font-semibold">Enforced</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 4. RAG SOLUTIONS VISUAL
function RagVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#10A882]" />
                    <span className="text-xs font-semibold text-white">Hybrid Retrieval Engine</span>
                </div>
                <span className="text-[10px] font-mono text-[#10A882]">BM25 + Dense Vectors</span>
            </div>

            <div className="space-y-2.5 text-xs font-sans">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex items-center gap-2 text-white/70">
                    <Search className="w-3.5 h-3.5 text-[#10A882] shrink-0" />
                    <span>"What is our penalty SLA if database downtime exceeds 15 minutes?"</span>
                </div>

                <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] text-white/40 uppercase font-mono block">Retrieved Chunks (Top-K = 3)</span>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-[11px]">
                        <span className="text-white/80">MSA_Master_Agreement_2026.pdf &bull; p.42</span>
                        <span className="text-[#10A882] font-mono text-[10px]">score: 0.942</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-[11px]">
                        <span className="text-white/80">Infrastructure_SLA_Addendum.pdf &bull; p.08</span>
                        <span className="text-[#10A882] font-mono text-[10px]">score: 0.887</span>
                    </div>
                </div>

                <div className="p-3 rounded-xl bg-[#10A882]/10 border border-[#10A882]/25 text-white">
                    <div className="text-[10px] text-[#10A882] font-mono uppercase mb-1">Grounded Synthesis</div>
                    <p className="text-xs text-white/90">
                        Under clause 9.4, downtime exceeding 15 minutes incurs a 5% monthly service credit, escalating to 15% if unresolved after 1 hour.
                    </p>
                </div>
            </div>
        </div>
    );
}

// 5. AI AGENTS VISUAL
function AgentVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#10A882]" />
                    <span className="text-xs font-semibold text-white">Autonomous Agent Loop</span>
                </div>
                <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded">LangGraph Engine</span>
            </div>

            <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-white/70">
                    <span className="text-[#10A882]">GOAL:</span> Reconcile Stripe invoices against accounts receivable and flag unpaid items &gt; 30 days.
                </div>

                <div className="space-y-1.5 font-sans">
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px]">
                        <span className="text-white/70">1. Authenticate with Stripe API</span>
                        <span className="text-[#10A882] text-[10px]">COMPLETED</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px]">
                        <span className="text-white/70">2. Query PostgreSQL ledger tables</span>
                        <span className="text-[#10A882] text-[10px]">COMPLETED</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px]">
                        <span className="text-white/70">3. Match invoice IDs &amp; calculate delta</span>
                        <span className="text-[#10A882] text-[10px]">COMPLETED</span>
                    </div>
                    <div className="p-2 rounded-lg bg-[#10A882]/10 border border-[#10A882]/30 flex items-center justify-between text-[11px]">
                        <span className="text-white font-medium">4. Human Approval Gate: Send 4 notices</span>
                        <span className="text-yellow-400 text-[10px] font-mono animate-pulse">AWAITING REVIEW</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 6. WORKFLOW AUTOMATION VISUAL
function WorkflowVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="text-xs font-semibold text-white">Event-Driven Pipeline</span>
                <span className="text-[10px] text-[#10A882] font-mono">100% Idempotent</span>
            </div>

            <div className="flex items-center justify-between gap-2 py-3">
                <div className="flex-1 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-[10px] text-white/40 block uppercase">Webhook</span>
                    <span className="text-xs font-semibold text-white">Stripe Charge</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#10A882]" />
                <div className="flex-1 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-[10px] text-white/40 block uppercase">AI Parser</span>
                    <span className="text-xs font-semibold text-white">Extract Details</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#10A882]" />
                <div className="flex-1 p-2.5 rounded-lg bg-[#10A882]/10 border border-[#10A882]/30 text-center">
                    <span className="text-[10px] text-[#10A882] block uppercase">Target</span>
                    <span className="text-xs font-semibold text-white">ERP Updated</span>
                </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-[11px] space-y-1">
                <div className="flex items-center justify-between text-white/60">
                    <span>job_id: #xct-98412</span>
                    <span className="text-[#10A882]">SUCCESS (24ms)</span>
                </div>
                <div className="text-white/40 text-[10px]">
                    Payload synced across HubSpot CRM &bull; Slack #sales &bull; QuickBooks
                </div>
            </div>
        </div>
    );
}

// 7. MACHINE LEARNING VISUAL
function MlVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="text-xs font-semibold text-white">Proprietary Predictive Model</span>
                <span className="text-[10px] font-mono text-[#10A882]">XGBoost Ensemble</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                    <span className="text-[10px] text-white/40 block">Validation AUC</span>
                    <span className="text-base font-semibold text-[#10A882]">0.984</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                    <span className="text-[10px] text-white/40 block">Inference</span>
                    <span className="text-base font-semibold text-white">12ms</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                    <span className="text-[10px] text-white/40 block">Data Drift</span>
                    <span className="text-base font-semibold text-[#10A882]">0.02%</span>
                </div>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-white/50 font-mono">
                    <span>FEATURE IMPORTANCE (SHAP)</span>
                    <span>WEIGHT</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                    <div>
                        <div className="flex justify-between text-white/70 mb-0.5">
                            <span>Usage frequency trend (30d)</span>
                            <span className="font-mono text-[#10A882]">0.38</span>
                        </div>
                        <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full bg-[#10A882] w-[75%]" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-white/70 mb-0.5">
                            <span>Billing cycle renewals</span>
                            <span className="font-mono text-[#10A882]">0.26</span>
                        </div>
                        <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full bg-[#10A882] w-[52%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 8. BUSINESS INTELLIGENCE VISUAL
function BiDashboardVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-[#10A882]" />
                    <span className="text-xs font-semibold text-white">Executive Command Center</span>
                </div>
                <span className="text-[10px] text-[#10A882] font-mono">LIVE TELEMETRY</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-white/50 block">Net Recurring Revenue</span>
                    <span className="text-xl font-bold text-white tracking-tight">$428,950</span>
                    <span className="text-[10px] text-[#10A882] font-medium">+18.4% this quarter</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] text-white/50 block">Active Throughput</span>
                    <span className="text-xl font-bold text-white tracking-tight">1.84M req</span>
                    <span className="text-[10px] text-[#10A882] font-medium">99.99% operational</span>
                </div>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex justify-between text-[11px] text-white/60">
                    <span>Performance by Department</span>
                    <span className="text-[#10A882]">All targets met</span>
                </div>
                <div className="flex items-end gap-1.5 h-16 pt-2">
                    {[45, 60, 52, 78, 65, 88, 72, 94, 85, 98].map((h, idx) => (
                        <div key={idx} className="flex-1 h-full flex items-end">
                            <div
                                style={{ height: `${h}%` }}
                                className="w-full rounded-t bg-gradient-to-t from-[#10A882]/40 to-[#10A882]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// 9. DATA ENGINEERING VISUAL
function DataEngineeringVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#10A882]" />
                    <span className="text-xs font-semibold text-white">Unified Lakehouse Pipeline</span>
                </div>
                <span className="text-[10px] font-mono text-[#10A882]">dbt + ClickHouse</span>
            </div>

            <div className="space-y-2.5 text-xs font-sans">
                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5 text-white/70">
                        PostgreSQL DB
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5 text-white/70">
                        Stripe Webhooks
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5 text-white/70">
                        HubSpot CRM
                    </div>
                </div>

                <div className="flex justify-center py-1">
                    <div className="w-0.5 h-4 bg-[#10A882]/40" />
                </div>

                <div className="p-3 rounded-xl bg-[#10A882]/10 border border-[#10A882]/30 text-center">
                    <span className="text-[10px] font-mono text-[#10A882] block uppercase">Continuous Transformation</span>
                    <span className="text-xs font-semibold text-white">Automated Schema Validation &amp; Partitioning</span>
                </div>

                <div className="flex justify-center py-1">
                    <div className="w-0.5 h-4 bg-[#10A882]/40" />
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-white/80">Enterprise Analytical Warehouse</span>
                    <span className="text-[#10A882] font-mono text-[10px]">Sync lag: 420ms</span>
                </div>
            </div>
        </div>
    );
}

// 10. PREDICTIVE ANALYTICS VISUAL
function PredictiveVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="text-xs font-semibold text-white">Demand Forecast Model</span>
                <span className="text-[10px] font-mono text-[#10A882]">90% Confidence Interval</span>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-4">
                <div className="flex justify-between text-[10px] text-white/40 font-mono mb-2">
                    <span>HISTORICAL RECORD</span>
                    <span className="text-[#10A882]">PROJECTED TRAJECTORY</span>
                </div>
                <div className="h-20 flex items-center justify-between relative">
                    <div className="w-1/2 h-full flex items-center">
                        <svg className="w-full h-full" viewBox="0 0 100 50">
                            <path d="M0,35 Q25,40 50,25 T100,15" fill="none" stroke="#A7B0AB" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="w-1/2 h-full flex items-center relative">
                        <svg className="w-full h-full" viewBox="0 0 100 50">
                            <polygon points="0,15 100,0 100,28 0,15" fill="rgba(16,168,130,0.15)" />
                            <path d="M0,15 Q50,10 100,14" fill="none" stroke="#10A882" strokeWidth="2" strokeDasharray="3,3" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-white/40 block">Forecast Q3 Demand</span>
                    <span className="font-semibold text-white">+24.5% SKU growth</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#10A882]/10 border border-[#10A882]/20">
                    <span className="text-[10px] text-[#10A882] block">Recommended Action</span>
                    <span className="font-semibold text-white">Pre-order 1,200 units</span>
                </div>
            </div>
        </div>
    );
}

// 11. DATA STRATEGY VISUAL
function DataStrategyVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="text-xs font-semibold text-white">Data Maturity Blueprint</span>
                <span className="text-[10px] font-mono text-[#10A882]">4-Phase Roadmap</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-4 text-xs font-sans">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#10A882] text-[10px] font-mono block">PHASE 01</span>
                    <span className="font-semibold text-white block">Audit &amp; Hygiene</span>
                    <span className="text-[11px] text-white/50">Eliminate data silos &amp; establish golden records.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#10A882] text-[10px] font-mono block">PHASE 02</span>
                    <span className="font-semibold text-white block">Central Warehouse</span>
                    <span className="text-[11px] text-white/50">Unified lakehouse and automated ELT pipelines.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[#10A882] text-[10px] font-mono block">PHASE 03</span>
                    <span className="font-semibold text-white block">Real-Time BI</span>
                    <span className="text-[11px] text-white/50">Role-based dashboards &amp; automated digests.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#10A882]/10 border border-[#10A882]/25">
                    <span className="text-[#10A882] text-[10px] font-mono block">PHASE 04</span>
                    <span className="font-semibold text-white block">Autonomous AI</span>
                    <span className="text-[11px] text-white/70">Predictive modeling &amp; cognitive agent workflows.</span>
                </div>
            </div>
        </div>
    );
}

// 12. SAAS DEVELOPMENT VISUAL
function SaasVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-xs">
                <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#10A882]" />
                    <span className="text-white font-semibold">Multi-Tenant Cloud Platform</span>
                </div>
                <span className="text-[10px] text-[#10A882] font-mono">SOC2 Compliant</span>
            </div>

            <div className="space-y-2.5 text-xs font-sans">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <div>
                        <span className="text-white font-medium block">Acme Global Corp</span>
                        <span className="text-[10px] text-white/50">Plan: Enterprise (480 Seats)</span>
                    </div>
                    <span className="text-[10px] text-[#10A882] bg-[#10A882]/10 px-2 py-0.5 rounded border border-[#10A882]/20 font-mono">Active</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                        <span className="text-white/40 block">Stripe Billing</span>
                        <span className="text-[#10A882] font-medium">Auto-renew</span>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                        <span className="text-white/40 block">Auth Engine</span>
                        <span className="text-white font-medium">Okta SSO</span>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                        <span className="text-white/40 block">Isolation</span>
                        <span className="text-white font-medium">Row-Level RLS</span>
                    </div>
                </div>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 font-mono text-[10px] text-white/60 flex justify-between">
                    <span>API Endpoint: /v1/telemetry/stream</span>
                    <span className="text-[#10A882]">p99: 45ms</span>
                </div>
            </div>
        </div>
    );
}

// 13. ERP & BUSINESS SYSTEMS VISUAL
function ErpVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="text-xs font-semibold text-white">Central Operational Core</span>
                <span className="text-[10px] font-mono text-[#10A882]">4 Modules Synchronized</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs font-sans mb-3">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-[#10A882] font-mono block">WAREHOUSE</span>
                    <span className="text-white font-medium">Stock Levels: 98.4%</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-[#10A882] font-mono block">PROCUREMENT</span>
                    <span className="text-white font-medium">PO #4812 Approved</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-[#10A882] font-mono block">DISPATCH</span>
                    <span className="text-white font-medium">14 Deliveries En Route</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] text-[#10A882] font-mono block">FINANCE</span>
                    <span className="text-white font-medium">Ledger Auto-Reconciled</span>
                </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#10A882]/10 border border-[#10A882]/20 text-center text-xs text-white">
                Zero spreadsheet duplicate entry across operations.
            </div>
        </div>
    );
}

// 14. WEB & MOBILE APPS VISUAL
function WebMobileVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#10A882]" />
                    <span className="text-xs font-semibold text-white">Unified Cross-Platform App</span>
                </div>
                <span className="text-[10px] text-[#10A882] font-mono">iOS &bull; Android &bull; Web</span>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                    <span className="text-white font-medium">Technician Dispatch App</span>
                    <span className="text-[10px] text-[#10A882] font-mono">Offline-First</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-white/80 flex items-center justify-between">
                    <span>Job #892: Fiber Switch Repair</span>
                    <span className="text-[10px] text-[#10A882]">GPS Signed</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-white/50 pt-1">
                    <span>Biometric FaceID Auth</span>
                    <span>60 FPS Native Gestures</span>
                </div>
            </div>
        </div>
    );
}

// 15. FINANCE & ACCOUNTING VISUAL
function FinanceVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-xs">
                <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#10A882]" />
                    <span className="text-white font-semibold">Immutable Double-Entry Ledger</span>
                </div>
                <span className="text-[10px] text-[#10A882] font-mono">100% BALANCED</span>
            </div>

            <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-white/60">TXN #88912 &bull; Customer Inbound</span>
                    <span className="text-white font-medium">$12,500.00 USD</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] p-2 rounded bg-white/[0.02] border border-white/5">
                    <div>
                        <span className="text-[#10A882] block">DEBIT: Cash Account</span>
                        <span className="text-white/80">+$12,500.00</span>
                    </div>
                    <div>
                        <span className="text-[#10A882] block">CREDIT: Accounts Receivable</span>
                        <span className="text-white/80">-$12,500.00</span>
                    </div>
                </div>

                <div className="p-2 rounded bg-[#10A882]/10 border border-[#10A882]/20 text-[10px] text-[#10A882] flex items-center justify-between">
                    <span>Cryptographic audit signature: 0x9f4a...28b1</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
            </div>
        </div>
    );
}

// 16. INTERNAL COMMUNICATION VISUAL
function InternalCommVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-xs">
                <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#10A882]" />
                    <span className="text-white font-semibold">Private Enterprise Workspace</span>
                </div>
                <span className="text-[10px] text-[#10A882] font-mono">E2E Encrypted</span>
            </div>

            <div className="space-y-2 text-xs font-sans">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <div className="flex items-center justify-between text-[10px] text-[#10A882] font-mono mb-1">
                        <span>#executive-announcements</span>
                        <span>Read by 142/142</span>
                    </div>
                    <p className="text-white/90 text-xs">
                        Q3 strategic roadmaps and customer retention guidelines have been committed to the internal directory.
                    </p>
                </div>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-white/60">Real-time WebSocket connection</span>
                    <span className="text-[#10A882] font-mono text-[10px]">Zero 3rd-party tracking</span>
                </div>
            </div>
        </div>
    );
}

function DefaultVisual() {
    return (
        <div className="relative w-full max-w-lg mx-auto p-6 rounded-2xl bg-[#0D1210]/90 border border-[#B4FFD7]/15 backdrop-blur-xl text-center">
            <Activity className="w-8 h-8 text-[#10A882] mx-auto mb-2" />
            <span className="text-xs font-semibold text-white">XCECUTE Engineering Platform</span>
        </div>
    );
}
