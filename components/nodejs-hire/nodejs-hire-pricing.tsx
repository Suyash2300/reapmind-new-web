"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";

export function NodejsHirePricing() {
  const { pricing } = nodejsHireConfig;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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

        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {pricing.tiers.map((tier, i) => (
            <motion.article
              key={tier.title}
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100, damping: 14 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
                className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-[#339933]/0 group-hover:border-[#339933]/40"
                aria-hidden
              />
              <h3 className="text-h5 font-bold text-white">{tier.title}</h3>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.35 + i * 0.12, type: "spring" }}
                className="mt-6 text-3xl font-black text-[#339933]"
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
