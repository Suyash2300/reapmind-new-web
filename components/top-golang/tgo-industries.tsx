"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

export function TgoIndustries() {
  const { industries } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tgo-industries-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tgo-industries-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {industries.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {industries.intro}
        </BlurFadeIn>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {industries.items.map((name, i) => (
            <motion.div
              key={name}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 10) * 0.025 }}
              whileHover={reducedMotion ? undefined : { borderColor: "rgba(0,173,216,0.6)", y: -3 }}
              className={`rounded-xl border border-[#00ADD8]/20 bg-[#00ADD8]/5 px-3 py-3.5 text-center text-xs font-semibold text-white/80 sm:text-sm ${i % 9 === 0 ? "sm:col-span-2" : ""}`}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
