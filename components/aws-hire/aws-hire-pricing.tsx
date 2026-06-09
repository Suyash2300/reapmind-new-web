"use client";

import { motion } from "framer-motion";
import { awsHireConfig } from "@/lib/aws-hire-config";

export function AwsHirePricing() {
  const { pricing } = awsHireConfig;

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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
            >
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "conic-gradient(from 0deg, transparent, #FF9900, transparent)",
                    "conic-gradient(from 180deg, transparent, #FF9900, transparent)",
                    "conic-gradient(from 360deg, transparent, #FF9900, transparent)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ padding: 1 }}
                aria-hidden
              />
              <div className="relative rounded-[1.4rem] bg-black p-7">
                <h3 className="text-h5 font-bold text-white">{tier.title}</h3>
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, type: "spring" }}
                  className="mt-6 text-3xl font-black text-[#FF9900]"
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
