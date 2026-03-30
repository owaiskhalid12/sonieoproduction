import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 sm:pt-16">
      <Container>
        <div className="section-shell relative isolate px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
          <div className="absolute inset-0 -z-20 bg-hero-grid bg-[size:48px_48px] opacity-40" />
          <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-cyan/15 via-electric/10 to-transparent blur-3xl" />
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <span className="section-label">Personal Brand Video Editor</span>
              <h1 className="mt-6 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
                I Turn Raw Footage Into High-Impact Visual Stories
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Strategic editing for creators and brands who want stronger engagement,
                longer watch time, and visuals that instantly feel premium.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#portfolio">View My Work</Button>
                <Button href="mailto:hello@sonieoproduction.com" variant="secondary">
                  Start a Project
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
                <div>
                  <p className="text-2xl font-bold text-white">12M+</p>
                  <p>Views generated across client edits</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">48h</p>
                  <p>Rapid turnaround for short-form content</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">96%</p>
                  <p>Repeat-client rate built on consistency</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-3xl animate-pulseGlow" />
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/50 p-4 shadow-glow">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#0f224a] via-[#0b1730] to-[#040914]">
                  <div className="grid gap-4 p-5 sm:p-6">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400">
                      <span>Featured Intro Short</span>
                      <span>Autoplay Preview</span>
                    </div>
                    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-electric/25 via-transparent to-cyan/25 p-3">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.28),_transparent_32%)]" />
                      <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#040814]/90">
                        <video
                          className="aspect-[9/16] max-h-[520px] w-full object-cover"
                          src="/sonieo intro.mp4"
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                          preload="metadata"
                        />
                        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
                          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-cyan" />
                            Intro Reel
                          </div>
                          <div className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                            Sonieo Production
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020611] via-[#020611]/80 to-transparent p-5">
                          <div className="grid gap-3 sm:grid-cols-3">
                            <div className="rounded-2xl border border-cyan/20 bg-cyan/10 px-4 py-3 text-center backdrop-blur">
                              <p className="text-xs uppercase tracking-[0.2em] text-cyan">Watch Time</p>
                              <p className="mt-2 text-xl font-bold text-white">+38%</p>
                            </div>
                            <div className="rounded-2xl border border-electric/20 bg-electric/10 px-4 py-3 text-center backdrop-blur">
                              <p className="text-xs uppercase tracking-[0.2em] text-electric">Hook Score</p>
                              <p className="mt-2 text-xl font-bold text-white">9.4/10</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-center backdrop-blur">
                              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Delivery</p>
                              <p className="mt-2 text-xl font-bold text-white">48 Hours</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {["YouTube", "Reels", "Cinematic"].map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
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
