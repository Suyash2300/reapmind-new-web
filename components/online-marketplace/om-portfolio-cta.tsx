"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineMarketplaceConfig } from "@/lib/online-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OmPortfolioCta() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-white/10 bg-surface-dark py-8">
      <div className="container-app text-center">
        <BlurFadeIn>
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.04 }} transition={{ duration: 0.35, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-10 text-sm font-semibold text-white transition-colors hover:bg-primary/20"
            >
              {onlineMarketplaceConfig.portfolioCta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
