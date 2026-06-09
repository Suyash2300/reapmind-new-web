"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SwiftHeroVisual } from "@/components/swift-hire/swift-hire-hero-visual";
import { swiftHireConfig } from "@/lib/swift-hire-config";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const SWIFT_ORANGE = "#F05138";

function ScrollCounter({
  target,
  suffix,
  label,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = usePrefersReducedMotion();
  const [n, setN] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    let f = 0;
    const id = setInterval(() => {
      f += 1;
      setN(Math.round((target * f) / 32));
      if (f >= 32) clearInterval(id);
    }, 26);
    return () => clearInterval(id);
  }, [inView, reduced, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="border-t border-white/10 pt-4"
    >
      <p className="text-2xl font-black sm:text-3xl" style={{ color: SWIFT_ORANGE }}>
        {n}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-white/50">{label}</p>
    </motion.div>
  );
}

export function SwiftHireHero() {
  const reducedMotion = usePrefersReducedMotion();
  const { hero } = swiftHireConfig;
  const lines = ["Hire Top", "Swift Developers"];

  return (
    <section className="relative overflow-hidden bg-[#050505] pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[70%] w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(240,81,56,0.12),transparent_70%)]" />
        <div className="absolute -right-1/4 bottom-0 h-[60%] w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(26,105,253,0.1),transparent_70%)]" />
        {!reducedMotion && (
          <motion.div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-12deg, white 0px, white 1px, transparent 1px, transparent 48px)",
            }}
            animate={{ x: [0, 48] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          />
        )}
      </motion.div>

      <div className="container-app relative z-10">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-sm text-white/50"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {swiftHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < swiftHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-[#F05138]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="overflow-hidden text-display font-black leading-[1.02] text-white">
              {lines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    initial={reducedMotion ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.18,
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="mt-8 max-w-xl text-para leading-relaxed text-white/72"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } },
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260 } },
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-[56px] items-center rounded-full px-8 font-bold text-white shadow-[0_0_40px_rgba(240,81,56,0.35)]"
                  style={{ backgroundColor: SWIFT_ORANGE }}
                >
                  {hero.primaryCta}
                </Link>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ x: 4 }}
              >
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-[56px] items-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white backdrop-blur-sm hover:bg-white/10"
                >
                  {hero.secondaryCta}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12 hidden max-w-md lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2"
            >
              {hero.stats.map((s, i) => {
                const suffix = s.value.replace(/^\d+\s*/, "");
                return (
                  <ScrollCounter
                    key={s.label}
                    target={s.numeric}
                    suffix={suffix ? ` ${suffix}` : ""}
                    label={s.label}
                    delay={1 + i * 0.1}
                  />
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={HIRE_HERO_VISUAL_OUTER}
          >
            <motion.div
              animate={reducedMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-[conic-gradient(from_0deg,#F05138,transparent,#1a69fd,transparent)] opacity-70"
              aria-hidden
            />
            <SwiftHeroVisual />
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:hidden">
          {hero.stats.map((s, i) => {
            const suffix = s.value.replace(/^\d+\s*/, "");
            return (
              <ScrollCounter
                key={s.label}
                target={s.numeric}
                suffix={suffix ? ` ${suffix}` : ""}
                label={s.label}
                delay={0.8 + i * 0.08}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
