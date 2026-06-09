"use client";

import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PythonHeroVisual } from "@/components/python-hire/python-hire-hero-visual";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { pythonHireConfig } from "@/lib/python-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const PY_BLUE = "#3776AB";
const PY_YELLOW = "#FFD43B";

const HEADING_LINES = ["Hire Top", "Python", "Developers"];

function BarStat({
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

  const pct = Math.min(100, (n / target) * 100);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="px-2 py-2"
    >
      <p className="text-lg font-black sm:text-xl" style={{ color: PY_YELLOW }}>
        {n}
        {suffix}
      </p>
      <p className="mt-1 text-[10px] text-white/50 sm:text-xs">{label}</p>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${PY_BLUE}, ${PY_YELLOW})` }}
        />
      </div>
    </motion.div>
  );
}

export function PythonHireHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgShift = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const { hero } = pythonHireConfig;

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-[#070b10] pt-32 pb-16">
      <motion.div
        style={reduced ? undefined : { y: bgShift }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[70%] w-[60%] bg-[radial-gradient(ellipse,rgba(55,118,171,0.2),transparent_70%)]" />
        <div className="absolute -right-1/4 bottom-0 h-[60%] w-[50%] bg-[radial-gradient(ellipse,rgba(34,211,238,0.12),transparent_70%)]" />
      </motion.div>

      <div className="container-app relative z-10">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-sm text-white/50"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {pythonHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < pythonHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-[#3776AB]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <h1 className="text-display font-black leading-[1.08] text-white">
              {HEADING_LINES.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    initial={reduced ? false : { opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.15 + i * 0.14,
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`block ${line === "Developers" ? "text-nowrap" : ""} ${
                      line === "Python"
                        ? "bg-gradient-to-r from-[#FFD43B] via-[#4B8BBE] to-[#3776AB] bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-8 max-w-xl text-para leading-relaxed text-white/72"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.75 } } }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-[56px] items-center rounded-full px-8 font-bold text-[#070b10]"
                  style={{ backgroundColor: PY_YELLOW }}
                >
                  {hero.primaryCta}
                </Link>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-[56px] items-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white backdrop-blur-sm"
                >
                  {hero.secondaryCta}
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className={HIRE_HERO_VISUAL_OUTER}
          >
            <div className="absolute -inset-4 rounded-[2rem] blur-2xl" style={{ background: `${PY_BLUE}40` }} aria-hidden />
            <PythonHeroVisual />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md sm:grid-cols-4 sm:p-6"
        >
          {hero.stats.map((s, i) => {
            const suffix = s.value.replace(/^\d+\s*/, "");
            return (
              <BarStat
                key={s.label}
                target={s.numeric}
                suffix={suffix ? ` ${suffix}` : ""}
                label={s.label}
                delay={0.08 + i * 0.07}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
