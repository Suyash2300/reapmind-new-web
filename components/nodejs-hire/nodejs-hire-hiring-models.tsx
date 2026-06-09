"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function NodejsHireHiringModels() {
  const { hiringModels } = nodejsHireConfig;
  const reduced = usePrefersReducedMotion();
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{hiringModels.title}</h2>
          <p className="mt-6 text-para text-white/65">{hiringModels.subtitle}</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {hiringModels.models.map((model, i) => {
            const isFlipped = flipped === i;
            return (
              <motion.button
                key={model.title}
                type="button"
                onClick={() => setFlipped(isFlipped ? null : i)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative h-[280px] w-full [perspective:1200px]"
                aria-pressed={isFlipped}
              >
                <motion.div
                  animate={{ rotateY: isFlipped && !reduced ? 180 : 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full w-full [transform-style:preserve-3d]"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-[#339933]/30 bg-gradient-to-br from-[#339933]/15 to-black p-8 [backface-visibility:hidden]">
                    <h3 className="text-h4 font-bold text-[#339933]">{model.title}</h3>
                    <p className="mt-4 text-sm text-white/50">Tap to view details</p>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center rounded-3xl border border-white/15 bg-zinc-950 p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="text-h5 font-bold text-white">{model.title}</h3>
                    <dl className="mt-6 space-y-4 text-left">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">Hours Per Day</dt>
                        <dd className="mt-1 text-xl font-bold text-[#339933]">{model.hoursPerDay}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">Hours Commitment</dt>
                        <dd className="mt-1 text-xl font-bold text-white">{model.commitment}</dd>
                      </div>
                    </dl>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#339933] px-10 font-bold text-white"
          >
            {hiringModels.finalizeCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
