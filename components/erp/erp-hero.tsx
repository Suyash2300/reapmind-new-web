"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { erpConfig } from "@/lib/erp-config";

export function ErpHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-32 pb-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src={erpConfig.hero.image}
          alt="ERP Software Development"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </motion.div>

      <div className="container-app relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <GsapScrollReveal>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              {erpConfig.hero.badge}
            </span>
          </GsapScrollReveal>

          <GsapScrollReveal start="top 85%" delay={0.1}>
            <h1 className="text-display font-black text-white leading-[1.1]">
              Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">ERP Software</span><br />
              Development Company <br />
              in Mumbai
            </h1>
          </GsapScrollReveal>

          <div className="mt-8 space-y-6">
            <GsapScrollReveal start="top 85%" delay={0.2}>
              <p className="text-h6 text-white/80 font-medium leading-relaxed">
                {erpConfig.hero.description}
              </p>
            </GsapScrollReveal>
          </div>

          <GsapScrollReveal start="top 90%" delay={0.4} className="mt-10">
            <Link
              href="/contact-reapmind"
              className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-bold text-black transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/30" />
              </div>
              <span className="relative flex items-center gap-2">
                {erpConfig.hero.cta}
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </GsapScrollReveal>
        </div>
      </div>
    </section>
  );
}
