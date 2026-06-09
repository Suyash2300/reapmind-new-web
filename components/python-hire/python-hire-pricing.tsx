"use client";

import { motion } from "framer-motion";
import { pythonHireConfig } from "@/lib/python-hire-config";

export function PythonHirePricing() {
  const { pricing } = pythonHireConfig;

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

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.tiers.map((tier, i) => {
            const featured = i === 1;
            return (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: featured ? 1.05 : 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 200 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl border p-8 ${
                  featured
                    ? "border-[#3776AB] bg-[#3776AB]/10 shadow-[0_0_60px_rgba(55,118,171,0.2)]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FFD43B] px-4 py-1 text-xs font-bold text-[#0a0f14]">
                    Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-white">{tier.title}</h3>
                <p className="mt-4 text-3xl font-black" style={{ color: featured ? "#FFD43B" : "#3776AB" }}>
                  {tier.price}
                </p>
                <p className="mt-3 text-sm text-white/55">{tier.experience}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
