"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { professionalNetworkingConfig } from "@/lib/professional-networking-config";

export function PnpProcessFooter() {
  const { process } = professionalNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-white/5 bg-black pb-12 pt-4 md:pb-16">
      <div className="container-app text-center">
        <BlurFadeIn>
          <p className="mx-auto max-w-3xl text-para leading-relaxed text-white/65">{process.tagline}</p>
        </BlurFadeIn>
        <BlurFadeIn delay={0.1} className="mt-8">
          <motion.div
            whileHover={reducedMotion ? undefined : { scale: 1.04 }}
            whileTap={reducedMotion ? undefined : { scale: 0.98 }}
          >
            <Link
              href="/contact-us#free-consultation"
              className="group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-primary px-10 text-sm font-semibold text-white"
            >
              {!reducedMotion && (
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-white/40"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35 }}
                  style={{ transformOrigin: "left" }}
                />
              )}
              {process.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
