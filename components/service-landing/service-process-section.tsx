"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type ServiceProcessSectionProps = {
  title: string;
  subtitle: string;
  intro?: string;
  steps: readonly ProcessStep[] | ProcessStep[];
};

export function ServiceProcessSection({
  title,
  subtitle,
  intro,
  steps,
}: ServiceProcessSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="section-app bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
    >
      <div className="container-app">
        <GsapScrollReveal className="mb-10 max-w-4xl lg:mb-14">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            {title}
          </span>
          <h2 className="text-h2 font-black leading-tight text-white sm:text-display">
            {subtitle}
          </h2>
          {intro ? (
            <p className="mt-4 text-para leading-relaxed text-white/60">{intro}</p>
          ) : null}
        </GsapScrollReveal>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-[39px] top-0 hidden w-[2px] -translate-x-1/2 bg-white/10 md:left-1/2 md:block" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute bottom-0 left-[39px] top-0 hidden w-[2px] -translate-x-1/2 bg-primary md:left-1/2 md:block"
          />

          <div className="space-y-10 md:space-y-16 lg:space-y-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.step}
                  className="group relative flex flex-col items-center md:flex-row md:justify-between"
                >
                  <div className="absolute left-0 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-black transition-colors duration-500 group-hover:border-primary group-hover:bg-primary/10 md:left-1/2 md:h-20 md:w-20">
                    <span className="text-lg font-black text-white transition-colors group-hover:text-primary md:text-xl">
                      {step.step}
                    </span>
                  </div>

                  <div
                    className={`w-full pl-20 md:w-[45%] md:pl-0 ${
                      isEven ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16"
                    }`}
                  >
                    <GsapScrollReveal start="top 80%">
                      <motion.div
                        className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors duration-500 hover:border-primary/30 sm:p-8"
                        whileHover={{ y: -8, scale: 1.02 }}
                      >
                        <h3 className="mb-3 text-h4 font-bold text-white transition-colors group-hover:text-primary">
                          {step.title}
                        </h3>
                        <p className="text-para leading-relaxed text-white/60">
                          {step.description}
                        </p>
                      </motion.div>
                    </GsapScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
