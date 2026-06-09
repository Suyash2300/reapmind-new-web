"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AwsHeroVisual } from "@/components/aws-hire/aws-hire-hero-visual";
import { awsHireConfig } from "@/lib/aws-hire-config";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const AWS_ORANGE = "#FF9900";

function CounterStat({
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
      setN(Math.round((target * f) / 30));
      if (f >= 30) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [inView, reduced, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-4 border-l-2 border-[#FF9900]/50 py-3 pl-4"
    >
      <p className="min-w-[4.5rem] text-xl font-black" style={{ color: AWS_ORANGE }}>
        {n}
        {suffix}
      </p>
      <p className="text-xs text-white/55">{label}</p>
    </motion.div>
  );
}

export function AwsHireHero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const cloud1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const cloud2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const { hero } = awsHireConfig;

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-[#0a0a0a] pt-32 pb-16">
      <motion.div
        style={reducedMotion ? undefined : { y: cloud1 }}
        className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-[#FF9900]/10 blur-[90px]"
        aria-hidden
      />
      <motion.div
        style={reducedMotion ? undefined : { y: cloud2 }}
        className="pointer-events-none absolute -left-16 bottom-32 h-64 w-64 rounded-full bg-primary/10 blur-[80px]"
        aria-hidden
      />

      <div className="container-app relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {awsHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < awsHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-[#FF9900]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-display font-black leading-[1.06] text-white">
              {hero.heading.split(" ").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.1,
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                  }}
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-8 max-w-2xl text-para leading-relaxed text-white/75"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center rounded-full px-8 font-bold text-black"
                style={{ backgroundColor: AWS_ORANGE }}
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center rounded-full border border-white/25 px-8 font-bold text-white hover:bg-white/10"
              >
                {hero.secondaryCta}
              </Link>
            </motion.div>

            <div className="mt-12 hidden max-w-sm lg:block">
              {hero.stats.map((s, i) => {
                const suffix = s.value.replace(/^\d+\s*/, "");
                return (
                  <CounterStat
                    key={s.label}
                    target={s.numeric}
                    suffix={suffix ? ` ${suffix}` : ""}
                    label={s.label}
                    delay={0.8 + i * 0.1}
                  />
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className={HIRE_HERO_VISUAL_OUTER}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#FF9900]/30 to-primary/20 blur-2xl" aria-hidden />
            <AwsHeroVisual />
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {hero.stats.map((s, i) => {
            const suffix = s.value.replace(/^\d+\s*/, "");
            return (
              <CounterStat
                key={s.label}
                target={s.numeric}
                suffix={suffix ? ` ${suffix}` : ""}
                label={s.label}
                delay={0.5 + i * 0.08}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
