"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { valetParkingAppConfig } from "@/lib/valet-parking-app-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function VpaHighlights() {
  const { highlights } = valetParkingAppConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = highlights.items;
  const activeItem = items[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 5500);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section
      className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20"
      aria-labelledby="vpa-highlights-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="vpa-highlights-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {highlights.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-4xl text-para leading-relaxed text-white/60">
          {highlights.intro}
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                whileHover={reducedMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.3, ease: smoothEase }}
                className={`group relative flex min-h-[7.5rem] flex-col justify-end overflow-hidden rounded-2xl border p-4 text-left sm:min-h-[8.5rem] sm:p-5 ${
                  isActive
                    ? "border-primary/50 bg-primary/10"
                    : "border-white/10 bg-surface-elevated/60 hover:border-white/20"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-8 border-b border-dashed transition-colors ${
                    isActive ? "border-amber-400/40 bg-amber-500/10" : "border-white/10 bg-white/5"
                  }`}
                  aria-hidden
                />
                <span
                  className={`absolute right-3 top-2 text-[10px] font-bold uppercase tracking-wider ${
                    isActive ? "text-amber-400" : "text-white/30"
                  }`}
                >
                  Bay {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-xs font-bold tabular-nums ${isActive ? "text-primary" : "text-white/35"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-sm font-bold leading-snug text-white sm:text-base">{item.title}</h3>
              </motion.button>
            );
          })}
        </div>

        <div className="relative mt-6 min-h-[200px] sm:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeItem.id}
              initial={reducedMotion ? false : { opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: smoothEase }}
              className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${activeItem.accent} p-6 sm:p-8`}
            >
              <span className="text-xs font-bold tabular-nums text-primary/80">
                {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-para">{activeItem.description}</p>
            </motion.article>
          </AnimatePresence>
        </div>

        <BlurFadeIn delay={0.12} className="mt-8 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {highlights.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
