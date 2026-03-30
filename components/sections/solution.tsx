import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function SolutionSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="section-shell grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-12">
          <div>
            <SectionHeading
              eyebrow="The Sonieo Approach"
              title="Editing built around viewer retention, brand clarity, and premium execution."
              description="Every project is shaped to make the first seconds stronger, the pacing smarter, and the finish more cinematic so your content performs better and looks unmistakably professional."
            />
            <div className="mt-8">
              <Button href="#services">Explore Services</Button>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              "Sharper hooks and tighter pacing to stop the scroll faster",
              "Visual systems that keep your content branded and instantly recognizable",
              "Polished sound design, motion, and grading that elevate perceived value",
            ].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-base leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
