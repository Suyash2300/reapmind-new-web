"use client";

import { motion } from "framer-motion";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";

export function NodejsHireProcess() {
  const { process } = nodejsHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{process.title}</h2>
          <p className="mt-6 text-para text-white/65">{process.subtitle}</p>
        </motion.div>

        <ol className="relative mx-auto max-w-2xl">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-[#339933]/30 sm:left-[27px]"
            aria-hidden
          />

          {process.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.15, type: "spring", stiffness: 300 }}
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#339933] bg-black text-sm font-black text-[#339933] sm:h-14 sm:w-14"
              >
                {String(i + 1).padStart(2, "0")}
              </motion.div>
              <div className="pt-1">
                <h3 className="text-h5 font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
