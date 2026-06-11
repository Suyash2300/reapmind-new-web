"use client";

import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ionicDevelopmentConfig } from "@/lib/ionic-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function IdxIndustries() {
  const { industries } = ionicDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="idx-industries-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="idx-industries-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {industries.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={industries.intro} delay={0.08} />
        </BlurFadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {industries.items.map((item, i) => (
            <motion.span
              key={item.label}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.04, duration: 0.4, ease: smoothEase }}
              whileHover={reducedMotion ? undefined : { scale: 1.05, borderColor: "rgba(56,128,255,0.4)" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 sm:text-sm"
            >
              <span className="text-sm leading-none" aria-hidden>
                {item.icon}
              </span>
              {item.label}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
