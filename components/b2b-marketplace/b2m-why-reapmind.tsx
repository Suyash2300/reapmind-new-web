"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { FmTestimonialVideo } from "@/components/freelance-marketplace/fm-testimonial-video";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { b2bMarketplaceConfig } from "@/lib/b2b-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function B2mWhyReapmind() {
  const { whyUs } = b2bMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="b2m-why-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="b2m-why-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {whyUs.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.08} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={whyUs.intro} delay={0.1} />
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-stretch">
          <BlurFadeIn delay={0.04} className="h-full">
            <motion.article
              whileHover={reducedMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.35, ease: smoothEase }}
              className="flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated/80 p-6 backdrop-blur-sm sm:p-7"
            >
              <h3 className="text-subtitle font-bold text-white">{whyUs.innovation.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60 sm:text-para">{whyUs.innovation.description}</p>
            </motion.article>
          </BlurFadeIn>

          <FmTestimonialVideo
            src={whyUs.video.src}
            poster={whyUs.video.poster}
            title={whyUs.video.title}
            fillHeight
            className="h-full min-h-[240px] lg:min-h-[280px]"
          />
        </div>

        <BlurFadeIn delay={0.15} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {whyUs.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
