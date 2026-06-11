"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

export function TgoWhyReapmind() {
  const { whyReapmind } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-[#0a1014] py-14 md:py-20" aria-labelledby="tgo-why-reapmind-heading">
      <div className="container-app">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_2px_minmax(0,1.2fr)]">
          <div className="lg:sticky lg:top-24">
            <BlurFadeIn as="h2" id="tgo-why-reapmind-heading" className="text-h3 font-bold text-white sm:text-h2">
              {whyReapmind.title}
            </BlurFadeIn>
            <BlurFadeIn delay={0.06} className="mt-4 text-para text-white/65">
              {whyReapmind.intro}
            </BlurFadeIn>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-x-0 top-0 h-full w-0.5 bg-white/10" />
            <motion.div className="absolute inset-x-0 top-0 w-0.5 bg-[#00ADD8]" style={reducedMotion ? { height: "100%" } : { height: lineHeight }} />
          </div>
          <div className="space-y-4">
            {whyReapmind.items.map((item, i) => (
              <motion.article
                key={item.title}
                initial={reducedMotion ? false : { opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
              >
                <h3 className="font-bold text-[#00ADD8]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
