"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { transportBookingConfig } from "@/lib/transport-booking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function TbsDigitizedFeatures() {
  const { digitizedFeatures } = transportBookingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = digitizedFeatures.items;
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
      aria-labelledby="tbs-features-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="tbs-features-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {digitizedFeatures.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <HydrationButton
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`relative flex min-h-[5.5rem] flex-col items-center justify-center rounded-xl border p-2 text-center transition-colors sm:min-h-[6rem] sm:rounded-2xl sm:p-3 ${
                    isActive
                      ? "border-white/25 bg-black/70 text-white"
                      : "border-white/10 bg-black/40 text-white/55 hover:border-white/20"
                  }`}
                  style={isActive ? { borderColor: `${item.accent}55`, backgroundColor: `${item.accent}14` } : undefined}
                >
                  <span className="text-lg sm:text-xl" aria-hidden>
                    {item.icon}
                  </span>
                  <span
                    className="mt-1.5 font-mono text-[9px] font-bold uppercase tracking-widest sm:text-[10px]"
                    style={{ color: isActive ? item.accent : "rgba(255,255,255,0.35)" }}
                  >
                    {item.code}
                  </span>
                  <span className="mt-1 line-clamp-2 text-[10px] font-semibold leading-tight sm:text-[11px]">{item.title}</span>
                  {isActive && (
                    <motion.span
                      layoutId="tbs-feature-ring"
                      className="pointer-events-none absolute inset-0 rounded-xl border-2 sm:rounded-2xl"
                      style={{ borderColor: `${item.accent}66` }}
                      transition={{ duration: 0.35, ease: smoothEase }}
                      aria-hidden
                    />
                  )}
                </HydrationButton>
              );
            })}
          </div>

          <div className="relative min-h-[280px]">
            <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-white/10" aria-hidden>
              <motion.div
                className="w-full rounded-full bg-amber-400"
                animate={{ height: `${((active + 1) / items.length) * 100}%` }}
                transition={{ duration: 0.4, ease: smoothEase }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.id}
                initial={reducedMotion ? false : { opacity: 0, x: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={reducedMotion ? undefined : { opacity: 0, x: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: smoothEase }}
                className="ml-6 rounded-[1.75rem] border border-white/10 bg-black/60 p-6 sm:ml-8 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                    style={{ backgroundColor: `${activeItem.accent}22` }}
                    aria-hidden
                  >
                    {activeItem.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: activeItem.accent }}>
                      Waybill · {activeItem.code}
                    </p>
                    <h3 className="text-lg font-bold text-white sm:text-xl">{activeItem.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-para">{activeItem.description}</p>
                <p className="mt-4 text-xs tabular-nums text-white/40">
                  {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
