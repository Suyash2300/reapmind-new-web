"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { teamConfig } from "@/lib/team-config";

export function TeamHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black pt-20"
    >
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/company/team-hero.jpg"
          alt="ReapMind Team"
          fill
          priority
          className="object-cover opacity-50 mix-blend-luminosity grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-black/70 to-transparent" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="container-app relative z-10 w-full"
      >
        <div className="max-w-4xl">
          <FadeIn>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary">
              {teamConfig.hero.subtitle}
            </span>
          </FadeIn>
          
          <motion.div
            initial={{ opacity: 0, y: 50, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h1 className="mt-8 text-display font-extrabold text-white leading-tight tracking-tighter">
              {teamConfig.hero.heading}
            </h1>
          </motion.div>

          <FadeIn delay={0.6}>
            <p className="mt-8 max-w-2xl text-h4 font-medium text-white/80 leading-relaxed">
              {teamConfig.hero.description}
            </p>
          </FadeIn>
          
          <div className="mt-16 flex flex-wrap gap-4">
            {teamConfig.highlights.map((highlight, i) => (
              <FadeIn key={i} delay={0.8 + (i * 0.1)}>
                <div className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md border border-white/5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-white">{highlight.title}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
