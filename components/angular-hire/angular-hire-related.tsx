"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { angularHireConfig } from "@/lib/angular-hire-config";

export function AngularHireRelated() {
  const { relatedHire } = angularHireConfig;

  return (
    <section className="section-app bg-black py-24">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group flex min-h-[240px] flex-col border-l-4 border-primary/60 bg-white/5 p-8 pl-6"
            >
              <h3 className="text-h5 font-bold text-white">{card.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">{card.description}</p>
              <Link href={card.href} className="mt-6 inline-flex items-center gap-2 font-bold text-primary">
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                >
                  {relatedHire.ctaLabel} →
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
