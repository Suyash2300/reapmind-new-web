"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { socialNetworkingConfig } from "@/lib/social-networking-config";

export function SnPortfolioCta() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-8 md:py-10">
      {!reducedMotion && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      )}
      <div className="container-app relative text-center">
        <BlurFadeIn>
          <Link
            href="/contact-us#free-consultation"
            className="group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full px-10 text-sm font-semibold text-white"
          >
            {!reducedMotion && (
              <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-fuchsia-500"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                style={{ backgroundSize: "200% 200%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            )}
            <span className="relative rounded-full bg-surface-dark/90 px-4 py-2.5 transition-colors group-hover:bg-surface-dark/70">
              {socialNetworkingConfig.portfolioCta}
            </span>
          </Link>
        </BlurFadeIn>
      </div>
    </div>
  );
}
