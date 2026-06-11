"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { IONIC_ACCENT, ionicDevelopmentConfig } from "@/lib/ionic-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function IdxStats() {
  const { stats } = ionicDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="idx-stats-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="idx-stats-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
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
              className="rounded-2xl border bg-black/50 px-4 py-5 text-center"
              style={{ borderColor: `${IONIC_ACCENT}33` }}
            >
              <p className="text-2xl font-black sm:text-3xl" style={{ color: IONIC_ACCENT }}>
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium leading-snug text-white/55">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
