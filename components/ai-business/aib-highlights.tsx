"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { aiBusinessConfig } from "@/lib/ai-business-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AibHighlights() {
  const { highlights } = aiBusinessConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const item = highlights.items[active];

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="aib-highlights-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="aib-highlights-heading" className="text-h3 font-bold text-white sm:text-h2">
          {highlights.title}
        </BlurFadeIn>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
          {highlights.items.map((h, i) => (
            <HydrationButton
              key={h.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`min-h-11 rounded-full border px-4 py-2.5 text-left text-xs font-semibold transition-colors sm:text-sm ${
                i === active ? "border-white/25 text-white" : "border-white/10 bg-black/40 text-white/55"
              }`}
              style={i === active ? { borderColor: `${h.accent}66`, backgroundColor: `${h.accent}14` } : undefined}
            >
              <span className="mr-1.5" aria-hidden>
                {h.icon}
              </span>
              {h.label}
            </HydrationButton>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            role="tabpanel"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: smoothEase }}
            className="mt-8 rounded-[1.75rem] border border-white/10 bg-surface-elevated/80 p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl"
                style={{ backgroundColor: `${item.accent}22` }}
                aria-hidden
              >
                {item.icon}
              </span>
              <div>
                <h3 className="text-h5 font-bold text-white">{item.title}</h3>
                <p className="mt-3 max-w-3xl text-para leading-relaxed text-white/65">{item.body}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <BlurFadeIn delay={0.1} className="mt-8 text-center sm:text-left">
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
