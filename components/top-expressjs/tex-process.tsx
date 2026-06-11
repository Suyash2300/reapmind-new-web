"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

const PATH = "M 30 0 L 30 80 Q 30 120 70 120 L 200 120 Q 240 120 240 160 L 240 280 Q 240 320 200 320 L 70 320 Q 30 320 30 360 L 30 480 Q 30 520 70 520 L 200 520 Q 240 520 240 560 L 240 680 Q 240 720 200 720 L 70 720 Q 30 720 30 760 L 30 880";

export function TexProcess() {
  const { process } = topExpressjsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="border-y border-white/10 bg-black py-14 md:py-20" aria-labelledby="tex-process-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tex-process-heading" className="text-h3 font-bold text-white sm:text-h2">
          {process.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.08} className="mt-4 max-w-3xl text-para text-white/65">
          {process.intro}
        </BlurFadeIn>

        <div className="relative mt-12 lg:grid lg:grid-cols-[120px_1fr] lg:gap-8">
          <svg className="absolute left-0 top-0 hidden h-full w-[120px] lg:block" viewBox="0 0 270 880" preserveAspectRatio="none" aria-hidden>
            <motion.path d={PATH} fill="none" stroke="#a78bfa" strokeWidth="2" strokeOpacity="0.2" />
            <motion.path d={PATH} fill="none" stroke="#22d3ee" strokeWidth="2.5" style={{ pathLength: reducedMotion ? 1 : pathLength }} />
          </svg>

          <ol className="space-y-4 lg:col-start-2">
            {process.steps.map((step, i) => {
              const isActive = active === i;
              return (
                <motion.li
                  key={step.step}
                  initial={reducedMotion ? false : { opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onViewportEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-colors sm:p-6 ${
                    isActive ? "border-[#22d3ee]/50 bg-[#22d3ee]/10" : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#22d3ee] to-[#a78bfa] text-sm font-bold text-[#0c0f1a]">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <motion.ul
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        className="mt-3 space-y-1 overflow-hidden"
                      >
                        {step.items.map((item) => (
                          <li key={item} className="text-sm text-white/65">• {item}</li>
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
