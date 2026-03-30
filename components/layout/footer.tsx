import Image from "next/image";
import { Container } from "@/components/ui/container";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Email", href: "mailto:hello@sonieoproduction.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/sonieo production.png"
              alt="Sonieo Production logo"
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          </span>
          <div>
            <p className="text-lg font-semibold text-white">Sonieo Production</p>
            <p className="mt-2 text-sm text-slate-400">
              High-converting video editing for creators, brands, and personal storytelling.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {socials.map((social) => (
            <a key={social.label} href={social.href} className="transition hover:text-cyan">
              {social.label}
            </a>
          ))}
        </div>
      </Container>
      <Container className="mt-6 text-sm text-slate-500">
        Copyright {new Date().getFullYear()} Sonieo Production. All rights reserved.
      </Container>
    </footer>
  );
}
