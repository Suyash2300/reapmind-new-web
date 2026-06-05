"use client";

import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { productDesignConfig } from "@/lib/product-design-config";
import { motion } from "framer-motion";

export function PdChallenges() {
  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Challenges</span>
          <h2 className="mt-4 text-display font-bold text-white leading-none max-w-3xl">
            {productDesignConfig.challenges.title}
          </h2>
        </GsapScrollReveal>

        <div className="mt-20 space-y-0 divide-y divide-white/10">
          {productDesignConfig.challenges.items.map((item, i) => (
            <GsapScrollReveal key={item.title} start={`top ${82 + i * 3}%`}>
              <motion.div
                className="group flex flex-col md:flex-row md:items-start gap-6 py-10 cursor-default"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <span className="shrink-0 text-[4rem] font-black text-white/10 group-hover:text-primary/20 transition-colors leading-none w-24 text-right hidden md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-h3 font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-para text-white/60 max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0 hidden md:flex items-center text-white/20 group-hover:text-primary transition-colors">
                  <svg className="w-8 h-8 translate-x-0 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
