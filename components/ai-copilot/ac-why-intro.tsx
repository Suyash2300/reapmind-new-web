"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { aiCopilotConfig } from "@/lib/ai-copilot-config";

export function AcWhyIntro() {
  const { whyIntro } = aiCopilotConfig;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Why ReapMind
            </p>
            <h2 className="mt-3 text-h3 font-bold text-white sm:text-h2">{whyIntro.title}</h2>
            <p className="mt-5 text-para leading-relaxed text-white/65 sm:text-md">
              {whyIntro.description}
            </p>
            <Link
              href="/contact-us#free-consultation"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.45)] transition-colors hover:bg-primary-hover"
            >
              {whyIntro.cta}
            </Link>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="space-y-3">
              {whyIntro.pillars.map((pillar, i) => (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6"
                >
                  <span className="text-xs font-bold tabular-nums text-primary/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-subtitle font-bold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{pillar.description}</p>
                </motion.article>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
