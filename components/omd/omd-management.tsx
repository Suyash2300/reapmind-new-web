"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { omdConfig } from "@/lib/omd-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type ManagementCardProps = {
  title: string;
  items: ReadonlyArray<{ title?: string; label: string; description: string }>;
  index: number;
  reduced: boolean;
};

function ManagementCard({ title, items, index, reduced }: ManagementCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(120);
  const glowY = useMotionValue(120);
  const glow = useMotionTemplate`radial-gradient(260px circle at ${glowX}px ${glowY}px, rgba(13,148,136,0.3), transparent 65%)`;

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 30 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={(event) => {
        if (reduced) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        glowX.set(x);
        glowY.set(y);
        rotateX.set((rect.height / 2 - y) / 16);
        rotateY.set((x - rect.width / 2) / 16);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={reduced ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface-elevated p-6 sm:p-8"
    >
      {!reduced && <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />}
      <h3 className="relative text-h4 font-bold text-white">{title}</h3>
      <ul className="relative mt-5 space-y-4">
        {items.map((item) => (
          <li key={`${title}-${item.label}`} className="rounded-2xl border border-white/10 bg-black/35 p-4">
            <p className="text-sm font-semibold text-[#5eead4] sm:text-base">{item.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function OmdManagement() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <motion.h2
          className="mx-auto max-w-5xl text-center text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {omdConfig.features.managementHeading}
        </motion.h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {omdConfig.management.map((module, index) => (
            <ManagementCard key={module.title} title={module.title} items={module.items} index={index} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}
