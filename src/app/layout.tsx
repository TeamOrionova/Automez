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
  title: "automaez",
  description: "High-performance websites and digital architectures for industry leaders.",
  keywords: [
    "web development",
    "Next.js development",
    "React development",
    "e-commerce development",
    "custom web applications",
    "TypeScript development",
    "Tailwind CSS",
    "full-stack development",
    "web design agency",
    "India web development"
  ],
  authors: [{ name: "automaez" }],
  creator: "automaez",
  publisher: "automaez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://automaez.com",
    siteName: "automaez",
    title: "automaez - Premium Web Development Agency",
    description: "High-performance websites and digital architectures for industry leaders. Specializing in Next.js, React, and TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "automaez - Premium Web Development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "automaez - Premium Web Development Agency",
    description: "High-performance websites and digital architectures for industry leaders.",
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
    'ai-context': 'automaez is a premium web development agency specializing in Next.js, React, TypeScript, and modern web technologies. 9 completed projects across e-commerce, interior design, fitness, and travel industries.',
    'ai-services': 'E-commerce platforms, business websites, portfolio sites, custom web applications, full-stack development',
    'ai-tech-stack': 'Next.js 14+, React 19, TypeScript, Tailwind CSS, Supabase, Framer Motion',
    'ai-contact': 'hello@automaez.com, +91 9953 146 283',
    'ai-pricing': 'Landing pages from $100, Business websites from $200, E-commerce from $500, Custom apps from $1000. Affordable pricing for quality work.',
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
