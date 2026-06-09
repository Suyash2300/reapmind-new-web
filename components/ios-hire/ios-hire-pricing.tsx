"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { iosHireConfig } from "@/lib/ios-hire-config";

export function IosHirePricing() {
  const { pricing } = iosHireConfig;
  const [flipped, setFlipped] = useState<number | null>(null);

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
          {pricing.tiers.map((tier, i) => {
            const isFlipped = flipped === i;
            return (
              <motion.button
                key={tier.title}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setFlipped(isFlipped ? null : i)}
                onMouseEnter={() => setFlipped(i)}
                onMouseLeave={() => setFlipped(null)}
                className="h-[280px] text-left [perspective:1000px]"
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full [transform-style:preserve-3d]"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-8 [backface-visibility:hidden]">
                    <h3 className="text-h5 font-bold text-white">{tier.title}</h3>
                    <p className="mt-6 text-3xl font-black text-primary">{tier.price}</p>
                    <p className="mt-3 text-sm text-white/55">{tier.experience}</p>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-primary/40 bg-primary/10 p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="text-h5 font-bold text-white">{tier.title}</h3>
                    <p className="mt-6 text-3xl font-black text-primary">{tier.price}</p>
                    <p className="mt-3 text-sm text-white/80">{tier.experience}</p>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
