"use client";

import { useMemo, useState } from "react";
import { portfolioItems, type PortfolioItem } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const filters = [
  { label: "All Work", value: "all" },
  { label: "Reels", value: "vertical" },
  { label: "16:9 Videos", value: "wide" },
];

function cardClasses(aspect: PortfolioItem["aspect"]) {
  return aspect === "vertical"
    ? "relative aspect-[9/16] min-h-[320px] overflow-hidden"
    : "relative aspect-video min-h-[220px] overflow-hidden";
}

function modalClasses(aspect: PortfolioItem["aspect"]) {
  return aspect === "vertical"
    ? "mx-auto aspect-[9/16] max-h-[78vh] w-full max-w-[420px] bg-slate-950"
    : "aspect-video w-full bg-slate-950";
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.aspect === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Visual proof that style and performance can work together."
          description="Built for a larger portfolio library with local reel uploads, 16:9 showcase edits, and lightweight previews so the page stays fast."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-cyan/40 bg-cyan/15 text-cyan"
                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan/25 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 columns-1 gap-5 space-y-5 lg:columns-2">
          {filteredItems.map((item) => (
            <article
              key={item.title}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(item)}
                className="block w-full text-left"
                aria-label={`Play ${item.title}`}
              >
                <div className={`${cardClasses(item.aspect)} bg-gradient-to-br ${item.accent}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,20,0.12)_0%,rgba(3,8,20,0.86)_100%)]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:text-[11px]">
                    {item.category}
                  </div>
                  <div className="absolute right-4 top-4 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan backdrop-blur sm:right-5 sm:top-5 sm:px-4 sm:text-[11px]">
                    {item.aspect === "vertical" ? "Reel" : "16:9"}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-slate-950/60 text-xl text-white transition duration-300 group-hover:scale-110 group-hover:border-cyan/40 sm:h-20 sm:w-20 sm:text-2xl">
                      ▶
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-5 sm:left-5 sm:right-5">
                    <div>
                      <p className="text-xl font-semibold text-white sm:text-2xl">{item.title}</p>
                      <p className="mt-2 text-sm text-slate-200">{item.metric}</p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-slate-950/60 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-white sm:px-4 sm:text-xs">
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4 sm:p-5">
          <div className="w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-background shadow-glow">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
                  Portfolio Preview
                </p>
                <p className="mt-1 text-sm text-slate-300">{activeVideo.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white"
              >
                Close
              </button>
            </div>
            <div className="p-4 sm:p-6">
              <div className={modalClasses(activeVideo.aspect)}>
                <video
                  className="h-full w-full object-contain"
                  src={activeVideo.videoSrc}
                  controls
                  playsInline
                  preload="none"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
