"use client";

import { motion } from "framer-motion";

type Item = { value: string; label: string };

export function IsbCostStrip({ items }: { items: readonly Item[] }) {
  return (
    <section className="relative border-b border-white/[0.06] bg-[#050a08]" aria-label="Cost highlights">
      <div className="container-app grid grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group relative bg-[#050a08] px-5 py-8 md:px-8 md:py-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 transition-colors group-hover:from-emerald-500/[0.06] group-hover:to-transparent" />
            <p className="relative text-2xl font-bold tracking-tight text-white md:text-3xl">{item.value}</p>
            <p className="relative mt-2 text-xs leading-relaxed text-white/45 md:text-sm">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
