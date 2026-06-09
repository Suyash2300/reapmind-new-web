"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black pt-32 pb-20"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src={pwaConfig.hero.image}
          alt="PWA Development"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </motion.div>

      <div className="container-app relative z-10 max-w-4xl">
        <GsapScrollReveal>
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            {pwaConfig.hero.badge}
          </span>
        </GsapScrollReveal>

        <GsapScrollReveal start="top 85%" delay={0.1}>
          <h1 className="text-display font-black leading-[1.1] text-white">
            {pwaConfig.hero.heading}
          </h1>
        </GsapScrollReveal>

        <div className="mt-8 space-y-6">
          {pwaConfig.hero.paragraphs.map((p, i) => (
            <GsapScrollReveal key={i} start="top 85%" delay={0.15 + i * 0.05}>
              <p className="text-para leading-relaxed text-white/70">{p}</p>
            </GsapScrollReveal>
          ))}
        </div>

        <GsapScrollReveal start="top 90%" delay={0.35} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact-us"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-bold text-black transition-transform hover:scale-105 sm:h-16 sm:px-10"
          >
            <span className="relative flex items-center gap-2">
              {pwaConfig.hero.cta}
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white transition-all hover:bg-white hover:text-black sm:h-16"
          >
            {pwaConfig.hero.secondaryCta}
          </Link>
        </GsapScrollReveal>
      </div>
    </section>
  );
}
