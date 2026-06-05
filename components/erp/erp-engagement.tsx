"use client";

import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { erpConfig } from "@/lib/erp-config";

export function ErpEngagement() {
  return (
    <section className="section-app bg-black py-32 relative">
      <div className="container-app">
        <GsapScrollReveal className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-display font-black text-white leading-tight mb-6">
            {erpConfig.engagementModels.title}
          </h2>
          <p className="text-h6 text-white/70 leading-relaxed font-normal">
            {erpConfig.engagementModels.description}
          </p>
        </GsapScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {erpConfig.engagementModels.models.map((model, i) => (
            <GsapScrollReveal key={model.title} start={`top ${85 + (i % 2) * 10}%`}>
              <motion.div
                className="group h-full rounded-3xl border border-white/10 bg-white/5 p-10 hover:border-primary/50 transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-black border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-500">
                    <span className="text-2xl font-black text-white group-hover:text-black">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-h4 font-bold text-white group-hover:text-primary transition-colors">
                    {model.title}
                  </h3>
                </div>
                <p className="text-para text-white/70 leading-relaxed">
                  {model.description}
                </p>
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
