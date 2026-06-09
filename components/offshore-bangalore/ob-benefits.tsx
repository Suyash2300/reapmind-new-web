"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { offshoreBangaloreConfig } from "@/lib/offshore-bangalore-config";

export function ObBenefits() {
  const { benefits } = offshoreBangaloreConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="ob-benefits-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="ob-benefits-heading" className="text-h3 font-bold text-white sm:text-h2">
            {benefits.title}
          </h2>
          <p className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">{benefits.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, i) => (
            <FadeIn key={item.id} delay={0.06 + i * 0.04}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="h-full rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6"
              >
                <span className="text-xs font-bold tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-subtitle font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-para">
                  {item.description}
                </p>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-8 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            {benefits.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
