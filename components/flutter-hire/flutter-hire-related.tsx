"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

export function FlutterHireRelated() {
  const { relatedHire } = flutterHireConfig;

  return (
    <section className="section-app bg-black py-24">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60, borderRadius: "4rem" }}
              whileInView={{ opacity: 1, y: 0, borderRadius: "1rem" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.45)" }}
              className="relative flex min-h-[240px] flex-col overflow-hidden border border-white/10 bg-white/5 p-8"
            >
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.45 }}
              />
              <h3 className="relative text-h5 font-bold text-white">{card.title}</h3>
              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-white/60">{card.description}</p>
              <Link href={card.href} className="relative mt-6 inline-flex items-center gap-2 font-bold text-primary">
                {relatedHire.ctaLabel}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.2 }}
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
