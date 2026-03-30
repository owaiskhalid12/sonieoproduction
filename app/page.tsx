import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BenefitsSection } from "@/components/sections/benefits";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { PainPointsSection } from "@/components/sections/pain-points";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { SolutionSection } from "@/components/sections/solution";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sonieo Production",
  description:
    "Professional video editing portfolio showcasing cinematic edits, reels, shorts, and creative visual storytelling.",
  areaServed: "Worldwide",
  serviceType: [
    "YouTube editing",
    "Short-form editing",
    "Color grading",
    "Motion graphics",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <ServicesSection />
        <PortfolioSection />
        <StatsSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ProcessSection />
        <BenefitsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
