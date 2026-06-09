"use client";

import { motion } from "framer-motion";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";

const bullets = [
  ...kotlinHireConfig.about.bulletsLeft,
  ...kotlinHireConfig.about.bulletsRight,
];

export function KotlinHireAbout() {
  const { about } = kotlinHireConfig;

  return (
    <section className="section-app relative overflow-hidden bg-surface-dark py-32">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#7F52FF]/15 to-transparent"
        aria-hidden
      />

      <div className="container-app relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h2 font-black text-white md:text-display">{about.title}</h2>
            <p className="mt-6 text-para leading-relaxed text-white/70">{about.description}</p>
          </motion.div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {bullets.map((text, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/50 p-4"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.1, type: "spring" }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#7F52FF] text-xs font-black text-white"
                >
                  {i + 1}
                </motion.span>
                <span className="text-sm font-medium text-white/85">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
