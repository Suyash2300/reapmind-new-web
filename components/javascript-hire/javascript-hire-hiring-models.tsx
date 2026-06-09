"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";

export function JavascriptHireHiringModels() {
  const { hiringModels } = javascriptHireConfig;
  const [active, setActive] = useState(0);

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{hiringModels.title}</h2>
          <p className="mt-6 text-para text-white/65">{hiringModels.subtitle}</p>
        </motion.div>

        <div className="mx-auto flex max-w-3xl flex-col gap-8 md:flex-row">
          <div className="flex flex-row gap-2 md:flex-col">
            {hiringModels.models.map((model, i) => (
              <button
                key={model.title}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-xl px-5 py-3 text-left text-sm font-bold transition-colors ${
                  active === i ? "bg-[#F7DF1E] text-black" : "bg-white/5 text-white/60"
                }`}
              >
                {model.title}
              </button>
            ))}
          </div>

          <div className="relative min-h-[200px] flex-1" style={{ perspective: 1000 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-[#F7DF1E]/30 bg-[#F7DF1E]/5 p-8"
              >
                <h3 className="text-xl font-bold text-white">{hiringModels.models[active].title}</h3>
                <p className="mt-4 text-sm text-white/60">
                  <span className="text-white/40">Hours Per Day </span>
                  {hiringModels.models[active].hoursPerDay}
                </p>
                <p className="mt-2 text-sm text-white/60">
                  <span className="text-white/40">Hours Commitment </span>
                  {hiringModels.models[active].commitment}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-center">
          <Link href="/contact-us" className="inline-flex min-h-[52px] items-center rounded-full bg-[#F7DF1E] px-8 font-bold text-black">
            {hiringModels.finalizeCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
