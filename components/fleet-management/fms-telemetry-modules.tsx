"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { fleetManagementConfig } from "@/lib/fleet-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FmsTelemetryModules() {
  const { partner } = fleetManagementConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = partner.items;
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
    <section
      className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20"
      aria-labelledby="fms-partner-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="fms-partner-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {partner.title}
        </BlurFadeIn>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`relative flex min-h-[5.5rem] flex-col items-center justify-center rounded-2xl border p-3 text-center transition-colors sm:min-h-[6.5rem] sm:p-4 ${
                  isActive
                    ? "border-white/25 bg-black/70 text-white"
                    : "border-white/10 bg-black/40 text-white/55 hover:border-white/20"
                }`}
                style={isActive ? { borderColor: `${item.accent}55`, backgroundColor: `${item.accent}14` } : undefined}
              >
                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: isActive ? item.accent : "rgba(255,255,255,0.35)" }}
                >
                  {item.metric}
                </span>
                <span className="mt-2 line-clamp-2 text-[11px] font-semibold leading-tight sm:text-xs">{item.title}</span>
                {isActive && (
                  <motion.span
                    layoutId="fms-module-ring"
                    className="pointer-events-none absolute inset-0 rounded-2xl border-2"
                    style={{ borderColor: `${item.accent}66` }}
                    transition={{ duration: 0.35, ease: smoothEase }}
                    aria-hidden
                  />
                )}
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
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span
                    className="inline-block rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${activeItem.accent}22`, color: activeItem.accent }}
                  >
                    {activeItem.metric}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
                </div>
                <div
                  className="hidden h-16 w-16 rounded-full border-4 sm:block"
                  style={{
                    borderColor: `${activeItem.accent}33`,
                    borderTopColor: activeItem.accent,
                    transform: "rotate(-45deg)",
                  }}
                  aria-hidden
                />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-para">{activeItem.description}</p>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
