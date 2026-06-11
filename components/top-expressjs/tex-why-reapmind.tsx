"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

export function TexWhyReapmind() {
  const { whyReapmind } = topExpressjsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const cardRotate = useTransform(scrollYProgress, [0, 1], [4, -4]);

  return (
    <section ref={ref} className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tex-why-reapmind-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tex-why-reapmind-heading" className="text-h3 font-bold text-white sm:text-h2">
          {whyReapmind.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {whyReapmind.intro}
        </BlurFadeIn>

        <motion.div
          style={reducedMotion ? undefined : { rotateY: cardRotate, transformPerspective: 1000 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyReapmind.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={reducedMotion ? false : { opacity: 0, y: 36, x: i % 3 === 1 ? 20 : i % 3 === 2 ? -20 : 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6"
            >
              <h3 className="text-base font-bold text-[#22d3ee] sm:text-lg">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
