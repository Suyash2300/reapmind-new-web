"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

/* ─── helpers ────────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

/** Diagonal cascade: each card slides in from a slightly different angle */
function diagonalVariant(i: number) {
  const col = i % 3;
  const offsetX = col === 0 ? -40 : col === 2 ? 40 : 0;
  const offsetY = 30 + (i % 2) * 10;
  return {
    hidden: { opacity: 0, x: offsetX, y: offsetY, scale: 0.88, rotateZ: col === 1 ? 0 : col === 0 ? -4 : 4 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateZ: 0,
      transition: { duration: 0.6, delay: i * 0.07, ease },
    },
  };
}

/* ─── Orbital visual (left column) ──────────────────────────── */
function OrbitalRing({ items }: { items: readonly { name: string; icon: string }[] }) {
  const orbitItems = items.slice(0, 6);

  return (
    <div className="relative mx-auto w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] flex-shrink-0">
      {/* Outer pulsing glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-[#54C5F8]/20 blur-2xl"
      />

      {/* Spinning orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        className="absolute inset-6 rounded-full border border-dashed border-[#54C5F8]/25"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute inset-14 rounded-full border border-dashed border-white/10"
      />

      {/* Centre logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-20 h-20 rounded-2xl bg-black border border-[#54C5F8]/40 flex items-center justify-center shadow-[0_0_30px_rgba(84,197,248,0.25)]">
          <Image
            src="/flutter-hire/tech-flutter-ui.png"
            alt="Flutter"
            width={48}
            height={48}
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Orbiting tech icons */}
      {orbitItems.map((tech, i) => {
        const angle = (i / orbitItems.length) * Math.PI * 2 - Math.PI / 2;
        const r = 44; // % of container
        const x = 50 + Math.cos(angle) * r;
        const y = 50 + Math.sin(angle) * r;
        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 + i * 0.08 }}
            // @ts-ignore — framer-motion animate + transition co-exist fine
            whileHover={{ scale: 1.25, zIndex: 20 }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          >
            {/* Float anim attached separately so it doesn't conflict with entry */}
            <FloatBadge tech={tech} delay={i * 0.4} />
          </motion.div>
        );
      })}
    </div>
  );
}

function FloatBadge({ tech, delay }: { tech: { name: string; icon: string }; delay: number }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 2.6 + delay * 0.3, ease: "easeInOut", delay }}
      className="group flex flex-col items-center gap-1 cursor-default"
    >
      <div className="relative h-11 w-11 rounded-xl border border-[#54C5F8]/30 bg-black/90 p-2 shadow-[0_0_12px_rgba(84,197,248,0.12)] group-hover:border-[#54C5F8]/70 group-hover:shadow-[0_0_20px_rgba(84,197,248,0.3)] transition-all duration-300">
        <Image src={tech.icon} alt={tech.name} fill className="object-contain p-1" sizes="44px" unoptimized />
      </div>
      <span className="text-[9px] font-semibold text-white/50 group-hover:text-white/90 transition-colors duration-200 whitespace-nowrap">
        {tech.name}
      </span>
    </motion.div>
  );
}

/* ─── Tech grid card ─────────────────────────────────────────── */
function TechCard({ tech, index }: { tech: { name: string; icon: string }; index: number }) {
  const [hovered, setHovered] = useState(false);
  const variant = diagonalVariant(index);

  return (
    <motion.li
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center gap-2.5 rounded-2xl border border-white/8 bg-black/50 px-3 py-5 overflow-hidden cursor-default select-none group"
      style={{ transformOrigin: "center" }}
    >
      {/* Glow burst on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="glow"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(84,197,248,0.12),transparent_70%)]"
          />
        )}
      </AnimatePresence>

      {/* Animated border draw on hover */}
      <motion.div
        animate={hovered ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.4, ease }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#54C5F8] to-transparent origin-left"
      />

      {/* Icon with spring pop */}
      <motion.div
        animate={hovered ? { scale: 1.15, y: -3 } : { scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="relative h-10 w-10 sm:h-11 sm:w-11 z-10"
      >
        <Image src={tech.icon} alt={tech.name} fill className="object-contain" sizes="44px" unoptimized />
      </motion.div>

      <span className="relative z-10 text-center text-[11px] font-semibold text-white/70 group-hover:text-white transition-colors duration-200 sm:text-xs">
        {tech.name}
      </span>
    </motion.li>
  );
}

/* ─── Main section ───────────────────────────────────────────── */
export function FlutterHireTechnologies() {
  const { technologies } = flutterHireConfig;
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  const words = technologies.title.split(" ");

  return (
    <section className="section-app bg-surface-dark py-32 overflow-hidden">
      <div className="container-app">
        {/* ── Heading: word-by-word slide-up ── */}
        <div ref={headingRef} className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-h2 font-black text-white md:text-display" aria-label={technologies.title}>
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.28em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={headingInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.055, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Clip-path line wipe under heading */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={headingInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mx-auto mt-3 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#54C5F8] to-[#54C5F8]/0"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mt-6 text-para text-white/65"
          >
            {technologies.description}
          </motion.p>
        </div>

        {/* ── Layout: orbital left + grid right ── */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: orbital ring */}
          <div className="flex justify-center lg:col-span-5">
            <OrbitalRing items={technologies.items} />
          </div>

          {/* Right: cascading grid */}
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">
            {technologies.items.map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
