/**
 * Structured Data Component
 * JSON-LD schema markup for AI agents and search engines
 */

export function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "automaez",
        "alternateName": "automaez Web Development",
        "url": "https://automaez.com",
        "logo": "https://automaez.com/logo.png",
        "description": "Premium web development agency specializing in high-performance, conversion-optimized websites and digital platforms. Expert in Next.js, React, TypeScript, and modern web technologies.",
        "email": "hello@automaez.com",
        "telephone": "+919953146283",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://automaez.com"
        ],
        "foundingDate": "2024",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "5-10"
        },
        "slogan": "Craft. Convert. Command Attention."
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "automaez Web Development Services",
        "image": "https://automaez.com/og-image.png",
        "description": "Full-stack web development services including e-commerce platforms, business websites, portfolio sites, and custom web applications. Specializing in Next.js, React, and TypeScript.",
        "provider": {
            "@type": "Organization",
            "name": "automaez"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Worldwide"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "E-Commerce Platform Development",
                        "description": "Custom e-commerce solutions with cart management, payment integration, and admin panels"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Business Website Development",
                        "description": "Professional corporate websites, portfolios, and landing pages"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom Web Application Development",
                        "description": "Tailored web applications for unique business requirements"
                    }
                }
            ]
        },
        "priceRange": "$100-$1500",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "9"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "automaez",
        "url": "https://automaez.com",
        "description": "High-performance websites and digital architectures for industry leaders",
        "publisher": {
            "@type": "Organization",
            "name": "automaez"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://automaez.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
