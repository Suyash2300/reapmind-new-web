"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function EmrHero() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const meshRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const words = useMemo(() => emrConfig.hero.heading.split(" "), []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-black pb-20 pt-28 text-white sm:pt-32"
    >
      <motion.div className="absolute inset-0" style={reduced ? undefined : { y: bgY }}>
        <Image
          src={emrConfig.hero.image}
          alt={emrConfig.hero.heading}
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/85 to-black" />
      </motion.div>

      {!reduced && (
        <motion.div
          className="pointer-events-none absolute -left-32 top-1/4 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{
            rotate: meshRotate,
            background:
              "conic-gradient(from 180deg, #2563EB, #60A5FA, #1D4ED8, #3B82F6, #2563EB)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="container-app relative z-10">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
          <Link href={emrConfig.breadcrumb[0].href} className="transition-colors hover:text-[#60A5FA]">
            {emrConfig.breadcrumb[0].label}
          </Link>
          <span>/</span>
          <span className="text-white">{emrConfig.breadcrumb[1].label}</span>
        </nav>

        <h1 className="max-w-4xl text-h1 font-black leading-[1.05] text-white md:text-display">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.28em] inline-block"
              initial={reduced ? false : { opacity: 0, y: 40, rotateX: 90 }}
              animate={reduced ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "bottom center", transformStyle: "preserve-3d" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {emrConfig.hero.paragraphs.map((p, i) => (
          <motion.p
            key={p.slice(0, 40)}
            className="mt-6 max-w-3xl text-para leading-relaxed text-white/75"
            initial={reduced ? false : { opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={reduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ delay: 0.45 + i * 0.12, duration: 0.7 }}
          >
            {p}
          </motion.p>
        ))}

        <motion.div
          className="mt-9 flex flex-wrap gap-4"
          initial={reduced ? false : { opacity: 0, scale: 0.9 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 180 }}
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#2563EB] px-7 text-sm font-bold text-white sm:px-9 sm:text-base"
          >
            {emrConfig.hero.primaryCta}
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/25 px-7 text-sm font-bold text-white hover:bg-white hover:text-black sm:px-9 sm:text-base"
          >
            {emrConfig.hero.secondaryCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
