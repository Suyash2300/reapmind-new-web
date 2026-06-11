"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroWordHeading } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

const GO_CYAN = "#00ADD8";

export function TgoHero() {
  const { hero, breadcrumb } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ctaX = useSpring(mx, { stiffness: 260, damping: 15 });
  const ctaY = useSpring(my, { stiffness: 260, damping: 15 });

  return (
    <section ref={sectionRef} className="relative min-h-[88vh] overflow-hidden bg-[#0a1014] pb-16 pt-8 md:pt-10">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={hero.image} alt="" fill sizes="100vw" className="object-cover opacity-[0.1]" priority />
        <motion.div
          className="absolute inset-0"
          animate={reducedMotion ? undefined : { background: ["radial-gradient(circle at 20% 30%, #00ADD822, transparent 50%)", "radial-gradient(circle at 80% 70%, #00ADD818, transparent 50%)", "radial-gradient(circle at 50% 50%, #00ADD820, transparent 50%)"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1014]/50 via-[#0a1014]/94 to-[#0a1014]" />
      </div>

      <div className="container-app relative">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href}>
              {i > 0 && <span className="mx-2">›</span>}
              {i < breadcrumb.length - 1 ? (
                <Link href={crumb.href} className="hover:text-[#00ADD8]">{crumb.label}</Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00ADD8]"
            >
              Golang · High Performance
            </motion.p>
            <div className="mt-4">
              <HeroWordHeading text={hero.heading} accentWord="Company" />
            </div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75 }}
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
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#00ADD8] px-10 text-sm font-bold text-[#0a1014] shadow-[0_20px_50px_-12px_rgba(0,173,216,0.55)] hover:bg-[#00c4f0]"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            style={reducedMotion ? undefined : { scale: imageScale }}
            className="relative hidden aspect-square max-w-md justify-self-end lg:block"
          >
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 h-24 w-24 rounded-2xl border border-[#00ADD8]/40 bg-[#00ADD8]/10 backdrop-blur-md"
            />
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-[#00ADD8]/25 bg-white/5 backdrop-blur-xl" style={{ borderColor: `${GO_CYAN}44` }}>
              <Image src={hero.image} alt="Golang development" fill className="object-contain p-8" sizes="400px" priority />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hero.trustPills.map((pill, i) => (
            <motion.div
              key={pill}
              initial={reducedMotion ? false : { opacity: 0, rotateX: 20 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.35 + i * 0.07, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-xs font-medium text-white/85 backdrop-blur-md sm:text-sm"
            >
              {pill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
