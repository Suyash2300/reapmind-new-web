"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

export function TnjWhyNodejs() {
  const { whyNodejs } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-14 md:py-20" aria-labelledby="tnj-why-nodejs-heading">
      <motion.div
        className="pointer-events-none absolute -right-20 top-1/4 h-64 w-64 rounded-full border border-[#339933]/20"
        animate={reducedMotion ? undefined : { y: [0, -24, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-16 bottom-1/4 h-48 w-48 rounded-3xl border border-emerald-500/15 bg-emerald-500/5 backdrop-blur-sm"
        animate={reducedMotion ? undefined : { y: [0, 20, 0], x: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      />

      <div className="container-app relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <BlurFadeIn as="h2" id="tnj-why-nodejs-heading" className="text-h3 font-bold text-white sm:text-h2">
            {whyNodejs.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.08} className="mt-3 text-para text-white/60">
            {whyNodejs.subtitle}
          </BlurFadeIn>
        </div>
        <ul className="space-y-4">
          {whyNodejs.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              initial={reducedMotion ? false : { opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-5"
              style={{ marginLeft: i % 2 === 1 ? "1.5rem" : 0 }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#339933]/20 text-sm font-bold text-[#339933]">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">{bullet}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
