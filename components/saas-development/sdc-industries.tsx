"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { saasDevelopmentConfig } from "@/lib/saas-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function SdcIndustries() {
  const { industries } = saasDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = industries.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="sdc-industries-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="sdc-industries-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {industries.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-2" role="tablist" aria-label="SaaS target industries">
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
                    isActive ? "border-white/20 bg-black/60" : "border-transparent hover:bg-black/30"
                  }`}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base"
                    style={{ backgroundColor: `${item.accent}22` }}
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <span className={`text-sm font-semibold ${isActive ? "text-white" : "text-white/55"}`}>{item.label}</span>
                </HydrationButton>
              );
            })}
          </div>

          <div className="relative min-h-[220px]" role="tabpanel">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <motion.article
                  key={item.id}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.28, ease: smoothEase }}
                  className={`rounded-[1.75rem] border border-white/10 bg-surface-elevated/80 p-6 sm:p-8 ${
                    isActive ? "relative z-10" : "pointer-events-none absolute inset-0 z-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  <div
                    className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ borderColor: `${item.accent}44`, color: item.accent }}
                  >
                    {item.icon} {item.label}
                  </div>
                  <p className="text-sm leading-relaxed text-white/65 sm:text-para">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <BlurFadeIn delay={0.12} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {industries.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
