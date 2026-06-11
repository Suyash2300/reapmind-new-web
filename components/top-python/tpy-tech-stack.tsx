"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyTechStack() {
  const { techStack } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-14 md:py-20" aria-labelledby="tpy-tech-heading">
      <motion.div
        className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-[#3776AB]/15 blur-[120px]"
        animate={reducedMotion ? undefined : { y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[#FFD43B]/10 blur-[90px]"
        animate={reducedMotion ? undefined : { scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        aria-hidden
      />

      <div className="container-app relative">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[1024/599] overflow-hidden rounded-2xl border border-[#3776AB]/30 lg:sticky lg:top-24"
          >
            <Image src={techStack.illustration} alt="Python tech stack" fill className="object-contain p-2" sizes="480px" />
          </motion.div>

          <div>
            <BlurFadeIn as="h2" id="tpy-tech-heading" className="text-h3 font-bold text-white sm:text-h2">
              {techStack.title}
            </BlurFadeIn>
            <BlurFadeIn delay={0.06} className="mt-4 text-para text-white/65">
              {techStack.intro}
            </BlurFadeIn>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {techStack.categories.map((cat, ci) => (
                <motion.div
                  key={`${cat.name}-${ci}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.04 }}
                  whileHover={reducedMotion ? undefined : { rotate: ci % 2 === 0 ? 1 : -1 }}
                  className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md"
                >
                  <h3 className="text-base font-bold text-[#FFD43B]">{cat.name}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <li key={item} className="rounded-lg border border-[#3776AB]/40 bg-[#3776AB]/10 px-3 py-1.5 text-sm font-semibold text-white/90">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
