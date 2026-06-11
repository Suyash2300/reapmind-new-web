"use client";

import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ionicDevelopmentConfig } from "@/lib/ionic-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function IdxWhyReapmind() {
  const { whyUs } = ionicDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="idx-why-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="idx-why-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {whyUs.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={whyUs.intro} delay={0.08} />
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: smoothEase }}
              whileHover={reducedMotion ? undefined : { y: -4 }}
              className="rounded-2xl border border-white/10 bg-black/55 p-5 sm:p-6"
            >
              <h3 className="text-subtitle font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
