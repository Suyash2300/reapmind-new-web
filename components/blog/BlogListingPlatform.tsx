"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Particles } from "../ui/particles";
import { letterVariants, splitTextVariants, staggerContainerVariants, fadeUpVariants } from "./blog-animations";

interface BlogListingPlatformProps {
  children: ReactNode;
  heroHeading: ReactNode;
  heroText: ReactNode;
  statsContent: ReactNode;
}

export function BlogListingPlatform({
  children,
  heroHeading,
  heroText,
  statsContent,
}: BlogListingPlatformProps) {
  // Simple helper to split text into characters for the animation
  const SplitText = ({ text }: { text: string }) => {
    return (
      <span className="inline-block">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : "normal" }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <div className="relative overflow-hidden bg-black selection:bg-primary/30 selection:text-white">
      {/* Dynamic Animated Mesh Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(var(--primary-rgb),0.15),transparent)]" 
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" 
        />
      </div>

      <Particles className="absolute inset-0 z-0 opacity-30" quantity={100} color="#ffffff" ease={100} staticity={30} />

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-app relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-5xl text-center"
          >
            <motion.div variants={fadeUpVariants} className="mb-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl shadow-2xl shadow-primary/10">
              <span className="mr-3 flex h-2.5 w-2.5 relative">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">ReapMind Journal</span>
            </motion.div>
            
            <motion.div variants={splitTextVariants} className="mb-8 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05]">
              {heroHeading}
            </motion.div>
            
            <motion.p variants={fadeUpVariants} className="mx-auto mb-14 max-w-2xl text-lg text-white/60 sm:text-xl font-light leading-relaxed">
              {heroText}
            </motion.p>

            <motion.div variants={fadeUpVariants} className="mx-auto max-w-3xl border-t border-white/5 pt-10">
              {statsContent}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 container-app mx-auto px-4 sm:px-6 lg:px-8 pb-24"
      >
        {children}
      </motion.section>
    </div>
  );
}

export function BlogGridClient({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {/* We need to map over children to apply the item variant, or expect children to be motion.divs */}
      {/* For simplicity, we assume the children map returns motion.divs or we wrap them here */}
      {Array.isArray(children) ? children.map((child, i) => (
        <motion.div key={i} variants={{
          hidden: { opacity: 0, y: 40, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 25, stiffness: 100 } }
        }}>
          {child}
        </motion.div>
      )) : children}
    </motion.div>
  );
}

