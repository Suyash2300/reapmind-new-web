"use client";

import { motion } from "framer-motion";
import { androidHireConfig } from "@/lib/android-hire-config";

export function AndroidHirePricing() {
  const { pricing } = androidHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
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
              initial={{ opacity: 0, scaleY: 0.6, originY: 1 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 text-center"
            >
              <h3 className="text-h5 font-bold text-white">{tier.title}</h3>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
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
