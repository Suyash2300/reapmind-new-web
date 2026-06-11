"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { mobileBankingConfig } from "@/lib/mobile-banking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function MbaTechStack() {
  const { techStack } = mobileBankingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const categories = techStack.categories;
  const category = categories[active];

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="mba-tech-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="mba-tech-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {techStack.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={techStack.intro} delay={0.08} />
        </BlurFadeIn>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Banking app tech stack">
          {categories.map((cat, i) => (
            <HydrationButton
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`min-h-11 rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                i === active ? "border-white/25 text-white" : "border-white/10 bg-black/40 text-white/55 hover:border-white/20"
              }`}
              style={i === active ? { borderColor: `${cat.accent}66`, backgroundColor: `${cat.accent}18` } : undefined}
            >
              {cat.title}
            </HydrationButton>
          ))}
        </div>

        <motion.div
          key={category.id}
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: smoothEase }}
          className="mt-8 grid gap-4 sm:grid-cols-2"
          role="tabpanel"
        >
          {category.items.map((item, i) => (
            <article
              key={item.name}
              className="rounded-2xl border border-white/10 bg-surface-elevated/80 p-5 sm:p-6"
              style={{ borderColor: i === 0 ? `${category.accent}33` : undefined }}
            >
              <h3 className="text-subtitle font-bold" style={{ color: category.accent }}>
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
            </article>
          ))}
        </motion.div>

        <BlurFadeIn as="p" delay={0.1} className="mt-8 max-w-4xl text-para leading-relaxed text-white/65">
          {techStack.closing}
        </BlurFadeIn>

        <BlurFadeIn delay={0.14} className="mt-8 text-center">
          <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
            <Link
              href="/contact-us#free-consultation"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {techStack.cta}
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </section>
  );
}
