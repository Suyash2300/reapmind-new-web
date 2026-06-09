"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HIRE_HERO_VISUAL_INNER } from "@/lib/hire-hero-visual-size";
import type { HireStackVisual } from "@/lib/hire-stack-visual";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export type { HireStackVisual } from "@/lib/hire-stack-visual";

type HireStackHeroVisualProps = {
  stack: HireStackVisual;
  accentColor: string;
  ariaLabel: string;
};

function StackIcon({
  src,
  label,
  delay,
  accentColor,
}: {
  src: string;
  label: string;
  delay: number;
  accentColor: string;
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { y: -4, scale: 1.04 }}
      className="flex flex-col items-center gap-2"
    >
      <div
        className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-2xl border border-white/15 bg-white p-2 shadow-[0_8px_32px_rgba(0,0,0,0.2)] sm:h-24 sm:w-24"
        style={{ boxShadow: `0 8px 32px ${accentColor}40` }}
      >
        <Image
          src={src}
          alt={label}
          width={70}
          height={70}
          className="h-[70px] w-[70px] max-h-[70px] max-w-[70px] object-contain"
          unoptimized
        />
      </div>
      <span className="text-center text-xs font-semibold uppercase tracking-wider text-white/60 sm:text-sm">
        {label}
      </span>
    </motion.div>
  );
}

export function HireStackHeroVisual({ stack, accentColor, ariaLabel }: HireStackHeroVisualProps) {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`${HIRE_HERO_VISUAL_INNER} border shadow-[0_32px_100px_rgba(0,0,0,0.35)]`}
      style={{ borderColor: `${accentColor}55` }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 50% 38%, ${accentColor}52, transparent 55%), radial-gradient(circle at 80% 80%, ${accentColor}28, transparent 45%), linear-gradient(155deg, #12121a 0%, #060606 100%)`,
        }}
        aria-hidden
      />

      {!reduced && (
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 z-0 h-[64%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] border"
          style={{ borderColor: `${accentColor}35`, backgroundColor: `${accentColor}14` }}
          aria-hidden
        />
      )}

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 p-5 sm:gap-7 sm:p-8 lg:gap-8 lg:p-10">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className="text-sm font-bold uppercase tracking-[0.2em] sm:text-base"
            style={{ color: accentColor }}
          >
            {stack.title}
          </p>
          <p className="mt-2 max-w-xs text-sm text-white/60 sm:text-base">{stack.subtitle}</p>
        </motion.div>

        <div className="grid w-full max-w-md grid-cols-3 gap-5 sm:max-w-lg sm:gap-6 lg:max-w-xl lg:gap-7">
          {stack.items.map((item, i) => (
            <StackIcon
              key={`${item.src}-${item.label}`}
              src={item.src}
              label={item.label}
              delay={0.15 + i * 0.08}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#060606]/90 via-transparent"
        style={{ backgroundImage: `linear-gradient(to top, #060606e6, transparent 40%, ${accentColor}18)` }}
        aria-hidden
      />
    </div>
  );
}
