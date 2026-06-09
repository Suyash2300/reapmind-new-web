"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";

export function FullstackHireRelated() {
  const { relatedHire } = fullstackHireConfig;

  return (
    <section className="section-app bg-black py-24">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <motion.svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 1.2, ease: "easeInOut" }}
                aria-hidden
              >
                <motion.rect
                  x="1"
                  y="1"
                  width="calc(100% - 2px)"
                  height="calc(100% - 2px)"
                  rx="16"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </motion.svg>
              <h3 className="relative text-h5 font-bold text-white">{card.title}</h3>
              <p className="relative mt-4 text-sm leading-relaxed text-white/60">{card.description}</p>
              <Link href={card.href} className="relative mt-6 inline-block font-bold text-[#818CF8]">
                {relatedHire.ctaLabel} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
