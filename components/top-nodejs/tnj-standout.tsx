"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

export function TnjStandout() {
  const { standout } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const hue = useTransform(scrollYProgress, [0, 0.5, 1], [120, 145, 100]);
  const bg = useTransform(hue, (h) => `linear-gradient(135deg, hsl(${h} 40% 8%) 0%, #050a06 50%, hsl(${h} 30% 6%) 100%)`);

  return (
    <motion.section
      ref={ref}
      style={reducedMotion ? undefined : { background: bg }}
      className="relative overflow-hidden py-16 md:py-24"
      aria-labelledby="tnj-standout-heading"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        animate={reducedMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #33993355 0%, transparent 50%), radial-gradient(circle at 80% 70%, #22c55e33 0%, transparent 45%)",
          backgroundSize: "200% 200%",
        }}
        aria-hidden
      />
      <div className="container-app relative">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFadeIn as="h2" id="tnj-standout-heading" className="text-h3 font-bold text-white sm:text-h2">
            {standout.title}
          </BlurFadeIn>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-para leading-relaxed text-white/70"
          >
            {standout.description}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
