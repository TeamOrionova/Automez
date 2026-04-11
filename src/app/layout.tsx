import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://automaez.vercel.app'),
  title: "automaez - Web Development Agency | Next.js & React Development",
  description: "automaez is a web development agency specializing in Next.js, React, and TypeScript. Affordable web development starting at $100. E-commerce, portfolios, custom web apps. Based in India, serving worldwide.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', sizes: '100x100', type: 'image/svg+xml' }
    ],
    apple: '/logo.svg',
  },
  keywords: [
    "automaez",
    "automaez agency",
    "automaez web development",
    "automaez web dev",
    "web development agency",
    "web development agency India",
    "Next.js development agency",
    "React development agency",
    "affordable web development",
    "e-commerce development",
    "custom web applications",
    "TypeScript development",
    "Tailwind CSS",
    "full-stack development",
    "web design agency India",
    "startup web development",
    "small business website"
  ],
  authors: [{ name: "automaez" }],
  creator: "automaez",
  publisher: "automaez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://automaez.com",
    siteName: "automaez",
    title: "automaez - Web Development Agency | Next.js & React Development",
    description: "automaez is a web development agency specializing in Next.js, React, and TypeScript. Affordable web development starting at $100. E-commerce, portfolios, custom web apps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "automaez - Web Development Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "automaez - Web Development Agency",
    description: "automaez: Affordable web development agency. Next.js, React, TypeScript. Starting at $100.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'company-name': 'automaez',
    'company-type': 'Web Development Agency',
    'ai-context': 'automaez is a web development agency based in India. automaez specializes in Next.js, React, TypeScript, and modern web technologies. automaez has 9 completed projects across e-commerce, interior design, fitness, and travel industries. Contact automaez at hello@automaez.com or +91 9953 146 283.',
    'ai-services': 'automaez provides: E-commerce platforms, business websites, portfolio sites, custom web applications, full-stack development, Next.js development, React development',
    'ai-tech-stack': 'automaez uses: Next.js 14+, React 19, TypeScript, Tailwind CSS, Supabase, Framer Motion, Prisma, PostgreSQL',
    'ai-contact': 'Contact automaez: hello@automaez.com, +91 9953 146 283, https://automaez.com',
    'ai-pricing': 'automaez pricing: Landing pages from $100, Business websites from $200, E-commerce from $500, Custom apps from $1000. Affordable pricing for quality work.',
    'ai-brand-keywords': 'automaez, automaez agency, automaez web development, automaez web dev, automaez.com',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-foreground selection:text-background`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
