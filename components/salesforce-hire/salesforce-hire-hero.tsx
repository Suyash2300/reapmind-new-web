"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SalesforceHeroVisual } from "@/components/salesforce-hire/salesforce-hire-hero-visual";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const CHAR_STAGGER = 0.018;

function HexGrid() {
  const cells = Array.from({ length: 48 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40" aria-hidden>
      <div className="grid h-full w-full grid-cols-8 gap-3 p-8 [transform:rotate(-12deg)_scale(1.2)]">
        {cells.map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.08, 0.22, 0.08], scale: 1 }}
            transition={{
              delay: (i % 8) * 0.05 + Math.floor(i / 8) * 0.08,
              duration: 3 + (i % 5) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="aspect-[1/1.15] rounded-lg border border-[#00A1E0]/25 bg-[#00A1E0]/5"
          />
        ))}
      </div>
    </div>
  );
}

export function SalesforceHireHero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const { hero } = salesforceHireConfig;
  const chars = hero.heading.split("");

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-black pt-32 pb-20">
      {!reducedMotion && <HexGrid />}

      <div className="container-app relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {salesforceHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < salesforceHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="transition-colors hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div style={reducedMotion ? undefined : { y: textY }}>
            <h1 className="text-display font-black leading-[1.05] text-white" aria-label={hero.heading}>
              {chars.map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 48, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.15 + i * CHAR_STAGGER,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                  style={{ whiteSpace: char === " " ? "pre" : undefined }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 + chars.length * CHAR_STAGGER + 0.2, duration: 0.9 }}
              className="mt-8 max-w-2xl text-para leading-relaxed text-white/75"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-8 font-bold text-black"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/25 px-8 font-bold text-white hover:bg-white hover:text-black"
              >
                {hero.secondaryCta}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
            className={HIRE_HERO_VISUAL_OUTER}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[#00A1E0]/25 blur-2xl" aria-hidden />
            <SalesforceHeroVisual />
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {hero.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
              <p className="text-lg font-black text-[#00A1E0]">{s.value}</p>
              <p className="text-[10px] text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
