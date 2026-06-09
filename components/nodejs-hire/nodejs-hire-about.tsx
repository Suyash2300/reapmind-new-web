"use client";

import { motion } from "framer-motion";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";

const bullets = [
  ...nodejsHireConfig.about.bulletsLeft,
  ...nodejsHireConfig.about.bulletsRight,
];

export function NodejsHireAbout() {
  const { about } = nodejsHireConfig;

  return (
    <section className="section-app relative overflow-hidden bg-surface-dark py-32">
      <motion.div
        initial={{ clipPath: "inset(0 50% 0 50%)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0%)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#339933]/10 via-transparent to-[#339933]/10"
        aria-hidden
      />

      <div className="container-app relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-h2 font-black text-white md:text-display">{about.title}</h2>
            <p className="mt-6 text-para leading-relaxed text-white/70">{about.description}</p>
          </motion.div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {bullets.map((text, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ x: 4, borderColor: "rgba(51,153,51,0.4)" }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/50 p-4 transition-colors"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#339933] text-xs font-black text-white">
                  ✓
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
