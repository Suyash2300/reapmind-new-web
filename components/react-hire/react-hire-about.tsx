"use client";

import { motion } from "framer-motion";
import { reactHireConfig } from "@/lib/react-hire-config";

const allBullets = [
  ...reactHireConfig.about.bulletsLeft,
  ...reactHireConfig.about.bulletsRight,
];

export function ReactHireAbout() {
  const { about } = reactHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-[#61DAFB]">Why ReapMind</p>
            <h2 className="mt-4 text-h2 font-black text-white md:text-display">{about.title}</h2>
            <p className="mt-8 text-para leading-relaxed text-white/70">{about.description}</p>
          </motion.div>

          <ul className="space-y-0 divide-y divide-white/10 rounded-3xl border border-white/10 bg-black/40">
            {allBullets.map((text, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                whileInView={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.55, ease: "easeOut" }}
                className="flex items-center gap-4 px-6 py-5"
              >
                <motion.span
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 + 0.2, duration: 0.4 }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#61DAFB]/40 bg-[#61DAFB]/10 text-xs font-black text-[#61DAFB]"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <span className="text-sm font-medium text-white/90 sm:text-base">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
