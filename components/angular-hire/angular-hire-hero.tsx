"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AngularHeroVisual } from "@/components/angular-hire/angular-hire-hero-visual";
import { angularHireConfig } from "@/lib/angular-hire-config";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const statPositions = [
  { className: "left-0 top-1/2 -translate-y-1/2", from: { x: -80, y: 0 } },
  { className: "right-0 top-6", from: { x: 80, y: -40 } },
  { className: "right-0 bottom-6", from: { x: 80, y: 40 } },
  { className: "left-2 bottom-0", from: { x: -60, y: 60 } },
];

export function AngularHireHero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const { hero } = angularHireConfig;
  const words = hero.heading.split(" ");

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-black pt-32 pb-20">
      <motion.div
        style={reducedMotion ? undefined : { y: orbY }}
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]"
        aria-hidden
      />
      <motion.div
        style={reducedMotion ? undefined : { y: orbY }}
        className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[120px]"
        aria-hidden
      />

      <div className="container-app relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {angularHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < angularHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="transition-colors hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h1 className="text-display font-black leading-[1.05] text-white">
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.08 + i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="mr-[0.28em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="mt-8 max-w-2xl text-para leading-relaxed text-white/75"
            >
              {hero.description}
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 180 }}
              >
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-8 font-bold text-white"
                >
                  {hero.primaryCta}
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.82, type: "spring", stiffness: 180 }}
              >
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/25 px-8 font-bold text-white hover:bg-white hover:text-black"
                >
                  {hero.secondaryCta}
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={HIRE_HERO_VISUAL_OUTER}
          >
            <AngularHeroVisual />

            {hero.stats.map((s, i) => {
              const pos = statPositions[i];
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, ...pos.from, rotate: -8 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: reducedMotion ? 0 : [0, -6, 0],
                    rotate: 0,
                  }}
                  transition={{
                    opacity: { delay: 0.55 + i * 0.12, duration: 0.5 },
                    x: { delay: 0.55 + i * 0.12, type: "spring", stiffness: 140 },
                    y: reducedMotion
                      ? undefined
                      : { delay: 1.2 + i * 0.15, duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { delay: 0.55 + i * 0.12, type: "spring", stiffness: 120 },
                  }}
                  className={`absolute ${pos.className} z-20 hidden rounded-2xl border border-white/15 bg-black/90 px-4 py-3 shadow-lg backdrop-blur-md sm:block`}
                >
                  <p className="text-lg font-black text-white">{s.value}</p>
                  <p className="text-[10px] text-white/55">{s.label}</p>
                </motion.div>
              );
            })}

            <div className="mt-6 grid grid-cols-2 gap-3 sm:hidden">
              {hero.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                >
                  <p className="text-lg font-black text-primary">{s.value}</p>
                  <p className="text-[10px] text-white/55">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
