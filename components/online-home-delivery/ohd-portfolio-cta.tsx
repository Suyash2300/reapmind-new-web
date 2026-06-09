"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineHomeDeliveryConfig } from "@/lib/online-home-delivery-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OhdPortfolioCta() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-white/10 bg-surface-dark py-8">
      <div className="container-app text-center">
        <BlurFadeIn>
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.04 }} transition={{ duration: 0.35, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 px-10 text-sm font-semibold text-white transition-colors hover:bg-orange-500/20"
            >
              {onlineHomeDeliveryConfig.portfolioCta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
