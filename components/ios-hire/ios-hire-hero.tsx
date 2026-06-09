"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IosHeroVisual } from "@/components/ios-hire/ios-hire-hero-visual";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { iosHireConfig } from "@/lib/ios-hire-config";

const words = (text: string) => text.split(" ");

export function IosHireHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const { hero } = iosHireConfig;

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-black pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_55%)]" />

      <div className="container-app relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {iosHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < iosHireConfig.breadcrumb.length - 1 ? (
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

        <div className="grid items-center gap-14 lg:grid-cols-12">
          <motion.div style={{ y: contentY }} className="lg:col-span-7">
            <h1 className="text-display font-black leading-[1.05] text-white">
              {words(hero.heading).map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 40, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
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
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-8 max-w-2xl text-para leading-relaxed text-white/75"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-8 font-bold text-black"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/25 px-8 font-bold text-white hover:bg-white hover:text-black"
              >
                {hero.secondaryCta}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{ scale: imageScale }}
            className={`${HIRE_HERO_VISUAL_OUTER} lg:col-span-5`}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[#0A84FF]/25 blur-2xl" aria-hidden />
            <IosHeroVisual />
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {hero.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65 + i * 0.1, type: "spring", stiffness: 180 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <p className="text-xl font-black text-primary sm:text-2xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/60">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
