"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ReactHeroVisual } from "@/components/react-hire/react-hire-hero-visual";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { reactHireConfig } from "@/lib/react-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const REACT_CYAN = "#61DAFB";

function StatPill({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
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
      setN(Math.round((target * f) / 35));
      if (f >= 35) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [inView, reduced, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      className="origin-left rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center backdrop-blur-sm"
    >
      <p className="text-base font-black sm:text-lg" style={{ color: REACT_CYAN }}>
        {n}
        {suffix}
      </p>
      <p className="text-[10px] text-white/50">{label}</p>
    </motion.div>
  );
}

export function ReactHireHero() {
  const reducedMotion = usePrefersReducedMotion();
  const { hero } = reactHireConfig;
  const words = hero.heading.split(" ");

  return (
    <section className="relative min-h-[94vh] overflow-hidden bg-black pt-32 pb-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(97,218,251,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="container-app relative z-10">
        <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {reactHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < reactHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-[#61DAFB]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h1 className="text-display font-black leading-[1.08] text-white">
              {words.map((word, i) => (
                <span key={`${word}-${i}`} className="mr-[0.28em] inline-block overflow-hidden">
                  <motion.span
                    initial={reducedMotion ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-8 max-w-2xl text-para leading-relaxed text-white/80"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center rounded-full bg-[#61DAFB] px-8 font-bold text-black"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center rounded-full border border-white/30 px-8 font-bold text-white backdrop-blur-sm hover:bg-white/10"
              >
                {hero.secondaryCta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className={HIRE_HERO_VISUAL_OUTER}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[#61DAFB]/25 blur-2xl" aria-hidden />
            <ReactHeroVisual />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {hero.stats.map((s) => {
            const suffix = s.value.replace(/^\d+\s*/, "");
            return (
              <StatPill
                key={s.label}
                target={s.numeric}
                suffix={suffix ? ` ${suffix}` : ""}
                label={s.label}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
