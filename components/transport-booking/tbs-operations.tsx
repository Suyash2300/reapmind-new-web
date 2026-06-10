"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { transportBookingConfig } from "@/lib/transport-booking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function TbsOperations() {
  const { operations } = transportBookingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = operations.items;
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
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="tbs-operations-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tbs-operations-heading" className="sr-only">
          Transport booking operations
        </BlurFadeIn>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                    ? "border-amber-400/40 bg-amber-500/10"
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
              <span className="text-xs font-bold tabular-nums text-amber-400/90">
                {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-para">{activeItem.description}</p>
              <Link
                href="/contact-us#free-consultation"
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-primary transition-colors hover:text-white"
              >
                Contact Us
              </Link>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
