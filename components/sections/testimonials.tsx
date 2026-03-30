import { testimonials } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Social Proof"
          title="Trusted by creators and brands who care about how their work feels on screen."
          description="A great portfolio earns attention. Consistent results and strong client experiences turn that attention into bookings."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.name} className="panel-card">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan text-lg font-bold text-slate-950">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
                <span className="ml-auto text-4xl text-cyan/50">0{index + 1}</span>
              </div>
              <p className="mt-6 text-base leading-7 text-slate-200">“{testimonial.quote}”</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
