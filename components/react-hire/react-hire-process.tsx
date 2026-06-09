"use client";

import { motion } from "framer-motion";
import { reactHireConfig } from "@/lib/react-hire-config";

export function ReactHireProcess() {
  const { process } = reactHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{process.title}</h2>
          <p className="mt-6 text-para text-white/65">{process.subtitle}</p>
        </motion.div>

        <ol className="relative mx-auto max-w-3xl space-y-0">
          {process.steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`relative flex w-full py-8 ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`w-[88%] rounded-2xl border border-white/10 bg-black/60 p-6 sm:w-[72%] ${
                    isLeft ? "mr-auto border-l-4 border-l-[#61DAFB]" : "ml-auto border-r-4 border-r-[#61DAFB]"
                  }`}
                >
                  <span className="text-xs font-black uppercase tracking-widest text-[#61DAFB]">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-h5 font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
                </div>
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.15, duration: 0.4 }}
                  className="absolute left-1/2 top-0 -z-10 h-full w-px origin-top -translate-x-1/2 bg-white/10 last:hidden"
                  aria-hidden
                />
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
