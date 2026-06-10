"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { vehicleTrackingConfig } from "@/lib/vehicle-tracking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function VtsEssentials() {
  const { essentials } = vehicleTrackingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const visualSrc = imgFailed ? essentials.visual.fallback : essentials.visual.src;

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-black py-12 text-primary-foreground md:py-16 lg:py-20"
      aria-labelledby="vts-essentials-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.05),transparent_50%,rgba(26,105,253,0.04))]" aria-hidden />

      <div className="container-app relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="vts-essentials-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
              {essentials.title}
            </BlurFadeIn>

            {essentials.paragraphs.map((p, i) => (
              <BlurFadeIn key={p.slice(0, 40)} as="p" delay={0.08 + i * 0.08} className="mt-6 text-para leading-relaxed text-white/65">
                <WordReveal text={p} delay={0.1 + i * 0.05} />
              </BlurFadeIn>
            ))}

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {essentials.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: smoothEase }}
                  className="rounded-2xl border border-white/10 bg-surface-elevated/80 px-4 py-4"
                >
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <BlurFadeIn delay={0.2} className="mt-8">
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {essentials.cta}
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_32px_80px_-30px_rgba(6,182,212,0.35)]">
              <Image
                src={visualSrc}
                alt={essentials.visual.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
                onError={() => setImgFailed(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/25 to-cyan-500/15" aria-hidden />
            </div>

            <motion.div
              className="absolute -bottom-4 left-4 right-4 rounded-xl border border-cyan-400/20 bg-black/70 p-4 backdrop-blur-md sm:left-6 sm:right-6"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6, ease: smoothEase }}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">IoT + mobility</p>
              <p className="mt-1 text-sm font-semibold text-white">Real-time freight & fleet tracking</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
