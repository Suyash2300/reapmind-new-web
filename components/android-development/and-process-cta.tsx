"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { AND_ACCENT, androidDevelopmentConfig } from "@/lib/android-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AndProcessCta() {
  const { process } = androidDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12" aria-label="Process call to action">
      <div className="container-app">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: smoothEase }}
          className="rounded-[1.75rem] border border-white/10 p-6 text-center sm:p-8"
          style={{ background: `linear-gradient(135deg, ${AND_ACCENT}14, black)` }}
        >
          <BlurFadeIn as="p" className="text-sm font-semibold uppercase tracking-wider text-[#3DDC84]">
            {process.tagline}
          </BlurFadeIn>
          <Link
            href={process.ctaHref}
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: AND_ACCENT }}
          >
            {process.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
