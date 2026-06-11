"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { datingAppConfig } from "@/lib/dating-app-config";

export function DadProcessFooter() {
  const { process } = datingAppConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-white/5 bg-black pb-12 pt-4 md:pb-16">
      <div className="container-app text-center">
        <BlurFadeIn>
          <p className="mx-auto max-w-3xl text-para leading-relaxed text-white/65">{process.tagline}</p>
        </BlurFadeIn>
        <BlurFadeIn delay={0.1} className="mt-8">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.04 }} whileTap={reducedMotion ? undefined : { scale: 0.98 }}>
            <Link
              href="/contact-us#free-consultation"
              className="group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-rose-600 to-primary px-10 text-sm font-semibold text-white"
            >
              {!reducedMotion && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  aria-hidden
                />
              )}
              <span className="relative">{process.cta}</span>
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
