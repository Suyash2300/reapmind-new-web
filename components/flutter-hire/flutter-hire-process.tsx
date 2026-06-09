"use client";

import { motion } from "framer-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

export function FlutterHireProcess() {
  const { process } = flutterHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{process.title}</h2>
          <p className="mt-6 text-para text-white/65">{process.subtitle}</p>
        </motion.div>

        <ol className="mx-auto max-w-2xl space-y-4">
          {process.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "auto" }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: i * 0.12,
                height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                opacity: { delay: i * 0.12, duration: 0.4 },
              }}
              className="overflow-hidden"
            >
              <motion.div
                whileHover={{ x: 8 }}
                className="flex gap-5 rounded-2xl border border-white/10 bg-black/50 p-6"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.12, type: "spring", stiffness: 200 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-black text-primary"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <div>
                  <h3 className="text-h5 font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">{step.description}</p>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
