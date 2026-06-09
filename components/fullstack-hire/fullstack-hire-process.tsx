"use client";

import { motion } from "framer-motion";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";

export function FullstackHireProcess() {
  const { process } = fullstackHireConfig;

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

        <div className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ol className="flex min-w-max snap-x snap-mandatory gap-4 px-2">
            {process.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="w-[min(80vw,280px)] shrink-0 snap-center rounded-2xl border border-white/10 bg-black/50 p-6"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, type: "spring" }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#6366F1] text-sm font-black text-white"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <h3 className="mt-4 font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
