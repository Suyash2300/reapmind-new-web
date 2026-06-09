"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";

export function KotlinHireRelated() {
  const { relatedHire } = kotlinHireConfig;

  return (
    <section className="section-app bg-black py-24">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="absolute bottom-0 left-0 h-1 bg-[#7F52FF]"
                aria-hidden
              />
              <h3 className="text-h5 font-bold text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{card.description}</p>
              <Link href={card.href} className="mt-6 inline-block font-bold text-[#7F52FF]">
                {relatedHire.ctaLabel} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
