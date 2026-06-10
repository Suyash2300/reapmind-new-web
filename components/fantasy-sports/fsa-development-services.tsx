"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { fantasySportsConfig } from "@/lib/fantasy-sports-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FsaDevelopmentServices() {
  const { developmentServices } = fantasySportsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const steps = developmentServices.steps;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="fsa-services-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="fsa-services-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {developmentServices.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.08} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={developmentServices.intro} delay={0.1} />
        </BlurFadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:items-start">
          <div className="relative pl-4 sm:pl-6">
            <div className="absolute bottom-2 left-[1.35rem] top-2 w-px bg-white/10 sm:left-[1.6rem]" aria-hidden>
              <motion.div
                className="w-full origin-top bg-emerald-400"
                animate={{ height: `${((active + 1) / steps.length) * 100}%` }}
                transition={{ duration: reducedMotion ? 0 : 0.35, ease: smoothEase }}
              />
            </div>

            <div className="space-y-2" role="tablist" aria-label="Fantasy sports development phases">
              {steps.map((step, i) => {
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <HydrationButton
                    key={step.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`relative flex w-full items-center gap-4 rounded-2xl border py-3 pl-10 pr-4 text-left transition-colors sm:py-3.5 sm:pl-12 sm:pr-5 ${
                      isActive ? "border-white/20 bg-black/60" : "border-transparent bg-transparent hover:bg-black/30"
                    }`}
                  >
                    <span
                      className={`absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border text-sm ${
                        isActive
                          ? "border-emerald-400 bg-emerald-500/20"
                          : isPast
                            ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-300"
                            : "border-white/15 bg-black/50 text-white/40"
                      }`}
                      style={isActive ? { borderColor: step.accent, backgroundColor: `${step.accent}22` } : undefined}
                      aria-hidden
                    >
                      {isPast ? "✓" : step.icon}
                    </span>
                    <span className={`text-sm font-semibold ${isActive ? "text-white" : "text-white/55"}`}>{step.title}</span>
                  </HydrationButton>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[300px]" role="tabpanel">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <motion.article
                  key={step.id}
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.28, ease: smoothEase }}
                  className={`rounded-[1.75rem] border border-white/10 bg-black/55 p-6 sm:p-8 ${
                    isActive ? "relative z-10" : "pointer-events-none absolute inset-0 z-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  <div
                    className="mb-4 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ borderColor: `${step.accent}44`, color: step.accent }}
                  >
                    Phase {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-h5 font-bold text-white sm:text-h4">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-para">{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
