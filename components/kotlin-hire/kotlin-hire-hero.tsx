"use client";

import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { KotlinHeroVisual } from "@/components/kotlin-hire/kotlin-hire-hero-visual";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const KOTLIN_PURPLE = "#7F52FF";
const KOTLIN_PINK = "#B125EA";

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  if (reduced) return <>{text}</>;

  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: delay + i * 0.035, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

function OdometerStat({
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
      setN(Math.round((value * f) / 36));
      if (f >= 36) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, [inView, reduced, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex min-w-0 flex-1 flex-col items-center px-3 py-4 text-center sm:px-5"
    >
      <motion.p
        key={n}
        initial={reduced ? false : { y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        className="text-xl font-black sm:text-2xl lg:text-3xl"
        style={{ color: KOTLIN_PURPLE }}
      >
        {n}
        {suffix}
      </motion.p>
      <p className="mt-1 text-[10px] font-medium text-white/50 sm:text-xs">{label}</p>
    </motion.div>
  );
}

function SpotlightButton({
  href,
  children,
  variant,
}: {
  href: string;
  children: string;
  variant: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotX = useSpring(mx, { stiffness: 280, damping: 28 });
  const spotY = useSpring(my, { stiffness: 280, damping: 28 });

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  const isPrimary = variant === "primary";

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        className={`relative inline-flex min-h-[56px] items-center overflow-hidden rounded-full px-8 font-bold ${
          isPrimary ? "text-white" : "border border-white/20 text-white hover:border-[#7F52FF]/40"
        }`}
        style={
          isPrimary
            ? { background: `linear-gradient(135deg, ${KOTLIN_PURPLE}, ${KOTLIN_PINK})` }
            : undefined
        }
      >
        {!reduced && isPrimary && (
          <motion.span
            className="pointer-events-none absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-xl"
            style={{ left: spotX, top: spotY }}
            aria-hidden
          />
        )}
        <span className="relative z-10">{children}</span>
        {!isPrimary && (
          <motion.span
            className="relative z-10 ml-2 inline-block"
            animate={reduced ? undefined : { x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            aria-hidden
          >
            →
          </motion.span>
        )}
      </Link>
    </motion.div>
  );
}

function HeroVisual() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 0.92]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div ref={ref} className={HIRE_HERO_VISUAL_OUTER}>
      <motion.div
        initial={{ opacity: 0, x: 60, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-4 top-8 h-[88%] w-[78%] rounded-[2rem] border border-[#7F52FF]/20 bg-[#7F52FF]/10 backdrop-blur-sm"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, x: -40, rotate: -6 }}
        animate={{ opacity: 1, x: 0, rotate: -4 }}
        transition={{ delay: 0.65, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-2 bottom-6 h-[55%] w-[55%] rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
        aria-hidden
      />

      {!reduced &&
        [0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#7F52FF]"
            style={{ top: `${20 + i * 25}%`, right: `${-4 + i * 2}%` }}
            animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.4 + i * 0.4, delay: i * 0.3 }}
            aria-hidden
          />
        ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85, clipPath: "circle(0% at 50% 50%)" }}
        animate={{ opacity: 1, scale: 1, clipPath: "circle(75% at 50% 50%)" }}
        transition={{ delay: 0.35, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={reduced ? undefined : { scale: imgScale, y: imgY }}
        className="relative"
      >
        <KotlinHeroVisual />
      </motion.div>
    </div>
  );
}

export function KotlinHireHero() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const { hero } = kotlinHireConfig;

  const headingParts = ["Hire Top", "Kotlin", "Developers"];

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-[#06060c] pt-32 pb-20">
      <motion.div
        style={reducedMotion ? undefined : { y: meshY }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[80%] w-[70%] bg-[radial-gradient(ellipse_at_center,rgba(127,82,255,0.18),transparent_65%)]" />
        <div className="absolute -right-1/4 top-1/4 h-[70%] w-[60%] bg-[radial-gradient(ellipse_at_center,rgba(177,37,234,0.12),transparent_65%)]" />
        {!reducedMotion && (
          <motion.div
            className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7F52FF]/10 blur-[100px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
        )}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </motion.div>

      <div className="container-app relative z-10">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-sm text-white/50"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {kotlinHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < kotlinHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-[#7F52FF]">
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
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="mb-6 h-px w-16 bg-gradient-to-r from-[#7F52FF] to-transparent"
              aria-hidden
            />

            <h1 className="text-display font-black leading-[1.02] text-white">
              {headingParts.map((part, i) => (
                <span key={part} className="block overflow-hidden">
                  <motion.span
                    initial={reducedMotion ? false : { y: "115%", skewY: 8 }}
                    animate={{ y: 0, skewY: 0 }}
                    transition={{
                      delay: 0.12 + i * 0.14,
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`block ${part === "Kotlin" ? "bg-gradient-to-r from-[#7F52FF] via-[#9B6BFF] to-[#B125EA] bg-clip-text text-transparent" : ""}`}
                  >
                    {part}
                    {part === "Kotlin" && !reducedMotion && (
                      <motion.span
                        className="ml-1 inline-block h-[0.9em] w-[3px] align-middle bg-[#7F52FF]"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.9 }}
                        aria-hidden
                      />
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <p className="mt-8 max-w-xl text-para leading-relaxed text-white/72">
              <WordReveal text={hero.description} delay={0.55} />
            </p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.14, delayChildren: 1.1 } },
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <SpotlightButton href="/contact-us" variant="primary">
                  {hero.primaryCta}
                </SpotlightButton>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <SpotlightButton href="/contact-us" variant="ghost">
                  {hero.secondaryCta}
                </SpotlightButton>
              </motion.div>
            </motion.div>
          </div>

          <HeroVisual />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="flex divide-x divide-white/10">
            {hero.stats.map((s, i) => {
              const suffix = s.value.replace(/^\d+\s*/, "");
              return (
                <OdometerStat
                  key={s.label}
                  value={s.numeric}
                  suffix={suffix ? ` ${suffix}` : ""}
                  label={s.label}
                  delay={0.1 + i * 0.08}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
