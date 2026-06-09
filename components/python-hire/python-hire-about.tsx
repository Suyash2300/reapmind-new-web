"use client";

import { motion } from "framer-motion";
import { pythonHireConfig } from "@/lib/python-hire-config";

const bullets = [
  ...pythonHireConfig.about.bulletsLeft,
  ...pythonHireConfig.about.bulletsRight,
];

export function PythonHireAbout() {
  const { about } = pythonHireConfig;

  return (
    <section className="section-app relative overflow-hidden bg-surface-dark py-32">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[#3776AB]/5"
        aria-hidden
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 1 }}
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[#FFD43B]/5"
        aria-hidden
      />

      <div className="container-app relative z-10">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 font-black text-white md:text-display"
          >
            {about.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-para leading-relaxed text-white/70"
          >
            {about.description}
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {bullets.map((b) => (
              <motion.li
                key={b}
                variants={{ hidden: { opacity: 0, scale: 0.8, y: 10 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                whileHover={{ scale: 1.04, borderColor: "rgba(55,118,171,0.5)" }}
                className="rounded-full border border-white/15 bg-black/40 px-5 py-2.5 text-sm text-white/75"
              >
                {b}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
