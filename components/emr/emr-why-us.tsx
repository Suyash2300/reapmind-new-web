"use client";

import { motion } from "framer-motion";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const icons = ["🚀", "🤝", "✅"];

export function EmrWhyUs() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <motion.h2
          className="text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, skewY: 4 }}
          whileInView={reduced ? undefined : { opacity: 1, skewY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          {emrConfig.whyUs.title}
        </motion.h2>
        <p className="mt-5 max-w-4xl text-para leading-relaxed text-white/75">{emrConfig.whyUs.intro}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {emrConfig.whyUs.items.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-surface-elevated p-6"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
            >
              <motion.span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/20 text-xl"
                animate={reduced ? undefined : { rotate: [0, 8, -8, 0] }}
                transition={reduced ? undefined : { duration: 4, repeat: Infinity, delay: index * 0.5 }}
              >
                {icons[index]}
              </motion.span>
              <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          className="mt-10 max-w-4xl text-para text-white/65"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {emrConfig.whyUs.closing}
        </motion.p>
      </div>
    </section>
  );
}
