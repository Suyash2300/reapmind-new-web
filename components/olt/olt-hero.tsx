"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { oltConfig } from "@/lib/olt-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OltHero() {
  const reduced = usePrefersReducedMotion();
  const chars = oltConfig.hero.heading.split("");

  return (
    <section className="relative overflow-hidden bg-[#030712] pb-16 pt-28 sm:pb-20 sm:pt-32">
      {!reduced && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 bg-gradient-to-r from-cyan-500/10 to-transparent"
            animate={{ x: ["-5%", "5%", "-5%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-1/4 bottom-0 h-2/3 w-1/2 bg-gradient-to-l from-amber-500/10 to-transparent"
            animate={{ x: ["5%", "-5%", "5%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="container-app relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-white/60 sm:text-sm">
            <Link href={oltConfig.breadcrumb[0].href} className="hover:text-cyan-400">
              {oltConfig.breadcrumb[0].label}
            </Link>
            <span>/</span>
            <span>{oltConfig.breadcrumb[1].label}</span>
          </nav>

          <h1 className="text-h1 font-black leading-[1.08] text-white md:text-display">
            {chars.map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                className="inline-block"
                initial={reduced ? false : { opacity: 0, y: 32 }}
                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.018,
                  duration: 0.4,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-7 text-para leading-relaxed text-white/72"
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            {oltConfig.hero.description}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.55 }}
          >
            <Link
              href="/contact-us"
              className="inline-flex min-h-[54px] items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-7 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 sm:px-9"
            >
              {oltConfig.hero.primaryCta}
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-amber-500/40 bg-amber-500/10 px-7 text-sm font-bold text-amber-200 hover:bg-amber-500/20 sm:px-9"
            >
              {oltConfig.hero.secondaryCta}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 to-black shadow-2xl shadow-cyan-900/30"
          initial={reduced ? false : { opacity: 0, x: 60, rotate: 3 }}
          animate={reduced ? undefined : { opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={reduced ? undefined : { scale: [1, 1.06, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={oltConfig.hero.image}
              alt={oltConfig.hero.heading}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
