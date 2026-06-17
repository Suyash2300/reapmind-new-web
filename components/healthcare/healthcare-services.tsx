"use client";

import { motion } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";

export function HealthcareServices() {
  const { title, description, items } = healthcareConfig.services;
  
  return (
    <section className="relative bg-surface-dark py-24 overflow-hidden border-t border-white/5">
      <div className="container-app">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-h2 font-bold text-primary-foreground mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70"
          >
            {description}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          {/* Pinned Left Side - Visual indicator (Mobile hidden/simplified) */}
          <div className="hidden lg:block lg:w-1/3 sticky top-32">
            <div className="relative border-l-2 border-white/10 pl-8 space-y-12 py-4">
              {items.map((item, index) => (
                <ServiceIndexIndicator key={index} index={index} title={item.title} />
              ))}
            </div>
          </div>

          {/* Scrolling Right Side */}
          <div className="w-full lg:w-2/3 space-y-24">
            {items.map((item, index) => (
              <ServiceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceIndexIndicator({ index, title }: { index: number, title: string }) {
  return (
    <div className="relative group">
      <motion.div 
        className="absolute -left-[35px] top-1 h-4 w-4 rounded-full bg-surface-dark border-2 border-primary origin-center"
        initial={{ scale: 0, opacity: 0.3 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ margin: "-50% 0px -50% 0px" }}
        transition={{ duration: 0.3 }}
      />
      <motion.h3 
        className="text-xl font-bold transition-colors duration-300"
        initial={{ color: "rgba(255,255,255,0.3)" }}
        whileInView={{ color: "rgba(255,255,255,1)" }}
        viewport={{ margin: "-50% 0px -50% 0px" }}
        transition={{ duration: 0.3 }}
      >
        0{index + 1}. {title}
      </motion.h3>
    </div>
  );
}

function ServiceCard({ item, index }: { item: { title: string, description: string }, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-surface-elevated/30 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm group hover:border-primary/30 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="flex flex-col md:flex-row md:items-center mb-6 gap-6 relative z-10">
        <div className="h-14 w-14 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <h3 className="text-h3 font-bold text-primary-foreground group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>
      </div>
      <p className="text-lg text-white/70 leading-relaxed relative z-10">
        {item.description}
      </p>
    </motion.div>
  );
}
