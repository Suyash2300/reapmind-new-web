"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { timeMaterialConfig } from "@/lib/time-material-config";

export function TmWhyChoose() {
  const { whyChoose } = timeMaterialConfig;
  const [activeId, setActiveId] = useState<string>(whyChoose.items[0].id);
  const active = whyChoose.items.find((item) => item.id === activeId) ?? whyChoose.items[0];

  return (
    <section
      className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14"
      aria-labelledby="tm-why-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="tm-why-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
            {whyChoose.title}
          </h2>
          <p className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">{whyChoose.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-stretch">
          <FadeIn delay={0.06}>
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {whyChoose.items.map((item, i) => {
                const selected = item.id === activeId;
                return (
                  <HydrationButton
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
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
                    {item.title}
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
                <p className="mt-4 flex-1 text-para leading-relaxed text-white/65">
                  {active.description}
                </p>
              </motion.article>
            </AnimatePresence>
          </FadeIn>
        </div>

        <FadeIn className="mt-8 text-center sm:text-left">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {whyChoose.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
