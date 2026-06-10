"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { smartSchoolManagementConfig } from "@/lib/smart-school-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function SsmsAdminModules() {
  const { modules } = smartSchoolManagementConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = modules.items;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="ssms-modules-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ssms-modules-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {modules.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                className={`relative flex min-h-[5.5rem] flex-col items-start rounded-2xl border p-4 text-left transition-colors sm:min-h-[6rem] ${
                  isActive
                    ? "border-white/25 bg-black/70"
                    : "border-white/10 bg-black/40 hover:border-white/20"
                }`}
                style={isActive ? { borderColor: `${item.accent}55`, backgroundColor: `${item.accent}12` } : undefined}
              >
                <span className="text-lg" aria-hidden>
                  {item.icon}
                </span>
                <span
                  className="mt-2 font-mono text-[9px] font-bold uppercase tracking-widest"
                  style={{ color: isActive ? item.accent : "rgba(255,255,255,0.35)" }}
                >
                  {item.code}
                </span>
                <span className={`mt-1 line-clamp-2 text-xs font-semibold leading-snug ${isActive ? "text-white" : "text-white/55"}`}>
                  {item.title}
                </span>
              </HydrationButton>
            );
          })}
        </div>

        <div className="relative mt-8 min-h-[260px] sm:min-h-[280px]">
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
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                    style={{ backgroundColor: `${item.accent}22` }}
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: item.accent }}>
                      Module · {item.code}
                    </p>
                    <h3 className="text-lg font-bold text-white sm:text-xl">{item.title}</h3>
                  </div>
                  <span className="ml-auto text-xs tabular-nums text-white/40">
                    {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-para">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
