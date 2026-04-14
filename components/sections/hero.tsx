"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (video.paused) {
      void video.play();
    }
  }

  return (
    <section id="top" className="relative overflow-hidden pt-6 sm:pt-8">
      <Container>
        <div className="section-shell relative isolate px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="absolute inset-0 -z-20 bg-hero-grid bg-[size:48px_48px] opacity-40" />
          <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-cyan/15 via-electric/10 to-transparent blur-3xl" />
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-3xl">
              <span className="section-label animate-textLift">Personal Brand Video Editor</span>
              <h1 className="mt-5 animate-textLift text-4xl font-black leading-[0.92] sm:text-5xl lg:text-6xl">
                I Turn Raw Footage Into High-Impact Visual Stories
              </h1>
              <p className="animation-delay-200 mt-5 max-w-2xl animate-textLift text-base leading-7 text-slate-300 sm:text-lg">
                Strategic editing for creators and brands who want stronger engagement,
                longer watch time, and visuals that instantly feel premium.
              </p>
              <div className="animation-delay-300 mt-7 flex animate-textLift flex-col gap-3 sm:flex-row">
                <Button href="#portfolio">View My Work</Button>
                <Button
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sonieoproduction@gmail.com"
                  variant="secondary"
                >
                  Start a Project
                </Button>
              </div>
              <div className="animation-delay-400 mt-8 flex animate-textLift flex-wrap gap-5 text-sm text-slate-300">
                <div>
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter value={12} suffix="M+" duration={2800} />
                  </p>
                  <p>Views generated across client edits</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter value={24} suffix="h" duration={2800} />
                  </p>
                  <p>Rapid turnaround for short-form content</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter value={96} suffix="%" duration={2800} />
                  </p>
                  <p>Repeat-client rate built on consistency</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[300px] animate-fadeUp animation-delay-200 sm:max-w-[330px] lg:max-w-[340px]">
              <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-3xl animate-pulseGlow" />
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-2.5 shadow-glow sm:p-3">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0f224a] via-[#0b1730] to-[#040914]">
                  <div className="grid gap-3 p-3.5 sm:p-4">
                    <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-slate-400 sm:text-[10px]">
                      <span>Featured Intro Short</span>
                      <span>Premium Motion Preview</span>
                    </div>
                    <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-electric/25 via-transparent to-cyan/25 p-2.5">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.28),_transparent_32%)]" />
                      <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#040814]/90">
                        <div className="mx-auto w-full max-w-[240px] pt-2 sm:max-w-[260px]">
                          <video
                            ref={videoRef}
                            className="aspect-[9/16] h-[310px] w-full object-cover object-center sm:h-[360px] lg:h-[390px]"
                            src="/sonieo intro.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-2.5 sm:p-3">
                          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan backdrop-blur sm:text-[10px]">
                            <span className="h-2 w-2 rounded-full bg-cyan" />
                            Intro Reel
                          </div>
                          <div className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur sm:text-[10px]">
                            Sonieo Production
                          </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 flex justify-end bg-gradient-to-t from-[#020611] via-[#020611]/75 to-transparent p-3">
                          <button
                            type="button"
                            onClick={toggleSound}
                            className="rounded-full border border-cyan/30 bg-cyan/15 px-3 py-1.5 text-xs font-semibold text-cyan transition hover:border-cyan/50 hover:bg-cyan/20 sm:text-sm"
                          >
                            {isMuted ? "Turn Sound On" : "Mute Sound"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {["YouTube", "Reels", "Cinematic"].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] px-2.5 py-2 text-center text-[11px] text-slate-300 transition duration-300 hover:border-cyan/30 hover:text-white sm:px-3 sm:py-2.5 sm:text-xs"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
