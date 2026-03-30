"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to the questions most clients ask before booking."
          description="A strong portfolio should remove uncertainty. These quick answers help potential clients understand turnaround, process, and delivery at a glance."
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={faq.question} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <span className="text-2xl text-cyan">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <div className="border-t border-white/10 px-6 pb-5 pt-4">
                    <p className="max-w-4xl text-base leading-7 text-slate-300">{faq.answer}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
