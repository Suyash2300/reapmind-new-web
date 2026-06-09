"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";

export function JavascriptHireProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end center"] });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const { process } = javascriptHireConfig;

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

        <div ref={ref} className="relative mx-auto max-w-4xl">
          <div className="absolute left-0 right-0 top-8 h-1 rounded-full bg-white/10" aria-hidden>
            <motion.div style={{ width: progress }} className="h-full rounded-full bg-[#F7DF1E]" />
          </div>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative pt-14 text-center"
              >
                <motion.div
                  whileInView={{ boxShadow: ["0 0 0px #F7DF1E", "0 0 24px #F7DF1E", "0 0 0px #F7DF1E"] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 1.2 }}
                  className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#F7DF1E] bg-black text-lg font-black text-[#F7DF1E]"
                >
                  {i + 1}
                </motion.div>
                <h3 className="font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/60">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
