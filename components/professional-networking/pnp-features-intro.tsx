"use client";

import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { professionalNetworkingConfig } from "@/lib/professional-networking-config";

export function PnpFeaturesIntro() {
  const { featuresIntro } = professionalNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="pnp-features-intro-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion && (
          <motion.div
            className="absolute -left-20 top-1/4 h-80 w-80 skew-x-12 rounded-full bg-emerald-600/8 blur-[100px]"
            animate={{ x: [0, 40, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
      <div className="container-app relative">
        <BlurFadeIn as="h2" id="pnp-features-intro-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {featuresIntro.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.1} className="mt-8">
          <p className="max-w-4xl text-para leading-relaxed text-white/68">
            <WordReveal text={featuresIntro.paragraph} delay={0.1} />
          </p>
        </BlurFadeIn>
      </div>
    </section>
  );
}
