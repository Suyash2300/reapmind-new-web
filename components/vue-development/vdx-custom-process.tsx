"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { VUE_ACCENT, vueDevelopmentConfig } from "@/lib/vue-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function VdxCustomProcess() {
  const { customProcess } = vueDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="vdx-process-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="vdx-process-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {customProcess.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={customProcess.intro} delay={0.08} />
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {customProcess.steps.map((step, i) => (
            <motion.article
              key={step.step}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: smoothEase }}
              className="rounded-2xl border border-white/10 bg-surface-elevated/80 p-5 sm:p-6"
            >
              <span
                className="inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{ backgroundColor: `${step.accent}22`, color: step.accent }}
              >
                Step {step.step}
              </span>
              <h3 className="mt-3 text-subtitle font-bold text-white">{step.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm text-white/60">
                    <span aria-hidden>
                      •
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div style={{
            borderColor: `${VUE_ACCENT}33`,
            background: `linear-gradient(to bottom right, ${VUE_ACCENT}14, black, rgba(53,73,94,0.08))`,
          }}>
        <BlurFadeIn
          delay={0.12}
          className="mt-12 rounded-[1.75rem] border p-6 sm:p-8"
        >
          <h3 className="text-h5 font-bold text-white">{customProcess.hireTitle}</h3>
          <p className="mt-3 max-w-3xl text-para leading-relaxed text-white/65">{customProcess.hireBody}</p>
          <motion.div
            className="mt-6"
            whileHover={reducedMotion ? undefined : { scale: 1.03 }}
            transition={{ duration: 0.3, ease: smoothEase }}
          >
            <Link
              href={customProcess.hireHref}
              className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {customProcess.hireCta}
            </Link>
          </motion.div>
        </BlurFadeIn>
        </div>
      </div>
    </section>
  );
}
