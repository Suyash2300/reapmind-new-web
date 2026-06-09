"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { remoteContractConfig } from "@/lib/remote-contract-config";

export function RcTalentIntro() {
  const { talentIntro } = remoteContractConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="rc-talent-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="rc-talent-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {talentIntro.title}
          </h2>
          <p className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">{talentIntro.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {talentIntro.bullets.map((bullet, i) => (
            <FadeIn key={bullet} delay={0.06 + i * 0.04}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex h-full items-start gap-3 rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  ✓
                </span>
                <p className="text-para font-semibold text-white/85">{bullet}</p>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {talentIntro.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
