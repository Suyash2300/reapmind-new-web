"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { VUE_ACCENT, vueDevelopmentConfig } from "@/lib/vue-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const COMPONENT_TREE = [
  { label: "App.vue", depth: 0 },
  { label: "Dashboard.vue", depth: 1 },
  { label: "ref()", depth: 2 },
  { label: "computed()", depth: 2 },
] as const;

export function VdxHero() {
  const { hero } = vueDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [bgFailed, setBgFailed] = useState(false);
  const bgSrc = bgFailed ? hero.fallbackImage : hero.image;

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={bgSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.14]"
          priority
          quality={90}
          onError={() => setBgFailed(true)}
        />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 85% 65% at 50% -15%, rgba(66,184,131,0.28), transparent)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_90%_75%,rgba(53,73,94,0.2),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/95 to-surface-dark" />
      </div>

      <div className="container-app relative">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {hero.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < hero.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="transition-colors hover:text-[#42B883]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-12">
          <div>
            <div className="mt-1">
              <HeroWordHeading text={hero.heading} accentWord="Vue.js" />
            </div>

            <MountBlurFade as="p" delay={0.4} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: smoothEase }}
              className="mt-8"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(66,184,131,0.55)] transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: VUE_ACCENT }}
              >
                {hero.cta}
              </Link>
            </motion.div>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {hero.trustPills.map((pill, i) => (
                <motion.div
                  key={pill.label}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.07, duration: 0.45, ease: smoothEase }}
                  className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5"
                >
                  <span className="text-sm" aria-hidden>
                    {pill.icon}
                  </span>
                  <span className="text-xs font-medium leading-snug text-white/65">{pill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.25, duration: 0.85, ease: smoothEase }}
            className="relative mx-auto w-full max-w-[400px] lg:ml-auto"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-black/55 p-5 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0">
                  <Image src={hero.logo} alt="Vue.js" fill sizes="48px" className="object-contain" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: VUE_ACCENT }}>
                    Single-file components
                  </p>
                  <p className="text-sm font-bold text-white">Template · Script · Style</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 rounded-xl border border-white/10 bg-[#0a1210] p-3 font-mono text-[11px]">
                {COMPONENT_TREE.map((node, i) => (
                  <motion.div
                    key={node.label}
                    initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2 text-white/70"
                    style={{ paddingLeft: `${node.depth * 12}px` }}
                  >
                    <span style={{ color: VUE_ACCENT }} aria-hidden>
                      {node.depth === 0 ? "▸" : "└"}
                    </span>
                    <span className={node.depth === 0 ? "font-bold text-white" : ""}>{node.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                {[
                  { label: "Build", value: "Vite" },
                  { label: "State", value: "Vuex" },
                  { label: "Deploy", value: "CI/CD" },
                ].map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.75 + i * 0.06, duration: 0.35 }}
                    className="rounded-lg border px-2 py-2"
                    style={{ borderColor: `${VUE_ACCENT}33`, backgroundColor: `${VUE_ACCENT}18` }}
                  >
                    <p className="text-[9px] text-white/40">{chip.label}</p>
                    <p className="text-[10px] font-semibold text-white">{chip.value}</p>
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
