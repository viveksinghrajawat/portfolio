import { Link } from "react-router";
import {
  Globe,
  Server,
  BrainCircuit,
  Cloud,
  Rocket,
  ArrowRight,
  Check,
  MessageCircle,
  CalendarDays,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Custom Web App Development",
    short: "Web apps from scratch — backend to frontend.",
    description:
      "Full-stack applications using Django + React. Perfect if you need a working product, not just a prototype.",
    outcomes: [
      "Django backend + React frontend",
      "REST APIs & admin dashboards",
      "Scalable for real users",
      "Payments, auth & integrations",
    ],
    ideal: "Startups & businesses building a product",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-50 dark:bg-blue-900/20",
    badgeText: "text-blue-700 dark:text-blue-300",
    borderAccent: "border-t-blue-500",
  },
  {
    number: "02",
    icon: Server,
    title: "Backend & API Design",
    short: "Robust APIs that power your product.",
    description:
      "High-performance REST APIs built with Django or FastAPI — clean, secure, and ready to scale.",
    outcomes: [
      "Django REST / FastAPI",
      "PostgreSQL optimization",
      "JWT & OAuth2 authentication",
      "Redis caching & queues",
    ],
    ideal: "Teams needing a solid API backbone",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    badgeBg: "bg-indigo-50 dark:bg-indigo-900/20",
    badgeText: "text-indigo-700 dark:text-indigo-300",
    borderAccent: "border-t-indigo-500",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI-Powered Automation",
    short: "LLMs, agents & intelligent pipelines.",
    description:
      "Production-ready AI systems — chatbots with memory, PDF Q&A, RAG pipelines, and workflow automation.",
    outcomes: [
      "LLM chatbots (OpenAI, Gemini)",
      "Document Q&A & RAG pipelines",
      "Vector DBs (Pinecone, Chroma)",
      "Workflow automation tools",
    ],
    ideal: "Companies wanting to leverage AI",
    iconBg: "bg-violet-100 dark:bg-violet-900/30",
    iconColor: "text-violet-600 dark:text-violet-400",
    badgeBg: "bg-violet-50 dark:bg-violet-900/20",
    badgeText: "text-violet-700 dark:text-violet-300",
    borderAccent: "border-t-violet-500",
  },
  {
    number: "04",
    icon: Cloud,
    title: "Deployment & DevOps",
    short: "Ship it. Keep it running.",
    description:
      "Cloud setup, Docker, Nginx, and CI/CD pipelines so your code is live, stable, and auto-deploying.",
    outcomes: [
      "AWS (EC2, S3, RDS, CloudFront)",
      "Docker + Nginx reverse proxy",
      "GitHub Actions CI/CD",
      "SSL & monitoring setup",
    ],
    ideal: "Dev teams tired of manual deploys",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-50 dark:bg-emerald-900/20",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    borderAccent: "border-t-emerald-500",
  },
  {
    number: "05",
    icon: Rocket,
    title: "MVP / SaaS Development",
    short: "Turn your idea into a live product.",
    description:
      "I handle everything — architecture, data models, billing, auth, and deploy. You focus on users and growth.",
    outcomes: [
      "Full product: idea → deployment",
      "Multi-tenant SaaS patterns",
      "Stripe billing & onboarding",
      "Scalable Django backend",
    ],
    ideal: "Founders with an idea, ready to build",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    badgeBg: "bg-orange-50 dark:bg-orange-900/20",
    badgeText: "text-orange-700 dark:text-orange-300",
    borderAccent: "border-t-orange-500",
  },
];

export function Services() {
  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
        <Badge variant="secondary" className="mb-5 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
          Services
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-5 tracking-tighter">
          What I build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
            for you.
          </span>
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
          Five focused services — from APIs and web apps to AI systems and cloud infrastructure.
        </p>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.number}
              className={`group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 border-t-4 ${s.borderAccent} overflow-hidden hover:shadow-xl hover:shadow-zinc-200/60 dark:hover:shadow-zinc-900/60 hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Card Header */}
              <div className="p-7 pb-5">
                {/* Icon + number */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                    <s.icon className={`w-6 h-6 ${s.iconColor}`} />
                  </div>
                  <span className="text-xs font-bold text-zinc-300 dark:text-zinc-700 tabular-nums">
                    {s.number} / 05
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-1.5 leading-snug">{s.title}</h2>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4">{s.short}</p>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Divider */}
              <div className="mx-7 border-t border-zinc-100 dark:border-zinc-800" />

              {/* Outcomes */}
              <div className="p-7 py-5 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  What's included
                </p>
                <ul className="space-y-2.5">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                      <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full ${s.iconBg} flex items-center justify-center`}>
                        <Check className={`w-2.5 h-2.5 ${s.iconColor}`} strokeWidth={3} />
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal for */}
              <div className={`mx-7 mb-5 px-3 py-2.5 rounded-lg ${s.badgeBg}`}>
                <p className="text-xs font-medium">
                  <span className={`font-bold ${s.badgeText}`}>Best for: </span>
                  <span className="text-zinc-600 dark:text-zinc-400">{s.ideal}</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="px-7 pb-7 flex gap-3">
                <Link to="/schedule-call" className="flex-1">
                  <Button className="w-full rounded-xl font-semibold" size="default">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="default" className="rounded-xl px-4 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ-STYLE HOW IT WORKS ── */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              Working Together
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-3">How it works</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Simple, transparent, collaborative — from first message to shipped product.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                step: "01",
                title: "Book a free 30-min call",
                desc: "Tell me about your project. No slides needed — just a conversation about what you want to build and why.",
                icon: CalendarDays,
                color: "text-blue-500",
                bg: "bg-blue-50 dark:bg-blue-900/20",
              },
              {
                step: "02",
                title: "Get a clear proposal",
                desc: "I'll send you a detailed scope with timeline and pricing. Everything is transparent — no hidden costs, no vague estimates.",
                icon: MessageCircle,
                color: "text-violet-500",
                bg: "bg-violet-50 dark:bg-violet-900/20",
              },
              {
                step: "03",
                title: "We build together",
                desc: "Weekly check-ins, async updates, and regular demos. You have full visibility throughout the build.",
                icon: Server,
                color: "text-indigo-500",
                bg: "bg-indigo-50 dark:bg-indigo-900/20",
              },
              {
                step: "04",
                title: "Launch & relax",
                desc: "I handle the deployment, monitoring setup, and handover. Ongoing support available after launch.",
                icon: Rocket,
                color: "text-emerald-500",
                bg: "bg-emerald-50 dark:bg-emerald-900/20",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors">
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider ${item.color}`}>Step {item.step}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-800 dark:to-zinc-900">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative p-12 md:p-20">
            <div className="max-w-2xl">
              <p className="text-zinc-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Ready to start?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
                Not sure which service fits your project?
              </h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Book a free 30-minute call. I'll ask the right questions and recommend exactly what you need — no pressure, no upselling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/schedule-call">
                  <Button size="lg" className="h-14 px-10 text-base rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 border-0 font-semibold shadow-xl transition-all hover:-translate-y-0.5">
                    Book a Free Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="h-14 px-10 text-base rounded-xl border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all">
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
