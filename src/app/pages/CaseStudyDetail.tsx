import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CaseStudyDetail() {
  const { id } = useParams();

  // Mock data - in a real app, this would come from a CMS or API
  const caseStudyData = {
    "inventory-optimizer": {
      title: "AI-Powered Inventory Optimizer",
      subtitle: "Enterprise Resource Planning",
      client: "Global Logistics Co.",
      year: "2025",
      tags: ["Python", "Django", "PostgreSQL", "OpenAI"],
      heroImage: "https://images.unsplash.com/photo-1586528116311-ad86d70dfdef?auto=format",
      problem: {
        title: "The Challenge",
        description: "Global Logistics was struggling with overstocking and stockouts due to manual inventory management across 50 major warehouses. They needed a system that could predict demand patterns and automate reordering.",
        points: [
          "Inaccurate manual demand forecasting",
          "High operational costs due to overstocking",
          "Frequent stockouts of high-demand items",
          "Fragmented data across legacy systems",
        ],
      },
      solution: {
        title: "The Solution",
        description: "I architected a Python-based demand forecasting engine integrated with their Django ERP. Using historical data and OpenAI's API, the system identifies trends and suggests optimal stock levels.",
        points: [
          "Developed predictive scaling algorithms in Python",
          "Implemented complex database schemas with PostgreSQL",
          "Integrated OpenAI for natural language analysis of market trends",
          "Built a robust background processing system with Celery",
          "Created an automated vendor reordering module",
          "Designed comprehensive API documentation for warehouse scanners",
        ],
      },
      result: {
        title: "The Impact",
        description: "The platform transformed inventory accuracy and significantly reduced waste across the supply chain.",
        metrics: [
          { value: "35%", label: "Reduction in overstock" },
          { value: "98%", label: "Inventory accuracy" },
          { value: "22%", label: "Increase in profit margin" },
          { value: "15hr", label: "Saved per week/manager" },
        ],
        testimonial: {
          quote: "Vivek's backend expertise was crucial. The system handles our complex logic effortlessly and has already paid for itself through inventory savings.",
          author: "Rajesh Kumar",
          role: "Operations Director, Global Logistics",
        },
      },
    },
    "edtech-backend": {
      title: "Scalable EdTech Backend",
      subtitle: "High-Concurrency Learning Platform",
      client: "LearnGrid Academy",
      year: "2025",
      tags: ["Python", "FastAPI", "Redis", "Docker"],
      heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format",
      problem: {
        title: "The Challenge",
        description: "LearnGrid's existing platform crashed during peak exam seasons when thousands of students logged on simultaneously. They needed a high-concurrency backend capable of handling 10k+ requests per second.",
        points: [
          "Database deadlocks during high traffic",
          "Slow API response times (>2s)",
          "Monolithic architecture limiting scale",
          "High infrastructure costs from inefficient code",
        ],
      },
      solution: {
        title: "The Solution",
        description: "I migrated their core services to a microservices architecture using FastAPI, implementing aggressive caching strategies and database load balancing.",
        points: [
          "Rebuilt performance-critical endpoints with FastAPI",
          "Implemented multi-layer caching with Redis",
          "Optimized PostgreSQL queries reducing latency by 70%",
          "Containerized services with Docker for effortless scaling",
          "Set up real-time analytics for exam monitoring",
          "Integrated robust error tracking and alerting",
        ],
      },
      result: {
        title: "The Impact",
        description: "The new platform successfully handled record traffic without a single second of downtime.",
        metrics: [
          { value: "10k+", label: "Concurrent users supported" },
          { value: "120ms", label: "Average API response time" },
          { value: "0%", label: "Downtime during peak season" },
          { value: "40%", label: "Lower cloud server costs" },
        ],
        testimonial: {
          quote: "The scalability Vivek brought to our platform solved our biggest headache. We can now focus on content knowing the engine won't fail.",
          author: "Sarah J.",
          role: "Technical Founder, LearnGrid",
        },
      },
    },
    "ecommerce-api": {
      title: "E-Commerce API Suite",
      subtitle: "Multi-Vendor Marketplace Engine",
      client: "ShopSphere Hub",
      year: "2024",
      tags: ["Django", "DRF", "PostgreSQL", "Stripe"],
      heroImage: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format",
      problem: {
        title: "The Challenge",
        description: "ShopSphere needed a robust multi-vendor backend that could handle complex commission logic, global payments, and real-time inventory updates across thousands of small businesses.",
        points: [
          "Complex vendor payout calculations",
          "Need for multi-currency payment support",
          "Race conditions in inventory management",
          "Security requirements for financial data",
        ],
      },
      solution: {
        title: "The Solution",
        description: "I developed an API-first marketplace engine using Django REST Framework, focusing on security, atomic transactions, and modular payment handlers.",
        points: [
          "Implemented atomic database transactions for inventory",
          "Built custom payment flow with Stripe Connect",
          "Designed multi-tier RBAC for vendors and admins",
          "Created extensible plugin architecture for shipping providers",
          "Optimized search performance with Elasticsearch",
          "Implemented comprehensive API rate limiting",
        ],
      },
      result: {
        title: "The Impact",
        description: "The marketplace launched successfully and scaled to $1M+ in GMV within the first 6 months.",
        metrics: [
          { value: "$1M+", label: "Total GMV Processed" },
          { value: "2500+", label: "Vendors Integrated" },
          { value: "100%", label: "Payout Accuracy" },
          { value: "Sec", label: "Order processing time" },
        ],
        testimonial: {
          quote: "Vivek's ability to handle complex financial logic with ease was impressive. The backend is solid and incredibly flexible.",
          author: "James Wilson",
          role: "CEO, ShopSphere Hub",
        },
      },
    },
  };

  const study = caseStudyData[id as keyof typeof caseStudyData];
}