"use client";

import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { JavascriptHeroVisual } from "@/components/javascript-hire/javascript-hire-hero-visual";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const JS_YELLOW = "#F7DF1E";

function SlotStat({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) {
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <motion.p key={n} initial={{ y: 8 }} animate={{ y: 0 }} className="text-xl font-black sm:text-2xl" style={{ color: JS_YELLOW }}>
        {n}{suffix}
      </motion.p>
      <p className="mt-1 text-[10px] text-white/50 sm:text-xs">{label}</p>
    </motion.div>
  );
}

export function JavascriptHireHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const { hero } = javascriptHireConfig;

  const words = hero.heading.split(" ");

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-[#0c0c0c] pt-32 pb-16">
      <motion.div style={reduced ? undefined : { y: blobY }} className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          animate={reduced ? undefined : { scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#F7DF1E]/10 blur-[100px]"
        />
        <motion.div
          animate={reduced ? undefined : { scale: [1.1, 1, 1.1], x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#3776AB]/15 blur-[90px]"
        />
        {!reduced && (
          <>
            <motion.span
              className="absolute left-[8%] top-28 text-7xl font-black text-[#F7DF1E]/[0.06] sm:text-9xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              {"{"}
            </motion.span>
            <motion.span
              className="absolute right-[8%] bottom-32 text-7xl font-black text-[#F7DF1E]/[0.06] sm:text-9xl"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5.5 }}
            >
              {"}"}
            </motion.span>
          </>
        )}
      </motion.div>

      <div className="container-app relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {javascriptHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < javascriptHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-[#F7DF1E]">{crumb.label}</Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-display font-black leading-[1.05] text-white">
              {reduced ? (
                hero.heading
              ) : (
                words.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`mr-[0.25em] inline-block ${word === "JavaScript" ? "text-[#F7DF1E]" : ""}`}
                  >
                    {word}
                  </motion.span>
                ))
              )}
            </h1>

            <motion.p
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="mt-8 max-w-xl text-para leading-relaxed text-white/72"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/contact-us" className="inline-flex min-h-[56px] items-center rounded-full px-8 font-bold text-black" style={{ backgroundColor: JS_YELLOW }}>
                {hero.primaryCta}
              </Link>
              <Link href="/contact-us" className="inline-flex min-h-[56px] items-center rounded-full border border-white/20 px-8 font-bold text-white hover:border-[#F7DF1E]/50">
                {hero.secondaryCta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            style={reduced ? undefined : { scale: imgScale }}
            className={HIRE_HERO_VISUAL_OUTER}
          >
            <div
              className="absolute -inset-4 rounded-[2rem] bg-[#F7DF1E]/25 blur-2xl"
              aria-hidden
            />
            <JavascriptHeroVisual />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-4"
        >
          {hero.stats.map((s, i) => {
            const suffix = s.value.replace(/^\d+\s*/, "");
            return <SlotStat key={s.label} target={s.numeric} suffix={suffix ? ` ${suffix}` : ""} label={s.label} delay={0.1 + i * 0.08} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}
