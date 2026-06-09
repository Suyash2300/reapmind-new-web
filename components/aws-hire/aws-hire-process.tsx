"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { awsHireConfig } from "@/lib/aws-hire-config";

const AWS_ORANGE = "#FF9900";

export function AwsHireProcess() {
  const { process } = awsHireConfig;
  const [active, setActive] = useState(0);
  const steps = process.steps;

  return (
    <section className="section-app overflow-hidden bg-surface-dark py-32">
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

        <div className="mx-auto max-w-5xl">
          {/* Desktop: horizontal metro track */}
          <div className="relative hidden md:block">
            <svg
              className="pointer-events-none absolute left-[12%] right-[12%] top-7 h-2 w-[76%]"
              viewBox="0 0 100 4"
              preserveAspectRatio="none"
              aria-hidden
            >
              <line x1="0" y1="2" x2="100" y2="2" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
              <motion.line
                x1="0"
                y1="2"
                x2="100"
                y2="2"
                stroke={AWS_ORANGE}
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ strokeDasharray: "100 100", strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </svg>

            <ol className="relative grid grid-cols-4 gap-4">
              {steps.map((step, i) => {
                const isActive = active === i;
                return (
                  <motion.li
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="flex flex-col items-center text-center"
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="group flex flex-col items-center"
                      aria-pressed={isActive}
                    >
                      <motion.span
                        animate={{
                          scale: isActive ? 1.15 : 1,
                          boxShadow: isActive
                            ? `0 0 0 6px rgba(255,153,0,0.2), 0 0 24px rgba(255,153,0,0.35)`
                            : "0 0 0 0 rgba(255,153,0,0)",
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-2 text-sm font-black"
                        style={{
                          borderColor: isActive ? AWS_ORANGE : "rgba(255,255,255,0.2)",
                          backgroundColor: isActive ? AWS_ORANGE : "rgba(0,0,0,0.8)",
                          color: isActive ? "#000" : "#fff",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.span>
                      <h3
                        className={`mt-5 text-sm font-bold transition-colors ${
                          isActive ? "text-[#FF9900]" : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </button>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          {/* Mobile: stacked cards with slide-in */}
          <ol className="space-y-4 md:hidden">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-black/50 p-5"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-black"
                    style={{ backgroundColor: AWS_ORANGE }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* Desktop detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, rotateX: -8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -12, rotateX: 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 800 }}
              className="mt-12 hidden rounded-3xl border border-[#FF9900]/25 bg-gradient-to-br from-[#FF9900]/10 via-black to-black p-8 md:block md:p-10"
            >
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FF9900]">
                Step {String(active + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-h3 font-bold text-white">{steps[active].title}</h3>
              <p className="mt-4 max-w-3xl text-para leading-relaxed text-white/70">
                {steps[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
