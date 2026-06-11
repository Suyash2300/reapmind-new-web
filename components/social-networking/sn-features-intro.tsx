"use client";

import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { socialNetworkingConfig } from "@/lib/social-networking-config";

const FLOATERS = [
  { left: "8%", top: "18%", size: 48, color: "rgba(168,85,247,0.15)" },
  { left: "82%", top: "12%", size: 36, color: "rgba(6,182,212,0.12)" },
  { left: "90%", top: "68%", size: 56, color: "rgba(244,114,182,0.1)" },
  { left: "4%", top: "72%", size: 40, color: "rgba(52,211,153,0.1)" },
] as const;

export function SnFeaturesIntro() {
  const { featuresIntro } = socialNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="sn-features-intro-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {FLOATERS.map((f, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl"
            style={{ left: f.left, top: f.top, width: f.size, height: f.size, backgroundColor: f.color }}
            animate={reducedMotion ? undefined : { y: [0, -18, 0], x: [0, i % 2 === 0 ? 12 : -12, 0] }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {!reducedMotion && (
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
            animate={{ scaleX: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <div className="container-app relative">
        <motion.div
          initial={reducedMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <BlurFadeIn as="h2" id="sn-features-intro-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {featuresIntro.title}
          </BlurFadeIn>
        </motion.div>
        <BlurFadeIn delay={0.12} className="mt-8">
          <p className="max-w-4xl text-para leading-relaxed text-white/68">
            <WordReveal text={featuresIntro.paragraph} delay={0.15} />
          </p>
        </BlurFadeIn>
      </div>
    </section>
  );
}
