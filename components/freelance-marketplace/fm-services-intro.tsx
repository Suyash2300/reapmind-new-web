"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { freelanceMarketplaceConfig } from "@/lib/freelance-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FmServicesIntro() {
  const { services } = freelanceMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="fm-services-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="fm-services-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {services.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.08} className="mt-5 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={services.intro} delay={0.1} />
        </BlurFadeIn>
        <BlurFadeIn delay={0.16} className="mt-8">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {services.cta}
          </Link>
        </BlurFadeIn>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {["Employers hire", "Freelancers earn", "Platform scales"].map((label, i) => (
            <motion.div
              key={label}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: smoothEase }}
              className="rounded-xl border border-white/10 bg-surface-elevated px-4 py-3 text-center text-sm font-semibold text-white/75"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
