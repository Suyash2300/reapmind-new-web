"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { risConfig } from "@/lib/ris-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const floatGlyphs = ["🩻", "📋", "🔬", "💜", "🏥"];

export function RisHero() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const meshRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const words = risConfig.hero.heading.split(" ");

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-black pb-20 pt-28 sm:pt-32"
    >
      <motion.div className="absolute inset-0" style={reduced ? undefined : { y: bgY }}>
        <Image
          src={risConfig.hero.image}
          alt={risConfig.hero.heading}
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-violet-950/50 to-black" />
      </motion.div>

      {!reduced && (
        <motion.div
          className="pointer-events-none absolute -right-24 top-1/4 h-[480px] w-[480px] rounded-full opacity-35 blur-3xl"
          style={{
            rotate: meshRotate,
            background: "conic-gradient(from 90deg, #7C3AED, #A78BFA, #5B21B6, #8B5CF6, #7C3AED)",
          }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {!reduced &&
        floatGlyphs.map((glyph, i) => (
          <motion.span
            key={glyph}
            aria-hidden
            className="pointer-events-none absolute text-2xl opacity-30 sm:text-3xl"
            style={{ left: `${8 + i * 18}%`, top: `${20 + (i % 3) * 18}%` }}
            animate={{ y: [0, -22, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {glyph}
          </motion.span>
        ))}

      <div className="container-app relative z-10">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
          <Link href={risConfig.breadcrumb[0].href} className="transition-colors hover:text-violet-400">
            {risConfig.breadcrumb[0].label}
          </Link>
          <span>/</span>
          <span className="text-white">{risConfig.breadcrumb[1].label}</span>
        </nav>

        <h1 className="max-w-4xl text-h1 font-black leading-[1.05] text-white md:text-display">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.28em] inline-block"
              initial={reduced ? false : { opacity: 0, y: 48, rotateX: 85 }}
              animate={reduced ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.055, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {risConfig.hero.paragraphs.map((p, i) => (
          <motion.p
            key={p.slice(0, 48)}
            className="mt-6 max-w-3xl text-para leading-relaxed text-white/75"
            initial={reduced ? false : { opacity: 0, x: i % 2 === 0 ? -36 : 36 }}
            animate={reduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ delay: 0.42 + i * 0.12, duration: 0.7 }}
          >
            {p}
          </motion.p>
        ))}

        <motion.div
          className="mt-9 flex flex-wrap gap-4"
          initial={reduced ? false : { opacity: 0, scale: 0.88 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.68, type: "spring", stiffness: 190 }}
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-violet-600 px-7 text-sm font-bold text-white sm:px-9"
          >
            {risConfig.hero.primaryCta}
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/25 px-7 text-sm font-bold text-white hover:bg-white hover:text-black sm:px-9"
          >
            {risConfig.hero.secondaryCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
