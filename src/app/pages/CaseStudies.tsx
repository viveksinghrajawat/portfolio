import { Link } from "react-router";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CaseStudies() {
  const caseStudies = [
    {
      id: "inventory-optimizer",
      title: "AI-Powered Inventory Optimizer",
      description: "A Python-based system that uses machine learning to predict stock requirements and automate reordering for 500+ SKUs.",
      image: "https://images.unsplash.com/photo-1586528116311-ad86d70dfdef?auto=format",
      tags: ["Python", "Django", "PostgreSQL", "OpenAI"],
      year: "2025",
    },
    {
      id: "edtech-backend",
      title: "Scalable EdTech Backend",
      description: "Designed and implemented a high-concurrency RESTful API architecture supporting 10k+ concurrent students and real-time streaming.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format",
      tags: ["Python", "FastAPI", "Redis", "Docker"],
      year: "2025",
    },
    {
      id: "data-processing-engine",
      title: "Real-Time Data Engine",
      description: "A distributed system for processing large volumes of analytical data using asynchronous task queues and efficient database indexing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format",
      tags: ["Celery", "RabbitMQ", "Python", "Indexing"],
      year: "2024",
    },
    {
      id: "ecommerce-api",
      title: "E-Commerce API Suite",
      description: "Complete backend for a multi-vendor marketplace with secure payment gateway integrations and complex order management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format",
      tags: ["Django REST Framework", "PostgreSQL", "Stripe"],
      year: "2024",
    },
    {
      id: "logistics-tracker",
      title: "Fleet Logistics Tracker",
      description: "Real-time tracking and routing optimization for a logistics firm, reducing delivery times by 15% through smarter geospatial queries.",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format",
      tags: ["PySpark", "GIS", "Python", "API"],
      year: "2024",
    },
    {
      id: "fintech-security",
      title: "FinTech Security Architecture",
      description: "Hardening a banking application's backend against common vulnerabilities while implementing robust OAuth2 authentication flows.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format",
      tags: ["Security", "OAuth2", "Django", "Vault"],
      year: "2023",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            Explore real projects and the results I've delivered for clients. From startups to established businesses, each project tells a unique story.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge variant="default" className="cursor-pointer">All</Badge>
          <Badge variant="outline" className="cursor-pointer">SaaS</Badge>
          <Badge variant="outline" className="cursor-pointer">AI</Badge>
          <Badge variant="outline" className="cursor-pointer">Design</Badge>
          <Badge variant="outline" className="cursor-pointer">Mobile</Badge>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.id} to={`/case-studies/${study.id}`}>
              <Card className="overflow-hidden border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group h-full">
                <div className="aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{study.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <Card className="border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <CardContent className="p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want Similar Results?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help you achieve your project goals with the same level of quality and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule-call">
                <Button size="lg" className="w-full sm:w-auto">
                  Schedule a Call
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
