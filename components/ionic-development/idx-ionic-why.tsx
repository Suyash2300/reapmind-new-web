"use client";

import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { IonicLogoMark } from "@/components/ionic-development/ionic-logo-mark";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { IONIC_ACCENT, ionicDevelopmentConfig } from "@/lib/ionic-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function IdxIonicWhy() {
  const { ionicWhy } = ionicDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="idx-ionic-why-heading">
      <div className="container-app">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="relative order-2 lg:order-none"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-black/60 p-6 shadow-[0_32px_80px_-30px_rgba(56,128,255,0.35)] sm:p-8">
              <div className="flex items-center gap-4">
                <IonicLogoMark size={48} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: IONIC_ACCENT }}>
                    Ionic Framework
                  </p>
                  <p className="text-sm font-semibold text-white">Cross-platform hybrid apps</p>
                </div>
                <span className="ml-auto rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                  Open source
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {ionicWhy.features.map((feature, i) => (
                  <motion.div
                    key={feature.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45, ease: smoothEase }}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <span className="text-lg" aria-hidden>
                      {feature.icon}
                    </span>
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-white/45">{feature.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">{feature.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={reducedMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-4 rounded-xl border p-4 font-mono text-[11px] text-white/60"
                style={{ borderColor: `${IONIC_ACCENT}33`, backgroundColor: `${IONIC_ACCENT}08` }}
              >
                <p>
                  <span style={{ color: IONIC_ACCENT }}>ionic build</span> --prod
                </p>
                <p className="mt-1 text-emerald-400">✓ iOS · Android · PWA · Capacitor ready</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-none">
            <BlurFadeIn as="h2" id="idx-ionic-why-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
              {ionicWhy.title}
            </BlurFadeIn>
            <BlurFadeIn as="p" delay={0.08} className="mt-5 text-para leading-relaxed text-white/65">
              <WordReveal text={ionicWhy.description} delay={0.1} />
            </BlurFadeIn>

            <ul className="mt-8 space-y-3">
              {ionicWhy.highlights.map((point, i) => (
                <motion.li
                  key={point.slice(0, 30)}
                  initial={reducedMotion ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45, ease: smoothEase }}
                  className="flex gap-3 text-sm leading-relaxed text-white/65"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: IONIC_ACCENT }} aria-hidden />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
