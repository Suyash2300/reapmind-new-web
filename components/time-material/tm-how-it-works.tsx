"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { timeMaterialConfig } from "@/lib/time-material-config";

export function TmHowItWorks() {
  const { howItWorks } = timeMaterialConfig;
  const [activeId, setActiveId] = useState(howItWorks.steps[0].id);
  const active = howItWorks.steps.find((step) => step.id === activeId) ?? howItWorks.steps[0];

  return (
    <section
      className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14"
      aria-labelledby="tm-how-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="tm-how-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
            {howItWorks.title}
          </h2>
          <p className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">{howItWorks.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-stretch">
          <FadeIn delay={0.06}>
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {howItWorks.steps.map((step, i) => {
                const selected = step.id === activeId;
                return (
                  <HydrationButton
                    key={step.id}
                    type="button"
                    onClick={() => setActiveId(step.id)}
                    aria-pressed={selected}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                      selected
                        ? "border-primary/50 bg-primary/10 text-white"
                        : "border-white/10 text-white/55 hover:border-white/25"
                    }`}
                  >
                    <span className="mr-2 text-xs font-bold tabular-nums text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step.title}
                  </HydrationButton>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col rounded-[1.5rem] border border-border-strong bg-surface-elevated p-6 sm:p-8"
              >
                <h3 className="text-h3 font-bold text-white sm:text-h2">{active.title}</h3>
                <ul className="mt-5 space-y-3">
                  {active.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)} className="flex gap-3 text-para text-white/65">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </FadeIn>
        </div>

        <FadeIn className="mt-8 text-center sm:text-left">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {howItWorks.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
