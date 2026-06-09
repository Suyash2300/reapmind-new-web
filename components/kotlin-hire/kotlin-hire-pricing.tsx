"use client";

import { motion } from "framer-motion";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";

export function KotlinHirePricing() {
  const { pricing } = kotlinHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{pricing.title}</h2>
          <p className="mt-6 text-para text-white/65">{pricing.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.tiers.map((tier, i) => (
            <motion.article
              key={tier.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
            >
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(127,82,255,0.25), transparent 70%)",
                }}
                aria-hidden
              />
              <div className="relative">
                <h3 className="text-h5 font-bold text-white">{tier.title}</h3>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="mt-6 text-3xl font-black text-[#7F52FF]"
                >
                  {tier.price}
                </motion.p>
                <p className="mt-3 text-sm text-white/55">{tier.experience}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
