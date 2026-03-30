import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="section-shell overflow-hidden px-6 py-12 sm:px-8 lg:px-12">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-electric/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="section-label">Limited Availability</span>
            <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              If you want content that feels sharper, performs better, and builds real brand
              authority, now is the time to lock in your next editing slot.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="mailto:hello@sonieoproduction.com">Book Your Project</Button>
              <Button href="#portfolio" variant="secondary">
                Review Portfolio
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
