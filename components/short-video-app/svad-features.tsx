"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { shortVideoAppConfig } from "@/lib/short-video-app-config";

function FeatureCard({
  title,
  description,
  accent,
  index,
  isExpanded,
  onToggle,
}: {
  title: string;
  description: string;
  accent: string;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, ${accent}35, transparent 68%)`;

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
      layout
      initial={reducedMotion ? false : { opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/70"
      style={{ borderColor: isExpanded ? `${accent}55` : undefined }}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity hover:opacity-100" style={{ background: spotlight }} />
      <button type="button" onClick={onToggle} className="flex w-full items-start gap-4 p-5 text-left sm:p-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold" style={{ backgroundColor: `${accent}22`, color: accent }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-white/62 sm:text-para">{description}</p>
          </motion.div>
        </div>
        <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} className="mt-1 text-white/40">▼</motion.span>
      </button>
    </motion.article>
  );
}

export function SvadFeatures() {
  const { features } = shortVideoAppConfig;
  const [expanded, setExpanded] = useState(0);

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="svad-features-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="svad-features-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {features.title}
        </BlurFadeIn>
        <div className="mt-10 space-y-3">
          {features.items.map((item, i) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              accent={item.accent}
              index={i}
              isExpanded={expanded === i}
              onToggle={() => setExpanded(expanded === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
