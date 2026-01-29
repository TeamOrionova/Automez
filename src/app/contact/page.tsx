"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { Container, Section } from "@/components/Layout";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <Section className="bg-background border-b-2 border-foreground">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-black uppercase tracking-tighter md:text-8xl">
                            SUBMIT <br />
                            <span className="text-accent">BRIEF.</span>
                        </h1>
                        <p className="mt-8 text-xl font-medium tracking-tight text-foreground/80 md:text-2xl">
                            Ready to build your next digital platform?
                            Tell us your requirements and our studio will evaluate your blueprint within 24 hours.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="grid gap-20 lg:grid-cols-2">
                    {/* Form */}
                    <ContactForm />

                    {/* Info */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-[0.3em] opacity-40 mb-6">Direct Comms</h3>
                            <div className="space-y-6">
                                <a href="tel:+919953146283" className="group flex items-center gap-6 p-4 border-2 border-transparent hover:border-foreground transition-all">
                                    <div className="bg-foreground text-background p-4">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase opacity-50">Direct Line</p>
                                        <p className="text-2xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors">+91 9953 146 283</p>
                                    </div>
                                </a>
                                <a href="mailto:hello@automaez.com" className="group flex items-center gap-6 p-4 border-2 border-transparent hover:border-foreground transition-all">
                                    <div className="bg-foreground text-background p-4">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase opacity-50">Email Dispatch</p>
                                        <p className="text-2xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors break-all">hello@automaez.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="bg-muted/30 p-8 border-2 border-foreground italic text-lg font-bold">
                            &quot;automaez is not just a service provider. We are your digital architects.
                            We build platforms that command attention.&quot;
                        </div>
                    </div>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
