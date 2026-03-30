import { services } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Editing services designed to move attention, trust, and conversion."
          description="From short-form cuts to cinematic storytelling, each service is tailored to make your content easier to watch, easier to remember, and easier to share."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="panel-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan text-sm font-black text-slate-950">
                FX
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-base leading-7">{service.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
