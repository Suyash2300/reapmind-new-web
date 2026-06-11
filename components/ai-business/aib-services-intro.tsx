"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { GaiNeuralVisual } from "@/components/generative-ai/gai-neural-visual";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { AI_ACCENT, aiBusinessConfig } from "@/lib/ai-business-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AibServicesIntro() {
  const { servicesIntro } = aiBusinessConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const visualSrc = imgFailed ? servicesIntro.visual.fallback : servicesIntro.visual.src;

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-black py-12 md:py-16 lg:py-20"
      aria-labelledby="aib-services-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(139,92,246,0.06),transparent_45%,rgba(34,211,238,0.04))]" aria-hidden />

      <div className="container-app relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="aib-services-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
              {servicesIntro.title}
            </BlurFadeIn>
            <BlurFadeIn as="p" delay={0.08} className="mt-6 text-para leading-relaxed text-white/65">
              <WordReveal text={servicesIntro.body} delay={0.1} />
            </BlurFadeIn>
            <BlurFadeIn delay={0.16} className="mt-8">
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {servicesIntro.cta}
              </Link>
            </BlurFadeIn>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-[0_32px_80px_-30px_rgba(139,92,246,0.4)]">
              <Image
                src={visualSrc}
                alt={servicesIntro.visual.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-contain object-center p-8 sm:p-12"
                onError={() => setImgFailed(true)}
              />
              <GaiNeuralVisual className="pointer-events-none absolute inset-0 opacity-60" />
            </div>

            <motion.div
              className="absolute -bottom-4 left-4 right-4 rounded-xl border bg-black/75 p-4 backdrop-blur-md sm:left-6 sm:right-6"
              style={{ borderColor: `${AI_ACCENT}33` }}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: smoothEase }}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-violet-400">Adaptive AI</p>
              <p className="mt-1 text-sm font-semibold text-white">Learn · Adapt · Perform</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
