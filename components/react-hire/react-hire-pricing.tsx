"use client";

import { motion } from "framer-motion";
import { reactHireConfig } from "@/lib/react-hire-config";

export function ReactHirePricing() {
  const { pricing } = reactHireConfig;

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

        <div className="mx-auto grid max-w-5xl items-end gap-6 md:grid-cols-3">
          {pricing.tiers.map((tier, i) => {
            const featured = i === 1;
            return (
              <motion.article
                key={tier.title}
                initial={{ opacity: 0, y: featured ? 60 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 120 }}
                className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 text-center ${
                  featured
                    ? "z-10 border-[#61DAFB]/50 bg-gradient-to-b from-[#61DAFB]/15 to-black md:-mt-4 md:pb-12 md:pt-10"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {featured && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-3xl"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(97,218,251,0)",
                        "0 0 40px 2px rgba(97,218,251,0.25)",
                        "0 0 0 0 rgba(97,218,251,0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    aria-hidden
                  />
                )}
                <h3 className={`text-h5 font-bold text-white ${featured ? "mt-2" : ""}`}>{tier.title}</h3>
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                  className="mt-6 text-3xl font-black text-[#61DAFB]"
                >
                  {tier.price}
                </motion.p>
                <p className="mt-3 text-sm text-white/55">{tier.experience}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
