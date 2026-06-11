"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { nextjsDevelopmentConfig } from "@/lib/nextjs-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type ServiceId = (typeof nextjsDevelopmentConfig.services.items)[number]["id"];

export function NdxServices() {
  const { services } = nextjsDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<ServiceId>("custom");
  const items = services.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="ndx-services-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ndx-services-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {services.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mx-auto mt-4 max-w-4xl text-center text-para leading-relaxed text-white/65">
          <WordReveal text={services.intro} delay={0.08} />
        </BlurFadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Next.js development services">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <HydrationButton
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(item.id)}
                className={`min-h-11 rounded-full border px-3 py-2.5 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                  isActive ? "border-white/25 text-white" : "border-white/10 bg-black/40 text-white/55 hover:border-white/20"
                }`}
                style={isActive ? { borderColor: `${item.accent}66`, backgroundColor: `${item.accent}18` } : undefined}
              >
                <span className="mr-1" aria-hidden>
                  {item.icon}
                </span>
                {item.label}
              </HydrationButton>
            );
          })}
        </div>

        <div className="relative mx-auto mt-8 max-w-4xl min-h-[220px]" role="tabpanel">
          {items.map((item, i) => {
            const isActive = item.id === activeId;
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
                <h3 className="text-h5 font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-para">{item.description}</p>
                <p className="mt-4 text-xs tabular-nums text-white/40">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </p>
              </motion.article>
            );
          })}
        </div>

        <BlurFadeIn delay={0.12} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {services.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
