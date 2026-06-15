"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { omdConfig } from "@/lib/omd-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const iconTokens = ["💊", "🧪", "🩺", "🧬", "🏥"];

export function OmdHero() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.45]);
  const words = useMemo(() => omdConfig.hero.heading.split(" "), []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-surface-dark pb-20 pt-28 text-white sm:pt-32"
    >
      <motion.div
        className="absolute inset-0"
        style={reduced ? undefined : { y: bgY, scale: bgScale, opacity: bgOpacity }}
      >
        <Image src={omdConfig.hero.image} alt={omdConfig.hero.heading} fill priority className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(circle at 20% 20%, #0D9488 0%, transparent 50%)" }}
        />
      </motion.div>

      {!reduced &&
        iconTokens.map((icon, index) => (
          <motion.span
            key={icon}
            aria-hidden
            className="pointer-events-none absolute text-2xl opacity-40 sm:text-3xl"
            style={{
              left: `${8 + index * 18}%`,
              top: `${15 + (index % 2 === 0 ? 10 : 30)}%`,
            }}
            animate={{ y: [0, -14, 0], rotate: [0, index % 2 === 0 ? 9 : -9, 0] }}
            transition={{ duration: 3.8 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        ))}

      <div className="container-app relative z-10">
        <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
          <Link href={omdConfig.breadcrumb[0].href} className="transition-colors hover:text-[#0D9488]">
            {omdConfig.breadcrumb[0].label}
          </Link>
          <span>/</span>
          <span className="text-white">{omdConfig.breadcrumb[1].label}</span>
        </nav>

        <div className="max-w-4xl">
          <h1 className="text-h1 font-black leading-[1.05] text-white md:text-display">
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="mr-[0.3em] inline-block"
                initial={reduced ? false : { opacity: 0, y: 28 }}
                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-3xl text-para leading-relaxed text-white/75"
            initial={reduced ? false : { opacity: 0, y: 26 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {omdConfig.hero.description}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <Link
              href="/contact-us"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#0D9488] px-7 text-sm font-bold text-black sm:px-9 sm:text-base"
            >
              {omdConfig.hero.primaryCta}
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/25 px-7 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black sm:px-9 sm:text-base"
            >
              {omdConfig.hero.secondaryCta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
