"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { Card } from "./Card";
import { Container, Section } from "./Layout";
import { ArrowRight, Box, Layers, MousePointer2, Zap, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { useState } from "react";

const snappyTransition = {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
};

export function Hero() {
    return (
        <Section className="flex min-h-[80vh] flex-col justify-center border-b-2 border-foreground">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={snappyTransition}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl md:text-9xl">
                        CRAFT. <br />
                        <span className="text-accent">CONVERT.</span>
                    </h1>
                    <p className="mt-8 max-w-xl text-xl font-medium leading-relaxed tracking-tight text-foreground/80 md:text-2xl">
                        We build high-performance websites for people who don't settle for "good enough."
                        Tactile design. Precision code. Absolute conversion.
                    </p>
                    <div className="mt-12 flex gap-4">
                        <Button href="/contact" className="group bg-accent text-background">
                            Start Building
                            <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button href="/#portfolio" variant="secondary" className="px-6">
                            View Deployments
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}

export function Statement() {
    return (
        <Section className="bg-foreground text-background">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="py-12"
                >
                    <h2 className="text-2xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-7xl">
                        &quot;WE DON'T DO GENERIC TEMPLATES. WE BUILD DIGITAL ARCHITECTURE
                        THAT DEMANDS ATTENTION AND DRIVES SALES.&quot;
                    </h2>
                </motion.div>
            </Container>
        </Section>
    );
}

const CAPABILITIES = [
    {
        title: "High-Conversion UI",
        description: "Tactile, high-performance interfaces designed to convert scrolling into revenue.",
        icon: MousePointer2,
    },
    {
        title: "E-Commerce Platforms",
        description: "Scale-ready retail platforms designed for complex inventory and high-volume sales.",
        icon: Box,
    },
    {
        title: "Performance Ops",
        description: "Sub-second load times and technical SEO dominance for absolute market visibility.",
        icon: Layers,
    },
    {
        title: "Brand Frameworks",
        description: "Cohesive visual identities that establish immediate authority and trust.",
        icon: Zap,
    },
];



export function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("ALL");

    const categories = ["ALL", "E-COMMERCE", "INTERIOR DESIGN", "FITNESS", "BUSINESS", "TRAVEL"];

    const filteredProjects = activeFilter === "ALL" 
        ? PROJECTS 
        : PROJECTS.filter(project => project.category.toUpperCase() === activeFilter);

    return (
        <Section id="portfolio" className="bg-background">
            <Container>
                <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div className="max-w-xl">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">Case Studies</h3>
                        <h2 className="text-3xl font-black uppercase tracking-tighter sm:text-4xl md:text-6xl">
                            Digital <br /> Deployments.
                        </h2>
                    </div>
                    <p className="max-w-sm font-medium text-foreground/60 tracking-tight">
                        Our frameworks aren't theoretical. They are battle-tested architectures deployed in high-stakes environments.
                    </p>
                </div>

                {/* Category Filter Bar */}
                <div className="mb-12 flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`border-2 border-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                                activeFilter === category
                                    ? "bg-foreground text-background"
                                    : "bg-background text-foreground hover:bg-foreground/10"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="block group relative overflow-hidden border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                                {/* External Link Icon */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute top-4 right-4 z-10 bg-background border-2 border-foreground p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-foreground hover:text-background"
                                    aria-label="View live site"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </a>

                                <a href={`/portfolio/${project.slug}`} className="block">
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="p-6 border-t-2 border-foreground">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-accent">{project.category}</span>
                                        <h4 className="mt-2 text-2xl font-black uppercase tracking-tighter">{project.title}</h4>
                                        <p className="mt-4 text-sm font-medium text-foreground/70 leading-relaxed">
                                            {project.desc}
                                        </p>
                                        <div className="mt-8">
                                            <div className="text-xs font-bold uppercase tracking-widest border-b-2 border-transparent group-hover:border-accent transition-all inline-block">
                                                View Case Study →
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

export function Capabilities() {
    return (
        <Section id="capabilities">
            <Container>
                <div className="mb-16">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em]">Our Capabilities</h3>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {CAPABILITIES.map((cap, i) => {
                        const Icon = cap.icon;
                        return (
                            <Card key={cap.title}>
                                {Icon && <Icon className="mb-6 h-8 w-8 text-accent" />}
                                <h4 className="mb-4 text-2xl font-black uppercase tracking-tighter">{cap.title}</h4>
                                <p className="text-foreground/70 font-medium tracking-tight">
                                    {cap.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}

export function Footer() {
    return (
        <footer className="border-t-2 border-foreground bg-background py-12">
            <Container>
                <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
                    <div>
                        <h2 className="text-3xl font-black tracking-tighter uppercase">automaez</h2>
                        <p className="mt-2 font-medium opacity-60">© 2026 Tactile Web Studio.</p>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="link-tactile uppercase">Twitter</a>
                        <a href="#" className="link-tactile uppercase">Instagram</a>
                        <a href="#" className="link-tactile uppercase">Contact</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
