"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { datingAppConfig } from "@/lib/dating-app-config";

export function DadPortfolioCta() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-white/10 bg-surface-dark py-8 md:py-10">
      <div className="container-app text-center">
        <BlurFadeIn>
          <motion.div
            animate={reducedMotion ? undefined : { scale: [1, 1.04, 1, 1.04, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
          >
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-rose-500/40 bg-rose-500/10 px-10 text-sm font-semibold text-white transition-colors hover:bg-rose-500/20"
            >
              {datingAppConfig.portfolioCta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
