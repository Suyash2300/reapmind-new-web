"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { realEstateConfig } from "@/lib/real-estate-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function ReaEngagement() {
  const { engagement } = realEstateConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const models = engagement.models;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="rea-engagement-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="rea-engagement-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {engagement.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model, i) => {
            const isActive = i === active;
            return (
              <HydrationButton
                key={model.id}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-2xl border p-5 text-left transition-colors ${
                  isActive ? "border-white/25 bg-black/60" : "border-white/10 bg-black/30 hover:border-white/20"
                }`}
                style={isActive ? { borderColor: `${model.accent}55`, boxShadow: `0 0 32px ${model.accent}18` } : undefined}
              >
                <span className="text-2xl" aria-hidden>
                  {model.icon}
                </span>
                <p className="mt-3 text-sm font-bold text-white">{model.label}</p>
              </HydrationButton>
            );
          })}
        </div>

        <motion.div
          key={models[active].id}
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: smoothEase }}
          className="mx-auto mt-8 max-w-3xl rounded-[1.75rem] border border-white/10 bg-black/55 p-6 sm:p-8"
        >
          <p
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: models[active].accent }}
          >
            {models[active].label}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-para">{models[active].description}</p>
        </motion.div>

        <BlurFadeIn delay={0.1} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {engagement.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
