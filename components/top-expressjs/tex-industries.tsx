"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

export function TexIndustries() {
  const { industries } = topExpressjsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="bg-[#0c0f1a] py-14 md:py-20" aria-labelledby="tex-industries-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tex-industries-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {industries.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {industries.intro}
        </BlurFadeIn>

        <div className="mt-10 columns-2 gap-3 sm:columns-3 md:columns-4 lg:columns-5">
          {industries.items.map((name, i) => (
            <motion.div
              key={name}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 12) * 0.02 }}
              whileHover={reducedMotion ? undefined : { scale: 1.03 }}
              className="mb-3 break-inside-avoid rounded-xl border border-[#a78bfa]/20 bg-[#a78bfa]/5 px-3 py-3 text-center text-xs font-semibold text-white/80 sm:text-sm"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
