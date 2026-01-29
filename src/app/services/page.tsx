"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { Container, Section } from "@/components/Layout";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { Bot, Cpu, Database, Globe, Layers, Lock, Workflow, Zap } from "lucide-react";

const SERVICES = [
    {
        title: "Premium UI/UX",
        desc: "Bespoke digital experiences with sharp interaction discipline and mechanical rhythm.",
        icon: Globe,
    },
    {
        title: "E-Commerce Systems",
        desc: "High-performance retail platforms built for conversion and scale.",
        icon: Database,
    },
    {
        title: "Brand Strategy",
        desc: "Technical brand frameworks that bridge the gap between aesthetics and function.",
        icon: Zap,
    },
    {
        title: "Technical SEO",
        desc: "Deep-layer optimization to ensure absolute market dominance and visibility.",
        icon: Layers,
    },
    {
        title: "Web Ops",
        desc: "Ultra-fast deployment pipelines and high-integrity infrastructure management.",
        icon: Cpu,
    },
    {
        title: "Security Frameworks",
        desc: "Fortified digital systems protected by mission-critical security protocols.",
        icon: Lock,
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <Section className="bg-background border-b-2 border-foreground">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-black uppercase tracking-tighter md:text-8xl">
                            AUTO <br />
                            <span className="text-accent">MAEZ.</span>
                        </h1>
                        <p className="mt-8 text-xl font-medium tracking-tight text-foreground/80 md:text-2xl">
                            We specialize in creating high-conversion web platforms for ambitious creators.
                            Our systems are built to bridge the gap between aesthetics and function.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <Card key={s.title} className="flex flex-col h-full p-10">
                                    <Icon className="text-accent mb-6 h-10 w-10" />
                                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{s.title}</h3>
                                    <p className="font-medium text-foreground/70 tracking-tight flex-grow mb-8">
                                        {s.desc}
                                    </p>
                                    <button className="text-xs font-bold uppercase tracking-[0.2em] flex items-center group">
                                        Architect Scope
                                        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                                    </button>
                                </Card>
                            );
                        })}
                    </div>
                </Container>
            </Section>

            <Section className="bg-foreground text-background">
                <Container className="text-center">
                    <h2 className="text-4xl font-black tracking-tighter uppercase md:text-6xl mb-12">
                        READY TO BUILD YOUR <br /> DIGITAL PLATFORM?
                    </h2>
                    <a href="/contact">
                        <Button className="bg-accent border-accent text-background">
                            Initiate Project Brief
                        </Button>
                    </a>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
