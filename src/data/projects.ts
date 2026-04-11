export interface Project {
    slug: string;
    title: string;
    category: string;
    tagline: string;
    desc: string;
    image: string;
    link: string;
    tech: string[];
    features: string[];
    problem: string;
    solution: string;
}

export const PROJECTS: Project[] = [
    {
        slug: "puchi-puchi",
        title: "Puchi Puchi",
        category: "E-Commerce",
        tagline: "High-conversion retail platform with real-time order orchestration.",
        desc: "A full-stack e-commerce system built for scale and security. Features complete cart management, Supabase authentication, server-side price verification, and automated Telegram notifications. Includes role-based admin panel for inventory and order management.",
        image: "/projects/puchi-puchi.png",
        link: "https://puchi-puchi.vercel.app",
        tech: ["Next.js 14", "Supabase", "Tailwind CSS", "Zustand", "shadcn/ui", "Telegram Bot API"],
        features: [
            "Full cart and checkout flow",
            "Supabase auth and database",
            "Server-side price verification",
            "Telegram order notifications",
            "Admin panel with role management"
        ],
        problem: "Client needed a secure, scalable e-commerce platform with real-time order management and automated notifications. Existing solutions lacked the flexibility for custom workflows and direct communication channels.",
        solution: "Built a custom Next.js platform with Supabase backend for authentication and data persistence. Implemented server-side price verification to prevent client-side manipulation, integrated Telegram Bot API for instant order notifications, and created a role-based admin system for complete operational control."
    },
    {
        slug: "ethereal-jewellery",
        title: "Ethereal Jewellery",
        category: "E-Commerce",
        tagline: "Luxury jewellery showcase with precision product presentation.",
        desc: "A premium e-commerce experience designed for high-end jewellery retail. Features elegant product galleries, detailed item specifications, and seamless checkout integration. Built with performance and visual fidelity as core principles.",
        image: "/projects/ethereal-jewellery.png",
        link: "https://ethereal-jewellery.vercel.app",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe"],
        features: [
            "High-resolution product galleries",
            "Advanced filtering and search",
            "Secure payment integration",
            "Wishlist and favorites system",
            "Mobile-optimized checkout"
        ],
        problem: "Luxury jewellery brand required an online presence that matched their premium positioning. Standard e-commerce templates failed to convey the craftsmanship and exclusivity of their pieces.",
        solution: "Designed a bespoke platform with focus on visual storytelling and product detail. Implemented high-resolution image optimization, smooth animations for premium feel, and streamlined checkout flow. Every interaction reinforces brand luxury and builds purchase confidence."
    },
    {
        slug: "forge-fitness",
        title: "Forge Fitness",
        category: "Fitness",
        tagline: "Performance-driven fitness platform with member management.",
        desc: "A comprehensive fitness center platform featuring class schedules, trainer profiles, membership management, and workout tracking. Built for gyms that demand operational efficiency and member engagement.",
        image: "/projects/forge-fitness.png",
        link: "https://forge-fitness-smoky.vercel.app",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        features: [
            "Class scheduling and booking",
            "Trainer profile management",
            "Membership tier system",
            "Workout progress tracking",
            "Mobile-responsive design"
        ],
        problem: "Fitness center needed a digital platform to manage growing membership base, class schedules, and trainer coordination. Manual processes were creating bottlenecks and limiting growth potential.",
        solution: "Developed an integrated platform that handles member onboarding, class bookings, and trainer schedules in one system. Automated notifications keep members engaged, while admin dashboard provides real-time operational insights. Result: streamlined operations and improved member retention."
    },
    {
        slug: "atelier-stone",
        title: "Atelier Stone",
        category: "Interior Design",
        tagline: "Architectural portfolio with immersive project showcases.",
        desc: "A sophisticated portfolio platform for a premium stone and interior design studio. Features project galleries, material specifications, and inquiry system. Designed to convert high-value leads through visual authority.",
        image: "/projects/atelier-stone.png",
        link: "https://atelier-stone.vercel.app",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Contentful"],
        features: [
            "Immersive project galleries",
            "Material catalog with specs",
            "Lead capture forms",
            "Before/after comparisons",
            "SEO-optimized content"
        ],
        problem: "High-end stone supplier and design studio lacked digital presence to showcase their premium work. Potential clients couldn't visualize the quality and scale of completed projects.",
        solution: "Created a visual-first portfolio platform with large-format imagery, detailed project case studies, and material specifications. Implemented smooth transitions and interactions that mirror the tactile quality of their work. Lead forms strategically placed to capture high-intent prospects."
    },
    {
        slug: "roop-stone-impex",
        title: "Roop Stone Impex",
        category: "Business",
        tagline: "B2B stone trading platform with catalog management.",
        desc: "A professional B2B platform for stone import/export business. Features comprehensive product catalog, bulk inquiry system, and supplier management. Built for international trade operations and high-volume transactions.",
        image: "/projects/roop-stone-impex.png",
        link: "https://roop-stone-impex.vercel.app",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Resend"],
        features: [
            "Extensive product catalog",
            "Bulk inquiry system",
            "Multi-language support",
            "Supplier dashboard",
            "Quote request management"
        ],
        problem: "Stone trading company needed to digitize their catalog and streamline B2B inquiries. Manual quote processes were slow and error-prone, limiting their ability to serve international clients efficiently.",
        solution: "Built a robust B2B platform with searchable product catalog, automated inquiry routing, and quote management system. Integrated multi-language support for international markets. Admin dashboard provides real-time visibility into inquiry pipeline and conversion metrics."
    },
    {
        slug: "shilpa-interiors",
        title: "Shilpa Interiors",
        category: "Interior Design",
        tagline: "Modern interior design portfolio with project storytelling.",
        desc: "A clean, contemporary portfolio for an interior design firm specializing in residential and commercial spaces. Features detailed project case studies, design philosophy, and client testimonials. Optimized for lead generation.",
        image: "/projects/shilpa-interiors.png",
        link: "https://shilpa-interiors.vercel.app",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
        features: [
            "Project case studies",
            "Service breakdown",
            "Client testimonials",
            "Design process visualization",
            "Contact and consultation booking"
        ],
        problem: "Interior design firm had strong portfolio but weak online presence. Potential clients couldn't understand their design process or see the full scope of completed projects.",
        solution: "Designed a narrative-driven portfolio that walks visitors through each project's journey. Implemented CMS for easy content updates, optimized images for fast loading, and created clear conversion paths. Result: increased consultation bookings and higher-quality leads."
    },
    {
        slug: "srk-interior",
        title: "SRK Interior",
        category: "Interior Design",
        tagline: "Precision-engineered portfolio for contemporary design firm.",
        desc: "A modern architectural portfolio focusing on sleek lines and high-end finishes. Features immersive project galleries, material specifications, and streamlined inquiry process. Built to establish authority in luxury interior market.",
        image: "/projects/srk-interior.png",
        link: "https://srk-interior.vercel.app",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
        features: [
            "Full-screen project galleries",
            "Material and finish details",
            "3D space visualization",
            "Mobile-optimized experience",
            "Fast page transitions"
        ],
        problem: "Contemporary design firm needed a digital presence that matched their minimalist aesthetic and premium positioning. Existing website felt dated and didn't showcase their attention to detail.",
        solution: "Created a sleek, performance-focused portfolio with emphasis on visual hierarchy and white space. Implemented smooth page transitions, optimized high-resolution imagery, and designed intuitive navigation. Every element reinforces their design philosophy of precision and clarity."
    },
    {
        slug: "vanya-vastu",
        title: "Vanya Vastu",
        category: "Interior Design",
        tagline: "Luxury interior design portfolio with warm, tactile storytelling.",
        desc: "A sophisticated portfolio platform featuring minimalist aesthetics and warm visual narratives. Showcases residential and commercial projects with emphasis on spatial harmony and material authenticity. Designed for high-net-worth clientele.",
        image: "/projects/vanya-vastu.png",
        link: "https://vanya-vastu.vercel.app",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
        features: [
            "Immersive project narratives",
            "Vastu-compliant design showcase",
            "Material palette displays",
            "Client journey mapping",
            "Consultation booking system"
        ],
        problem: "Luxury interior design studio specializing in Vastu principles needed to communicate their unique approach to high-end clients. Standard portfolio templates couldn't convey the depth of their design philosophy.",
        solution: "Built a custom platform that balances visual elegance with educational content about Vastu principles. Implemented storytelling approach for each project, showing the journey from concept to completion. Result: positioned firm as thought leaders in luxury Vastu-compliant design."
    },
    {
        slug: "wanderlust-india",
        title: "Wanderlust India Premium",
        category: "Travel",
        tagline: "Bespoke travel platform showcasing India's soul through premium experiences.",
        desc: "A luxury travel agency platform featuring curated itineraries, destination guides, and seamless booking integration. Built to convert high-value travelers seeking authentic, premium experiences across India.",
        image: "/projects/wanderlust-india.png",
        link: "https://wanderlust-india-premium.vercel.app",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Mapbox"],
        features: [
            "Curated itinerary builder",
            "Interactive destination maps",
            "Premium experience packages",
            "Real-time availability",
            "Multi-step booking flow"
        ],
        problem: "Premium travel agency struggled to differentiate from generic booking platforms. Their unique, curated approach to Indian travel wasn't translating online, resulting in lost high-value bookings.",
        solution: "Designed an immersive platform that showcases India through stunning visuals and compelling narratives. Implemented custom itinerary builder, integrated interactive maps, and created seamless booking experience. Every touchpoint reinforces the premium, personalized nature of their service."
    }
];
