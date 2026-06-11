"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

export function TrnmEngagement() {
  const { engagement } = topReactNativeMumbaiConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const model = engagement.models[active];
  return (
    <section className="border-y border-[#61DAFB]/10 bg-[#0b0f14] py-14 md:py-20" aria-labelledby="trnm-engagement-heading">
      <div className="container-app">
        <BlurFadeIn as="h3" id="trnm-engagement-heading" className="text-h3 font-bold text-white sm:text-h2">
          {engagement.title}
        </BlurFadeIn>
        <div className="relative mt-8 flex flex-wrap gap-2">
          {engagement.models.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActive(i)}
              className={`relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${active === i ? "text-[#0b0f14]" : "text-white/70 hover:text-white"}`}
            >
              {active === i && (
                <motion.span
                  layoutId="trnm-engagement-pill"
                  className="absolute inset-0 rounded-full bg-[#61DAFB]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{m.title}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={model.id}
            initial={reducedMotion ? false : { opacity: 0, filter: "blur(8px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(6px)", y: -20 }}
            transition={{ duration: 0.45 }}
            className="mt-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <motion.div
              initial={reducedMotion ? false : { scale: 0.92, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              className="relative aspect-square max-w-lg overflow-hidden rounded-3xl border border-[#61DAFB]/25 shadow-[0_40px_80px_-30px_rgba(97,218,251,0.35)]"
            >
              <Image src={model.image} alt={model.title} fill className="object-cover" sizes="512px" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#61DAFB]">{model.tagline}</p>
              <p className="mt-4 text-para text-white/70">{model.intro}</p>
              <ol className="mt-6 space-y-3">
                {model.steps.map((step, i) => (
                  <motion.li
                    key={step}
                    initial={reducedMotion ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-3 text-sm text-white/65"
                  >
                    <span className="font-mono text-xs font-bold text-[#61DAFB]">0{i + 1}</span>
                    {step}
                  </motion.li>
                ))}
              </ol>
              <Link
                href="/contact-us#free-consultation"
                className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-[#61DAFB]/50 px-8 text-sm font-semibold text-[#61DAFB] hover:bg-[#61DAFB]/10"
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
