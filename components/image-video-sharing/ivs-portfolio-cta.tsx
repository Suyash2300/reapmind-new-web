"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { imageVideoSharingConfig } from "@/lib/image-video-sharing-config";

export function IvsPortfolioCta() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-white/10 bg-surface-dark py-8 md:py-10">
      <div className="container-app text-center">
        <BlurFadeIn>
          <Link
            href="/contact-us#free-consultation"
            className="group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full border border-rose-500/35 bg-rose-500/10 px-10 text-sm font-semibold text-white transition-colors hover:bg-rose-500/20"
          >
            {!reducedMotion && (
              <>
                <motion.span
                  className="pointer-events-none absolute inset-0 rounded-full border border-rose-400/50"
                  animate={{ scale: [1, 1.35, 1.35], opacity: [0.6, 0, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  className="pointer-events-none absolute inset-0 rounded-full border border-rose-400/30"
                  animate={{ scale: [1, 1.55, 1.55], opacity: [0.4, 0, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                />
              </>
            )}
            <span className="relative">{imageVideoSharingConfig.portfolioCta}</span>
          </Link>
        </BlurFadeIn>
      </div>
    </div>
  );
}
