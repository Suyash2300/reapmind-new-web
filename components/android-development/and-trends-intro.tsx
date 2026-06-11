"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { AND_ACCENT, androidDevelopmentConfig } from "@/lib/android-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AndTrendsIntro() {
  const { trends } = androidDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="and-trends-heading">
      <div className="container-app">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="and-trends-heading" className="max-w-2xl text-h3 font-bold text-white sm:text-h2">
              {trends.title}
            </BlurFadeIn>
            <BlurFadeIn as="p" delay={0.06} className="mt-5 max-w-2xl text-para leading-relaxed text-white/65">
              <WordReveal text={trends.body} delay={0.08} />
            </BlurFadeIn>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_32px_80px_-40px_rgba(61,220,132,0.3)]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={trends.image}
                alt={trends.imageAlt}
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" aria-hidden />
              <div
                className="absolute inset-0 opacity-30"
                style={{ background: `linear-gradient(135deg, ${AND_ACCENT}44, transparent 60%)` }}
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
