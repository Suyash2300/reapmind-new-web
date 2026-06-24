"use client";

import { motion } from "framer-motion";
import { androidHireConfig } from "@/lib/android-hire-config";

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function AndroidHireAbout() {
  const { about } = androidHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.h2 variants={item} className="text-h2 font-black text-white md:text-display">
              {about.title}
            </motion.h2>
            <motion.p variants={item} className="mt-8 text-para leading-relaxed text-white/70">
              {about.description}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
            className="grid gap-8 sm:grid-cols-2"
          >
            {[about.bulletsLeft, about.bulletsRight].map((group, gi) => (
              <ul key={gi} className="space-y-3">
                {group.map((text, i) => (
                  <motion.li
                    key={text}
                    variants={item}
                    className="flex gap-3 rounded-xl border border-white/8 bg-black/40 px-4 py-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                      {gi * 3 + i + 1}
                    </span>
                    <span className="text-sm font-medium text-white/80">{text}</span>
                  </motion.li>
                ))}
              </ul>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
