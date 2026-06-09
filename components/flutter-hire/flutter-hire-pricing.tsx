"use client";

import { motion } from "framer-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

function PricingCard({
  tier,
  index,
}: {
  tier: (typeof flutterHireConfig.pricing.tiers)[number];
  index: number;
}) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, x: fromLeft ? -100 : 100, rotate: fromLeft ? -4 : 4 }}
      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 text-center"
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="24"
          fill="none"
          stroke="rgba(59,130,246,0.5)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.15, duration: 1 }}
        />
      </svg>
      <h3 className="relative text-h5 font-bold text-white">{tier.title}</h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + index * 0.12, type: "spring" }}
        className="relative mt-6 text-3xl font-black text-primary"
      >
        {tier.price}
      </motion.p>
      <p className="relative mt-3 text-sm text-white/55">{tier.experience}</p>
    </motion.article>
  );
}

export function FlutterHirePricing() {
  const { pricing } = flutterHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{pricing.title}</h2>
          <p className="mt-6 text-para text-white/65">{pricing.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.tiers.map((tier, i) => (
            <PricingCard key={tier.title} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
