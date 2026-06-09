"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type ServiceCtaProps = {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "primary" | "dark" | "gradient";
  /** Unique entrance animation per CTA block on the page */
  motionStyle?: "rise" | "zoom" | "slide" | "glow" | "spotlight" | "pulse";
};

const motionPresets = {
  rise: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.65, type: "spring", stiffness: 200 } },
  },
  slide: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
  glow: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8 } },
  },
  spotlight: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
  pulse: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  },
} as const;

export function ServiceCta({
  title,
  subtitle,
  primaryLabel,
  primaryHref = "/contact-us",
  secondaryLabel,
  secondaryHref = "/contact-us",
  variant = "gradient",
  motionStyle = "rise",
}: ServiceCtaProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(650px circle at ${spotX}px ${spotY}px, rgba(59,130,246,0.2), transparent 60%)`;

  const bg =
    variant === "primary"
      ? "bg-primary"
      : variant === "dark"
        ? "bg-surface-dark"
        : "bg-gradient-to-br from-primary/20 via-black to-accent/10";

  return (
    <section className={`section-app relative overflow-hidden py-20 sm:py-24 ${bg}`}>
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
      />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />

      <div className="container-app relative z-10">
        <motion.div
          ref={cardRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={motionPresets[motionStyle]}
          onMouseMove={(e) => {
            if (!cardRef.current || motionStyle !== "spotlight") return;
            const rect = cardRef.current.getBoundingClientRect();
            spotX.set(e.clientX - rect.left);
            spotY.set(e.clientY - rect.top);
          }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 p-10 text-center backdrop-blur-md sm:p-14"
        >
          {motionStyle === "spotlight" && (
            <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ background: spotlight }} />
          )}
          {motionStyle === "pulse" && (
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0 z-0 bg-primary/20"
            />
          )}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative z-10 text-h2 font-black leading-tight text-white md:text-display"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <p className="relative z-10 mx-auto mt-4 max-w-2xl text-para leading-relaxed text-white/70">{subtitle}</p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={primaryHref}
              className="group relative inline-flex min-h-[56px] w-full items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-bold text-black sm:w-auto"
            >
              <motion.span
                className="absolute inset-0 bg-white/25"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.45 }}
              />
              <span className="relative flex items-center gap-2">
                {primaryLabel}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            {secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full border border-white/25 bg-white/5 px-10 font-bold text-white transition-all hover:bg-white hover:text-black sm:w-auto"
              >
                {secondaryLabel}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
