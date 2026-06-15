"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

export function TmPortfolioCta() {
  const { portfolioCta } = telemedicineConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-10 md:py-12">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion && (
          <>
            <motion.div
              className="absolute left-[10%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-emerald-400/80"
              animate={{ y: [-20, 20, -20], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-primary/80"
              animate={{ y: [12, -12, 12], x: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className="absolute right-[28%] bottom-[25%] h-4 w-4 rotate-45 border border-white/20 bg-white/5"
              animate={{ rotate: [45, 90, 45], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </>
        )}
      </div>

      <div className="container-app relative text-center">
        <BlurFadeIn>
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.04 }} transition={{ duration: 0.3 }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-primary to-primary px-10 text-sm font-bold text-white shadow-[0_16px_48px_-12px_rgba(26,105,253,0.45)] transition-shadow hover:shadow-[0_20px_56px_-10px_rgba(52,211,153,0.35)]"
            >
              {portfolioCta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
