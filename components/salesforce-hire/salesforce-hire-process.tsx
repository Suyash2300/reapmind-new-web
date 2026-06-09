"use client";

import { motion } from "framer-motion";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

export function SalesforceHireProcess() {
  const { process } = salesforceHireConfig;
  const stepCount = process.steps.length;

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

        <div className="relative mx-auto max-w-3xl">
          <svg
            viewBox={`0 0 400 ${stepCount * 120}`}
            className="absolute left-1/2 top-0 hidden h-full w-24 -translate-x-1/2 md:block"
            aria-hidden
          >
            <motion.path
              d={process.steps
                .map((_, i) => {
                  const y = 40 + i * 120;
                  const x = i % 2 === 0 ? 80 : 320;
                  const nextY = 40 + (i + 1) * 120;
                  const nextX = (i + 1) % 2 === 0 ? 80 : 320;
                  if (i === 0) return `M ${x} ${y}`;
                  return ` Q 200 ${y - 60} ${x} ${y}${i < stepCount - 1 ? ` L ${nextX} ${nextY}` : ""}`;
                })
                .join(" ")}
              fill="none"
              stroke="url(#sfProcessGrad)"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="sfProcessGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00A1E0" />
                <stop offset="100%" stopColor="rgb(59,130,246)" />
              </linearGradient>
            </defs>
          </svg>

          <ol className="space-y-10 md:space-y-16">
            {process.steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className={`flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  <div
                    className={`w-full max-w-md rounded-2xl border border-white/10 bg-black/60 p-6 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A1E0]/20 text-sm font-black text-[#00A1E0]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-h5 font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/60 sm:text-base">{step.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
