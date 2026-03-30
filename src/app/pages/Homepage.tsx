import { Link } from "react-router";
import { ArrowRight, Code2, BrainCircuit, Bot, Server, CheckCircle2, Zap, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState, useEffect } from "react";

const ROLES = [
  "Backend Engineer",
  "AI Systems Engineer",
  "API Architect",
  "Automation Engineer",
];

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Homepage() {
  const services = [
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Scalable Django & FastAPI backends — REST APIs, microservices, PostgreSQL optimization, and secure auth systems.",
      gradient: "from-blue-500/10 to-indigo-500/10",
      border: "border-blue-500/20",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
    },
    {
      icon: BrainCircuit,
      title: "AI Engineering",
      description:
        "LLM integrations with OpenAI, Anthropic & Gemini. RAG pipelines, vector databases, and intelligent API layers.",
      gradient: "from-violet-500/10 to-purple-500/10",
      border: "border-violet-500/20",
      iconColor: "text-violet-500",
      iconBg: "bg-violet-500/10",
    },
    {
      icon: Bot,
      title: "AI Agent Systems",
      description:
        "Design and deploy autonomous AI agents — multi-step reasoning, tool use, memory layers and agentic workflows.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      border: "border-emerald-500/20",
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-500/10",
    },
  ];

  const iconStack = [
    { label: "Python", icon: "/python.svg" },
    { label: "Django", icon: "/django.svg" },
    { label: "FastAPI", icon: "/fastapi.svg" },
    { label: "Flask", icon: "/flask.svg" },
    { label: "React", icon: "/react.svg" },
    { label: "PostgreSQL", icon: "/postgresql.svg" },
    { label: "MySQL", icon: "/mysql.svg" },
    { label: "Redis", icon: "/redis.svg" },
    { label: "Celery", icon: "/celery.svg" },
    { label: "Docker", icon: "/docker.svg" },
    { label: "Git", icon: "/git.svg" },
    { label: "GitLab", icon: "/gitlab.svg" },
    { label: "LangChain", icon: "/langchain.svg" },
    { label: "LangGraph", icon: "/langgraph.svg" },
    { label: "PyTorch", icon: "/pytorch.svg" },
    { label: "OpenAI", icon: null },
    { label: "CrewAI", icon: null },
    { label: "Pinecone", icon: null },
    { label: "AWS", icon: null },
    { label: "REST APIs", icon: null },
  ];

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Shipped" },
    { value: "10+", label: "AI Systems Built" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  const agentCapabilities = [
    { icon: BrainCircuit, text: "RAG & Vector Search Pipelines" },
    { icon: Bot, text: "Multi-Agent Orchestration (CrewAI / LangGraph)" },
    { icon: Code2, text: "Custom Tool & Function Calling" },
    { icon: Zap, text: "Real-time Streaming & WebSocket APIs" },
    { icon: Shield, text: "Secure LLM API Gateway Design" },
    { icon: Server, text: "Production-grade Agent Memory Systems" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative max-w-[1440px] mx-auto px-4 md:px-8 pt-24 pb-32 overflow-hidden">
        {/* Background glow orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-600/10 dark:bg-violet-500/8 blur-[120px]" />
          <div className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 dark:bg-blue-500/8 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Status pill */}
          <div className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm text-sm font-medium text-zinc-600 dark:text-zinc-400 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for freelance &amp; remote roles — Q2 2026
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[86px] font-bold mb-6 tracking-tighter leading-[1.05]">
            <span className="block mb-2">Vivek Singh Rajawat.</span>
            <span className="block min-h-[1.1em]">
              <RotatingRole />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I build{" "}
            <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
              high-performance backend systems
            </span>{" "}
            and{" "}
            <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
              production-ready AI agents
            </span>{" "}
            — from scalable Django APIs to autonomous multi-agent pipelines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Link to="/schedule-call" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 text-base rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-0 shadow-xl shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:-translate-y-0.5"
              >
                Book a Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 text-base rounded-xl border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Services
              </Button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-2xl">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {s.value}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK TICKER ── */}
      <section className="relative py-6 border-y border-zinc-100 dark:border-zinc-800 overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="flex gap-4 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...iconStack, ...iconStack].map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm font-medium text-zinc-600 dark:text-zinc-300 shrink-0 shadow-sm"
            >
              {tech.icon ? (
                <img src={tech.icon} alt={tech.label} className="w-4 h-4 object-contain" />
              ) : null}
              {tech.label}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent" />
      </section>

      {/* ── SERVICES ── */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            What I Build
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Expertise that ships.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-lg">
            Backend systems &amp; AI pipelines — designed, built, and shipped by one engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl border ${service.border} bg-gradient-to-br ${service.gradient} p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50`}
            >
              <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-6`}>
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" className="rounded-xl h-12 px-8">
              See All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── AI AGENT CAPABILITIES ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-50/60 via-transparent to-transparent dark:from-violet-950/20" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800">
                AI Agent Engineering
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Building agents that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  think & act.
                </span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
                Beyond simple chatbots — I architect multi-step, tool-using AI agents that integrate
                with your existing backend, APIs, and data sources to solve real business problems autonomously.
              </p>
              <Link to="/schedule-call">
                <Button className="h-12 px-8 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 border-0 shadow-lg shadow-violet-500/20">
                  Discuss Your AI Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {agentCapabilities.map((cap) => (
                <div
                  key={cap.text}
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-violet-300 dark:hover:border-violet-700 transition-colors group"
                >
                  <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                    <cap.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                    {cap.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            How I Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            From idea to production.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-lg">
            A structured, collaborative process that delivers at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Discovery", desc: "Deep dive into your goals, stack, and technical requirements.", color: "text-blue-500" },
            { num: "02", title: "Architecture", desc: "Design the system — APIs, data models, agent workflows, integrations.", color: "text-violet-500" },
            { num: "03", title: "Development", desc: "Build with Python-first principles: clean, tested, documented code.", color: "text-indigo-500" },
            { num: "04", title: "Deploy & Iterate", desc: "Ship to production, monitor, and improve continuously.", color: "text-emerald-500" },
          ].map((step, index) => (
            <div key={index} className="relative group">
              <div className={`text-7xl font-black ${step.color} opacity-15 group-hover:opacity-25 transition-opacity mb-2 leading-none`}>
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
              {index < 3 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-zinc-200 to-transparent dark:from-zinc-800" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 pb-32">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700" />
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)"
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              Let's build something great.
            </h2>
            <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether it's a scalable API, an AI agent pipeline, or a complete backend —
              I'm ready to help you ship fast and ship right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule-call">
                <Button size="lg" className="h-14 px-10 text-base rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 border-0 shadow-xl font-semibold transition-all hover:-translate-y-0.5">
                  Schedule a Free Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="h-14 px-10 text-base rounded-xl bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white transition-all hover:-translate-y-0.5">
                  Send a Message
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-indigo-200">
              {["Free 30-min consultation", "Usually responds within 24h", "No commitment required"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
