"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

export function TnjIndustries() {
  const { industries } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tnj-industries-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tnj-industries-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {industries.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {industries.intro}
        </BlurFadeIn>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {industries.items.map((name, i) => (
            <motion.div
              key={name}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: (i % 10) * 0.03, duration: 0.4 }}
              whileHover={reducedMotion ? undefined : { scale: 1.04, borderColor: "rgba(51,153,51,0.5)" }}
              className={`rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center text-xs font-semibold text-white/80 backdrop-blur-sm sm:text-sm ${
                i % 7 === 0 ? "md:col-span-2 md:row-span-1" : ""
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
