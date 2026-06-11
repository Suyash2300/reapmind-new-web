"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

export function TnjTechStack() {
  const { techStack } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tnj-tech-heading">
      <motion.div
        className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#339933]/10 blur-[100px]"
        animate={reducedMotion ? undefined : { x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="container-app relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <BlurFadeIn as="h2" id="tnj-tech-heading" className="text-h3 font-bold text-white sm:text-h2">
            {techStack.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.06} className="mt-4 text-para text-white/65">
            {techStack.intro}
          </BlurFadeIn>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {techStack.categories.map((cat, ci) => (
              <motion.div
                key={cat.name}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.05, duration: 0.45 }}
                whileHover={reducedMotion ? undefined : { y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
              >
                <h3 className="text-base font-bold text-[#339933]">{cat.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 text-sm font-semibold text-white/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, rotate: -4, y: 30 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[1024/599] overflow-hidden rounded-2xl border border-white/10"
        >
          <Image src={techStack.illustration} alt="Node.js tech stack" fill className="object-contain p-2" sizes="(max-width:1024px) 100vw, 480px" />
        </motion.div>
      </div>
    </section>
  );
}
