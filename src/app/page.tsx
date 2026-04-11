import { Navbar } from "@/components/Navbar";
import { Hero, Statement, Capabilities, Portfolio, Footer } from "@/components/Sections";
import { ContactForm } from "@/components/ContactForm";
import { Container, Section } from "@/components/Layout";
import { AIContext } from "@/components/AIContext";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AIContext />
      <Navbar />
      <Hero />
      <Statement />
      <Capabilities />

      {/* Rhythm Reset / Marquee */}
      <div className="py-12 sm:py-16 md:py-20 bg-background border-y-2 border-foreground flex items-center justify-center overflow-hidden">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter opacity-10 select-none">
              AUTOMAEZ • BESPOKE WEBSITES • AUTOMAEZ •
            </span>
          ))}
        </div>
      </div>

      <Portfolio />

      <Section id="contact" className="bg-background pt-0">
        <Container>
          <div className="mb-12 sm:mb-16">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">Immediate Intake</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter max-w-xl">
              Start Your <br /> Project Brief.
            </h2>
          </div>
          <div className="max-w-3xl">
            <ContactForm />
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
