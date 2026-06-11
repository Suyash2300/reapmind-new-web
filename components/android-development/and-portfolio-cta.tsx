"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { AND_ACCENT, androidDevelopmentConfig } from "@/lib/android-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AndPortfolioCta() {
  const { portfolioCta } = androidDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12" aria-label="Expert callback">
      <div className="container-app">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: smoothEase }}
          className="flex flex-col items-center justify-between gap-6 rounded-[1.75rem] border border-white/10 bg-black/55 p-6 sm:flex-row sm:p-8"
        >
          <BlurFadeIn as="h2" className="text-h5 font-bold text-white sm:text-h4">
            {portfolioCta.title}
          </BlurFadeIn>
          <Link
            href={portfolioCta.href}
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full px-8 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: AND_ACCENT }}
          >
            {portfolioCta.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
