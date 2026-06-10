"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { vehicleTrackingConfig } from "@/lib/vehicle-tracking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function VtsHighlights() {
  const { highlights } = vehicleTrackingConfig;
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
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="vts-highlights-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="vts-highlights-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {highlights.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`flex min-h-[7rem] flex-col items-start rounded-2xl border p-4 text-left transition-colors sm:min-h-[7.5rem] sm:p-5 ${
                  isActive
                    ? "border-cyan-400/40 bg-cyan-500/10"
                    : "border-white/10 bg-surface-elevated/50 hover:border-white/20"
                }`}
              >
                <span className="text-xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-3 text-sm font-bold leading-snug text-white">{item.title}</h3>
              </HydrationButton>
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
              <span className="text-xs font-bold tabular-nums text-cyan-400/90">
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
