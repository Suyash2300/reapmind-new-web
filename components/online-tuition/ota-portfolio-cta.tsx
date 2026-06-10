"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineTuitionConfig } from "@/lib/online-tuition-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OtaPortfolioCta() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative overflow-hidden border-t border-white/10 bg-black py-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.06),transparent)]"
        aria-hidden
      />
      <div className="container-app relative text-center">
        <BlurFadeIn>
          <motion.div
            whileHover={reducedMotion ? undefined : { scale: 1.04 }}
            transition={{ duration: 0.35, ease: smoothEase }}
          >
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-sky-400/35 bg-sky-500/10 px-10 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(14,165,233,0.45)] transition-colors hover:bg-sky-500 hover:text-black"
            >
              {onlineTuitionConfig.portfolioCta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
