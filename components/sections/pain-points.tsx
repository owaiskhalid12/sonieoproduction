import { painPoints } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PainPointsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Videos Underperform"
          title="Great footage alone does not create strong results."
          description="Most content falls short because the edit is where engagement is earned. Without the right structure, rhythm, and polish, valuable ideas get ignored."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {painPoints.map((point, index) => (
            <article key={point.title} className="panel-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-electric/20 to-cyan/20 text-lg font-bold text-cyan">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{point.title}</h3>
              <p className="mt-3 text-base leading-7">{point.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
