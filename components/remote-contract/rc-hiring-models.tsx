"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { remoteContractConfig } from "@/lib/remote-contract-config";

export function RcHiringModels() {
  const { hiringModels } = remoteContractConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="rc-hiring-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="rc-hiring-heading" className="text-h3 font-bold text-white sm:text-h2">
            {hiringModels.title}
          </h2>
          <p className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">{hiringModels.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {hiringModels.items.map((item, i) => (
            <FadeIn key={item.id} delay={0.06 + i * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col rounded-[1.5rem] border border-border-strong bg-surface-elevated p-6 sm:p-7"
              >
                <h3 className="text-h4 font-bold text-white">{item.title}</h3>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold uppercase tracking-wider text-white/45">Hours Per Day</dt>
                    <dd className="mt-1 text-lg font-bold text-primary">{item.hoursPerDay}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wider text-white/45">Hours Commitment</dt>
                    <dd className="mt-1 text-lg font-bold text-white">{item.commitment}</dd>
                  </div>
                </dl>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-8 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            {hiringModels.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
