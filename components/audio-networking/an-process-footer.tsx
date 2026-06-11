"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { audioNetworkingConfig } from "@/lib/audio-networking-config";

export function AnProcessFooter() {
  const { process } = audioNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-white/5 bg-black pb-12 pt-4 md:pb-16">
      <div className="container-app text-center">
        <BlurFadeIn>
          <p className="mx-auto max-w-3xl text-para leading-relaxed text-white/65">
            <WordReveal text={process.tagline} delay={0.05} />
          </p>
        </BlurFadeIn>
        <BlurFadeIn delay={0.1} className="mt-8">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.04 }} whileTap={reducedMotion ? undefined : { scale: 0.98 }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-primary to-violet-600 px-10 text-sm font-semibold text-white shadow-[0_16px_48px_-12px_rgba(26,105,253,0.45)] transition-opacity hover:opacity-95"
            >
              {process.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
