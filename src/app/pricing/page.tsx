"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { Container, Section } from "@/components/Layout";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const PRICING_TIERS = [
    {
        name: "Landing Page",
        price: "$100",
        timeline: "3-5 days",
        description: "Perfect for startups and small businesses needing a professional online presence",
        features: [
            "Single page design",
            "Up to 5 sections",
            "Mobile responsive",
            "Contact form",
            "SEO optimization",
            "Vercel deployment",
            "30-day support"
        ],
        notIncluded: [
            "Backend/Database",
            "User authentication",
            "CMS integration",
            "E-commerce features"
        ],
        recommended: false
    },
    {
        name: "Business Website",
        price: "$200-$500",
        timeline: "1-2 weeks",
        description: "Multi-page websites with CMS for easy content management",
        features: [
            "Up to 10 pages",
            "CMS integration (Sanity/Contentful)",
            "Blog functionality",
            "Contact forms",
            "Image galleries",
            "SEO optimization",
            "Mobile responsive",
            "Custom domain setup",
            "30-day support"
        ],
        notIncluded: [
            "E-commerce features",
            "User authentication",
            "Payment processing"
        ],
        recommended: true
    },
    {
        name: "E-Commerce Platform",
        price: "$500-$1,500",
        timeline: "2-4 weeks",
        description: "Full-featured online stores with cart, checkout, and admin panel",
        features: [
            "Product catalog",
            "Shopping cart",
            "Checkout flow",
            "Payment integration (Stripe)",
            "User authentication",
            "Admin dashboard",
            "Order management",
            "Email notifications",
            "Inventory tracking",
            "Mobile responsive",
            "Custom domain setup",
            "30-day support"
        ],
        notIncluded: [
            "Advanced analytics",
            "Multi-vendor support",
            "Subscription billing"
        ],
        recommended: false
    },
    {
        name: "Custom Application",
        price: "$1,000+",
        timeline: "3-6 weeks",
        description: "Tailored web applications for unique business requirements",
        features: [
            "Custom functionality",
            "Database design",
            "API development",
            "User authentication",
            "Role-based access",
            "Third-party integrations",
            "Admin panel",
            "Real-time features",
            "Mobile responsive",
            "Custom domain setup",
            "60-day support"
        ],
        notIncluded: [
            "Varies by project scope"
        ],
        recommended: false
    }
];

const MAINTENANCE_PLANS = [
    {
        name: "Basic Support",
        price: "$50/month",
        features: [
            "Bug fixes",
            "Security updates",
            "Content updates (up to 2 hours/month)",
            "Email support",
            "48-hour response time"
        ]
    },
    {
        name: "Standard Support",
        price: "$100/month",
        features: [
            "Everything in Basic",
            "Feature enhancements (up to 4 hours/month)",
            "Performance monitoring",
            "Priority email support",
            "24-hour response time"
        ]
    },
    {
        name: "Premium Support",
        price: "$200/month",
        features: [
            "Everything in Standard",
            "Dedicated support (up to 8 hours/month)",
            "Emergency fixes",
            "Monthly performance reports",
            "12-hour response time"
        ]
    }
];

export default function PricingPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <Section className="bg-background border-b-2 border-foreground">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
                            TRANSPARENT <br />
                            <span className="text-accent">PRICING.</span>
                        </h1>
                        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-foreground/80">
                            No hidden fees. No surprises. Just honest pricing for quality work.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Pricing Tiers */}
            <Section>
                <Container>
                    <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {PRICING_TIERS.map((tier, i) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className={`flex flex-col h-full p-6 sm:p-8 ${tier.recommended ? 'border-4 border-accent' : ''}`}>
                                    {tier.recommended && (
                                        <div className="bg-accent text-background px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 -mt-2 -mx-2 inline-block">
                                            Recommended
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{tier.name}</h3>
                                    <div className="text-4xl font-black mb-2">{tier.price}</div>
                                    <div className="text-sm font-bold text-foreground/60 mb-4">{tier.timeline}</div>
                                    <p className="text-sm font-medium text-foreground/70 mb-6">{tier.description}</p>
                                    
                                    <div className="mb-6 flex-grow">
                                        <p className="text-xs font-black uppercase tracking-wider mb-3">Included:</p>
                                        <ul className="space-y-2">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2 text-sm">
                                                    <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-xs font-black uppercase tracking-wider mb-3">Not Included:</p>
                                        <ul className="space-y-2">
                                            {tier.notIncluded.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2 text-sm text-foreground/60">
                                                    <X className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Button href="/contact" className="w-full bg-accent text-background border-accent">
                                        Get Started
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Maintenance Plans */}
            <Section className="bg-muted/20">
                <Container>
                    <div className="mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                            Maintenance & Support
                        </h2>
                        <p className="text-lg font-medium text-foreground/70 max-w-2xl">
                            Keep your site running smoothly with ongoing support and updates.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {MAINTENANCE_PLANS.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="p-6 sm:p-8 h-full">
                                    <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{plan.name}</h3>
                                    <div className="text-3xl font-black mb-6">{plan.price}</div>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm">
                                                <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section>
                <Container>
                    <div className="max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 sm:mb-12">
                            Common Questions
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-black uppercase tracking-tighter mb-3">
                                    What's included in the 30-day support?
                                </h3>
                                <p className="text-foreground/70 font-medium">
                                    Bug fixes, minor content updates, and technical support via email. 
                                    Response time within 48 hours.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-black uppercase tracking-tighter mb-3">
                                    Can I upgrade my plan later?
                                </h3>
                                <p className="text-foreground/70 font-medium">
                                    Absolutely! We can add features and functionality as your business grows. 
                                    You'll only pay for the additional work.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-black uppercase tracking-tighter mb-3">
                                    Do you handle custom domains?
                                </h3>
                                <p className="text-foreground/70 font-medium">
                                    Yes! For Business Website tier and above, we include custom domain setup. 
                                    You'll need to purchase the domain separately (typically $10-15/year).
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-black uppercase tracking-tighter mb-3">
                                    What if I need something custom?
                                </h3>
                                <p className="text-foreground/70 font-medium">
                                    Contact us for a custom quote. We'll discuss your requirements and 
                                    provide a detailed proposal with timeline and pricing.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="bg-foreground text-background">
                <Container className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6">
                        READY TO START?
                    </h2>
                    <p className="text-lg sm:text-xl font-medium tracking-tight text-background/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
                        Get a free consultation and detailed quote for your project.
                    </p>
                    <Button href="/contact" className="bg-background text-foreground border-background">
                        GET STARTED
                    </Button>
                </Container>
            </Section>

            <Footer />
        </main>
    );
}
