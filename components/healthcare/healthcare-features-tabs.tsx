"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";

const ease = [0.22, 1, 0.36, 1] as const;

export function HealthcareFeaturesTabs() {
  const { title, tabs } = healthcareConfig.features;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const words = title.split(" ");

  return (
    <section className="bg-surface-dark py-24 relative overflow-hidden border-t border-white/5">
      <div className="container-app">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2
            className="text-h2 font-bold text-primary-foreground"
            aria-label={title}
          >
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.28em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={headingInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.065, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Tabs Navigation (Left) */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center justify-between p-6 rounded-2xl text-left transition-colors duration-300 min-w-[240px] lg:min-w-0 flex-shrink-0 border border-transparent group overflow-hidden ${
                  activeTab === tab.id
                    ? "text-primary-foreground"
                    : "text-white/50 hover:text-white/90 hover:bg-white/5"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab-bg"
                    className="absolute inset-0 bg-surface-elevated/80 border border-white/10 rounded-2xl backdrop-blur-sm shadow-[0_0_30px_rgba(var(--primary),0.15)] z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Underline wipe on hover for inactive tabs */}
                {activeTab !== tab.id && (
                  <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-primary/40 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0" />
                )}

                <span className="relative z-10 text-xl font-bold">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="relative z-10 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Tab Content (Right) */}
          <div className="w-full lg:w-2/3 min-h-[400px] relative perspective-1000">
            <AnimatePresence mode="wait" custom={activeTab}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)", scale: 0.95 }}
                transition={{ duration: 0.4, ease }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 absolute inset-0"
              >
                {activeTabData?.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-surface-elevated/30 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:bg-surface-elevated/60 hover:border-primary/30 transition-all duration-300 group h-full"
                  >
                    <div className="mb-6 text-primary/50 group-hover:text-primary group-hover:scale-110 transition-all duration-300 origin-left inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary/90 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
