"use client";

import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { NodejsHeroVisual } from "@/components/nodejs-hire/nodejs-hire-hero-visual";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const NODE_GREEN = "#339933";
const NODE_LIGHT = "#68A063";

function TypewriterHeading({ text }: { text: string }) {
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(reduced ? text.length : 0);

  useEffect(() => {
    if (reduced) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setVisible(i);
      if (i >= text.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [reduced, text]);

  const shown = text.slice(0, visible);

  return (
    <h1 className="text-display font-black leading-[1.05] text-white">
      {shown.split("Node JS").map((part, i, arr) =>
        i < arr.length - 1 ? (
          <span key={i}>
            {part}
            <span className="bg-gradient-to-r from-[#339933] via-[#4db84d] to-[#68A063] bg-clip-text text-transparent">
              Node JS
            </span>
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
      {!reduced && visible < text.length && (
        <motion.span
          className="ml-0.5 inline-block h-[0.85em] w-[3px] align-middle bg-[#339933]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.7 }}
          aria-hidden
        />
      )}
    </h1>
  );
}

function RingStat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
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
      setN(Math.round((value * f) / 40));
      if (f >= 40) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [inView, reduced, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, type: "spring", stiffness: 200, damping: 18 }}
      className="relative flex min-w-0 flex-1 flex-col items-center px-2 py-5 text-center sm:px-4"
    >
      {!reduced && (
        <motion.span
          className="absolute inset-2 rounded-full border border-[#339933]/30"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.8, delay }}
          aria-hidden
        />
      )}
      <p className="relative text-lg font-black sm:text-2xl lg:text-3xl" style={{ color: NODE_GREEN }}>
        {n}
        {suffix}
      </p>
      <p className="relative mt-1 text-[10px] font-medium text-white/50 sm:text-xs">{label}</p>
    </motion.div>
  );
}

export function NodejsHireHero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const { hero } = nodejsHireConfig;

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-[#050805] pt-32 pb-20">
      <motion.div
        style={reducedMotion ? undefined : { y: parallaxY }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[75%] w-[65%] bg-[radial-gradient(ellipse_at_center,rgba(51,153,51,0.2),transparent_65%)]" />
        <div className="absolute -right-1/4 top-1/3 h-[60%] w-[55%] bg-[radial-gradient(ellipse_at_center,rgba(104,160,99,0.12),transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#339933 1px, transparent 1px), linear-gradient(90deg, #339933 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="container-app relative z-10">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-sm text-white/50"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {nodejsHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < nodejsHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-[#339933]">
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
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="mb-6 h-px w-20 bg-gradient-to-r from-[#339933] to-transparent"
              aria-hidden
            />

            <TypewriterHeading text={hero.heading} />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="mt-8 max-w-xl text-para leading-relaxed text-white/72"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-[56px] items-center rounded-full px-8 font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${NODE_GREEN}, ${NODE_LIGHT})` }}
                >
                  {hero.primaryCta}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-[56px] items-center rounded-full border border-white/20 px-8 font-bold text-white hover:border-[#339933]/50"
                >
                  {hero.secondaryCta}
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={HIRE_HERO_VISUAL_OUTER}
          >
            <NodejsHeroVisual />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
            {hero.stats.map((s, i) => {
              const suffix = s.value.replace(/^\d+\s*/, "");
              return (
                <RingStat
                  key={s.label}
                  value={s.numeric}
                  suffix={suffix ? ` ${suffix}` : ""}
                  label={s.label}
                  delay={0.1 + i * 0.1}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
