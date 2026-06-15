"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function ValueCard({
  title,
  description,
  index,
  reduced,
}: {
  title: string;
  description: string;
  index: number;
  reduced: boolean;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const borderGlow = useMotionTemplate`radial-gradient(400px circle at ${mx}px ${my}px, rgba(37,99,235,0.45), transparent 55%)`;

  return (
    <motion.article
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/45 p-6"
      initial={reduced ? false : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      onMouseMove={(e) => {
        if (reduced) return;
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
    >
      {!reduced && (
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: borderGlow }} />
      )}
      <h3 className="relative text-lg font-bold text-[#93C5FD] sm:text-xl">{title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
    </motion.article>
  );
}

export function EmrValueCards() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <h2 className="max-w-4xl text-h2 font-black text-white md:text-display">{emrConfig.valueCards.title}</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {emrConfig.valueCards.items.map((item, index) => (
            <ValueCard
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
