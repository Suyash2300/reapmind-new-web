"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { companyConfig } from "@/lib/company-config";

export function CompanyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black pt-20"
    >
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/company/hero-office.jpg"
          alt="ReapMind Company"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-transparent to-transparent" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="container-app relative z-10 w-full"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-display font-extrabold text-white leading-tight">
              {companyConfig.hero.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <p className="mt-8 max-w-3xl text-h3 font-medium text-white/90">
              {companyConfig.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="mt-6 max-w-2xl text-para text-white/60">
              {companyConfig.hero.description}
            </p>
            
            <div className="mt-10 h-[1px] w-full max-w-md bg-gradient-to-r from-primary via-accent to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

