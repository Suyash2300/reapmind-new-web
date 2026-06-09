"use client";

import { motion } from "framer-motion";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";

export function KotlinHireProcess() {
  const { process } = kotlinHireConfig;

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
          <ol className="flex min-w-max gap-0 px-2">
            {process.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative flex w-[min(80vw,280px)] shrink-0 flex-col items-center px-4"
              >
                {i < process.steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                    className="absolute left-[calc(50%+28px)] top-7 h-0.5 w-[calc(100%-56px)] origin-left bg-[#7F52FF]/40"
                    aria-hidden
                  />
                )}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7F52FF] text-lg font-black text-white shadow-[0_0_24px_rgba(127,82,255,0.4)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
                <div className="mt-6 text-center">
                  <h3 className="font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
