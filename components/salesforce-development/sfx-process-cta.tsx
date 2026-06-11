"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { SF_ACCENT, salesforceDevelopmentConfig } from "@/lib/salesforce-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function SfxProcessCta() {
  const { process } = salesforceDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12" aria-label="Agile process call to action">
      <div className="container-app">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: smoothEase }}
          className="rounded-[1.75rem] border border-white/10 p-6 sm:p-8"
          style={{
            background: `linear-gradient(135deg, ${SF_ACCENT}14, black, rgba(0,161,224,0.05))`,
          }}
        >
          <BlurFadeIn as="p" className="text-center text-sm font-semibold uppercase tracking-wider text-[#00A1E0]">
            {process.tagline}
          </BlurFadeIn>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {process.agileSteps.map((step, i) => (
              <motion.span
                key={step}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35, ease: smoothEase }}
                className="inline-flex min-h-10 items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold text-white/70 sm:text-sm"
              >
                {step}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={process.ctaHref}
              className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: SF_ACCENT }}
            >
              {process.cta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
