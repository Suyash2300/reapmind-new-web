"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { nextjsDevelopmentConfig } from "@/lib/nextjs-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function NdxEngagement() {
  const { engagement } = nextjsDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const models = engagement.models;
  const model = models[active];

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="ndx-engagement-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ndx-engagement-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {engagement.title}
        </BlurFadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist">
          {models.map((m, i) => (
            <HydrationButton
              key={m.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`min-h-11 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                i === active ? "border-white/25 text-white" : "border-white/10 bg-black/40 text-white/55"
              }`}
              style={i === active ? { borderColor: `${m.accent}66`, backgroundColor: `${m.accent}18` } : undefined}
            >
              {m.title}
            </HydrationButton>
          ))}
        </div>

        <motion.div
          key={model.id}
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: smoothEase }}
          className="mx-auto mt-8 max-w-3xl rounded-[1.75rem] border border-white/10 bg-black/55 p-6 sm:p-8"
          role="tabpanel"
        >
          <h3 className="text-h5 font-bold text-white">{model.title}</h3>
          <p className="mt-3 text-para leading-relaxed text-white/65">{model.intro}</p>

          <ol className="mt-6 space-y-4">
            {model.steps.map((step, i) => (
              <li key={step.slice(0, 30)} className="flex gap-4">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ backgroundColor: model.accent }}
                >
                  {i + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-white/65 sm:text-para">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 text-center">
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {model.cta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
