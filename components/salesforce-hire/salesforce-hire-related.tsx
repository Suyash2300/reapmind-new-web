"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

export function SalesforceHireRelated() {
  const { relatedHire } = salesforceHireConfig;

  return (
    <section className="section-app bg-black py-24">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.12,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              className="group flex min-h-[240px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="mb-4 h-1 rounded-full bg-[#00A1E0]"
              />
              <h3 className="text-h5 font-bold text-white">{card.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">{card.description}</p>
              <Link
                href={card.href}
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#00A1E0]"
              >
                <span>{relatedHire.ctaLabel}</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  aria-hidden
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
