"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { realEstateConfig } from "@/lib/real-estate-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function ReaTechSolution() {
  const { techSolution } = realEstateConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const visualSrc = imgFailed ? techSolution.visual.fallback : techSolution.visual.src;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="rea-tech-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="rea-tech-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {techSolution.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-[0_32px_80px_-30px_rgba(217,119,6,0.35)] sm:aspect-[3/4]">
              <Image
                src={visualSrc}
                alt={techSolution.visual.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center"
                onError={() => setImgFailed(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-amber-500/10" aria-hidden />
            </div>

            <motion.div
              className="absolute -bottom-4 left-4 right-4 rounded-xl border border-amber-400/20 bg-black/70 p-4 backdrop-blur-md sm:left-6 sm:right-6"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6, ease: smoothEase }}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">PropTech</p>
              <p className="mt-1 text-sm font-semibold text-white">VR tours · MLS · Market analytics</p>
            </motion.div>
          </motion.div>

          <div>
            {techSolution.paragraphs.map((p, i) => (
              <BlurFadeIn key={p.slice(0, 40)} as="p" delay={0.04 + i * 0.05} className="mt-4 text-para leading-relaxed text-white/65 first:mt-0">
                <WordReveal text={p} delay={0.06 + i * 0.04} />
              </BlurFadeIn>
            ))}

            <BlurFadeIn as="p" delay={0.3} className="mt-6 text-para leading-relaxed text-white/65">
              {techSolution.processIntro}
            </BlurFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
