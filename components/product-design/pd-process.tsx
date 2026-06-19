"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { productDesignConfig } from "@/lib/product-design-config";

export function PdProcess() {
  return (
    <section className="section-app bg-surface-header py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Process</span>
          <h2 className="mt-4 text-display font-bold text-white leading-none">
            How we bring ideas to market
          </h2>
          <div className="mt-10">
            <Link
              href="/contact-us"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 font-bold text-white hover:scale-105 transition-transform"
            >
              {productDesignConfig.process.title}
            </Link>
          </div>
        </GsapScrollReveal>

        <div className="mt-24 relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {productDesignConfig.process.steps.map((step, i) => (
              <GsapScrollReveal key={step.title} start={`top ${80 + i * 4}%`}>
                <motion.div
                  className="group flex gap-8 items-start"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step dot */}
                  <div className="relative shrink-0 flex items-center justify-center w-14 h-14 rounded-full border-2 border-primary bg-black text-primary font-black text-sm z-10">
                    {step.step}
                    <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-h3 font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-para text-white/60 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </GsapScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
