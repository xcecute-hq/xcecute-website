import { CinematicHero } from "@/components/home/CinematicHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xcecute | AI, Software & Automation",
  description: "Put the best brains at your service. From custom software to AI and data systems.",
};

const capabilitiesList = [
  { id: "custom-software", num: "01", title: "Custom Software", desc: "Software built around the way your business actually works." },
  { id: "saas-development", num: "02", title: "SaaS & Product Development", desc: "From an idea to a product people can use." },
  { id: "ai-solutions", num: "03", title: "AI Solutions", desc: "Practical AI for real problems." },
  { id: "workflow-automation", num: "04", title: "Workflow Automation", desc: "Less repetitive work. More time for meaningful work." },
  { id: "data-analytics", num: "05", title: "Data & Analytics", desc: "Turn scattered data into something useful." },
  { id: "machine-learning", num: "06", title: "Machine Learning", desc: "From data to models that solve specific problems." },
  { id: "cms-platforms", num: "07", title: "CMS & Digital Platforms", desc: "Content systems that give your team control." },
];

const processSteps = [
  { number: "01", title: "Understand", description: "We learn about your business, your users, your existing systems, and the problem you're trying to solve." },
  { number: "02", title: "Define", description: "We turn the problem into a clear direction.\n\nWhat should we build?\nWhat shouldn't we build?\nWhat matters most right now?" },
  { number: "03", title: "Design", description: "We think through the experience, workflows, interfaces, and technical structure before going deep into implementation." },
  { number: "04", title: "Build", description: "We turn the plan into working software.\n\nWe share progress throughout the process so you can see where things are heading and give feedback along the way." },
  { number: "05", title: "Learn & Improve", description: "Launch isn't necessarily the end.\n\nWe learn from what happens in the real world and improve from there." }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#080B0A] min-h-screen">
      <CinematicHero />

      {/* 2. WHAT WE BUILD */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <ScrollReveal>
              <h2 className="font-sans font-medium text-4xl sm:text-5xl text-[#F1F4F2] mb-6 tracking-tight">What we build.</h2>
              <p className="font-sans text-lg text-[#A7B0AB] leading-relaxed">
                We build digital products and systems around real business problems: from custom software and SaaS platforms to AI, automation, data, and machine learning.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:w-2/3 flex flex-col">
            {capabilitiesList.map((cap, i) => (
              <ScrollReveal key={cap.num} delay={0.1 * i} className="group relative border-b border-[#B4FFD7]/10 hover:bg-[#111714]/40 transition-colors duration-500 ease-out">
                <Link href={`/services#${cap.id}`} className="flex flex-col sm:flex-row sm:items-center py-10 px-4 sm:px-8 transform group-hover:translate-x-2 transition-transform duration-500 ease-out">
                  <span className="font-sans text-[13px] text-[#10A882] tracking-[0.2em] uppercase font-medium mb-4 sm:mb-0 sm:w-20 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                    {cap.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-sans text-2xl sm:text-3xl font-medium text-[#F1F4F2] mb-2">{cap.title}</h3>
                    <p className="font-sans text-[#A7B0AB] text-[15px] max-w-xl group-hover:text-[#F1F4F2] transition-colors">{cap.desc}</p>
                  </div>
                  <div className="mt-6 sm:mt-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-[#10A882]" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW WE THINK */}
      <section className="py-32 sm:py-48 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
        <div className="max-w-5xl mx-auto flex flex-col items-start gap-12">
          <ScrollReveal>
            <div className="font-sans text-xl sm:text-2xl text-[#A7B0AB] leading-relaxed max-w-3xl mb-12">
              <p className="mb-4">Using too much AI without clear thought or purpose is a mistake.</p>
              <p className="mb-4">We don't believe every business needs a custom platform.</p>
              <p>And we don't believe adding more technology automatically creates more value.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="down">
            <h2 className="font-sans font-medium text-5xl sm:text-7xl lg:text-[90px] leading-[1.05] tracking-tight text-[#F1F4F2] mb-12">
              We start with<br />the problem.
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="font-sans text-lg sm:text-xl text-[#A7B0AB] leading-relaxed max-w-3xl space-y-6">
              <p>Then we choose the technology that makes the most sense.</p>
              <p>Sometimes that's a simple automation. Sometimes it's a custom application. Sometimes it's a SaaS platform, an analytics system, an AI feature, or a machine learning model.</p>
              <p className="text-[#F1F4F2] text-2xl sm:text-3xl font-medium mt-12 block">
                The technology is the tool.<br />The problem is what we're here to solve.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. SELECTED WORK */}
      <section className="py-24 sm:py-32 border-t border-[#B4FFD7]/10 bg-[#0D1210]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col sm:flex-row justify-between items-end gap-8">
          <ScrollReveal>
            <h2 className="font-sans font-medium text-4xl sm:text-5xl text-[#F1F4F2] tracking-tight mb-4">Selected work.</h2>
            <p className="font-sans text-lg text-[#A7B0AB]">Things we've built, explored, and learned from.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link href="/work" className="inline-flex items-center text-[#10A882] font-sans font-medium hover:text-[#5EE6A0] transition-colors group">
              <span className="mr-2">View all work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="flex flex-col">
          <CaseStudyCard
            slug="fintech-dashboard"
            category="SaaS / Web App"
            title="Global Fintech Analytics Dashboard"
            problem="Existing analytics infrastructure could not scale to process increasing volumes of transaction data in real time."
            approach="Re-architected the data fetching pipeline to utilize server-side aggregation and optimized caching layers."
            build="A custom UI frontend integrated with a high-performance backend, designed specifically for rapid data visualization."
            outcome="300% increase in load speed for large datasets."
            delay={0.1}
          />
          <CaseStudyCard
            slug="ai-workflow"
            category="AI Automation"
            title="Autonomous Supply Chain AI"
            problem="Manual supply chain data entry was bottlenecking operations and causing compliance delays."
            approach="Integrated an AI-driven extraction layer to identify and structure data from invoices and shipping manifests automatically."
            build="A custom internal tool featuring automated document ingestion, AI-based OCR, and a human-in-the-loop review interface."
            outcome="Saved 40hrs/week in manual data entry."
            delay={0.2}
          />
        </div>
      </section>

      {/* 5. HOW WE WORK (PROCESS) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#080B0A]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-24">
            <h2 className="font-sans font-medium text-4xl sm:text-5xl text-[#F1F4F2] tracking-tight mb-6">How we work.</h2>
            <h3 className="font-sans text-2xl sm:text-3xl text-[#707A75] font-medium tracking-tight">You don't need to have everything figured out.</h3>
          </ScrollReveal>
          <div className="max-w-4xl">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      {/* 6. ABOUT PHILOSOPHY */}
      <section className="py-32 sm:py-48 px-4 sm:px-6 lg:px-8 border-t border-[#B4FFD7]/10 bg-[#0A0F0D]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-sans font-medium text-5xl sm:text-6xl lg:text-7xl text-[#F1F4F2] tracking-tight mb-12 leading-[1.05]">
              We're building something of our own.
            </h2>

            <div className="font-sans text-xl sm:text-2xl text-[#A7B0AB] leading-relaxed space-y-8">
              <p>
                We're engineers, designers, and builders who decided to stop waiting for the perfect idea and start building.
              </p>
              <p>
                We started this company because we enjoy solving difficult problems. Not just writing code, but understanding why something needs to exist, who it is for, and how it can actually make a difference.
              </p>
              <p className="text-[#F1F4F2] font-medium">
                You bring us the problem, the idea, or even just a rough direction.<br />
                We figure it out with you.
              </p>
            </div>

            <div className="mt-16">
              <Link href="/about" className="inline-flex items-center text-[15px] tracking-wide font-medium text-[#F1F4F2] bg-[#111714] border border-[#B4FFD7]/10 px-8 py-4 rounded-full group hover:bg-[#151D19] hover:border-[#10A882]/25 hover:shadow-[0_0_30px_rgba(53,208,127,0.06)] transition-all duration-300">
                More about us
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:text-[#10A882] transition-all" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
