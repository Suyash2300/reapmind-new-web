"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { shortVideoAppConfig } from "@/lib/short-video-app-config";

export function SvadPortfolioCta() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-white/10 bg-surface-dark py-8 md:py-10">
      <div className="container-app text-center">
        <BlurFadeIn>
          <motion.div whileHover={reducedMotion ? undefined : { y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-orange-500/35 bg-gradient-to-r from-orange-500/15 to-pink-500/15 px-10 text-sm font-semibold text-white hover:from-orange-500/25 hover:to-pink-500/25"
            >
              {shortVideoAppConfig.portfolioCta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
