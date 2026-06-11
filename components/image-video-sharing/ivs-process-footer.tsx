"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { imageVideoSharingConfig } from "@/lib/image-video-sharing-config";

export function IvsProcessFooter() {
  const { process } = imageVideoSharingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const words = process.tagline.split(" ");

  return (
    <div className="border-t border-white/5 bg-black pb-12 pt-4 md:pb-16">
      <div className="container-app text-center">
        <p className="mx-auto max-w-3xl text-para leading-relaxed text-white/65">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </p>
        <BlurFadeIn delay={0.15} className="mt-8">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.04 }} whileTap={reducedMotion ? undefined : { scale: 0.98 }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-primary px-10 text-sm font-semibold text-white shadow-[0_16px_48px_-12px_rgba(244,63,94,0.4)]"
            >
              {process.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}
