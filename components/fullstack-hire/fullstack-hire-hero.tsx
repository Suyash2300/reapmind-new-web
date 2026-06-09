"use client";

import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FullstackHeroVisual } from "@/components/fullstack-hire/fullstack-hire-hero-visual";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const INDIGO = "#6366F1";
const INDIGO_LIGHT = "#818CF8";

function CascadeHeading({ text }: { text: string }) {
  const reduced = usePrefersReducedMotion();
  const lines = ["Hire Full Stack", "Developer"];

  if (reduced) return <h1 className="text-display font-black text-white">{text}</h1>;

  return (
    <h1 className="text-display font-black leading-[1.05] text-white">
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            initial={{ y: "110%", skewX: 12 }}
            animate={{ y: 0, skewX: 0 }}
            transition={{ delay: 0.1 + i * 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`block ${i === 1 ? "bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#A5B4FC] bg-clip-text text-transparent" : ""}`}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

function OrbitStat({
  value,
  suffix,
  label,
  delay,
  angle,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  angle: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = usePrefersReducedMotion();
  const [n, setN] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    let f = 0;
    const id = setInterval(() => {
      f += 1;
      setN(Math.round((value * f) / 38));
      if (f >= 38) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [inView, reduced, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, rotate: angle }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ delay, type: "spring", stiffness: 180, damping: 16 }}
      className="relative flex min-w-0 flex-1 flex-col items-center px-2 py-4 text-center sm:px-4"
    >
      <p className="text-lg font-black sm:text-2xl lg:text-3xl" style={{ color: INDIGO }}>
        {n}
        {suffix}
      </p>
      <p className="mt-1 text-[10px] font-medium text-white/50 sm:text-xs">{label}</p>
    </motion.div>
  );
}

export function FullstackHireHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const { hero } = fullstackHireConfig;

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-[#06060c] pt-32 pb-20">
      <motion.div
        style={reduced ? undefined : { y: meshY }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[75%] w-[65%] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2),transparent_65%)]" />
        <div className="absolute -right-1/4 top-1/3 h-[55%] w-[50%] bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.12),transparent_65%)]" />
      </motion.div>

      <div className="container-app relative z-10">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-sm text-white/50"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {fullstackHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < fullstackHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-[#818CF8]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <CascadeHeading text={hero.heading} />
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="mt-8 max-w-xl text-para leading-relaxed text-white/72"
            >
              {hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center rounded-full px-8 font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${INDIGO}, ${INDIGO_LIGHT})` }}
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center rounded-full border border-white/20 px-8 font-bold text-white hover:border-[#6366F1]/50"
              >
                {hero.secondaryCta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.85 }}
            className={HIRE_HERO_VISUAL_OUTER}
          >
            <FullstackHeroVisual />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
            {hero.stats.map((s, i) => {
              const suffix = s.value.replace(/^\d+\s*/, "");
              return (
                <OrbitStat
                  key={s.label}
                  value={s.numeric}
                  suffix={suffix ? ` ${suffix}` : ""}
                  label={s.label}
                  delay={0.08 + i * 0.1}
                  angle={-15 + i * 10}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
