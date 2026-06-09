"use client";

import { motion } from "framer-motion";
import { iosHireConfig } from "@/lib/ios-hire-config";

const allBullets = [
  ...iosHireConfig.about.bulletsLeft,
  ...iosHireConfig.about.bulletsRight,
];

export function IosHireAbout() {
  const { about } = iosHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{about.title}</h2>
          <p className="mt-8 text-para leading-relaxed text-white/70">{about.description}</p>
        </motion.div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allBullets.map((text, i) => (
            <motion.li
              key={text}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ x: 6, borderColor: "rgba(59,130,246,0.4)" }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 px-5 py-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-sm font-black text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-semibold text-white/85">{text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
