"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { NEXT_GLOW, nextjsDevelopmentConfig } from "@/lib/nextjs-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function NdxStats() {
  const { stats } = nextjsDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="ndx-stats-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ndx-stats-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {stats.title}
        </BlurFadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: smoothEase }}
              className="rounded-2xl border border-white/15 bg-black/50 px-4 py-5 text-center"
            >
              <p className="text-2xl font-black text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs font-medium leading-snug text-white/55">{stat.label}</p>
              <div className="mx-auto mt-2 h-0.5 w-8 rounded-full" style={{ backgroundColor: NEXT_GLOW }} aria-hidden />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
