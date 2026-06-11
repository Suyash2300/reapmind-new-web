"use client";

import { motion } from "framer-motion";

export function DsbMetricsStrip({ items }: { items: readonly { value: string; label: string }[] }) {
  return (
    <section className="border-b border-white/[0.06] bg-[#040a10]" aria-label="Doorstep banking cost highlights">
      <div className="container-app grid grid-cols-2 gap-px bg-cyan-500/10 md:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring" }}
            className="bg-[#040a10] px-6 py-9"
          >
            <p className="text-2xl font-bold text-white md:text-3xl">{item.value}</p>
            <p className="mt-2 text-sm text-white/45">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
