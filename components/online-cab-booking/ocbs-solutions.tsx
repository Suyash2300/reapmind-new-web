"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineCabBookingConfig } from "@/lib/online-cab-booking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OcbsSolutions() {
  const { solutions } = onlineCabBookingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = solutions.items;
  const activeItem = items[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 4800);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20"
      aria-labelledby="ocbs-solutions-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="ocbs-solutions-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {solutions.title}
        </BlurFadeIn>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`flex shrink-0 flex-col items-center gap-2 rounded-2xl border px-4 py-3 transition-colors hover:-translate-y-0.5 sm:min-w-[7.5rem] sm:px-5 sm:py-4 ${
                  isActive
                    ? "border-white/25 bg-black/60 text-white"
                    : "border-white/10 bg-black/30 text-white/55 hover:border-white/20"
                }`}
                style={isActive ? { borderColor: `${item.accent}55`, backgroundColor: `${item.accent}12` } : undefined}
              >
                <span className="text-xl sm:text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <span className="max-w-[5.5rem] text-center text-[11px] font-semibold leading-tight sm:max-w-none sm:text-xs">
                  {item.title}
                </span>
              </HydrationButton>
            );
          })}
        </div>

        <div className="relative mx-auto mt-8 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeItem.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: smoothEase }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-surface-elevated to-black/60 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl"
                  style={{ backgroundColor: `${activeItem.accent}22` }}
                  aria-hidden
                >
                  {activeItem.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-para">{activeItem.description}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-1.5" aria-hidden>
          {items.map((item, i) => (
            <HydrationButton
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-violet-400" : "w-1.5 bg-white/20"}`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
