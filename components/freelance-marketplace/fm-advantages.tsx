"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { freelanceMarketplaceConfig } from "@/lib/freelance-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FmAdvantages() {
  const { advantages } = freelanceMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = advantages.items;
  const activeItem = items[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="fm-advantages-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="fm-advantages-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {advantages.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:items-stretch">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors lg:w-full ${
                  i === active
                    ? "border-primary/50 bg-primary/10 text-white"
                    : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={reducedMotion ? false : { opacity: 0, x: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, x: -24, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: smoothEase }}
              className="flex min-h-[200px] flex-col justify-center rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-primary/15 via-surface-elevated to-violet-500/10 p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-para">{activeItem.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <BlurFadeIn delay={0.12} className="mt-10 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {advantages.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
