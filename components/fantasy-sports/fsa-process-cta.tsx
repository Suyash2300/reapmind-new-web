"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { fantasySportsConfig } from "@/lib/fantasy-sports-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FsaProcessCta() {
  const { process } = fantasySportsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-white/10 bg-surface-dark py-10">
      <div className="container-app text-center">
        <BlurFadeIn>
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-10 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {process.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
