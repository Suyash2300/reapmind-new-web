"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { NEXT_GLOW, nextjsDevelopmentConfig } from "@/lib/nextjs-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function NdxHireCta() {
  const { hireCta } = nextjsDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `linear-gradient(90deg, transparent, rgba(0,112,243,0.08), transparent)` }}
        aria-hidden
      />
      <div className="container-app relative text-center">
        <BlurFadeIn as="h2" className="mx-auto max-w-3xl text-h4 font-bold text-white sm:text-h3">
          {hireCta.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.08} className="mt-8">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.04 }} transition={{ duration: 0.35, ease: smoothEase }}>
            <Link
              href={hireCta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-10 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(0,112,243,0.45)] transition-colors hover:bg-white hover:text-black"
            >
              {hireCta.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
