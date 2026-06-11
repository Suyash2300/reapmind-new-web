"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

const PATH = "M 40 0 L 40 120 L 200 120 L 200 280 L 40 280 L 40 440 L 200 440 L 200 600 L 40 600 L 40 760";

export function TgoProcess() {
  const { process } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="border-y border-[#00ADD8]/15 bg-[#0a1014] py-14 md:py-20" aria-labelledby="tgo-process-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tgo-process-heading" className="text-h3 font-bold text-white sm:text-h2">
          {process.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.08} className="mt-4 max-w-3xl text-para text-white/65">
          {process.intro}
        </BlurFadeIn>

        <div className="relative mt-12 lg:pl-8">
          <svg className="absolute left-0 top-0 hidden h-full w-48 lg:block" viewBox="0 0 240 760" preserveAspectRatio="none" aria-hidden>
            <motion.path d={PATH} fill="none" stroke="#00ADD8" strokeWidth="2" strokeOpacity="0.2" />
            <motion.path d={PATH} fill="none" stroke="#00ADD8" strokeWidth="3" style={{ pathLength: reducedMotion ? 1 : pathLength }} />
          </svg>
          <ol className="space-y-4 lg:ml-24">
            {process.steps.map((step, i) => {
              const isActive = active === i;
              return (
                <motion.li
                  key={step.step}
                  initial={reducedMotion ? false : { opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onViewportEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`cursor-pointer rounded-2xl border p-5 sm:p-6 ${isActive ? "border-[#00ADD8]/50 bg-[#00ADD8]/10" : "border-white/10 bg-white/5"}`}
                >
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#00ADD8] font-bold text-[#00ADD8]">{step.step}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <motion.ul initial={false} animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }} className="mt-3 space-y-1 overflow-hidden">
                        {step.items.map((item) => (
                          <li key={item} className="text-sm text-white/65">— {item}</li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
