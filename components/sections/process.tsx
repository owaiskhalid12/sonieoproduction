import { processSteps } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A simple process that keeps quality high and delivery friction low."
          description="The workflow is designed to stay collaborative without slowing down momentum, so you always know what is happening and when to expect the next step."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="panel-card relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan text-lg font-black text-slate-950">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-base leading-7">{step.copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
