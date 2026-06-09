"use client";

import { motion } from "framer-motion";
import { angularHireConfig } from "@/lib/angular-hire-config";

export function AngularHireAbout() {
  const { about } = angularHireConfig;
  const columns = [about.bulletsLeft, about.bulletsRight];

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{about.title}</h2>
          <p className="mt-8 text-para leading-relaxed text-white/70">{about.description}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {columns.map((column, col) => (
            <ul key={col} className="space-y-3">
              {column.map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, x: col === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: col * 0.1 + i * 0.09, type: "spring", stiffness: 100 }}
                  whileHover={{ x: col === 0 ? 6 : -6 }}
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-black/50 py-4 pl-5 pr-5"
                >
                  <span
                    className="absolute bottom-0 left-0 top-0 w-1 bg-primary"
                    aria-hidden
                  />
                  <span className="text-sm font-medium text-white/85">{text}</span>
                </motion.li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
