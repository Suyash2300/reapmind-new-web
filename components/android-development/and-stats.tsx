"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { AND_ACCENT, androidDevelopmentConfig } from "@/lib/android-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AndStats() {
  const { stats } = androidDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-10 md:py-12" aria-label="Company statistics">
      <div className="container-app">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: smoothEase }}
              className="rounded-2xl border border-white/10 bg-surface-elevated/80 px-4 py-6 text-center"
            >
              <p className="text-3xl font-black sm:text-4xl" style={{ color: AND_ACCENT }}>
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium leading-snug text-white/55 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
