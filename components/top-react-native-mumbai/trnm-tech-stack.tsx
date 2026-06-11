"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

export function TrnmTechStack() {
  const { techStack } = topReactNativeMumbaiConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const layer1 = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const layer2 = useTransform(scrollYProgress, [0, 1], [0, 35]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-black py-14 md:py-20" aria-labelledby="trnm-tech-heading">
      <motion.div style={reducedMotion ? undefined : { y: layer1 }} className="pointer-events-none absolute right-10 top-20 h-56 w-56 rounded-full border border-[#61DAFB]/15 bg-[#61DAFB]/5 blur-sm" aria-hidden />
      <motion.div style={reducedMotion ? undefined : { y: layer2 }} className="pointer-events-none absolute bottom-24 left-6 h-40 w-40 rounded-3xl border border-white/5 bg-white/[0.03]" aria-hidden />
      <div className="container-app relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <BlurFadeIn as="h2" id="trnm-tech-heading" className="text-h3 font-bold text-white sm:text-h2">
            {techStack.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.06} className="mt-4 text-para text-white/65">
            {techStack.intro}
          </BlurFadeIn>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {techStack.categories.map((cat, ci) => (
              <motion.div
                key={`${cat.name}-${ci}`}
                initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.05 }}
                whileHover={reducedMotion ? undefined : { y: -4, borderColor: "rgba(97,218,251,0.45)" }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md"
              >
                <h3 className="text-base font-bold text-[#61DAFB]">{cat.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li key={`${ci}-${item}`} className="rounded-md border border-[#61DAFB]/30 px-3 py-1.5 text-sm font-semibold text-white/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          style={reducedMotion ? undefined : { y: imgY }}
          initial={reducedMotion ? false : { opacity: 0, rotate: 3 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[1024/599] overflow-hidden rounded-2xl border border-[#61DAFB]/25 bg-[#61DAFB]/5"
        >
          <Image src={techStack.illustration} alt="Technology stack" fill className="object-contain p-2" sizes="480px" />
        </motion.div>
      </div>
    </section>
  );
}
