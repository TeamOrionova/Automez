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

      {/* Testimonials */}
      <Section className="bg-muted/20">
        <Container>
          <div className="mb-12 sm:mb-16">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">Client Feedback</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
              What Clients Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-2 border-foreground bg-background p-6 sm:p-8">
              <p className="text-lg font-medium mb-6 italic">
                "Fast turnaround, modern design, and excellent communication. 
                Our new site has significantly improved our online presence."
              </p>
              <div>
                <p className="font-black uppercase tracking-tight">Rajesh Kumar</p>
                <p className="text-sm text-foreground/60">Roop Stone Impex</p>
              </div>
            </div>

            <div className="border-2 border-foreground bg-background p-6 sm:p-8">
              <p className="text-lg font-medium mb-6 italic">
                "The e-commerce platform they built handles our inventory perfectly. 
                The admin panel makes managing orders a breeze."
              </p>
              <div>
                <p className="font-black uppercase tracking-tight">Priya Sharma</p>
                <p className="text-sm text-foreground/60">Puchi Puchi</p>
              </div>
            </div>

            <div className="border-2 border-foreground bg-background p-6 sm:p-8">
              <p className="text-lg font-medium mb-6 italic">
                "Professional, affordable, and delivered exactly what we needed. 
                Highly recommend for interior design portfolios."
              </p>
              <div>
                <p className="font-black uppercase tracking-tight">Amit Patel</p>
                <p className="text-sm text-foreground/60">Vanya Vastu</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

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
