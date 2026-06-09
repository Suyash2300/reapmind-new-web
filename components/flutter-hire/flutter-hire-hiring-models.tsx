"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

export function FlutterHireHiringModels() {
  const { hiringModels } = flutterHireConfig;
  const [index, setIndex] = useState(0);
  const model = hiringModels.models[index];

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{hiringModels.title}</h2>
          <p className="mt-6 text-para text-white/65">{hiringModels.subtitle}</p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-10 flex justify-center gap-3">
            {hiringModels.models.map((m, i) => (
              <motion.button
                key={m.title}
                type="button"
                onClick={() => setIndex(i)}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: i === index ? 1.05 : 1,
                  backgroundColor: i === index ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.05)",
                }}
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-white"
              >
                {m.title}
              </motion.button>
            ))}
          </div>

          <div className="relative min-h-[220px]" style={{ perspective: 1000 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={model.title}
                initial={{ opacity: 0, rotateY: 90, x: 80 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: -90, x: -80 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/15 to-transparent p-10"
              >
                <h3 className="text-h3 font-bold text-primary">{model.title}</h3>
                <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-semibold text-white/55">Hours Per Day</dt>
                    <dd className="mt-2 text-xl font-bold text-white">{model.hoursPerDay}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-white/55">Hours Commitment</dt>
                    <dd className="mt-2 text-xl font-bold text-white">{model.commitment}</dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/contact-us"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-10 font-bold text-black"
            >
              {hiringModels.finalizeCta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
