"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { lifeConfig } from "@/lib/life-config";
import { FadeIn } from "@/components/motion/fade-in";

export function LifeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[110vh] overflow-hidden bg-black"
    >
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0 h-full w-full"
      >
        <Image
          src={lifeConfig.hero.image}
          alt="Life at ReapMind"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </motion.div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="container-app relative z-10 flex h-full items-end pb-32"
      >
        <div className="max-w-5xl">
          <FadeIn>
            <h1 className="text-display font-black text-white uppercase tracking-tighter leading-[0.85]">
              {lifeConfig.hero.title.split(" ").map((word, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span 
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="mt-8 text-h3 font-medium text-white/90 max-w-2xl leading-tight">
              {lifeConfig.hero.heading}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <p className="mt-6 text-para text-white/60 max-w-xl">
              {lifeConfig.hero.description}
            </p>
          </FadeIn>
        </div>
      </motion.div>
    </section>
  );
}
