"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

export function TexEngagement() {
  const { engagement } = topExpressjsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const model = engagement.models[active];

  return (
    <section className="border-y border-[#22d3ee]/15 bg-black py-14 md:py-20" aria-labelledby="tex-engagement-heading">
      <div className="container-app">
        <BlurFadeIn as="h3" id="tex-engagement-heading" className="text-h3 font-bold text-white sm:text-h2">
          {engagement.title}
        </BlurFadeIn>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {engagement.models.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
                active === i ? "border-[#22d3ee] bg-[#22d3ee]/15 text-[#22d3ee]" : "border-white/15 text-white/70"
              }`}
            >
              {m.title}
            </button>
          ))}
        </div>

        <motion.div
          key={model.id}
          initial={reducedMotion ? false : { opacity: 0, rotateX: 12 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformStyle: "preserve-3d", perspective: 900 }}
          className="mt-10 grid items-center gap-8 lg:grid-cols-2"
        >
          <div className="relative aspect-square max-w-lg overflow-hidden rounded-3xl border border-[#a78bfa]/30">
            <Image src={model.image} alt={model.title} fill className="object-cover" sizes="512px" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#a78bfa]">{model.tagline}</p>
            <p className="mt-4 text-para text-white/70">{model.intro}</p>
            <ol className="mt-6 space-y-3">
              {model.steps.map((step, i) => (
                <motion.li
                  key={step}
                  initial={reducedMotion ? false : { opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/65"
                >
                  <span className="font-bold text-[#22d3ee]">Step {i + 1}: </span>
                  {step}
                </motion.li>
              ))}
            </ol>
            <Link
              href="/contact-us#free-consultation"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-[#a78bfa]/50 px-8 text-sm font-semibold text-[#a78bfa] hover:bg-[#a78bfa]/10"
            >
              {model.cta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
