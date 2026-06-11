"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { datingAppConfig } from "@/lib/dating-app-config";

function TimelineItem({
  title,
  description,
  accent,
  index,
  isActive,
  isLast,
  onSelect,
}: {
  title: string;
  description: string;
  accent: string;
  index: number;
  isActive: boolean;
  isLast: boolean;
  onSelect: () => void;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, ${accent}30, transparent 70%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <motion.li
      initial={reducedMotion ? false : { opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="relative flex gap-5 pb-8 last:pb-0"
    >
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={onSelect}
          aria-expanded={isActive}
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-transform hover:scale-110"
          style={{
            borderColor: isActive ? accent : "rgba(255,255,255,0.2)",
            backgroundColor: isActive ? `${accent}25` : "rgba(0,0,0,0.5)",
            color: isActive ? accent : "rgba(255,255,255,0.5)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </button>
        {!isLast && (
          <motion.div
            className="mt-1 w-px flex-1 bg-gradient-to-b from-white/20 to-transparent"
            initial={reducedMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + 0.2, duration: 0.5 }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onClick={onSelect}
        layout
        className="relative flex-1 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/70 p-5 sm:p-6"
        style={{ borderColor: isActive ? `${accent}44` : undefined }}
        animate={isActive ? { scale: 1.01 } : { scale: 1 }}
      >
        <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity hover:opacity-100" style={{ background: spotlight }} />
        <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>
        <motion.div
          initial={false}
          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 12 : 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden"
        >
          <p className="text-sm leading-relaxed text-white/65 sm:text-para">{description}</p>
        </motion.div>
      </motion.div>
    </motion.li>
  );
}

export function DadFeatures() {
  const { features } = datingAppConfig;
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="dad-features-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="dad-features-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {features.title}
        </BlurFadeIn>

        <ol className="relative mx-auto mt-10 max-w-3xl">
          {features.items.map((item, i) => (
            <TimelineItem
              key={item.id}
              title={item.title}
              description={item.description}
              accent={item.accent}
              index={i}
              isActive={active === i}
              isLast={i === features.items.length - 1}
              onSelect={() => setActive(i)}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
