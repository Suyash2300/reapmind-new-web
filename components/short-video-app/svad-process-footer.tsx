"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { shortVideoAppConfig } from "@/lib/short-video-app-config";

export function SvadProcessFooter() {
  const { process } = shortVideoAppConfig;
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
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.04 }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-primary px-10 text-sm font-semibold text-white shadow-[0_16px_48px_-12px_rgba(249,115,22,0.4)]"
            >
              {process.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
