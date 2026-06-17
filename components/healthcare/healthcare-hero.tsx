"use client";

import { motion } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";
import Link from "next/link";

export function HealthcareHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-dark pt-32 pb-20">
      {/* Morphing background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#10b981]/20 blur-[100px]"
        />
      </div>

      <div className="container-app relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center rounded-full border border-border-strong bg-surface-elevated/50 px-4 py-1.5 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-white/80">Premium Healthcare Solutions</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display font-black text-primary-foreground mb-6"
          >
            {healthcareConfig.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-h5 text-white/70 font-medium leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            {healthcareConfig.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact-us"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-lg font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--primary),0.4)]"
            >
              {healthcareConfig.hero.cta}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative floating layers */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] w-32 h-32 border border-white/5 rounded-2xl backdrop-blur-md bg-white/5 hidden md:block"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [-12, -8, -12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[15%] w-48 h-48 border border-white/5 rounded-full backdrop-blur-md bg-white/5 hidden md:block"
        />
      </div>
    </section>
  );
}
