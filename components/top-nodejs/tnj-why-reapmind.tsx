"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

export function TnjWhyReapmind() {
  const { whyReapmind } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-[#050a06] py-14 md:py-20" aria-labelledby="tnj-why-reapmind-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tnj-why-reapmind-heading" className="text-h3 font-bold text-white sm:text-h2">
          {whyReapmind.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {whyReapmind.intro}
        </BlurFadeIn>

        <div className="relative mt-10 hidden h-1 overflow-hidden rounded-full bg-white/10 md:block">
          <motion.div className="h-full bg-[#339933]" style={reducedMotion ? { width: "100%" } : { width: progressWidth }} />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyReapmind.items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={reducedMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.65 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-6"
            >
              <h3 className="text-base font-bold text-[#339933] sm:text-lg">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
