"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { universityManagementConfig } from "@/lib/university-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function UmsCampusModules() {
  const { modules } = universityManagementConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = modules.items;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="ums-modules-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ums-modules-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {modules.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <HydrationButton
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(i)}
                  className={`relative flex min-h-[5.25rem] flex-col items-center justify-center rounded-xl border p-2 text-center transition-colors sm:min-h-[5.75rem] sm:rounded-2xl sm:p-3 ${
                    isActive
                      ? "border-white/25 bg-black/70 text-white"
                      : "border-white/10 bg-black/40 text-white/55 hover:border-white/20"
                  }`}
                  style={isActive ? { borderColor: `${item.accent}55`, backgroundColor: `${item.accent}14` } : undefined}
                >
                  <span className="text-base sm:text-lg" aria-hidden>
                    {item.icon}
                  </span>
                  <span
                    className="mt-1 font-mono text-[8px] font-bold uppercase tracking-widest sm:text-[9px]"
                    style={{ color: isActive ? item.accent : "rgba(255,255,255,0.35)" }}
                  >
                    {item.code}
                  </span>
                  <span className="mt-0.5 line-clamp-2 text-[9px] font-semibold leading-tight sm:text-[10px]">{item.title}</span>
                </HydrationButton>
              );
            })}
          </div>

          <div className="relative min-h-[280px] sm:min-h-[300px]">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <motion.article
                  key={item.id}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.28, ease: smoothEase }}
                  className={`rounded-[1.75rem] border border-white/10 bg-black/55 p-6 sm:p-8 ${
                    isActive ? "relative z-10" : "pointer-events-none absolute inset-0 z-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl"
                      style={{ backgroundColor: `${item.accent}22` }}
                      aria-hidden
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: item.accent }}>
                        Campus · {item.code}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-para">{item.description}</p>
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
