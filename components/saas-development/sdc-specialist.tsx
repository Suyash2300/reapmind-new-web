"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { saasDevelopmentConfig } from "@/lib/saas-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function SdcSpecialist() {
  const { specialist } = saasDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="sdc-specialist-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="sdc-specialist-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {specialist.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialist.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: smoothEase }}
              whileHover={reducedMotion ? undefined : { y: -4 }}
              className={`flex h-full flex-col rounded-2xl border border-white/10 bg-black/55 p-5 sm:p-6 ${
                i === specialist.items.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="h-1 w-10 rounded-full" style={{ backgroundColor: item.accent }} aria-hidden />
              <h3 className="mt-4 text-subtitle font-bold text-white">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 sm:text-para">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
