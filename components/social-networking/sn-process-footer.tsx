"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { socialNetworkingConfig } from "@/lib/social-networking-config";

const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  angle: (i / 8) * 360,
  delay: i * 0.05,
}));

export function SnProcessFooter() {
  const { process } = socialNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative overflow-hidden border-t border-white/5 bg-black pb-12 pt-4 md:pb-16">
      <div className="container-app text-center">
        <BlurFadeIn>
          <p className="mx-auto max-w-3xl text-para leading-relaxed text-white/65">{process.tagline}</p>
        </BlurFadeIn>
        <BlurFadeIn delay={0.1} className="relative mt-8 inline-block">
          {!reducedMotion &&
            PARTICLES.map((p) => (
              <motion.span
                key={p.angle}
                className="pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-violet-400"
                initial={{ opacity: 0, x: 0, y: 0 }}
                whileHover={{ opacity: [0, 1, 0], x: Math.cos((p.angle * Math.PI) / 180) * 40, y: Math.sin((p.angle * Math.PI) / 180) * 40 }}
                transition={{ duration: 0.6, delay: p.delay }}
                aria-hidden
              />
            ))}
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.04 }} whileTap={reducedMotion ? undefined : { scale: 0.98 }}>
            <Link
              href="/contact-us#free-consultation"
              className="group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-primary px-10 text-sm font-semibold text-white"
            >
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-white/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative">{process.cta}</span>
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
