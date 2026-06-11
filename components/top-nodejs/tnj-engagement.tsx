"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

export function TnjEngagement() {
  const { engagement } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const model = engagement.models[active];

  return (
    <section className="bg-[#050a06] py-14 md:py-20" aria-labelledby="tnj-engagement-heading">
      <div className="container-app">
        <BlurFadeIn as="h3" id="tnj-engagement-heading" className="text-h3 font-bold text-white sm:text-h2">
          {engagement.title}
        </BlurFadeIn>

        <div className="mt-8 flex flex-wrap gap-3">
          {engagement.models.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === i
                  ? "border-[#339933] bg-[#339933]/15 text-[#339933]"
                  : "border-white/15 text-white/70 hover:border-white/30"
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>

        <motion.div
          key={model.id}
          initial={reducedMotion ? false : { opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid items-center gap-8 lg:grid-cols-2"
        >
          <div className="relative aspect-square max-w-lg overflow-hidden rounded-3xl border border-white/10">
            <Image src={model.image} alt={model.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 512px" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#339933]">{model.tagline}</p>
            <p className="mt-4 text-para text-white/70">{model.intro}</p>
            <ol className="mt-6 space-y-4">
              {model.steps.map((step, i) => (
                <motion.li
                  key={step}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex gap-3"
                >
                  <span className="text-xs font-bold text-[#339933]">Step {i + 1}</span>
                  <p className="text-sm text-white/65">{step}</p>
                </motion.li>
              ))}
            </ol>
            <Link
              href="/contact-us#free-consultation"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-[#339933]/50 bg-[#339933]/10 px-8 text-sm font-semibold text-white hover:bg-[#339933]/20"
            >
              {model.cta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
