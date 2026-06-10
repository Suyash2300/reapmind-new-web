"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { universityManagementConfig } from "@/lib/university-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function UmsAdvantages() {
  const { advantages } = universityManagementConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = advantages.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="ums-advantages-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ums-advantages-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {advantages.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                className={`flex min-h-[7rem] flex-col items-start rounded-2xl border p-4 text-left transition-colors sm:min-h-[7.5rem] sm:p-5 ${
                  isActive
                    ? "border-indigo-400/40 bg-indigo-500/10"
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

        <div className="relative mt-6 min-h-[220px] sm:min-h-[240px]">
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
                <span className="text-xs font-bold tabular-nums text-indigo-300/90">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-para">{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        <BlurFadeIn delay={0.12} className="mt-8 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {advantages.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
