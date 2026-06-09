"use client";

import { motion } from "framer-motion";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";

const bullets = [
  ...fullstackHireConfig.about.bulletsLeft,
  ...fullstackHireConfig.about.bulletsRight,
];

export function FullstackHireAbout() {
  const { about } = fullstackHireConfig;

  return (
    <section className="section-app relative overflow-hidden bg-surface-dark py-32">
      <motion.div
        initial={{ x: "-100%", skewX: -8 }}
        whileInView={{ x: "100%", skewX: -8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#6366F1]/12 to-transparent"
        aria-hidden
      />

      <div className="container-app relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -48, skewY: 4 }}
            whileInView={{ opacity: 1, x: 0, skewY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-h2 font-black text-white md:text-display">{about.title}</h2>
            <p className="mt-6 text-para leading-relaxed text-white/70">{about.description}</p>
          </motion.div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {bullets.map((text, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, x: 50, skewX: 8 }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.55 }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/50 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#6366F1] text-xs font-black text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-white/85">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
