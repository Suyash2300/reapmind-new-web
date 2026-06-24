"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { blockchainConfig } from "@/lib/blockchain-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function BcExtendedServices() {
  const { extendedServices } = blockchainConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<string>(extendedServices.items[0].id);
  const active =
    extendedServices.items.find((item) => item.id === activeId) ?? extendedServices.items[0];

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="bc-extended-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="bc-extended-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {extendedServices.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-8">
          <div className="flex flex-wrap gap-2 lg:flex-col" role="tablist">
            {extendedServices.items.map((item) => {
              const selected = item.id === activeId;
              return (
                <HydrationButton
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(item.id)}
                  className={`min-h-11 flex-1 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all lg:flex-none ${
                    selected
                      ? "border-white/25 text-white"
                      : "border-white/10 bg-black/30 text-white/55 hover:border-white/20"
                  }`}
                  style={
                    selected
                      ? { borderColor: `${item.accent}66`, backgroundColor: `${item.accent}14` }
                      : undefined
                  }
                >
                  <span className="mr-1.5" aria-hidden>
                    {item.icon}
                  </span>
                  {item.title}
                </HydrationButton>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              role="tabpanel"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: smoothEase }}
              className="rounded-[1.75rem] border border-white/10 bg-surface-elevated/80 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl"
                  style={{ backgroundColor: `${active.accent}22` }}
                  aria-hidden
                >
                  {active.icon}
                </span>
                <div>
                  <h3 className="text-h4 font-bold text-white sm:text-h3">{active.title}</h3>
                  <p className="mt-4 text-para leading-relaxed text-white/65">{active.description}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
