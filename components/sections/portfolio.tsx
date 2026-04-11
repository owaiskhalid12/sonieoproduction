"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { portfolioItems, type PortfolioItem } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const filters = [
  { label: "All Work", value: "all" },
  { label: "Reels", value: "vertical" },
  { label: "16:9 Videos", value: "wide" },
];

function VideoCard({ item }: { item: PortfolioItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  function togglePlay() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
      setHasStarted(true);
      setIsPlaying(true);
      return;
    }

    video.pause();
    setIsPlaying(false);
  }

  function toggleMute() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  const isVertical = item.aspect === "vertical";
  const posterSrc =
    item.posterSrc ??
    (isVertical ? undefined : item.videoSrc.replace("/work/wide/", "/work/posters/").replace(".mp4", ".jpg"));
  const mediaClassName = isVertical
    ? "h-full w-full object-cover scale-[1.12]"
    : "h-full w-full object-cover";

  return (
    <article className="overflow-hidden rounded-[0.95rem] border border-white/10 bg-white/[0.04] p-2.5">
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
          {item.category}
        </span>
        <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan">
          {isVertical ? "Reel" : "16:9"}
        </span>
      </div>

      <div className="overflow-hidden rounded-[0.85rem] border border-white/10 bg-slate-950">
        <div
          className={
            isVertical
              ? "mx-auto w-full max-w-[210px] sm:max-w-[220px]"
              : "w-full"
          }
        >
          <div className={isVertical ? "relative aspect-[9/16] w-full" : "relative aspect-video w-full"}>
            {posterSrc && !hasStarted ? (
              <Image
                src={posterSrc}
                alt={item.title}
                fill
                unoptimized
                className={isVertical ? "object-cover scale-[1.12]" : "object-cover"}
                sizes={isVertical ? "220px" : "(max-width: 1024px) 50vw, 33vw"}
              />
            ) : null}
            <video
              ref={videoRef}
              className={`${mediaClassName} ${hasStarted ? "opacity-100" : "opacity-0"}`}
              src={item.videoSrc}
              poster={posterSrc}
              playsInline
              preload="none"
              muted
              onPlay={() => {
                setHasStarted(true);
                setIsPlaying(true);
              }}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,20,0.04)_0%,rgba(3,8,20,0.2)_100%)]" />
            {!isPlaying ? (
              <button
                type="button"
                onClick={togglePlay}
                className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-sm text-white transition hover:scale-105 hover:border-cyan/40"
                aria-label={`Play ${item.title}`}
              >
                &#9654;
              </button>
            ) : null}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-[#020611] via-[#020611]/80 to-transparent p-2.5">
              <button
                type="button"
                onClick={togglePlay}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-cyan/30 hover:text-cyan"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-cyan/30 hover:text-cyan"
              >
                {isMuted ? "Unmute" : "Mute"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2.5 flex items-end justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-white sm:text-base">{item.title}</h3>
          <p className="mt-1 text-[11px] text-slate-300 sm:text-xs">{item.metric}</p>
        </div>
      </div>
    </article>
  );
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
          description="Direct-play portfolio cards with cleaner 9:16 reel framing, smaller card sizes, and simple inline controls without the default time-heavy browser UI."
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
            <VideoCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
