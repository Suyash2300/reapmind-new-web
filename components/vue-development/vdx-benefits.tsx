"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { vueDevelopmentConfig } from "@/lib/vue-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function VdxBenefits() {
  const { benefits } = vueDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="vdx-benefits-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="vdx-benefits-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.55, ease: smoothEase }}
              whileHover={reducedMotion ? undefined : { y: -4 }}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface-elevated/80 p-5 sm:p-6"
            >
              <div className="h-1 w-10 rounded-full" style={{ backgroundColor: item.accent }} aria-hidden />
              <h3 className="mt-4 text-subtitle font-bold text-white">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
