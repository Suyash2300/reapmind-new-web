"use client";

import { motion } from "framer-motion";
import { swiftHireConfig } from "@/lib/swift-hire-config";

export function SwiftHirePricing() {
  const { pricing } = swiftHireConfig;

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
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.65 }}
              style={{ transformPerspective: 900 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 text-center"
            >
              <h3 className="text-h5 font-bold text-white">{tier.title}</h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="mt-6 text-3xl font-black text-[#F05138]"
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
