"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

export function TgoStandout() {
  const { standout } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-[#00ADD8]/15 py-20 md:py-28" aria-labelledby="tgo-standout-heading">
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={reducedMotion ? undefined : { opacity }}
        animate={reducedMotion ? undefined : { scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity }}
      >
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[#00ADD8]/15 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#007d9c]/20 blur-[120px]" />
      </motion.div>
      <div className="container-app relative">
        <BlurFadeIn as="h2" id="tgo-standout-heading" className="mx-auto max-w-3xl text-center text-h3 font-bold text-white sm:text-h2">
          {standout.title}
        </BlurFadeIn>
        <motion.p
          style={reducedMotion ? undefined : { y: textY }}
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 1 }}
          className="mx-auto mt-8 max-w-4xl text-center text-para leading-relaxed text-white/70"
        >
          {standout.description}
        </motion.p>
      </div>
    </section>
  );
}
