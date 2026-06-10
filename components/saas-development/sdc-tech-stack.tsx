"use client";

import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { saasDevelopmentConfig } from "@/lib/saas-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function SdcTechStack() {
  const { techStack } = saasDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="sdc-tech-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="sdc-tech-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {techStack.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techStack.categories.map((cat, i) => (
            <motion.article
              key={cat.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: smoothEase }}
              className={`rounded-2xl border border-white/10 bg-surface-elevated/80 p-5 sm:p-6 ${
                cat.id === "devops" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <h3 className="text-subtitle font-bold text-white">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{cat.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2.5 py-1 text-[11px] font-semibold"
                    style={{ borderColor: `${cat.accent}44`, color: cat.accent, backgroundColor: `${cat.accent}12` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <BlurFadeIn as="p" delay={0.1} className="mt-8 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={techStack.intro} delay={0.12} />
        </BlurFadeIn>
      </div>
    </section>
  );
}
