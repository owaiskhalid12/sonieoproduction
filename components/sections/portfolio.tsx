"use client";

import { useState } from "react";
import { portfolioItems } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PortfolioSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Visual proof that style and performance can work together."
          description="A premium portfolio layout with lightweight previews, measurable outcomes, and a focused modal experience for watching featured edits."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {portfolioItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(item.embedUrl)}
                className="block w-full text-left"
                aria-label={`Play ${item.title}`}
              >
                <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${item.accent}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,20,0)_0%,rgba(3,8,20,0.85)_100%)]" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-white transition duration-300 group-hover:scale-110 group-hover:border-cyan/40">
                      ▶
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-2xl font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-sm text-slate-200">{item.metric}</p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-slate-950/60 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </Container>

      {activeVideo ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-5">
          <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-background shadow-glow">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
                Portfolio Preview
              </p>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white"
              >
                Close
              </button>
            </div>
            <div className="aspect-video w-full bg-slate-950">
              <iframe
                className="h-full w-full"
                src={activeVideo}
                title="Portfolio video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
