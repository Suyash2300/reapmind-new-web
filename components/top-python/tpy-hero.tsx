"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroWordHeading } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;
const PY_BLUE = "#3776AB";

export function TpyHero() {
  const { hero, breadcrumb } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ctaX = useSpring(mx, { stiffness: 220, damping: 16 });
  const ctaY = useSpring(my, { stiffness: 220, damping: 16 });

  return (
    <section ref={sectionRef} className="relative min-h-[88vh] overflow-hidden bg-[#0a1628] pb-16 pt-8 md:pt-10">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <Image src={hero.image} alt="" fill sizes="100vw" className="object-cover opacity-[0.14]" priority />
        </motion.div>
        <motion.div
          className="absolute right-[10%] top-[15%] h-64 w-64 rounded-full border border-[#3776AB]/30"
          style={{ rotate: ringRotate }}
        />
        <div className="absolute -left-24 top-32 h-80 w-80 rounded-full bg-[#3776AB]/25 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FFD43B]/10 blur-[90px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-[#0a1628]/94 to-[#0a1628]" />
      </div>

      <div className="container-app relative">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href}>
              {i > 0 && <span className="mx-2">›</span>}
              {i < breadcrumb.length - 1 ? (
                <Link href={crumb.href} className="hover:text-[#FFD43B]">{crumb.label}</Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.24em" }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="text-sm font-semibold uppercase text-[#FFD43B]"
            >
              Python · Expert Developers
            </motion.p>
            <div className="mt-4">
              <HeroWordHeading text={hero.heading} accentWord="Company" />
            </div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75, ease: smoothEase }}
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
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#3776AB] to-[#2d5f8f] px-10 text-sm font-semibold text-white shadow-[0_20px_50px_-12px_rgba(55,118,171,0.55)] hover:from-[#2d5f8f] hover:to-[#3776AB]"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, rotateY: 18, z: -80 }}
            animate={{ opacity: 1, rotateY: 0, z: 0 }}
            transition={{ delay: 0.12, duration: 0.85, ease: smoothEase }}
            className="relative hidden aspect-square max-w-md justify-self-end lg:block"
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#3776AB]/40 to-[#FFD43B]/20 blur-2xl" />
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
              <Image src={hero.image} alt="Python development" fill className="object-contain p-8" sizes="400px" priority />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hero.trustPills.map((pill, i) => (
            <motion.div
              key={pill}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.07, type: "spring", stiffness: 200 }}
              className="rounded-2xl border border-[#3776AB]/30 bg-[#3776AB]/10 px-4 py-3 text-center text-xs font-medium text-white/85 backdrop-blur-md sm:text-sm"
              style={{ borderColor: `${PY_BLUE}44` }}
            >
              {pill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
