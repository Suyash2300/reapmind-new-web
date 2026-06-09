"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { startupConfig } from "@/lib/startup-config";

export function SuMazePartner() {
  const { mazePartner } = startupConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="su-maze-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="su-maze-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {mazePartner.title}
          </h2>
          <p className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">
            {mazePartner.intro}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-5 lg:items-stretch">
          <FadeIn delay={0.06}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated sm:aspect-[5/6] lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={mazePartner.promoImage.src}
                alt={mazePartner.promoImage.alt}
                fill
                quality={92}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                aria-hidden
              />
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {mazePartner.items.map((item, i) => (
              <FadeIn key={item.title} delay={0.08 + i * 0.05}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6"
                >
                  <h3 className="text-subtitle font-bold text-white">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 sm:text-para">
                    {item.description}
                  </p>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.15} className="mt-8 text-center lg:mt-10">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.45)] transition-colors hover:bg-primary-hover"
          >
            {mazePartner.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
