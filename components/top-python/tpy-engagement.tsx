"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyEngagement() {
  const { engagement } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const model = engagement.models[active];

  return (
    <section className="border-y border-[#3776AB]/20 bg-black py-14 md:py-20" aria-labelledby="tpy-engagement-heading">
      <div className="container-app">
        <BlurFadeIn as="h3" id="tpy-engagement-heading" className="text-h3 font-bold text-white sm:text-h2">
          {engagement.title}
        </BlurFadeIn>

        <div className="mt-8 flex flex-wrap gap-2">
          {engagement.models.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
                active === i
                  ? "border-[#FFD43B] bg-[#FFD43B]/15 text-[#FFD43B]"
                  : "border-white/15 text-white/70 hover:border-[#3776AB]/50"
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={model.id}
            initial={reducedMotion ? false : { opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.45 }}
            className="mt-10 grid items-center gap-8 lg:grid-cols-2"
          >
            <motion.div
              initial={reducedMotion ? false : { scale: 0.95 }}
              animate={{ scale: 1 }}
              className="relative aspect-square max-w-lg overflow-hidden rounded-3xl border border-[#3776AB]/30"
            >
              <Image src={model.image} alt={model.title} fill className="object-cover" sizes="512px" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#3776AB]">{model.tagline}</p>
              <p className="mt-4 text-para text-white/70">{model.intro}</p>
              <ol className="mt-6 space-y-4">
                {model.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                    <span className="font-mono text-xs font-bold text-[#FFD43B]">Step {i + 1}</span>
                    <p className="text-sm text-white/65">{step}</p>
                  </li>
                ))}
              </ol>
              <Link
                href="/contact-us#free-consultation"
                className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#3776AB] px-8 text-sm font-semibold text-white hover:bg-[#2d5f8f]"
              >
                {model.cta}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
