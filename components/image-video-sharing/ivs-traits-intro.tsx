"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { imageVideoSharingConfig } from "@/lib/image-video-sharing-config";

export function IvsTraitsIntro() {
  const { traitsIntro } = imageVideoSharingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="ivs-traits-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion && (
          <motion.div
            className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-rose-600/8 blur-[90px]"
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="ivs-traits-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {traitsIntro.title}
        </BlurFadeIn>
        <motion.div
          className="mt-5 h-1 max-w-xs rounded-full bg-gradient-to-r from-rose-500 via-primary to-transparent"
          style={reducedMotion ? undefined : { scaleX: lineWidth, transformOrigin: "left" }}
        />
        <BlurFadeIn delay={0.1} className="mt-8">
          <p className="max-w-4xl text-para leading-relaxed text-white/68">
            <WordReveal text={traitsIntro.paragraph} delay={0.12} />
          </p>
        </BlurFadeIn>
      </div>
    </section>
  );
}
