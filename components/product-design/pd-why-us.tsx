"use client";

import Link from "next/link";
import Image from "next/image";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { productDesignConfig } from "@/lib/product-design-config";
import { motion } from "framer-motion";

export function PdWhyUs() {
  return (
    <section className="section-app bg-surface-dark py-32 overflow-hidden">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Why ReapMind</span>
          <h2 className="mt-4 text-display font-bold text-white leading-none max-w-3xl">
            {productDesignConfig.whyUs.title}
          </h2>
        </GsapScrollReveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productDesignConfig.whyUs.reasons.map((reason, i) => (
            <GsapScrollReveal key={reason.title} start={`top ${84 + i * 3}%`}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col gap-6 rounded-3xl border border-white/5 bg-black/50 p-10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 overflow-hidden"
              >
                {/* Ghost number */}
                <span className="absolute -top-6 -right-4 text-[7rem] font-black text-white/4 select-none group-hover:text-primary/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="h-px w-12 bg-primary mb-8 group-hover:w-24 transition-all duration-500" />
                  <h3 className="text-h3 font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="mt-4 text-para text-white/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>

        <GsapScrollReveal className="mt-16 text-center">
          <Link
            href="/contact-us"
            className="inline-flex h-16 items-center justify-center rounded-full bg-primary px-14 text-xl font-bold text-white hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] transition-all"
          >
            {productDesignConfig.whyUs.cta}
          </Link>
        </GsapScrollReveal>
      </div>
    </section>
  );
}
