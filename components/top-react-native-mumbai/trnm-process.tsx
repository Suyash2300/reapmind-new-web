"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

const PATH = "M 120 0 L 120 100 L 20 100 L 20 200 L 120 200 L 120 300 L 20 300 L 20 400 L 120 400 L 120 500 L 20 500 L 20 600";

export function TrnmProcess() {
  const { process } = topReactNativeMumbaiConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.4"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="bg-[#0b0f14] py-14 md:py-20" aria-labelledby="trnm-process-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="trnm-process-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {process.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.08} className="mt-4 max-w-3xl text-para text-white/65">
          {process.intro}
        </BlurFadeIn>

        <div className="relative mt-14 grid gap-8 lg:grid-cols-[140px_1fr]">
          <svg className="absolute left-0 top-0 hidden h-full w-32 lg:block" viewBox="0 0 140 600" preserveAspectRatio="none" aria-hidden>
            <motion.path d={PATH} fill="none" stroke="#61DAFB" strokeWidth="2" strokeOpacity="0.15" />
            <motion.path d={PATH} fill="none" stroke="#61DAFB" strokeWidth="3" style={{ pathLength: reducedMotion ? 1 : pathLength }} />
          </svg>
          <div className="hidden lg:block" aria-hidden />
          <ol className="space-y-3">
            {process.steps.map((step, i) => {
              const isActive = active === i;
              return (
                <motion.li
                  key={step.step}
                  initial={reducedMotion ? false : { opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onViewportEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  whileHover={reducedMotion ? undefined : { scale: 1.01 }}
                  className={`cursor-pointer rounded-2xl border p-5 transition-colors sm:p-6 ${isActive ? "border-[#61DAFB]/50 bg-[#61DAFB]/10 shadow-[0_0_40px_-10px_rgba(97,218,251,0.4)]" : "border-white/10 bg-white/[0.03]"}`}
                >
                  <div className="flex gap-4">
                    <motion.span
                      animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#61DAFB] font-bold text-[#61DAFB]"
                    >
                      {step.step}
                    </motion.span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <motion.ul
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        className="mt-3 space-y-1 overflow-hidden"
                      >
                        {step.items.map((item) => (
                          <li key={item} className="text-sm text-white/65">
                            — {item}
                          </li>
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
