"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HealthcareCTA() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-surface-dark group cursor-crosshair">
      {/* Dynamic Background that zooms on hover */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 md:opacity-30 mix-blend-luminosity"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Gradient overlays to blend into the section above/below */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface-dark via-surface-dark/60 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-surface-dark via-surface-dark/40 to-transparent" />
      
      {/* Color tint */}
      <div className="absolute inset-0 z-10 bg-primary/5 mix-blend-overlay" />

      <div className="container-app relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="overflow-hidden mb-6">
             <motion.h2 
               initial={{ y: "100%" }}
               whileInView={{ y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="text-[12vw] md:text-[9vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 select-none uppercase"
             >
               Let's Build.
             </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-medium"
          >
            Get a free discovery session and consulting to start your project today. We are ready to transform your ideas into reality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          >
            <Link
              href="/contact-us"
              className="inline-flex h-16 items-center justify-center rounded-full bg-primary px-10 text-xl font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-110 hover:shadow-[0_0_50px_rgba(var(--primary),0.6)] group/btn"
            >
              Start Your Project
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-3 h-6 w-6 transform group-hover/btn:translate-x-2 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
