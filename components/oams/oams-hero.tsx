"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { oamsConfig } from "@/lib/oams-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const floatIcons = ["📅", "🩺", "⏰", "📱", "🏥"];

export function OamsHero() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const headingParts = oamsConfig.hero.heading.split(" ");

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-black pb-20 pt-28 sm:pt-32"
    >
      <motion.div className="absolute inset-0" style={reduced ? undefined : { y: imageY }}>
        <Image
          src={oamsConfig.hero.image}
          alt={oamsConfig.hero.heading}
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-emerald-950/40 to-black" />
      </motion.div>

      {!reduced &&
        floatIcons.map((icon, i) => (
          <motion.span
            key={icon}
            aria-hidden
            className="pointer-events-none absolute text-2xl opacity-35 sm:text-3xl"
            style={{ left: `${10 + i * 17}%`, top: `${18 + (i % 2) * 22}%` }}
            animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        ))}

      <motion.div className="container-app relative z-10" style={reduced ? undefined : { y: textY }}>
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
          <Link href={oamsConfig.breadcrumb[0].href} className="hover:text-emerald-400">
            {oamsConfig.breadcrumb[0].label}
          </Link>
          <span>/</span>
          <span>{oamsConfig.breadcrumb[1].label}</span>
        </nav>

        <h1 className="max-w-4xl text-h1 font-black leading-[1.05] text-white md:text-display">
          {headingParts.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.25em] inline-block overflow-hidden"
              initial={reduced ? false : { y: "110%" }}
              animate={reduced ? undefined : { y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block">{word}</span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-7 max-w-3xl text-para leading-relaxed text-white/75"
          initial={reduced ? false : { opacity: 0, x: -30 }}
          animate={reduced ? undefined : { opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {oamsConfig.hero.description}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-4"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-emerald-600 px-7 text-sm font-bold text-white sm:px-9"
          >
            {oamsConfig.hero.primaryCta}
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/25 px-7 text-sm font-bold text-white hover:bg-white hover:text-black sm:px-9"
          >
            {oamsConfig.hero.secondaryCta}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
