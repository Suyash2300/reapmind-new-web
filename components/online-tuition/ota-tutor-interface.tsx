"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineTuitionConfig } from "@/lib/online-tuition-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OtaTutorInterface() {
  const { tutorInterface } = onlineTuitionConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = tutorInterface.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="ota-tutor-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ota-tutor-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {tutorInterface.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-2" role="tablist" aria-label="Tutor interface features">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <HydrationButton
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors sm:px-5 ${
                    isActive
                      ? "border-amber-400/35 bg-amber-500/10"
                      : "border-white/10 bg-surface-elevated/40 hover:border-white/20"
                  }`}
                >
                  <span className="text-lg" aria-hidden>
                    {item.icon}
                  </span>
                  <span className={`text-sm font-semibold ${isActive ? "text-white" : "text-white/55"}`}>{item.title}</span>
                </HydrationButton>
              );
            })}
          </div>

          <div className="relative min-h-[260px]" role="tabpanel">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <motion.article
                  key={item.id}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.28, ease: smoothEase }}
                  className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-amber-500/10 to-transparent p-6 sm:p-8 ${
                    isActive ? "relative z-10" : "pointer-events-none absolute inset-0 z-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Tutor dashboard</p>
                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-para">{item.description}</p>
                  <p className="mt-4 text-xs tabular-nums text-white/40">
                    {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
