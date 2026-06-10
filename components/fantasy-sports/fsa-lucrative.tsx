"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { fantasySportsConfig } from "@/lib/fantasy-sports-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FsaLucrative() {
  const { lucrative } = fantasySportsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="fsa-lucrative-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="fsa-lucrative-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {lucrative.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {lucrative.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: smoothEase }}
              whileHover={reducedMotion ? undefined : { y: -6 }}
              className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-black/55 p-6 sm:p-7"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-xl"
                style={{ backgroundColor: `${item.accent}22` }}
                aria-hidden
              >
                {item.icon}
              </div>
              <h3 className="mt-4 text-subtitle font-bold text-white">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60 sm:text-para">{item.description}</p>
              <div
                className="mt-5 h-1 w-12 rounded-full"
                style={{ backgroundColor: item.accent }}
                aria-hidden
              />
            </motion.article>
          ))}
        </div>

        <BlurFadeIn delay={0.15} className="mt-10 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {lucrative.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
