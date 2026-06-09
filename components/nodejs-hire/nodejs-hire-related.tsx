"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";

export function NodejsHireRelated() {
  const { relatedHire } = nodejsHireConfig;

  return (
    <section className="section-app bg-black py-24">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "4px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
                className="absolute top-0 left-0 right-0 bg-[#339933]"
                aria-hidden
              />
              <h3 className="text-h5 font-bold text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{card.description}</p>
              <Link href={card.href} className="mt-6 inline-block font-bold text-[#339933]">
                {relatedHire.ctaLabel} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
