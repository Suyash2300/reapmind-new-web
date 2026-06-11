"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

const PATH_D = "M 40 0 L 40 600";

export function TnjProcess() {
  const { process } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="bg-[#050a06] py-14 md:py-20" aria-labelledby="tnj-process-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tnj-process-heading" className="text-h3 font-bold text-white sm:text-h2">
          {process.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.08} className="mt-4 max-w-3xl text-para text-white/65">
          {process.intro}
        </BlurFadeIn>

        <div className="relative mt-12 grid gap-8 lg:grid-cols-[80px_1fr]">
          <div className="relative hidden lg:block">
            <svg className="absolute left-1/2 top-0 h-full w-20 -translate-x-1/2 overflow-visible" aria-hidden>
              <motion.path
                d={PATH_D}
                fill="none"
                stroke="#339933"
                strokeWidth="2"
                strokeOpacity="0.25"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d={PATH_D}
                fill="none"
                stroke="#339933"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: reducedMotion ? 1 : pathLength }}
              />
            </svg>
          </div>

          <ol className="space-y-6">
            {process.steps.map((step, i) => {
              const isActive = active === i;
              return (
                <motion.li
                  key={step.step}
                  initial={reducedMotion ? false : { opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  onViewportEnter={() => setActive(i)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-colors sm:p-6 ${
                    isActive ? "border-[#339933]/50 bg-[#339933]/10" : "border-white/10 bg-white/5"
                  }`}
                  onClick={() => setActive(i)}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#339933] text-sm font-bold text-[#339933]">
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
                          <li key={item} className="flex items-center gap-2 text-sm text-white/65">
                            <span className="h-1 w-1 rounded-full bg-[#339933]" />
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
