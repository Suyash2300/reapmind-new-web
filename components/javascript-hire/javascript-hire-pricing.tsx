"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";

export function JavascriptHirePricing() {
  const { pricing } = javascriptHireConfig;
  const [hovered, setHovered] = useState(1);

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{pricing.title}</h2>
          <p className="mt-6 text-para text-white/65">{pricing.subtitle}</p>
        </motion.div>

        <div className="relative mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          <motion.div
            layout
            className="pointer-events-none absolute inset-y-0 hidden rounded-2xl border border-[#F7DF1E]/40 bg-[#F7DF1E]/5 md:block"
            animate={{ left: `${hovered * 33.33}%`, width: "33.33%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            aria-hidden
          />
          {pricing.tiers.map((tier, i) => (
            <motion.div
              key={tier.title}
              onHoverStart={() => setHovered(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 rounded-2xl p-8"
            >
              <h3 className="text-lg font-bold text-white">{tier.title}</h3>
              <p className="mt-4 text-3xl font-black text-[#F7DF1E]">{tier.price}</p>
              <p className="mt-3 text-sm text-white/55">{tier.experience}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
