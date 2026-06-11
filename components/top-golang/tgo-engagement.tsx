"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

export function TgoEngagement() {
  const { engagement } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const model = engagement.models[active];

  return (
    <section className="bg-[#0a1014] py-14 md:py-20" aria-labelledby="tgo-engagement-heading">
      <div className="container-app">
        <BlurFadeIn as="h3" id="tgo-engagement-heading" className="text-h3 font-bold text-white sm:text-h2">
          {engagement.title}
        </BlurFadeIn>
        <div className="mt-8 flex flex-wrap gap-2">
          {engagement.models.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${active === i ? "bg-[#00ADD8] text-[#0a1014]" : "border border-white/15 text-white/70"}`}
            >
              {m.title}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={model.id}
            initial={reducedMotion ? false : { opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.45 }}
            className="mt-10 grid items-center gap-8 lg:grid-cols-2"
          >
            <div className="relative aspect-square max-w-lg overflow-hidden rounded-3xl border border-[#00ADD8]/25">
              <Image src={model.image} alt={model.title} fill className="object-cover" sizes="512px" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#00ADD8]">{model.tagline}</p>
              <p className="mt-4 text-para text-white/70">{model.intro}</p>
              <ol className="mt-6 space-y-3">
                {model.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-white/65">
                    <span className="font-mono text-xs font-bold text-[#00ADD8]">0{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <Link href="/contact-us#free-consultation" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-[#00ADD8]/50 px-8 text-sm font-semibold text-[#00ADD8] hover:bg-[#00ADD8]/10">
                {model.cta}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
