import { CinematicHero } from "@/components/home/CinematicHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HomeVisualFlow } from "@/components/home/HomeVisualFlow";
import Link from "next/link";
import { ArrowRight, Bot, Database, Code2, Sparkles, Layers } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xcecute | AI, Data & Software Engineering",
  description: "Best brains at your service. Turning ideas, problems, and opportunities into technology that works.",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent text-[#F1F4F2]">
      {/* 00 — CINEMATIC HERO */}
      <CinematicHero />

      {/* ========================================================= */}
      {/* 01 — WHAT WE DO */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A] relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-14">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-3">
                01 — WHAT WE DO
              </span>
              <h2 className="font-sans font-medium text-4xl sm:text-6xl lg:text-7xl text-[#F1F4F2] tracking-tight mb-6">
                WE BUILD WHAT'S NEXT.
              </h2>
              <p className="font-sans text-lg sm:text-2xl text-[#A7B0AB] leading-relaxed max-w-3xl">
                XCECUTE combines AI, Data, and Software to turn ideas, problems, and opportunities into technology that works.
              </p>
            </div>

            {/* Three Simple Interactive Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* AI */}
              <Link
                href="/services#ai"
                className="p-8 rounded-3xl bg-[#0D1210] border border-white/10 hover:border-[#10A882]/50 hover:bg-[#111714] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#10A882]/10 border border-[#10A882]/20 flex items-center justify-center text-[#10A882] group-hover:bg-[#10A882] group-hover:text-black transition-all duration-300 mb-8">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-semibold text-2xl sm:text-3xl text-white mb-2 group-hover:text-[#10A882] transition-colors">
                    AI
                  </h3>
                  <p className="font-sans text-base text-[#A7B0AB] leading-relaxed">
                    Intelligence &amp; Automation
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#10A882] font-semibold">
                  <span>Explore AI Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>

              {/* DATA */}
              <Link
                href="/services#data"
                className="p-8 rounded-3xl bg-[#0D1210] border border-white/10 hover:border-[#10A882]/50 hover:bg-[#111714] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#10A882]/10 border border-[#10A882]/20 flex items-center justify-center text-[#10A882] group-hover:bg-[#10A882] group-hover:text-black transition-all duration-300 mb-8">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-semibold text-2xl sm:text-3xl text-white mb-2 group-hover:text-[#10A882] transition-colors">
                    DATA
                  </h3>
                  <p className="font-sans text-base text-[#A7B0AB] leading-relaxed">
                    Insights &amp; Decisions
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#10A882] font-semibold">
                  <span>Explore Data Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>

              {/* SOFTWARE */}
              <Link
                href="/services#software"
                className="p-8 rounded-3xl bg-[#0D1210] border border-white/10 hover:border-[#10A882]/50 hover:bg-[#111714] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#10A882]/10 border border-[#10A882]/20 flex items-center justify-center text-[#10A882] group-hover:bg-[#10A882] group-hover:text-black transition-all duration-300 mb-8">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-semibold text-2xl sm:text-3xl text-white mb-2 group-hover:text-[#10A882] transition-colors">
                    SOFTWARE
                  </h3>
                  <p className="font-sans text-base text-[#A7B0AB] leading-relaxed">
                    Products &amp; Systems
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#10A882] font-semibold">
                  <span>Explore Software Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 02 — WHAT THAT LOOKS LIKE */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-3">
                02 — WHAT THAT LOOKS LIKE
              </span>
              <h2 className="font-sans font-medium text-3xl sm:text-5xl text-[#F1F4F2] tracking-tight">
                THE ARCHITECTURE OF EXECUTION
              </h2>
            </div>

            {/* Interactive Visual Flow */}
            <HomeVisualFlow />
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 03 — SERVICES + PRODUCTS */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-14">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-3">
                03 — SERVICES + PRODUCTS
              </span>
              <h2 className="font-sans font-medium text-3xl sm:text-5xl lg:text-6xl text-[#F1F4F2] tracking-tight mb-6">
                FROM CUSTOM SOLUTIONS TO PRODUCTS.
              </h2>
              <p className="font-sans text-lg sm:text-xl text-[#A7B0AB] leading-relaxed max-w-3xl">
                We work with businesses to build intelligent solutions — and turn powerful ideas into scalable products.
              </p>
            </div>

            {/* Two Large Interactive Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Option 1: SERVICES */}
              <Link
                href="/services"
                className="p-8 sm:p-12 rounded-3xl bg-[#0D1210] border border-white/10 hover:border-[#10A882]/50 hover:bg-[#111714] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-semibold text-[#10A882] tracking-wider uppercase">
                      CLIENT ENGAGEMENTS
                    </span>
                    <ArrowRight className="w-6 h-6 text-[#10A882] group-hover:translate-x-2 transition-transform" />
                  </div>
                  <h3 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-4 group-hover:text-[#10A882] transition-colors">
                    SERVICES →
                  </h3>
                  <p className="font-sans text-xl text-[#F1F4F2]/90 font-medium mb-2">
                    AI &bull; Data &bull; Software
                  </p>
                  <p className="font-sans text-sm text-[#A7B0AB] leading-relaxed">
                    Bespoke engineering designed around your unique operational workflows, proprietary data, and commercial targets.
                  </p>
                </div>
              </Link>

              {/* Option 2: PRODUCTS */}
              <Link
                href="/products"
                className="p-8 sm:p-12 rounded-3xl bg-[#0D1210] border border-white/10 hover:border-[#10A882]/50 hover:bg-[#111714] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-semibold text-[#10A882] tracking-wider uppercase">
                      PROPRIETARY PLATFORMS
                    </span>
                    <ArrowRight className="w-6 h-6 text-[#10A882] group-hover:translate-x-2 transition-transform" />
                  </div>
                  <h3 className="font-sans font-semibold text-3xl sm:text-4xl text-white mb-4 group-hover:text-[#10A882] transition-colors">
                    PRODUCTS →
                  </h3>
                  <p className="font-sans text-xl text-[#F1F4F2]/90 font-medium mb-2">
                    Built by XCECUTE
                  </p>
                  <p className="font-sans text-sm text-[#A7B0AB] leading-relaxed">
                    Packaged conversational agents, telemetry platforms, and enterprise modules available for instant pilot deployment.
                  </p>
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 04 — WHY XCECUTE */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-3">
                04 — PRINCIPLES
              </span>
              <h2 className="font-sans font-medium text-4xl sm:text-6xl text-[#F1F4F2] tracking-tight">
                BUILT WITH PURPOSE.
              </h2>
            </div>

            {/* Large Typography Layout (No Cluttered Card Grid) */}
            <div className="space-y-12">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1210]/60 border border-white/5 hover:border-[#10A882]/30 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-[#10A882] block mb-2">01 // PHILOSOPHY</span>
                  <h3 className="font-sans text-2xl sm:text-4xl font-medium text-white group-hover:text-[#10A882] transition-colors mb-2">
                    Problem First
                  </h3>
                  <p className="font-sans text-base sm:text-xl text-[#A7B0AB]">
                    We understand before we build.
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1210]/60 border border-white/5 hover:border-[#10A882]/30 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-[#10A882] block mb-2">02 // SELECTION</span>
                  <h3 className="font-sans text-2xl sm:text-4xl font-medium text-white group-hover:text-[#10A882] transition-colors mb-2">
                    Technology That Matters
                  </h3>
                  <p className="font-sans text-base sm:text-xl text-[#A7B0AB]">
                    We use technology where it creates real value.
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1210]/60 border border-white/5 hover:border-[#10A882]/30 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-[#10A882] block mb-2">03 // EXECUTION</span>
                  <h3 className="font-sans text-2xl sm:text-4xl font-medium text-white group-hover:text-[#10A882] transition-colors mb-2">
                    Built to Work
                  </h3>
                  <p className="font-sans text-base sm:text-xl text-[#A7B0AB]">
                    From idea to implementation.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 05 — ABOUT SUMMARY */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#10A882] block mb-3">
              05 — ABOUT SUMMARY
            </span>
            <h2 className="font-sans font-medium text-4xl sm:text-6xl text-[#F1F4F2] tracking-tight mb-8">
              WHO IS XCECUTE?
            </h2>

            <div className="font-sans text-xl sm:text-2xl text-[#A7B0AB] leading-relaxed space-y-6 mb-12">
              <p>
                XCECUTE is a technology company building practical solutions across AI, software, and data.
              </p>
              <p className="text-white font-medium">
                We focus on turning complex problems into simple, useful systems.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#111714] border border-[#B4FFD7]/15 hover:border-[#10A882]/40 hover:bg-[#151D19] text-[#F1F4F2] px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 group"
            >
              <span>ABOUT XCECUTE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-[#10A882] transition-all" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 06 — FINAL CTA & HOMEPAGE MANIFESTO */}
      {/* ========================================================= */}
      <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="font-sans font-medium text-4xl sm:text-6xl lg:text-7xl text-[#F1F4F2] tracking-tight mb-6">
              WHAT ARE YOU TRYING TO BUILD?
            </h2>
            <p className="font-sans text-lg sm:text-2xl text-[#A7B0AB] leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's turn the idea into something real.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center text-[15px] tracking-wide font-semibold text-black bg-white border-2 border-[#10A882] hover:bg-[#F1F4F2] px-9 py-4 rounded-full shadow-[0_0_30px_rgba(16,168,130,0.25)] hover:shadow-[0_0_35px_rgba(16,168,130,0.4)] transition-all duration-300 group mb-20"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-5 h-5 ml-3 text-black group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Final homepage message */}
            <div className="pt-16 border-t border-white/5 flex flex-col items-center">
              <div className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#A7B0AB] space-y-2 mb-4">
                <div>WE THINK.</div>
                <div>WE BUILD.</div>
                <div className="text-white font-semibold">WE EXECUTE.</div>
              </div>
              <div className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#10A882] font-semibold">
                AI + DATA + SOFTWARE.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
