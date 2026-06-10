"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineTuitionConfig } from "@/lib/online-tuition-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OtaAdvantages() {
  const { advantages } = onlineTuitionConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = advantages.items;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="ota-advantages-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ota-advantages-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {advantages.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                className={`flex min-h-[6.5rem] flex-col items-start rounded-2xl border p-4 text-left transition-colors ${
                  isActive
                    ? "border-sky-400/40 bg-sky-500/10"
                    : "border-white/10 bg-black/40 hover:border-white/20"
                }`}
              >
                <span className="text-lg" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-2 text-xs font-bold leading-snug text-white sm:text-sm">{item.title}</h3>
              </HydrationButton>
            );
          })}
        </div>

        <div className="relative mt-6 min-h-[200px] sm:min-h-[220px]">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <motion.article
                key={item.id}
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.28, ease: smoothEase }}
                className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${item.accent} p-6 sm:p-8 ${
                  isActive ? "relative z-10" : "pointer-events-none absolute inset-0 z-0"
                }`}
                aria-hidden={!isActive}
              >
                <h3 className="text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-para">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
