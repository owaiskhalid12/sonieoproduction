"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="animate-fadeUp sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <Container className="flex min-h-[76px] items-center justify-between gap-4">
        <a href="#top" className="motion-link flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/sonieo%20production.png"
              alt="Sonieo Production logo"
              width={44}
              height={44}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan">Sonieo</p>
            <p className="text-sm text-slate-300">Video Editing Portfolio</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="motion-link text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="mailto:sonieoproduction@gmail.com">Book a Project</Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-50 hover:-translate-y-0.5 lg:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-white/10 bg-background/95 lg:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="motion-link text-base text-slate-200 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Button href="mailto:sonieoproduction@gmail.com" className="w-full">
              Send an Email
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
