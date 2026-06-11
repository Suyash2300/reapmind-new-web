"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroWordHeading } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function TexHero() {
  const { hero, breadcrumb } = topExpressjsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0.05]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ctaX = useSpring(mx, { stiffness: 240, damping: 14 });
  const ctaY = useSpring(my, { stiffness: 240, damping: 14 });

  return (
    <section ref={sectionRef} className="relative min-h-[88vh] overflow-hidden bg-[#0c0f1a] pb-16 pt-8 md:pt-10">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={hero.image} alt="" fill sizes="100vw" className="object-cover opacity-[0.12]" priority />
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: gridOpacity,
            backgroundImage: "linear-gradient(#22d3ee22 1px, transparent 1px), linear-gradient(90deg, #22d3ee22 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#a78bfa]/20 blur-[120px]" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#22d3ee]/15 blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f1a]/40 via-[#0c0f1a]/95 to-[#0c0f1a]" />
      </div>

      <div className="container-app relative">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href}>
              {i > 0 && <span className="mx-2">›</span>}
              {i < breadcrumb.length - 1 ? (
                <Link href={crumb.href} className="hover:text-[#22d3ee]">{crumb.label}</Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={reducedMotion ? false : { width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="mb-4 h-1 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a78bfa]"
            />
            <div>
              <HeroWordHeading text={hero.heading} accentWord="Company" />
            </div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.7, ease: smoothEase }}
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
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#22d3ee] to-[#06b6d4] px-10 text-sm font-semibold text-[#0c0f1a] shadow-[0_20px_50px_-12px_rgba(34,211,238,0.5)] hover:brightness-110"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.88, rotateZ: -6 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: smoothEase }}
            className="relative hidden aspect-square max-w-md justify-self-end lg:block"
          >
            <motion.div
              animate={reducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-dashed border-[#22d3ee]/30"
            />
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
              <Image src={hero.image} alt="Express.js development" fill className="object-contain p-8" sizes="400px" priority />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {hero.trustPills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={reducedMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur-md sm:text-sm"
            >
              {pill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
