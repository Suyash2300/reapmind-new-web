"use client";

import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { audioNetworkingConfig } from "@/lib/audio-networking-config";

export function AnEraIntro() {
  const { eraIntro } = audioNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="an-era-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion && (
          <>
            <motion.div
              className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[100px]"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-primary/12 blur-[90px]"
              animate={{ x: [0, -24, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </>
        )}
      </div>

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="an-era-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {eraIntro.title}
        </BlurFadeIn>
        <div className="mt-8 space-y-6">
          {eraIntro.paragraphs.map((para, i) => (
            <BlurFadeIn key={i} delay={0.06 * i}>
              <p className="max-w-4xl text-para leading-relaxed text-white/68">
                <WordReveal text={para} delay={0.08 + i * 0.04} />
              </p>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
