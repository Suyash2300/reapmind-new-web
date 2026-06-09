"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { startupConfig } from "@/lib/startup-config";

export function SuScaling() {
  const { scaling } = startupConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="su-scaling-heading"
    >
      <div className="container-app">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            {scaling.title}
          </p>
          <h2 id="su-scaling-heading" className="mt-3 max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {scaling.subtitle}
          </h2>
          <p className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">{scaling.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
          <FadeIn delay={0.06}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border-strong sm:aspect-[5/4] lg:sticky lg:top-24">
              <Image
                src={scaling.image}
                alt="Startup scaling and growth analytics"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {scaling.items.map((item, i) => (
              <FadeIn key={item.id} delay={0.08 + i * 0.04}>
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
        </div>

        <FadeIn className="mt-8 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {scaling.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
