"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { androidHireConfig } from "@/lib/android-hire-config";

export function AndroidHireRelated() {
  const { relatedHire } = androidHireConfig;

  return (
    <section className="section-app bg-black py-24">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, skewY: 6, y: 40 }}
              whileInView={{ opacity: 1, skewY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="flex min-h-[240px] flex-col rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-h5 font-bold text-white">{card.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">{card.description}</p>
              <Link href={card.href} className="mt-6 inline-flex items-center gap-2 font-bold text-primary">
                {relatedHire.ctaLabel} <span aria-hidden>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
