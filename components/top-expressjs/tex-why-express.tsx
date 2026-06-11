"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

export function TexWhyExpress() {
  const { whyExpress } = topExpressjsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bg = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "radial-gradient(ellipse at 20% 50%, #22d3ee18 0%, transparent 50%)",
      "radial-gradient(ellipse at 80% 50%, #a78bfa22 0%, transparent 50%)",
      "radial-gradient(ellipse at 50% 80%, #22d3ee15 0%, transparent 50%)",
    ]
  );

  return (
    <motion.section
      ref={ref}
      style={reducedMotion ? undefined : { background: bg }}
      className="relative overflow-hidden border-y border-[#22d3ee]/15 py-16 md:py-24"
      aria-labelledby="tex-why-express-heading"
    >
      <div className="container-app relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <BlurFadeIn as="h2" id="tex-why-express-heading" className="text-h3 font-bold text-white sm:text-h2 lg:max-w-sm">
          {whyExpress.title}
        </BlurFadeIn>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-para leading-relaxed text-white/70 lg:border-l lg:border-[#22d3ee]/30 lg:pl-8"
        >
          {whyExpress.description}
        </motion.p>
      </div>
    </motion.section>
  );
}
