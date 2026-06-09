"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { blockchainConfig } from "@/lib/blockchain-config";

export function BcIndustries() {
  const { industries } = blockchainConfig;
  const [activeId, setActiveId] = useState(industries.items[0].id);
  const active =
    industries.items.find((item) => item.id === activeId) ?? industries.items[0];

  return (
    <section
      className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14"
      aria-labelledby="bc-industries-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="bc-industries-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {industries.title}
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
          <FadeIn delay={0.06}>
            <ul className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {industries.items.map((item) => {
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
                          : "border-white/10 text-white/55 hover:border-white/25 lg:w-full"
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
                  Industry vertical
                </p>
                <h3 className="mt-2 text-h3 font-bold text-white sm:text-h2">{active.title}</h3>
                <p className="mt-4 text-para leading-relaxed text-white/65">{active.description}</p>
              </motion.article>
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
