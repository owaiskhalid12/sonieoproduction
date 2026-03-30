import { benefits } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function BenefitsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="section-shell px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
          <SectionHeading
            eyebrow="Benefits"
            title="The real payoff is not just better edits. It is better business impact."
            description="When your videos look sharper and hold attention longer, your brand feels more credible and your content works harder on every platform."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan/15 text-sm font-bold text-cyan">
                  ✓
                </span>
                <p className="text-base leading-7 text-slate-200">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
