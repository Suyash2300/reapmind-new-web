"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { metaverseConfig } from "@/lib/metaverse-config";

export function MvJourneySolutions() {
  const { journey } = metaverseConfig;
  const [activeId, setActiveId] = useState(journey.items[0].id);
  const active = journey.items.find((item) => item.id === activeId) ?? journey.items[0];

  return (
    <section
      className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14"
      aria-labelledby="mv-journey-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="mv-journey-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {journey.title}
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <FadeIn delay={0.06}>
            <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {journey.items.map((item) => {
                const selected = item.id === activeId;
                return (
                  <li key={item.id} className="shrink-0 lg:shrink">
                    <button
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      aria-pressed={selected}
                      className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                        selected
                          ? "border-primary/50 bg-primary/10 text-white"
                          : "border-white/10 text-white/55 hover:border-white/25"
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-6 sm:p-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Metaverse solution
                </p>
                <h3 className="mt-2 text-h3 font-bold text-white sm:text-h2">{active.title}</h3>
                <p className="mt-4 text-para leading-relaxed text-white/65">{active.description}</p>
              </motion.article>
            </AnimatePresence>
          </FadeIn>
        </div>

        <FadeIn className="mt-8 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {journey.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
