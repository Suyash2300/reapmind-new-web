"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { pythonHireConfig } from "@/lib/python-hire-config";

export function PythonHireProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);
  const { process } = pythonHireConfig;

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

        <div ref={ref} className="relative mx-auto max-w-2xl">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-white/10 md:left-1/2 md:-translate-x-px" aria-hidden>
            <motion.div style={{ height: lineHeight }} className="w-full bg-[#3776AB]" />
          </div>
          <ol className="space-y-12">
            {process.steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`pl-14 md:pl-0 ${isLeft ? "" : ""}`}>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{step.description}</p>
                    </div>
                  </div>
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FFD43B] bg-black text-sm font-black text-[#FFD43B] md:left-1/2 md:-translate-x-1/2"
                  >
                    {i + 1}
                  </motion.div>
                  <div className="hidden flex-1 md:block" aria-hidden />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
