"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyWhyReapmind() {
  const { whyReapmind } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const stagger = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <section ref={ref} className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tpy-why-reapmind-heading">
      <div className="container-app">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <BlurFadeIn as="h2" id="tpy-why-reapmind-heading" className="text-h3 font-bold text-white sm:text-h2">
              {whyReapmind.title}
            </BlurFadeIn>
            <BlurFadeIn delay={0.06} className="mt-4 text-para text-white/65">
              {whyReapmind.intro}
            </BlurFadeIn>
            <motion.div
              className="mt-8 h-1 max-w-xs overflow-hidden rounded-full bg-white/10"
              style={reducedMotion ? { width: "100%" } : { scaleX: stagger, transformOrigin: "left" }}
            >
              <div className="h-full w-full bg-gradient-to-r from-[#3776AB] to-[#FFD43B]" />
            </motion.div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyReapmind.items.map((item, i) => (
              <motion.article
                key={item.title}
                initial={reducedMotion ? false : { opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                whileHover={reducedMotion ? undefined : { y: -4, borderColor: "rgba(255,212,59,0.4)" }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#3776AB]/10 to-transparent p-5 backdrop-blur-md"
              >
                <h3 className="text-base font-bold text-[#FFD43B] sm:text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
