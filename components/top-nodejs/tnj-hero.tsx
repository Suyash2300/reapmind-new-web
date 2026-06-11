"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { HeroWordHeading } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;
const NODE_GREEN = "#339933";

export function TnjHero() {
  const { hero, breadcrumb } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ctaX = useSpring(mx, { stiffness: 200, damping: 18 });
  const ctaY = useSpring(my, { stiffness: 200, damping: 18 });

  return (
    <section ref={sectionRef} className="relative min-h-[88vh] overflow-hidden bg-[#050a06] pb-16 pt-8 md:pt-10">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <Image src={hero.image} alt="" fill sizes="100vw" className="object-cover opacity-[0.18]" priority />
        </motion.div>
        <motion.div
          className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#339933]/20 blur-[120px]"
          style={{ scale: blobScale }}
          animate={reducedMotion ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]"
          animate={reducedMotion ? undefined : { scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a06]/60 via-[#050a06]/92 to-[#050a06]" />
      </div>

      <div className="container-app relative">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href}>
              {i > 0 && <span className="mx-2">›</span>}
              {i < breadcrumb.length - 1 ? (
                <Link href={crumb.href} className="hover:text-[#339933]">{crumb.label}</Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.24em] text-[#339933]"
            >
              Node.js · Expert Solutions
            </motion.p>
            <div className="mt-4">
              <HeroWordHeading text={hero.heading} accentWord="Company" />
            </div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: smoothEase }}
              className="mt-6 max-w-2xl text-md leading-relaxed text-white/75 sm:text-lg"
            >
              {hero.description}
            </motion.p>

            <motion.div
              className="mt-8 inline-block"
              onMouseMove={(e) => {
                if (reducedMotion) return;
                const rect = e.currentTarget.getBoundingClientRect();
                mx.set((e.clientX - rect.left) / rect.width - 0.5);
                my.set((e.clientY - rect.top) / rect.height - 0.5);
              }}
              onMouseLeave={() => { mx.set(0); my.set(0); }}
              style={{ x: ctaX, y: ctaY }}
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#339933] px-10 text-sm font-semibold text-white shadow-[0_16px_48px_-12px_rgba(51,153,51,0.55)] transition-colors hover:bg-[#2d852d]"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.92, rotateY: -12 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: smoothEase }}
            className="relative hidden aspect-square max-w-md justify-self-end lg:block"
            style={{ perspective: 900 }}
          >
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl" />
            <Image src={hero.image} alt="Node.js development" fill className="rounded-[2rem] object-contain p-8" sizes="400px" priority />
          </motion.div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hero.trustPills.map((pill, i) => (
            <motion.div
              key={pill}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-medium text-white/80 backdrop-blur-md sm:text-sm"
              style={{ borderColor: `${NODE_GREEN}33` }}
            >
              {pill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
