"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Headphones, Sparkles } from "lucide-react";
import {
  HERO_BACKGROUND,
  HERO_CLIENT_LOGOS,
  HERO_DECORATIVE,
  HERO_STATS,
  HERO_TYPED_STRINGS,
} from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { TypedText } from "@/components/ui/typed-text";
import { fadeIn, fadeLeft, fadeRight, fadeUp } from "@/lib/scroll-motion";

// ─── Shared viewport config — re-triggers every time element enters view ──────

const VP = { once: false, margin: "-10%" };
const VP_STAT = { once: false, margin: "-5%" };

// ─── Animation variants ───────────────────────────────────────────────────────

const wordReveal: Variants = {
  hidden: { opacity: 0, y: "110%" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.18 },
  }),
};

const lineExpand: Variants = {
  hidden: { scaleX: 0 },
  show: (delay = 0) => ({
    scaleX: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const statCard: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const numReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 + 0.2 },
  }),
};

const ruleSlide: Variants = {
  hidden: { scaleX: 0 },
  show: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 + 0.35 },
  }),
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const HEADING_LINES = [
  { text: "Empowering People,",       italic: false },
  { text: "Transforming Businesses,", italic: false },
  { text: "Transcending Boundaries.", italic: true  },
];

function LiveDot() {
  return (
    <motion.span
      className="inline-block w-1.5 h-1.5 rounded-full bg-accent ml-1 align-middle"
      animate={{ opacity: [1, 0.15, 1] }}
      transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
    />
  );
}

function StatItem({ stat, index }: { stat: typeof HERO_STATS[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={statCard}
      initial="hidden"
      whileInView="show"
      viewport={VP_STAT}
      className="group pb-9"
    >
      <div className="overflow-hidden mb-3">
        <motion.span
          custom={index}
          variants={numReveal}
          initial="hidden"
          whileInView="show"
          viewport={VP_STAT}
          className="block font-serif text-5xl font-semibold leading-none tracking-tight text-heading"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {stat.value}
        </motion.span>
      </div>

      <motion.div
        custom={index}
        variants={ruleSlide}
        initial="hidden"
        whileInView="show"
        viewport={VP_STAT}
        className="w-5 h-px bg-accent mb-2.5"
        style={{ originX: 0 }}
      />

      <p className="text-12 font-semibold tracking-[0.14em] uppercase text-accent mb-1.5">
        {stat.label}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground font-light">
        {stat.description}
      </p>
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />

      {/* ── Primary hero ── */}
      <section className="relative z-10 min-h-[min(92vh,960px)] overflow-hidden border-b border-border">
        <Image
          src={HERO_BACKGROUND.image}
          alt={HERO_BACKGROUND.alt}
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/92 dark:bg-[#020c14]/94" />

        <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-12 px-6 pb-24 pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <span className="badge-pill mb-8 inline-flex gap-2">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Digital Transformation Partner
            </span>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-heading sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
              Your Digital Partners for
            </h1>

            <p className="mt-6 min-h-[1.2em] text-2xl font-semibold sm:text-3xl md:text-4xl">
              <span className="text-accent">
                <TypedText strings={HERO_TYPED_STRINGS} />
              </span>
            </p>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
              Enterprise-grade apps, AI, cloud, and automation — engineered for scale,
              shipped with velocity.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button href="/contact-us" variant="primary">
                <Headphones className="h-4 w-4" />
                Schedule a call
              </Button>
              <Button href="/portfolio-reapmind" variant="secondary" className="group">
                Case Studies
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden w-full max-w-lg lg:mx-0 lg:block"
          >
            <div className="animate-float relative overflow-hidden rounded-2xl border border-border bg-elevated shadow-lg">
              <Image
                src={HERO_DECORATIVE.image}
                alt={HERO_DECORATIVE.alt}
                width={900}
                height={1024}
                className="h-auto w-full object-cover"
                priority
                sizes="(max-width: 512px) 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tagline + client logos ── */}
      <section className="relative z-10 border-y border-border glass-panel py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center text-xl font-semibold leading-snug text-foreground md:text-2xl lg:text-[1.75rem]"
          >
            Celebrating Victories, Empowering Visions, or{" "}
            <span className="text-accent">The Catalyst for Your Greatest Achievements</span>
          </motion.h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
            Trusted by global innovators
          </p>

          <div className="marquee-mask relative mt-12 overflow-hidden">
            <div className="flex w-max animate-marquee gap-16 py-6">
              {[...HERO_CLIENT_LOGOS, ...HERO_CLIENT_LOGOS].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex h-14 w-40 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-elevated/80 px-6 opacity-80 grayscale transition duration-300 hover:border-brand/35 hover:opacity-100 hover:grayscale-0 hover:shadow-md"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={56}
                    className="h-auto max-h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission copy + stats ── */}
      <section className="relative z-10 overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-border/40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* Eyebrow */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="flex items-center gap-0 mb-16"
          >
            <motion.div
              variants={lineExpand}
              custom={0}
              className="w-12 h-px bg-foreground/30"
              style={{ originX: 0 }}
            />
            <span className="text-[10px] font-semibold tracking-[.2em] uppercase text-muted-foreground px-4">
              Our mission <LiveDot />
            </span>
            <motion.div
              variants={lineExpand}
              custom={0.3}
              className="flex-1 h-px bg-border"
              style={{ originX: 0 }}
            />
          </motion.div>

          {/* Headline */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="mb-20 lg:mb-24"
          >
            <h2
              className="font-light leading-[1.02] tracking-[-0.02em] text-heading"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(44px, 7vw, 80px)",
              }}
            >
              {HEADING_LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className={`inline-block${line.italic ? " italic text-accent" : ""}`}
                    custom={i}
                    variants={wordReveal}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h2>
          </motion.div>

          {/* Two-column copy */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 mb-24 lg:mb-28">
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="show"
              viewport={VP}
              custom={0}
              className="text-base leading-[1.85] text-muted-foreground font-light md:text-lg"
            >
              ReapMind believes in a future where{" "}
              <strong className="font-medium text-foreground">
                technology empowers, not divides.
              </strong>{" "}
              We are digital architects helping businesses build bridges across continents
              and platforms — fostering genuine connections and unlocking human potential
              at every scale.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="show"
              viewport={VP}
              custom={0.15}
              className="flex flex-col"
            >
              <motion.div
                variants={{
                  hidden: { scaleY: 0 },
                  show: { scaleY: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
                }}
                className="w-px h-16 bg-border mb-8"
                style={{ originY: 0 }}
              />
              <blockquote
                className="font-light italic text-[22px] leading-[1.6] text-foreground"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "More than transformation —<br />
                making technology accessible,{" "}
                <em className="not-italic text-accent">deeply human.</em>"
              </blockquote>
            </motion.div>
          </div>

          {/* Stats header */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            custom={0}
            className="flex items-center gap-4 mb-10"
          >
            <span className="text-[10px] font-semibold tracking-[.2em] uppercase text-muted-foreground whitespace-nowrap">
              By the numbers
            </span>
            <motion.div
              variants={lineExpand}
              custom={0.2}
              className="flex-1 h-px bg-border"
              style={{ originX: 0 }}
            />
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 mb-20">
            {HERO_STATS.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>

          {/* Bottom rule */}
          <motion.div
            variants={lineExpand}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            custom={0}
            className="h-px bg-border mb-12"
            style={{ originX: 0 }}
          />

          {/* CTA */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            custom={0}
            className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <p
              className="font-light italic text-[26px] leading-snug text-foreground"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ready to innovate &amp; drive an impact?
            </p>

            <Button href="/contact-us" variant="ghost" className="group relative overflow-hidden">
              <motion.span
                className="pointer-events-none absolute inset-0 bg-accent"
                initial={{ x: "-101%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Get a free Consultation
              </span>
              <ArrowRight className="relative z-10 h-4 w-4 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

        </div>
      </section>
    </div>
  );
}