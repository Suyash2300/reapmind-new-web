"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { AND_ACCENT, androidDevelopmentConfig } from "@/lib/android-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AndMidCta() {
  const { midCta } = androidDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-14" aria-label="Get started CTA">
      <div className="container-app">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: smoothEase }}
          className="rounded-[1.75rem] border border-white/10 p-6 text-center sm:p-10"
          style={{ background: `linear-gradient(135deg, ${AND_ACCENT}14, black)` }}
        >
          <BlurFadeIn as="h2" className="text-h4 font-bold text-white sm:text-h3">
            {midCta.title}
          </BlurFadeIn>
          <BlurFadeIn as="p" delay={0.06} className="mx-auto mt-4 max-w-2xl text-para text-white/65">
            <WordReveal text={midCta.body} delay={0.08} />
          </BlurFadeIn>
          <Link
            href={midCta.href}
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: AND_ACCENT }}
          >
            {midCta.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
