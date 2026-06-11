"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

export function TrnmWhyReactNative() {
  const { whyReactNative } = topReactNativeMumbaiConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.3"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-[#61DAFB]/10 bg-black py-16 md:py-24" aria-labelledby="trnm-why-rn-heading">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#61DAFB]/50 to-transparent"
        style={reducedMotion ? { width: "100%" } : { scaleX: lineWidth, transformOrigin: "left" }}
        aria-hidden
      />
      <div className="container-app">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFadeIn as="h2" id="trnm-why-rn-heading" className="text-h3 font-bold text-white sm:text-h2">
            {whyReactNative.title}
          </BlurFadeIn>
          <motion.p
            style={reducedMotion ? undefined : { opacity, y }}
            className="mt-8 text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            {whyReactNative.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
