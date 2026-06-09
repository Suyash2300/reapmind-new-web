"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { swiftHireConfig } from "@/lib/swift-hire-config";

export function SwiftHireProcess() {
  const { process } = swiftHireConfig;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pathProgress = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);

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

        <div ref={ref} className="relative mx-auto max-w-4xl">
          <svg className="absolute left-1/2 top-0 hidden h-full w-4 -translate-x-1/2 md:block" viewBox="0 0 4 400" preserveAspectRatio="none" aria-hidden>
            <path d="M2 0 V400" stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
            <motion.path
              d="M2 0 V400"
              stroke="#F05138"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: pathProgress }}
            />
          </svg>

          <ol className="space-y-8 md:space-y-12">
            {process.steps.map((step, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: isRight ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`relative flex md:w-[46%] ${isRight ? "md:ml-auto" : "md:mr-auto"}`}
                >
                  <span
                    className="absolute top-6 hidden h-4 w-4 rounded-full bg-[#F05138] shadow-[0_0_20px_rgba(240,81,56,0.6)] md:block"
                    style={isRight ? { left: "calc(-8% - 8px)" } : { right: "calc(-8% - 8px)" }}
                    aria-hidden
                  />
                  <div className="w-full rounded-2xl border border-white/10 bg-black/50 p-6 md:p-7">
                    <span className="text-xs font-black uppercase tracking-widest text-[#F05138]">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-h5 font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
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
