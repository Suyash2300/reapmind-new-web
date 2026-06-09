"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { iosHireConfig } from "@/lib/ios-hire-config";

export function IosHireRelated() {
  const { relatedHire } = iosHireConfig;

  return (
    <section className="section-app bg-black py-24">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative flex min-h-[240px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_60%)]" />
              </div>
              <h3 className="relative text-h5 font-bold text-white">{card.title}</h3>
              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-white/60">{card.description}</p>
              <Link href={card.href} className="relative mt-6 inline-flex items-center gap-2 font-bold text-primary">
                {relatedHire.ctaLabel} <span aria-hidden>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
