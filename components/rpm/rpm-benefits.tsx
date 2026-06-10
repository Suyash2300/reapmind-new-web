"use client";

import { motion } from "framer-motion";
import { rpmConfig } from "@/lib/rpm-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RpmBenefits() {
  const reduced = usePrefersReducedMotion();
  const { benefits } = rpmConfig;

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <motion.h2
          className="text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {benefits.title}
        </motion.h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {benefits.items.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-surface-elevated p-6"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
