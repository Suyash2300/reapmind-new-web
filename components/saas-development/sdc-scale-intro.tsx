"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { saasDevelopmentConfig } from "@/lib/saas-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function SdcScaleIntro() {
  const { scaleIntro } = saasDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const visualSrc = imgFailed ? scaleIntro.visual.fallback : scaleIntro.visual.src;

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-black py-12 text-primary-foreground md:py-16 lg:py-20"
      aria-labelledby="sdc-scale-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.05),transparent_50%,rgba(26,105,253,0.04))]" aria-hidden />

      <div className="container-app relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="sdc-scale-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
              {scaleIntro.title}
            </BlurFadeIn>

            {scaleIntro.paragraphs.map((p, i) => (
              <BlurFadeIn key={p.slice(0, 40)} as="p" delay={0.06 + i * 0.06} className="mt-5 text-para leading-relaxed text-white/65">
                <WordReveal text={p} delay={0.08 + i * 0.04} />
              </BlurFadeIn>
            ))}

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {scaleIntro.stats.map((stat, i) => (
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
                {scaleIntro.cta}
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-[0_32px_80px_-30px_rgba(6,182,212,0.35)] sm:aspect-[3/4]">
              <Image
                src={visualSrc}
                alt={scaleIntro.visual.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-contain object-center p-8 sm:p-12"
                onError={() => setImgFailed(true)}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_72%)]" aria-hidden />
            </div>

            <motion.div
              className="absolute -bottom-4 left-4 right-4 rounded-xl border border-cyan-400/20 bg-black/70 p-4 backdrop-blur-md sm:left-6 sm:right-6"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6, ease: smoothEase }}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Cloud-native SaaS</p>
              <p className="mt-1 text-sm font-semibold text-white">Scale · Secure · Subscription-ready</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
