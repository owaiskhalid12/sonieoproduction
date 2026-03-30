import { caseStudies } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="Performance-focused case studies that connect edits to outcomes."
          description="These examples show how stronger pacing, visual consistency, and cinematic polish translate into more attention, more trust, and better content performance."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="panel-card">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{study.title}</p>
              <div className="mt-6 rounded-[1.5rem] border border-rose-400/20 bg-rose-400/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-200/80">Before</p>
                <p className="mt-3 text-base leading-7 text-slate-200">{study.before}</p>
              </div>
              <div className="mt-4 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/80">After</p>
                <p className="mt-3 text-base leading-7 text-slate-200">{study.after}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
