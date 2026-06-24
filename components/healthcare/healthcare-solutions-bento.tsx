"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";
import Link from "next/link";
import Image from "next/image";

export function HealthcareSolutionsBento() {
  const { title, description, categories } = healthcareConfig.solutions;
  
  return (
    <section className="relative bg-surface-dark py-24 overflow-hidden">
      <div className="container-app relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(350px,auto)]">
          {categories.map((category, index) => (
            <BentoCard key={category.id} category={category} index={index} />
          ))}
          {/* Add a spanning decorative card to make it an asymmetric bento grid */}
          <BentoDecorativeCard />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ category, index }: { category: any, index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const icons = {
    patient: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 9.53a11 11 0 0 0-2.29 4.34"/></svg>,
    medical: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v8"/><path d="M16 3.5a2.5 2.5 0 0 1 5 0v3.86a2 2 0 0 1-2.03 2.14H18.9a2 2 0 0 1-2.03-2.14v-3.86z"/><path d="M21 7.2v-1.6"/></svg>,
    providers: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
  };

  const gridSpans = [
    "md:col-span-1 lg:col-span-1",
    "md:col-span-1 lg:col-span-1",
    "md:col-span-2 lg:col-span-1",
  ];

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated/40 p-8 ${gridSpans[index]}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--primary), 0.15), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="h-16 w-16 rounded-2xl bg-surface-dark border border-white/5 flex items-center justify-center text-primary mb-6">
          {icons[category.id as keyof typeof icons]}
        </div>
        <h3 className="text-2xl font-bold text-primary-foreground mb-6">
          {category.title}
        </h3>
        <ul className="space-y-4 mt-auto">
          {category.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start text-white/70">
              <span className="mr-3 text-primary mt-1">•</span>
              <span className="text-base font-medium leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function BentoDecorativeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="md:col-span-2 lg:col-span-3 relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between group min-h-[350px]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 z-0" />
      
      {/* Background Image showing through glass */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] opacity-20 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30 z-0">
        <Image
          src="/healthcare-dashboard.png"
          alt="Healthcare Dashboard UI"
          fill
          className="object-cover object-left mask-image-linear-to-r"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-2xl mb-8 md:mb-0 w-full md:w-[70%]">
        <h3 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">Ready to build your healthcare app?</h3>
        <p className="text-lg text-white/70">Partner with our expert developers to turn your vision into a robust, compliant, and scalable digital reality.</p>
      </div>
      <div className="relative z-10 flex-shrink-0 w-full md:w-auto flex justify-start md:justify-end">
        <Link href="/contact-us" className="inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 hover:rotate-12 transition-all duration-500 shadow-[0_0_30px_rgba(var(--primary),0.5)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
