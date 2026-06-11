"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyWhyPython() {
  const { whyPython } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const clipPath = useTransform(scrollYProgress, [0.15, 0.45], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const blobX = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-[#3776AB]/20 py-16 md:py-24" aria-labelledby="tpy-why-python-heading">
      <motion.div
        className="pointer-events-none absolute -top-20 h-96 w-96 rounded-full bg-[#3776AB]/20 blur-[100px]"
        style={reducedMotion ? undefined : { x: blobX }}
        aria-hidden
      />
      <div className="container-app relative">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFadeIn as="h2" id="tpy-why-python-heading" className="text-h3 font-bold text-white sm:text-h2">
            {whyPython.title}
          </BlurFadeIn>
          <motion.p
            style={reducedMotion ? undefined : { clipPath }}
            className="mt-6 text-para leading-relaxed text-white/70"
          >
            {whyPython.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
