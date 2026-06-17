"use client";

import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { erpConfig } from "@/lib/erp-config";

export function ErpCloud() {
  return (
    <section className="section-app bg-surface-dark py-32 relative overflow-hidden">
      {/* Decorative abstract shapes */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="container-app relative z-10 text-center">
        <GsapScrollReveal className="max-w-4xl mx-auto">
          <h2 className="text-display font-black mb-8 text-primary-foreground">
            {erpConfig.cloudMigration.title}
          </h2>
          <p className="text-h5 leading-relaxed font-medium text-white/70">
            {erpConfig.cloudMigration.description}
          </p>
        </GsapScrollReveal>
      </div>
    </section>
  );
}
