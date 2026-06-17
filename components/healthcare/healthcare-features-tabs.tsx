"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";

export function HealthcareFeaturesTabs() {
  const { title, tabs } = healthcareConfig.features;
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-surface-dark py-24 relative overflow-hidden border-t border-white/5">
      <div className="container-app">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-h2 font-bold text-primary-foreground"
          >
            {title}
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Tabs Navigation (Left) */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center justify-between p-6 rounded-2xl text-left transition-colors duration-300 min-w-[240px] lg:min-w-0 flex-shrink-0 border border-transparent ${
                  activeTab === tab.id ? "text-primary-foreground" : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-surface-elevated/80 border border-white/10 rounded-2xl backdrop-blur-sm shadow-[0_0_30px_rgba(var(--primary),0.15)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 text-xl font-bold">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 w-2 h-2 rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content (Right) */}
          <div className="w-full lg:w-2/3 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {activeTabData?.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-surface-elevated/30 border border-white/5 p-8 rounded-3xl backdrop-blur-sm hover:bg-surface-elevated/50 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="mb-6 text-primary/50 group-hover:text-primary transition-colors duration-300">
                       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">{feature.desc}</p>
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
