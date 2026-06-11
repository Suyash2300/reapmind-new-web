"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

const PATH_D = "M 20 0 Q 40 300 20 600 T 20 1200";

export function TpyProcess() {
  const { process } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="border-y border-[#3776AB]/20 bg-black py-14 md:py-20" aria-labelledby="tpy-process-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tpy-process-heading" className="text-h3 font-bold text-white sm:text-h2">
          {process.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.08} className="mt-4 max-w-3xl text-para text-white/65">
          {process.intro}
        </BlurFadeIn>

        <div className="relative mt-12">
          <svg className="absolute left-4 top-0 hidden h-full w-10 overflow-visible lg:block" aria-hidden>
            <motion.path d={PATH_D} fill="none" stroke="#3776AB" strokeWidth="2" strokeOpacity="0.2" />
            <motion.path
              d={PATH_D}
              fill="none"
              stroke="#FFD43B"
              strokeWidth="2.5"
              style={{ pathLength: reducedMotion ? 1 : pathLength }}
            />
          </svg>

          <ol className="space-y-5 lg:pl-16">
            {process.steps.map((step, i) => {
              const isActive = active === i;
              return (
                <motion.li
                  key={step.step}
                  initial={reducedMotion ? false : { opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  onViewportEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all sm:p-6 ${
                    isActive ? "border-[#FFD43B]/50 bg-[#3776AB]/15 shadow-[0_0_40px_-10px_rgba(55,118,171,0.5)]" : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3776AB] text-sm font-bold text-white">
                      {step.step}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <motion.ul
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        className="mt-3 space-y-1 overflow-hidden"
                      >
                        {step.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-white/65">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FFD43B]" />
                            {item}
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
