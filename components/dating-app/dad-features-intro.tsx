"use client";

import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { datingAppConfig } from "@/lib/dating-app-config";

const CARD_ACCENTS = ["#F43F5E", "#FB7185", "#F472B6"] as const;

export function DadFeaturesIntro() {
  const { featuresIntro } = datingAppConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="dad-features-intro-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion && (
          <motion.div
            className="absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-rose-600/8 blur-[100px]"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="dad-features-intro-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {featuresIntro.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuresIntro.paragraphs.map((paragraph, index) => (
            <motion.article
              key={index}
              initial={reducedMotion ? false : { opacity: 0, y: 40, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reducedMotion ? undefined : { y: -6, borderColor: `${CARD_ACCENTS[index]}55` }}
              className="rounded-2xl border border-white/10 bg-surface-elevated/60 p-5 backdrop-blur-sm sm:p-6"
              style={{ borderTopColor: `${CARD_ACCENTS[index]}66`, borderTopWidth: 2 }}
            >
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white" style={{ backgroundColor: `${CARD_ACCENTS[index]}30` }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-white/68 sm:text-para">
                {index === 0 ? <WordReveal text={paragraph} delay={0.1} /> : paragraph}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
