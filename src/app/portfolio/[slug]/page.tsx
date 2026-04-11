"use client";

import { notFound, useParams } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { Container, Section } from "@/components/Layout";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Back Button */}
            <Section className="pt-8 pb-0">
                <Container>
                    <Link
                        href="/#portfolio"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors"
                    >
                        ← BACK TO WORK
                    </Link>
                </Container>
            </Section>

            {/* Hero */}
            <Section className="border-b-2 border-foreground">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl"
                    >
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-4">
                            {project.category}
                        </p>
                        <h1 className="text-5xl font-black uppercase tracking-tighter md:text-8xl mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl font-medium tracking-tight text-foreground/80 md:text-2xl">
                            {project.tagline}
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Two Column Info Bar */}
            <Section className="bg-muted/20 border-b-2 border-foreground py-12">
                <Container>
                    <div className="grid gap-12 md:grid-cols-2 md:gap-20">
                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-6">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="border-2 border-foreground bg-background px-4 py-2 text-xs font-bold uppercase tracking-wider"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Live Site Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center md:justify-end"
                        >
                            <Button
                                href={project.link}
                                className="bg-accent text-background border-accent"
                            >
                                VIEW LIVE SITE →
                            </Button>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* Problem Section */}
            <Section>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6">The Brief</h2>
                        <p className="text-lg font-medium leading-relaxed tracking-tight text-foreground/80">
                            {project.problem}
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Solution Section */}
            <Section className="bg-muted/10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6">The Build</h2>
                        <p className="text-lg font-medium leading-relaxed tracking-tight text-foreground/80">
                            {project.solution}
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Features Section */}
            <Section>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6">Key Features</h2>
                        <div className="border-2 border-foreground bg-background p-8">
                            <ul className="space-y-4">
                                {project.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-4 text-base font-medium tracking-tight"
                                    >
                                        <span className="text-accent font-black">→</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* Project Image */}
            <Section className="bg-muted/20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-2 border-foreground overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    >
                        <img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="w-full h-auto"
                        />
                    </motion.div>
                </Container>
            </Section>

            {/* Bottom CTA */}
            <Section className="bg-foreground text-background border-t-2 border-foreground">
                <Container className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-black tracking-tighter uppercase md:text-6xl mb-6">
                            READY TO BUILD?
                        </h2>
                        <p className="text-xl font-medium tracking-tight text-background/80 mb-12 max-w-2xl mx-auto">
                            Let's architect your next deployment.
                        </p>
                        <Button href="/contact" className="bg-background text-foreground border-background">
                            GET STARTED
                        </Button>
                    </motion.div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
