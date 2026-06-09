"use client";

import { motion } from "framer-motion";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";

const bullets = [
  ...javascriptHireConfig.about.bulletsLeft,
  ...javascriptHireConfig.about.bulletsRight,
];

export function JavascriptHireAbout() {
  const { about } = javascriptHireConfig;

  return (
    <section className="section-app relative overflow-hidden bg-surface-dark py-32">
      <motion.div
        initial={{ rotate: -45, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 bg-[#F7DF1E]/5"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        aria-hidden
      />

      <div className="container-app relative z-10">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-h2 font-black text-white md:text-display"
          >
            {about.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-8 text-para leading-relaxed text-white/70"
          >
            {about.description}
          </motion.p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {bullets.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/40 p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F7DF1E] text-sm font-black text-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-white/75">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
