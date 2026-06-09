"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { b2bMarketplaceConfig } from "@/lib/b2b-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function B2mPartnerPillars() {
  const { partner } = b2bMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = partner.items;
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
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="b2m-partner-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="b2m-partner-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {partner.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:items-stretch">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {items.map((item, i) => (
              <HydrationButton
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors lg:w-full ${
                  i === active ? "border-primary/50 bg-primary/10 text-white" : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
                }`}
                style={
                  i === active
                    ? { borderColor: `${item.accent}66`, backgroundColor: `${item.accent}14`, color: "#fff" }
                    : undefined
                }
              >
                {item.title}
              </HydrationButton>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={reducedMotion ? false : { opacity: 0, x: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, x: -24, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: smoothEase }}
              className="flex min-h-[220px] flex-col justify-center rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-primary/15 via-surface-elevated to-violet-500/10 p-6 sm:p-8"
              style={{ borderTopWidth: 3, borderTopColor: activeItem.accent }}
            >
              <h3 className="text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-para">{activeItem.description}</p>
              {!reducedMotion && (
                <motion.div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: activeItem.accent }}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5.5, ease: "linear" }}
                    key={activeItem.id}
                  />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
