"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { remoteContractConfig } from "@/lib/remote-contract-config";

export function RcHireCards() {
  const { hireCards } = remoteContractConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="rc-hire-cards-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="rc-hire-cards-heading" className="sr-only">
            {hireCards.title}
          </h2>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3">
          {hireCards.items.map((item, i) => (
            <FadeIn key={item.id} delay={0.06 + i * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col rounded-[1.5rem] border border-border-strong bg-surface-elevated p-6 sm:p-7"
              >
                <h3 className="text-h4 font-bold text-white">{item.title}</h3>
                <p className="mt-3 flex-1 text-para leading-relaxed text-white/65">{item.description}</p>
                <Link
                  href="/contact-us#free-consultation"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  {item.cta}
                </Link>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
