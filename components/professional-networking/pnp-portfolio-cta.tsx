"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { professionalNetworkingConfig } from "@/lib/professional-networking-config";

export function PnpPortfolioCta() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-white/10 bg-surface-dark py-8 md:py-10">
      <div className="container-app text-center">
        <BlurFadeIn>
          <Link
            href="/contact-us#free-consultation"
            className="relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full border border-emerald-500/35 bg-emerald-500/10 px-10 text-sm font-semibold text-white hover:bg-emerald-500/20"
          >
            {!reducedMotion && (
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent, rgba(16,185,129,0.5), transparent)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            )}
            <span className="relative rounded-full bg-black/80 px-1">{professionalNetworkingConfig.portfolioCta}</span>
          </Link>
        </BlurFadeIn>
      </div>
    </div>
  );
}
