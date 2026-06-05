"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { productDesignConfig } from "@/lib/product-design-config";

export function PdTechStack() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="section-app bg-black py-32 overflow-hidden">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Technology</span>
          <h2 className="mt-4 text-display font-bold text-white leading-none max-w-3xl">
            {productDesignConfig.techStack.title}
          </h2>
          <p className="mt-6 text-para text-white/60 max-w-2xl">
            {productDesignConfig.techStack.description}
          </p>
        </GsapScrollReveal>

        <div className="mt-20 grid lg:grid-cols-3 gap-6">
          {/* Category tabs */}
          <div className="flex flex-col gap-3">
            {productDesignConfig.techStack.categories.map((cat, i) => (
              <GsapScrollReveal key={cat.name} start={`top ${82 + i * 3}%`}>
                <button
                  onClick={() => setActiveCategory(i)}
                  className={`w-full text-left px-6 py-5 rounded-2xl border font-bold transition-all duration-300 ${
                    activeCategory === i
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-white/3 border-white/5 text-white/60 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              </GsapScrollReveal>
            ))}
          </div>

          {/* Tools display */}
          <div className="lg:col-span-2 relative min-h-[300px] rounded-3xl border border-white/10 bg-white/3 p-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-8">
                  {productDesignConfig.techStack.categories[activeCategory].name}
                </p>
                <div className="flex flex-wrap gap-4">
                  {productDesignConfig.techStack.categories[activeCategory].tools.map((tool, i) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-lg font-bold text-white hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
