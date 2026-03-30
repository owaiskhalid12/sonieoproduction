import { stats } from "@/lib/data";
import { Container } from "@/components/ui/container";

export function StatsSection() {
  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <article key={item.label} className="panel-card text-center">
              <p className="text-4xl font-black text-white">{item.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
