"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { productDesignConfig } from "@/lib/product-design-config";

export function PdHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-black pb-24 pt-32">
      {/* BG */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <Image src={productDesignConfig.hero.image} alt="Product Design Hero" fill priority className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="container-app relative z-10 w-full">
        <div className="max-w-5xl">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-bold tracking-widest text-primary uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {productDesignConfig.hero.badge}
            </span>
          </FadeIn>

          <motion.h1
            className="mt-8 text-[3.5rem] sm:text-[5rem] lg:text-[7rem] font-black leading-none tracking-tighter text-white"
            initial={{ opacity: 0, y: 60, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {productDesignConfig.hero.heading}
          </motion.h1>

          <FadeIn delay={0.5}>
            <p className="mt-8 max-w-2xl text-xl text-white/70 leading-relaxed">
              {productDesignConfig.hero.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact-reapmind"
                className="inline-flex h-16 items-center justify-center rounded-full bg-primary px-10 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
              >
                {productDesignConfig.hero.cta}
              </Link>
              <Link
                href="#services"
                className="inline-flex h-16 items-center justify-center rounded-full border border-white/20 px-10 text-lg font-bold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </motion.div>
    </section>
  );
}
