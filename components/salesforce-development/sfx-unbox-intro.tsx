"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { SF_ACCENT, salesforceDevelopmentConfig } from "@/lib/salesforce-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const CLOUD_PILLS = [
  { label: "Sales Cloud", icon: "📈" },
  { label: "Service Cloud", icon: "🎧" },
  { label: "Marketing Cloud", icon: "📣" },
  { label: "Einstein AI", icon: "✨" },
] as const;

export function SfxUnboxIntro() {
  const { unboxIntro } = salesforceDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="sfx-unbox-heading">
      <div className="container-app">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="sfx-unbox-heading" className="max-w-2xl text-h3 font-bold text-white sm:text-h2">
              {unboxIntro.title}
            </BlurFadeIn>
            <BlurFadeIn as="p" delay={0.06} className="mt-5 max-w-2xl text-para leading-relaxed text-white/65">
              <WordReveal text={unboxIntro.body} delay={0.08} />
            </BlurFadeIn>
            <BlurFadeIn delay={0.12} className="mt-8">
              <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
                <Link
                  href="/contact-us#free-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: SF_ACCENT }}
                >
                  {unboxIntro.cta}
                </Link>
              </motion.div>
            </BlurFadeIn>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="relative"
          >
            <div
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface-elevated p-6 sm:p-8"
              style={{ boxShadow: `0 32px 80px -40px ${SF_ACCENT}33` }}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full blur-3xl"
                style={{ backgroundColor: `${SF_ACCENT}22` }}
                aria-hidden
              />
              <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-2xl border border-white/10 bg-black/60 sm:h-52 sm:w-52">
                <Image
                  src={unboxIntro.visual.src}
                  alt={unboxIntro.visual.alt}
                  width={160}
                  height={160}
                  className="h-32 w-32 object-contain sm:h-40 sm:w-40"
                  unoptimized
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {CLOUD_PILLS.map((pill, i) => (
                  <motion.div
                    key={pill.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: smoothEase }}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5"
                  >
                    <span aria-hidden>{pill.icon}</span>
                    <span className="text-xs font-semibold text-white/70">{pill.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
