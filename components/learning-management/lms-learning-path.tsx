"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { learningManagementConfig } from "@/lib/learning-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function LmsLearningPath() {
  const { deliverTrack } = learningManagementConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = deliverTrack.items;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="lms-path-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="lms-path-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {deliverTrack.title}
        </BlurFadeIn>

        {deliverTrack.paragraphs.map((p, i) => (
          <BlurFadeIn key={p.slice(0, 40)} as="p" delay={0.06 + i * 0.06} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
            <WordReveal text={p} delay={0.08 + i * 0.04} />
          </BlurFadeIn>
        ))}

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:items-start">
          <div className="relative pl-4 sm:pl-6">
            <div className="absolute bottom-2 left-[1.35rem] top-2 w-px bg-white/10 sm:left-[1.6rem]" aria-hidden>
              <motion.div
                className="w-full origin-top bg-violet-400"
                animate={{ height: `${((active + 1) / items.length) * 100}%` }}
                transition={{ duration: reducedMotion ? 0 : 0.35, ease: smoothEase }}
              />
            </div>

            <div className="space-y-2" role="tablist" aria-label="E-learning capabilities">
              {items.map((item, i) => {
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <HydrationButton
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className={`relative flex w-full items-center gap-4 rounded-2xl border py-3 pl-10 pr-4 text-left transition-colors sm:py-3.5 sm:pl-12 sm:pr-5 ${
                      isActive
                        ? "border-white/20 bg-black/60"
                        : "border-transparent bg-transparent hover:bg-black/30"
                    }`}
                  >
                    <span
                      className={`absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border text-sm ${
                        isActive
                          ? "border-violet-400 bg-violet-500/20"
                          : isPast
                            ? "border-violet-400/50 bg-violet-500/10 text-violet-300"
                            : "border-white/15 bg-black/50 text-white/40"
                      }`}
                      style={isActive ? { borderColor: item.accent, backgroundColor: `${item.accent}22` } : undefined}
                      aria-hidden
                    >
                      {isPast ? "✓" : item.icon}
                    </span>
                    <span className={`text-sm font-semibold ${isActive ? "text-white" : "text-white/55"}`}>{item.title}</span>
                  </HydrationButton>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[300px] sm:min-h-[320px]" role="tabpanel">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <motion.article
                  key={item.id}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: reducedMotion || !isActive ? 0 : 0,
                  }}
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
                        Module · {item.code}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-para">{item.description}</p>
                  <Link
                    href="/contact-us#free-consultation"
                    className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-primary transition-colors hover:text-white"
                    tabIndex={isActive ? 0 : -1}
                  >
                    Contact Us
                  </Link>
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
