"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { Container, Section } from "@/components/Layout";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = [
    {
        slug: "puchi-puchi",
        title: "Puchi Puchi",
        category: "E-Commerce Platform",
        client: "Boutique Fashion Retailer",
        timeline: "4 weeks",
        budget: "$1,200",
        image: "/projects/puchi-puchi.png",
        challenge: "A growing fashion boutique needed to move from Instagram-only sales to a professional e-commerce platform. They required inventory management, secure payments, and real-time order notifications without the complexity of Shopify's monthly fees.",
        solution: "Built a custom Next.js e-commerce platform with Supabase for authentication and database, Stripe for payments, and Telegram Bot API for instant order notifications. Implemented server-side price verification to prevent manipulation and created a role-based admin panel for inventory management.",
        results: [
            { metric: "40%", label: "Increase in Sales", description: "First month after launch" },
            { metric: "2.3s", label: "Average Load Time", description: "98/100 Lighthouse score" },
            { metric: "65%", label: "Mobile Conversion", description: "Up from 35% on Instagram" }
        ],
        techStack: ["Next.js 14", "Supabase", "Stripe", "Telegram Bot API", "Zustand", "shadcn/ui"],
        features: [
            "Product catalog with categories and filters",
            "Shopping cart with persistent state",
            "Secure checkout with Stripe integration",
            "User authentication and order history",
            "Admin dashboard for inventory management",
            "Real-time order notifications via Telegram",
            "Server-side price verification",
            "Mobile-responsive design"
        ],
        testimonial: {
            quote: "The e-commerce platform they built handles our inventory perfectly. The admin panel makes managing orders a breeze. Sales increased 40% in the first month!",
            author: "Priya Sharma",
            role: "Owner, Puchi Puchi"
        },
        link: "https://puchi-puchi.vercel.app"
    },
    {
        slug: "vanya-vastu",
        title: "Vanya Vastu",
        category: "Interior Design Portfolio",
        client: "Luxury Interior Design Studio",
        timeline: "2 weeks",
        budget: "$450",
        image: "/projects/vanya-vastu.png",
        challenge: "A high-end interior design studio specializing in Vastu principles needed a sophisticated online presence to attract premium clients. Their existing website was outdated and didn't showcase their design philosophy or completed projects effectively.",
        solution: "Designed a visual-first portfolio platform with immersive project galleries, detailed material specifications, and educational content about Vastu principles. Implemented smooth animations with Framer Motion and optimized high-resolution images for fast loading without quality loss.",
        results: [
            { metric: "3x", label: "Consultation Requests", description: "Monthly inquiries increased" },
            { metric: "85%", label: "Mobile Traffic", description: "Perfectly responsive design" },
            { metric: "4.2min", label: "Average Session", description: "Up from 1.1min previously" }
        ],
        techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
        features: [
            "Immersive full-screen project galleries",
            "Before/after project comparisons",
            "Material palette displays",
            "Vastu principles educational content",
            "Client journey mapping",
            "Consultation booking form",
            "SEO optimization for local search",
            "Fast image loading with Next.js Image"
        ],
        testimonial: {
            quote: "Professional, affordable, and delivered exactly what we needed. The site perfectly captures our design philosophy and has tripled our consultation requests.",
            author: "Amit Patel",
            role: "Founder, Vanya Vastu"
        },
        link: "https://vanya-vastu.vercel.app"
    },
    {
        slug: "roop-stone-impex",
        title: "Roop Stone Impex",
        category: "B2B Trading Platform",
        client: "Stone Import/Export Business",
        timeline: "3 weeks",
        budget: "$800",
        image: "/projects/roop-stone-impex.png",
        challenge: "An established stone trading company was losing international clients due to slow email-based inquiry processes. They needed a digital catalog with bulk inquiry capabilities and multi-language support for global markets.",
        solution: "Built a professional B2B platform with searchable product catalog, automated inquiry routing, and quote management system. Integrated multi-language support for international markets and created an admin dashboard for real-time inquiry pipeline visibility.",
        results: [
            { metric: "50%", label: "Faster Response Time", description: "Automated inquiry routing" },
            { metric: "120+", label: "Products Listed", description: "Comprehensive catalog" },
            { metric: "5x", label: "International Inquiries", description: "Multi-language support" }
        ],
        techStack: ["Next.js 14", "TypeScript", "Supabase", "Resend", "Tailwind CSS"],
        features: [
            "Searchable product catalog with filters",
            "Bulk inquiry system",
            "Multi-language support (English, Hindi, Chinese)",
            "Automated email notifications",
            "Quote request management",
            "Supplier dashboard",
            "Product specifications and images",
            "Mobile-responsive design"
        ],
        testimonial: {
            quote: "Fast turnaround, modern design, and excellent communication. Our new site has significantly improved our online presence and international reach.",
            author: "Rajesh Kumar",
            role: "Director, Roop Stone Impex"
        },
        link: "https://roop-stone-impex.vercel.app"
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <Section className="bg-background border-b-2 border-foreground">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
                            CASE <br />
                            <span className="text-accent">STUDIES.</span>
                        </h1>
                        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-foreground/80">
                            Real projects. Real results. Real impact on our clients' businesses.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Case Studies */}
            {CASE_STUDIES.map((study, index) => (
                <Section key={study.slug} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <Container>
                        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-start">
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1"
                            >
                                <div className="border-2 border-foreground overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                    <img src={study.image} alt={study.title} className="w-full" />
                                </div>
                                <div className="mt-6 flex gap-4">
                                    <a href={study.link} target="_blank" rel="noopener noreferrer">
                                        <Button className="bg-accent text-background border-accent">
                                            View Live Site →
                                        </Button>
                                    </a>
                                    <Link href={`/portfolio/${study.slug}`}>
                                        <Button variant="secondary">
                                            Full Details
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <div className="mb-6">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-2">{study.category}</p>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                                        {study.title}
                                    </h2>
                                    <div className="flex flex-wrap gap-4 text-sm font-bold text-foreground/60">
                                        <span className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            {study.timeline}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Users className="h-4 w-4" />
                                            {study.client}
                                        </span>
                                        <span>Budget: {study.budget}</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-3">The Challenge</h3>
                                        <p className="text-foreground/80 font-medium leading-relaxed">
                                            {study.challenge}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-3">The Solution</h3>
                                        <p className="text-foreground/80 font-medium leading-relaxed">
                                            {study.solution}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4">Results</h3>
                                        <div className="grid gap-4 sm:grid-cols-3">
                                            {study.results.map((result) => (
                                                <div key={result.label} className="border-2 border-foreground bg-background p-4">
                                                    <div className="text-3xl font-black mb-1">{result.metric}</div>
                                                    <div className="text-xs font-black uppercase tracking-wider mb-1">{result.label}</div>
                                                    <div className="text-xs text-foreground/60">{result.description}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border-l-4 border-accent pl-6 py-2 bg-muted/30">
                                        <p className="text-lg font-medium italic mb-3">
                                            "{study.testimonial.quote}"
                                        </p>
                                        <p className="font-black uppercase text-sm">{study.testimonial.author}</p>
                                        <p className="text-xs text-foreground/60">{study.testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </Section>
            ))}

            {/* CTA */}
            <Section className="bg-foreground text-background">
                <Container className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6">
                        READY FOR YOUR SUCCESS STORY?
                    </h2>
                    <p className="text-lg sm:text-xl font-medium tracking-tight text-background/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
                        Let's build something that drives real results for your business.
                    </p>
                    <Button href="/contact" className="bg-background text-foreground border-background">
                        START YOUR PROJECT
                    </Button>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
