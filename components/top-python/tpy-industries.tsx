"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyIndustries() {
  const { industries } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="bg-[#0a1628] py-14 md:py-20" aria-labelledby="tpy-industries-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tpy-industries-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {industries.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {industries.intro}
        </BlurFadeIn>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {industries.items.map((name, i) => (
            <motion.div
              key={name}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.85, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.025, type: "spring", stiffness: 260 }}
              whileHover={reducedMotion ? undefined : { scale: 1.05, backgroundColor: "rgba(55,118,171,0.2)" }}
              className={`rounded-xl border border-[#3776AB]/25 bg-black/30 px-3 py-4 text-center text-xs font-semibold text-white/80 backdrop-blur-sm sm:text-sm ${
                i % 6 === 0 ? "md:row-span-1 md:border-[#FFD43B]/30" : ""
              }`}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
