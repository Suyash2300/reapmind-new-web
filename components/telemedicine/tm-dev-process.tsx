"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

const ACCENTS = ["#34D399", "#1A69FD", "#8B5CF6", "#F59E0B"] as const;

function SpotlightCard({
  step,
  title,
  description,
  accent,
  index,
}: {
  step: string;
  title: string;
  description: string;
  accent: string;
  index: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, ${accent}33, transparent 65%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={reducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface-elevated/70 p-6 sm:p-7"
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: spotlight }} />
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
        Step {step}
      </span>
      <h3 className="relative mt-3 text-lg font-bold text-white sm:text-xl">{title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/62 sm:text-para">{description}</p>
    </motion.article>
  );
}

export function TmDevProcess() {
  const { devProcess } = telemedicineConfig;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="tm-dev-process-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tm-dev-process-heading" className="mx-auto max-w-3xl text-center text-h3 font-bold text-white sm:text-h2">
          {devProcess.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {devProcess.steps.map((item, i) => (
            <SpotlightCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              accent={ACCENTS[i % ACCENTS.length]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
