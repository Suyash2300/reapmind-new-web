"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

export function TrnmWhyReapmind() {
  const { whyReapmind } = topReactNativeMumbaiConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);
  const lineHeight = useTransform(progress, (p) => `${p * 100}%`);

  return (
    <section ref={ref} className="border-t border-white/10 bg-[#0b0f14] py-14 md:py-20" aria-labelledby="trnm-why-reapmind-heading">
      <div className="container-app">
        <div className="mb-10 max-w-2xl">
          <BlurFadeIn as="h2" id="trnm-why-reapmind-heading" className="text-h3 font-bold text-white sm:text-h2">
            {whyReapmind.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.06} className="mt-4 text-para text-white/65">
            {whyReapmind.intro}
          </BlurFadeIn>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:left-1/2 md:block md:-translate-x-px" aria-hidden />
          <motion.div
            className="absolute left-4 top-0 hidden w-px bg-[#61DAFB] md:left-1/2 md:block md:-translate-x-px"
            style={reducedMotion ? { height: "100%" } : { height: lineHeight }}
            aria-hidden
          />
          <div className="space-y-6">
            {whyReapmind.items.map((item, i) => (
              <motion.article
                key={item.title}
                initial={reducedMotion ? false : { opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className={`relative md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8 md:text-right"}`}
              >
                <div className="absolute top-6 hidden h-3 w-3 rounded-full border-2 border-[#61DAFB] bg-[#0b0f14] md:block md:-translate-x-1/2" style={{ left: i % 2 === 0 ? "calc(100% + 2rem)" : "-2rem" }} aria-hidden />
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-lg sm:p-6">
                  <h3 className="font-bold text-[#61DAFB]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
