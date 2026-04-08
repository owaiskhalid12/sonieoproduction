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

function frameClasses(aspect: PortfolioItem["aspect"]) {
  return aspect === "vertical"
    ? "aspect-[9/16] max-h-[420px] w-full"
    : "aspect-video w-full";
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

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
          description="Every reel and showcase video now plays directly in the grid, so visitors can watch, pause, mute, and scrub without opening an extra viewer."
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

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                  {item.category}
                </span>
                <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan">
                  {item.aspect === "vertical" ? "Reel" : "16:9"}
                </span>
              </div>

              <div className="overflow-hidden rounded-[0.9rem] border border-white/10 bg-slate-950">
                <video
                  className={frameClasses(item.aspect)}
                  src={item.videoSrc}
                  poster={item.posterSrc}
                  controls
                  playsInline
                  preload="metadata"
                  controlsList="nodownload"
                />
              </div>

              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-300 sm:text-sm">{item.metric}</p>
                </div>
                <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white">
                  {item.duration}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
