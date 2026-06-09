"use client";

import { motion } from "framer-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

const leftBullets = flutterHireConfig.about.bulletsLeft;
const rightBullets = flutterHireConfig.about.bulletsRight;

export function FlutterHireAbout() {
  const { about } = flutterHireConfig;

  return (
    <section className="section-app overflow-hidden bg-surface-dark py-32">
      <div className="container-app">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-h2 font-black text-white md:text-display">{about.title}</h2>
            <p className="mt-8 text-para leading-relaxed text-white/70">{about.description}</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2">
            {[leftBullets, rightBullets].map((column, col) => (
              <ul key={col} className="space-y-3">
                {column.map((text, i) => (
                  <motion.li
                    key={text}
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{
                      delay: col * 0.15 + i * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    whileHover={{ x: col === 0 ? 6 : -6 }}
                    className="relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-black/50 px-5 py-4"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.4, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: col * 0.15 + i * 0.1 + 0.1, duration: 0.4 }}
                      className="absolute inset-0 bg-primary/5"
                      aria-hidden
                    />
                    <span className="relative h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="relative text-sm font-medium text-white/85">{text}</span>
                  </motion.li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
