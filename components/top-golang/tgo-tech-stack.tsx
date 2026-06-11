"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

export function TgoTechStack() {
  const { techStack } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-[#00ADD8]/15 bg-black py-14 md:py-20" aria-labelledby="tgo-tech-heading">
      <motion.div
        className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#00ADD8]/10 blur-[100px]"
        animate={reducedMotion ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        aria-hidden
      />
      <div className="container-app relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <BlurFadeIn as="h2" id="tgo-tech-heading" className="text-h3 font-bold text-white sm:text-h2">
            {techStack.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.06} className="mt-4 text-para text-white/65">
            {techStack.intro}
          </BlurFadeIn>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {techStack.categories.map((cat, ci) => (
              <motion.div
                key={`${cat.name}-${ci}`}
                initial={reducedMotion ? false : { opacity: 0, rotate: -2 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.04 }}
                whileHover={reducedMotion ? undefined : { rotate: 1, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md"
              >
                <h3 className="text-base font-bold text-[#00ADD8]">{cat.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="rounded-md border border-[#00ADD8]/30 px-3 py-1.5 text-sm font-semibold text-white/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[1024/599] overflow-hidden rounded-2xl border border-[#00ADD8]/25"
        >
          <Image src={techStack.illustration} alt="Technology stack" fill className="object-contain p-2" sizes="480px" />
        </motion.div>
      </div>
    </section>
  );
}
