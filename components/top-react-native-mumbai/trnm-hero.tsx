"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroWordHeading } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

const RN_CYAN = "#61DAFB";

export function TrnmHero() {
  const { hero, breadcrumb } = topReactNativeMumbaiConfig;
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textClip = useTransform(scrollYProgress, [0, 0.4], ["100%", "0%"]);
  const descClipPath = useTransform(textClip, (v) => `inset(0 ${v} 0 0)`);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ctaX = useSpring(mx, { stiffness: 280, damping: 18 });
  const ctaY = useSpring(my, { stiffness: 280, damping: 18 });

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] overflow-hidden bg-[#0b0f14] pb-16 pt-8 md:pt-10">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute inset-0"
          animate={
            reducedMotion
              ? undefined
              : {
                  background: [
                    "radial-gradient(ellipse 80% 60% at 15% 20%, #61DAFB28, transparent 55%)",
                    "radial-gradient(ellipse 70% 50% at 85% 75%, #61DAFB1a, transparent 50%)",
                    "radial-gradient(ellipse 90% 70% at 50% 40%, #61DAFB22, transparent 60%)",
                  ],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f14]/30 via-[#0b0f14]/92 to-[#0b0f14]" />
        <motion.div
          className="absolute -right-24 top-1/4 h-64 w-64 rounded-full border border-[#61DAFB]/20 bg-[#61DAFB]/5 backdrop-blur-3xl"
          animate={reducedMotion ? undefined : { y: [0, -30, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute -left-16 bottom-1/4 h-48 w-48 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl"
          animate={reducedMotion ? undefined : { x: [0, 20, 0] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
      </div>

      <div className="container-app relative">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href}>
              {i > 0 && <span className="mx-2">›</span>}
              {i < breadcrumb.length - 1 ? (
                <Link href={crumb.href} className="hover:text-[#61DAFB]">
                  {crumb.label}
                </Link>
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
              animate={{ opacity: 1, letterSpacing: "0.28em" }}
              transition={{ duration: 0.8 }}
              className="text-sm font-semibold uppercase text-[#61DAFB]"
            >
              React Native · Mumbai
            </motion.p>
            <div className="mt-4">
              <HeroWordHeading text={hero.heading} accentWord="Company" />
            </div>
            <motion.div
              className="relative mt-6 overflow-hidden"
              style={reducedMotion ? undefined : { clipPath: descClipPath }}
            >
              <motion.p
                initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="max-w-2xl text-md leading-relaxed text-white/75 sm:text-lg"
              >
                {hero.description}
              </motion.p>
            </motion.div>
            <motion.div
              className="mt-8 inline-block"
              onMouseMove={(e) => {
                if (reducedMotion) return;
                const rect = e.currentTarget.getBoundingClientRect();
                mx.set((e.clientX - rect.left) / rect.width - 0.5);
                my.set((e.clientY - rect.top) / rect.height - 0.5);
              }}
              onMouseLeave={() => {
                mx.set(0);
                my.set(0);
              }}
              style={{ x: ctaX, y: ctaY }}
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#61DAFB] px-10 text-sm font-bold text-[#0b0f14] shadow-[0_24px_60px_-14px_rgba(97,218,251,0.55)] hover:bg-[#7ee4ff]"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <motion.div style={reducedMotion ? undefined : { y: imageY }} className="relative hidden aspect-[4/5] max-w-md justify-self-end lg:block">
            <motion.div
              animate={reducedMotion ? undefined : { rotate: [0, 3, -2, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -left-6 top-12 z-10 h-20 w-20 rounded-2xl border border-[#61DAFB]/30 bg-[#61DAFB]/10 backdrop-blur-lg"
            />
            <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-[#61DAFB]/20 bg-gradient-to-br from-white/[0.08] to-transparent p-1 backdrop-blur-2xl">
              <div className="relative h-full overflow-hidden rounded-[2.3rem] bg-[#0b0f14]/60">
                <Image src={hero.image} alt="React Native development" fill className="object-contain p-6" sizes="420px" priority />
              </div>
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 h-28 w-28 rounded-full border border-[#61DAFB]/15"
              animate={reducedMotion ? undefined : { scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              aria-hidden
            />
          </motion.div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hero.trustPills.map((pill, i) => (
            <motion.div
              key={pill}
              initial={reducedMotion ? false : { opacity: 0, y: 24, rotateX: 25 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.55 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-center text-xs font-medium text-white/85 backdrop-blur-md sm:text-sm"
              style={{ borderColor: `${RN_CYAN}22` }}
            >
              {pill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
