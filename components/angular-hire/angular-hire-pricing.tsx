"use client";

import { motion } from "framer-motion";
import { angularHireConfig } from "@/lib/angular-hire-config";

export function AngularHirePricing() {
  const { pricing } = angularHireConfig;

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
              initial={{ opacity: 0, rotateX: 40, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.14, duration: 0.6 }}
              whileHover={{ y: -8, rotateX: -4 }}
              style={{ transformPerspective: 800 }}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl"
                aria-hidden
              />
              <h3 className="mt-2 text-h5 font-bold text-white">{tier.title}</h3>
              <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.12, type: "spring" }}
                className="mt-6 text-3xl font-black text-primary"
              >
                {tier.price}
              </motion.p>
              <p className="mt-3 text-sm text-white/55">{tier.experience}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
