"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1466471536344039588/eKzB5CfvduVxay0vGNlNp4uNOuRURueGDxbd31nYTkbY6qB2UotvNlDmPIeP8aKN1E9G";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            brief: formData.get("brief"),
        };

        try {
            const response = await fetch(DISCORD_WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    embeds: [
                        {
                            title: "🚀 New Brief: automaez",
                            color: 0x000000,
                            fields: [
                                { name: "Full Identity", value: data.name || "N/A", inline: true },
                                { name: "Phone (Mandatory)", value: data.phone || "N/A", inline: true },
                                { name: "Email (Optional)", value: data.email || "N/A", inline: true },
                                { name: "Mission Brief", value: data.brief || "N/A" },
                            ],
                            timestamp: new Date().toISOString(),
                        },
                    ],
                }),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="border-2 border-foreground p-8 bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {status === "success" ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                >
                    <CheckCircle2 className="h-16 w-16 text-accent mb-6" />
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Transmission Received</h3>
                    <p className="font-medium text-foreground/70 max-w-sm">
                        Your brief has been dispatched to the studio. Stand by for evaluation.
                    </p>
                    <Button onClick={() => setStatus("idle")} className="mt-8">Send Another</Button>
                </motion.div>
            ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest mb-2">Full Identity</label>
                        <input
                            required
                            name="name"
                            type="text"
                            placeholder="Commander Name"
                            className="w-full border-2 border-foreground bg-background px-4 py-3 font-bold focus:bg-accent/5 focus:outline-none transition-colors"
                        />
                    </div>
                    <div className="grid gap-4 sm:gap-6">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest mb-2">Phone Number (Required)</label>
                            <input
                                required
                                name="phone"
                                type="tel"
                                placeholder="+91 00000 00000"
                                className="w-full border-2 border-foreground bg-background px-4 py-3 font-bold focus:bg-accent/5 focus:outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest mb-2">Email (Optional)</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="name@system.com"
                                className="w-full border-2 border-foreground bg-background px-4 py-3 font-bold focus:bg-accent/5 focus:outline-none transition-colors"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest mb-2">Mission Brief</label>
                        <textarea
                            required
                            name="brief"
                            rows={4}
                            placeholder="What are we building?"
                            className="w-full border-2 border-foreground bg-background px-4 py-3 font-bold focus:bg-accent/5 focus:outline-none transition-colors"
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-accent text-background border-accent"
                    >
                        {status === "loading" ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Transmitting...</>
                        ) : (
                            <><Send className="mr-2 h-4 w-4" /> Submit Requirement</>
                        )}
                    </Button>
                    {status === "error" && (
                        <p className="text-red-600 text-sm font-bold uppercase tracking-tight text-center">
                            Transmission Failed. Please retry.
                        </p>
                    )}
                </form>
            )}
        </div>
    );
}
