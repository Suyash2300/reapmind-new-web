"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmTechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-app bg-surface-dark py-32 border-t border-white/5">
      <div className="container-app">
        <GsapScrollReveal className="text-center mb-16">
          <h2 className="text-display font-black text-white">
            {enterpriseMobilityConfig.techStack.title}
          </h2>
        </GsapScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {enterpriseMobilityConfig.techStack.sections.map((section, index) => (
              <GsapScrollReveal key={section.title} delay={index * 0.05}>
                <button
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-6 py-5 rounded-2xl font-bold transition-all duration-300 border ${
                    activeTab === index 
                      ? "bg-primary text-black border-primary" 
                      : "bg-transparent text-white/50 border-transparent hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {section.title}
                </button>
              </GsapScrollReveal>
            ))}
          </div>

          {/* Tab Content Panel */}
          <div className="lg:w-2/3 bg-black/40 rounded-[2rem] border border-white/10 p-8 md:p-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-h3 font-black text-white mb-8 pb-6 border-b border-white/10">
                  {enterpriseMobilityConfig.techStack.sections[activeTab].title}
                </h3>
                
                <ul className="space-y-6">
                  {enterpriseMobilityConfig.techStack.sections[activeTab].items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                      <p className="text-para text-white/80 leading-relaxed font-medium">
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
