"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

export function TexTechStack() {
  const { techStack } = topExpressjsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0c0f1a] py-14 md:py-20" aria-labelledby="tex-tech-heading">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        animate={reducedMotion ? undefined : { backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: "radial-gradient(circle at 30% 20%, #22d3ee22, transparent 40%), radial-gradient(circle at 70% 80%, #a78bfa22, transparent 40%)",
          backgroundSize: "200% 200%",
        }}
        aria-hidden
      />

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="tex-tech-heading" className="text-h3 font-bold text-white sm:text-h2">
          {techStack.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {techStack.intro}
        </BlurFadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="grid gap-3 sm:grid-cols-2">
            {techStack.categories.map((cat, ci) => (
              <motion.div
                key={`${cat.name}-${ci}`}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.04 }}
                whileHover={reducedMotion ? undefined : { y: -3, borderColor: "rgba(34,211,238,0.5)" }}
                className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md"
              >
                <h3 className="text-base font-bold text-[#a78bfa]">{cat.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="rounded-md bg-[#22d3ee]/15 px-3 py-1.5 text-sm font-semibold text-white/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 40, rotate: 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[1024/599] overflow-hidden rounded-2xl border border-[#22d3ee]/25"
          >
            <Image src={techStack.illustration} alt="Technology stack" fill className="object-contain p-2" sizes="480px" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
