"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { valetParkingAppConfig } from "@/lib/valet-parking-app-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

function TicketBarcode({ accent, reducedMotion }: { accent: string; reducedMotion: boolean }) {
  const bars = [3, 2, 4, 1, 3, 5, 2, 4, 1, 3, 2, 5, 3, 1, 4, 2, 3, 5, 1, 4];

  return (
    <div className="flex h-10 items-end justify-center gap-[2px] overflow-hidden px-4" aria-hidden>
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-sm"
          style={{ backgroundColor: accent, height: `${h * 4 + 8}px`, opacity: 0.5 + (i % 3) * 0.15 }}
          animate={reducedMotion ? undefined : { opacity: [0.4, 0.9, 0.4] }}
          transition={{ delay: i * 0.05, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function VpaTicketFeatures() {
  const { partner } = valetParkingAppConfig;
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
      className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20"
      aria-labelledby="vpa-partner-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(245,158,11,0.08),transparent)]"
        aria-hidden
      />

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="vpa-partner-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {partner.title}
        </BlurFadeIn>

        <div className="mt-10 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                whileHover={reducedMotion ? undefined : { y: -4 }}
                className={`relative shrink-0 overflow-hidden rounded-2xl border text-left transition-colors ${
                  isActive
                    ? "border-white/25 bg-black/70 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
                    : "border-white/10 bg-black/40 hover:border-white/20"
                }`}
                style={{ width: "min(100%, 220px)" }}
              >
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: isActive ? item.accent : "rgba(255,255,255,0.1)" }}
                  aria-hidden
                />
                <div className="p-4 sm:p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {item.ticketId}
                  </p>
                  <p
                    className="mt-2 line-clamp-2 text-sm font-bold leading-snug text-white"
                    style={{ color: isActive ? item.accent : undefined }}
                  >
                    {item.title}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-white/45">{item.status}</p>
                </div>
                {isActive && <TicketBarcode accent={item.accent} reducedMotion={reducedMotion} />}
              </motion.button>
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
                    className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${activeItem.accent}22`, color: activeItem.accent }}
                  >
                    {activeItem.status}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
                </div>
                <p className="font-mono text-sm font-bold text-white/35">{activeItem.ticketId}</p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-para">{activeItem.description}</p>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-1.5" aria-hidden>
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-amber-400" : "w-1.5 bg-white/20"}`}
              aria-label={`Show ticket ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
