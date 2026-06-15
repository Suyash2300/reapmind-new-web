"use client";

import { motion } from "framer-motion";
import { omdConfig } from "@/lib/omd-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const icons = ["✨", "🤝", "✅"];

export function OmdWhyUs() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <motion.h2
          className="text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          whileInView={reduced ? undefined : { clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          {omdConfig.whyUs.title}
        </motion.h2>
        <p className="mt-5 max-w-4xl text-para leading-relaxed text-white/75">{omdConfig.whyUs.intro}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {omdConfig.whyUs.items.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-surface-elevated p-6"
              initial={reduced ? false : { opacity: 0, y: 26 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <motion.span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D9488]/20 text-xl"
                animate={reduced ? undefined : { scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={reduced ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              >
                {icons[index]}
              </motion.span>
              <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
