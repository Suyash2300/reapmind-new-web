"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { swiftHireConfig } from "@/lib/swift-hire-config";

export function SwiftHireRelated() {
  const { relatedHire } = swiftHireConfig;

  return (
    <section className="section-app bg-black py-24">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="absolute inset-x-0 top-0 h-1 origin-left bg-[#F05138]"
                aria-hidden
              />
              <h3 className="text-h5 font-bold text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{card.description}</p>
              <Link href={card.href} className="mt-6 inline-block font-bold text-[#F05138]">
                {relatedHire.ctaLabel} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
