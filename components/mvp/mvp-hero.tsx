"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { mvpConfig } from "@/lib/mvp-config";

const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function MvpHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const words = mvpConfig.hero.heading.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-black pt-32 pb-24"
    >
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
        <Image
          src={mvpConfig.hero.image}
          alt="MVP Development"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/85 to-black" />
      </motion.div>

      <div className="container-app relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="h-1.5 w-1.5 rounded-full bg-primary"
              />
              {mvpConfig.hero.badge}
            </motion.span>

            <motion.h1
              className="text-display font-black leading-[1.05] text-white"
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  variants={wordVariant}
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 max-w-2xl text-para leading-relaxed text-white/75"
            >
              {mvpConfig.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact-us"
                className="group relative inline-flex min-h-[56px] items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-bold text-black"
              >
                <motion.span
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center gap-2">
                  {mvpConfig.hero.cta}
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/20 px-8 font-bold text-white transition-all hover:bg-white hover:text-black"
              >
                {mvpConfig.hero.secondaryCta}
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <motion.div
              initial={{ opacity: 0, rotateY: -25, x: 40 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 1000 }}
              className="relative aspect-square rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                className="absolute inset-4 rounded-[2rem] border border-dashed border-primary/25"
              />
              <div className="flex h-full flex-col justify-center gap-6 p-6">
                {["Ideate", "Validate", "Build", "Launch"].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.15, type: "spring", stiffness: 200 }}
                    whileHover={{ x: 8, color: "var(--color-primary)" }}
                    className="flex items-center gap-4"
                  >
                    <motion.span
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-sm font-black text-primary"
                    >
                      0{i + 1}
                    </motion.span>
                    <span className="text-lg font-bold text-white">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
