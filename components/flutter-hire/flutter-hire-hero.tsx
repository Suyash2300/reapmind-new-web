"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FlutterHeroVisual } from "@/components/flutter-hire/flutter-hire-hero-visual";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { flutterHireConfig } from "@/lib/flutter-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const words = (text: string) => text.split(" ");

export function FlutterHireHero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const { hero } = flutterHireConfig;

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-black pt-32 pb-20">
      <motion.div
        animate={reducedMotion ? undefined : { backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.06)_25%,transparent_25%,transparent_50%,rgba(59,130,246,0.04)_50%,rgba(59,130,246,0.04)_75%,transparent_75%)] bg-[length:48px_48px]"
        aria-hidden
      />

      <div className="container-app relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {flutterHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < flutterHireConfig.breadcrumb.length - 1 ? (
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
              {words(hero.heading).map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.08 + i * 0.07,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mr-[0.28em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-para leading-relaxed text-white/75"
            >
              {hero.description}
            </motion.p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, type: "spring", stiffness: 200 }}
              >
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-8 font-bold text-black"
                >
                  {hero.primaryCta}
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.88, type: "spring", stiffness: 200 }}
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
            style={reducedMotion ? undefined : { rotate: cardRotate, y: cardY }}
            className={HIRE_HERO_VISUAL_OUTER}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[#54C5F8]/25 blur-2xl" aria-hidden />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <FlutterHeroVisual />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {hero.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.1, type: "spring", stiffness: 180 }}
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
            >
              <p className="text-lg font-black text-primary">{s.value}</p>
              <p className="text-[10px] text-white/55">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
