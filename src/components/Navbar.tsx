"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Layout";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b-2 border-foreground bg-background py-4">
            <Container className="flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-black tracking-tighter uppercase"
                >
                    <a href="/">automaez</a>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden gap-8 md:flex">
                    <a href="/" className="link-tactile uppercase text-sm font-bold">Home</a>
                    <a href="/services" className="link-tactile uppercase text-sm font-bold">Services</a>
                    <a href="/pricing" className="link-tactile uppercase text-sm font-bold">Pricing</a>
                    <a href="/#portfolio" className="link-tactile uppercase text-sm font-bold">Portfolio</a>
                    <a href="/case-studies" className="link-tactile uppercase text-sm font-bold">Case Studies</a>
                    <a href="/contact" className="link-tactile uppercase text-sm font-bold">Contact</a>
                </div>

                <div className="flex gap-4 items-center">
                    <button className="hidden sm:block border-2 border-foreground bg-accent px-4 py-2 text-xs font-bold text-background uppercase tracking-wider transition-all hover:bg-background hover:text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                        Get Started
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 border-2 border-foreground md:hidden bg-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[1px] active:translate-y-[1px]"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute left-0 right-0 top-full border-b-2 border-foreground bg-background p-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            <a href="/" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase tracking-tighter">Home</a>
                            <a href="/services" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase tracking-tighter">Services</a>
                            <a href="/pricing" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase tracking-tighter">Pricing</a>
                            <a href="/#portfolio" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase tracking-tighter">Portfolio</a>
                            <a href="/case-studies" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase tracking-tighter">Case Studies</a>
                            <a href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase tracking-tighter">Contact</a>
                            <button className="w-full border-2 border-foreground bg-accent px-6 py-4 text-sm font-black text-background uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
