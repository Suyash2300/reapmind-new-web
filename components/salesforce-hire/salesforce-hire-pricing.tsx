"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

function ShimmerCard({
  tier,
  index,
}: {
  tier: (typeof salesforceHireConfig.pricing.tiers)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const priceChars = tier.price.split("");

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 text-center"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={inView ? { x: ["-100%", "200%"] } : {}}
        transition={{ delay: 0.5 + index * 0.2, duration: 1.2, ease: "easeInOut" }}
        aria-hidden
      />

      <h3 className="text-h5 font-bold text-white">{tier.title}</h3>
      <p className="mt-6 text-3xl font-black text-[#00A1E0]" aria-label={tier.price}>
        {priceChars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.1 + i * 0.04, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 + index * 0.1 }}
        className="mt-3 text-sm text-white/55"
      >
        {tier.experience}
      </motion.p>
    </motion.article>
  );
}

export function SalesforceHirePricing() {
  const { pricing } = salesforceHireConfig;

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
            <ShimmerCard key={tier.title} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
