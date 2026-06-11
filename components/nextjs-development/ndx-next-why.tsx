"use client";

import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { NextjsLogoMark } from "@/components/nextjs-development/nextjs-logo-mark";
import { NEXT_GLOW, nextjsDevelopmentConfig } from "@/lib/nextjs-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function NdxNextWhy() {
  const { nextWhy, hero } = nextjsDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="ndx-next-why-heading">
      <div className="container-app">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="relative order-2 lg:order-none"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-black/60 p-6 shadow-[0_32px_80px_-30px_rgba(0,112,243,0.35)] sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                  <NextjsLogoMark size={40} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: NEXT_GLOW }}>
                    Next.js
                  </p>
                  <p className="text-sm font-semibold text-white">The React framework for production</p>
                </div>
                <span className="ml-auto rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/80">
                  SSR + SSG
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {nextWhy.features.map((feature, i) => (
                  <motion.div
                    key={feature.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45, ease: smoothEase }}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <span className="text-lg" aria-hidden>
                      {feature.icon}
                    </span>
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-white/45">{feature.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">{feature.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={reducedMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4 font-mono text-[11px] text-white/60"
              >
                <p>
                  <span className="text-white">next build</span>
                </p>
                <p className="mt-1 text-emerald-400">✓ Static pages · Server components · Edge-ready</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-none">
            <BlurFadeIn as="h2" id="ndx-next-why-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
              {nextWhy.title}
            </BlurFadeIn>
            <BlurFadeIn as="p" delay={0.08} className="mt-5 text-para leading-relaxed text-white/65">
              <WordReveal text={nextWhy.description} delay={0.1} />
            </BlurFadeIn>

            <ul className="mt-8 space-y-3">
              {nextWhy.highlights.map((point, i) => (
                <motion.li
                  key={point.slice(0, 30)}
                  initial={reducedMotion ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45, ease: smoothEase }}
                  className="flex gap-3 text-sm leading-relaxed text-white/65"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
