"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export function HealthcarePortfolio() {
  const { title, items } = healthcareConfig.portfolio;
  const trackRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({ container: trackRef });
  
  // Spring-smooth the progress bar
  const smoothProgress = useSpring(scrollXProgress, { stiffness: 100, damping: 20 });
  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const colors = [
    "from-blue-900/40 to-blue-600/20",
    "from-emerald-900/40 to-emerald-600/20",
    "from-purple-900/40 to-purple-600/20",
    "from-orange-900/40 to-orange-600/20",
    "from-primary/40 to-primary/10",
  ];

  return (
    <section className="bg-surface-dark py-24 border-t border-white/5 overflow-hidden perspective-1000">
      <div className="container-app mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="text-h2 font-bold text-primary-foreground mb-4"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="text-white/60 text-lg max-w-2xl"
        >
          Explore our successful case studies demonstrating how we transform healthcare businesses.
        </motion.p>

        {/* Scroll progress bar */}
        <motion.div 
           initial={{ opacity: 0, scaleX: 0 }}
           whileInView={{ opacity: 1, scaleX: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4, ease }}
           className="mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-white/10 origin-left"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/60 shadow-[0_0_10px_rgba(var(--primary),0.5)]"
            style={{ width: progressWidth }}
          />
        </motion.div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-[max(1.5rem,calc((100vw-80rem)/2))] pb-12 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item: any, index: number) => (
          <PortfolioCard key={index} item={item} index={index} colorClass={colors[index % colors.length]} />
        ))}
      </div>
    </section>
  );
}

function PortfolioCard({ item, index, colorClass }: { item: any, index: number, colorClass: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Parallax tilt effect based on scroll position relative to viewport
  const { scrollXProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const rotateY = useTransform(scrollXProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease }}
      style={{ rotateY, scale, transformStyle: "preserve-3d" }}
      className="relative w-[min(85vw,500px)] shrink-0 snap-center rounded-[2.5rem] border border-white/10 overflow-hidden bg-[#0c0c0c] flex flex-col group shadow-2xl"
    >
      {/* Image Section with clip-path reveal */}
      <motion.div 
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 + index * 0.1, ease }}
        className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/5"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-40 z-0 mix-blend-overlay`} />
        {item.image && (
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full relative"
          >
             <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center z-10"
              sizes="(max-width: 768px) 85vw, 500px"
            />
          </motion.div>
        )}
      </motion.div>

      {/* Content Section */}
      <div className="relative p-8 md:p-10 flex-1 flex flex-col z-20" style={{ transform: "translateZ(30px)" }}>
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 mb-6 self-start group-hover:border-primary/50 transition-colors">
          <span className="text-sm font-medium text-white/90 group-hover:text-primary transition-colors">Case Study 0{index + 1}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-primary-foreground transition-colors duration-300">{item.title}</h3>
        <p className="text-white/60 leading-relaxed mb-8 line-clamp-3">{item.description}</p>

        <div className="flex flex-wrap items-center gap-6 mb-8 mt-auto">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Downloads</p>
            <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.downloads}</p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Active Users</p>
            <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.users}</p>
          </div>
        </div>

        <Link
          href="/portfolio-reapmind"
          className="inline-flex items-center gap-2 text-primary hover:text-white font-semibold transition-colors group/btn text-base mt-2 self-start overflow-hidden"
        >
          <span className="relative">
             View Case Study
             <span className="absolute left-0 bottom-0 w-full h-[1px] bg-primary origin-left scale-x-100 group-hover/btn:scale-x-0 transition-transform duration-300" />
          </span>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="transform group-hover/btn:translate-x-2 transition-transform duration-300"
          >
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </motion.svg>
        </Link>
      </div>
    </motion.div>
  );
}
