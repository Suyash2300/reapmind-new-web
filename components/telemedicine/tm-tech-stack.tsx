"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

export function TmTechStack() {
  const { techStack } = telemedicineConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="tm-tech-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tm-tech-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {techStack.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.columns.map((col, ci) => (
            <motion.div
              key={col.label}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: ci * 0.05 }}
              className="rounded-2xl border border-white/10 bg-black/45 p-5"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">{col.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {col.items.map((tag, ti) => (
                  <motion.span
                    key={tag}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.04 + ti * 0.03 }}
                    whileHover={reducedMotion ? undefined : { scale: 1.08, y: -2 }}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/75"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
