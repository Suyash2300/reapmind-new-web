"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface IttHeroProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export function IttHero({ title, excerpt, image, date, author, category }: IttHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black pt-32 pb-20 perspective-[1000px]"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,transparent_50%)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,black)]" />
      </div>

      {/* Floating 3D Orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-blue-500/20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[15%] top-[40%] h-48 w-48 rounded-full bg-purple-500/20 blur-3xl"
      />

      <motion.div
        style={{ opacity, scale, rotateX }}
        className="relative z-10 container-app mx-auto px-4 md:px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium tracking-wide text-white/60"
          >
            <span className="rounded-full bg-white/10 px-4 py-1 text-white border border-white/20 backdrop-blur-md">
              {category}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {date}
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              {author}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">{title.split("reshaping")[0]}</span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              reshaping {title.split("reshaping")[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
          >
            {excerpt}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
