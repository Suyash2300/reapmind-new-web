"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { instashopBlogConfig } from "@/lib/instashop-blog-config";

type IsbHeroProps = {
  breadcrumb: typeof instashopBlogConfig.breadcrumb;
  category: string;
  author: string;
  date: string;
  isoDate: string;
  heading: string;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
};

export function IsbHero({
  breadcrumb,
  category,
  author,
  date,
  isoDate,
  heading,
  excerpt,
  heroImage,
  heroImageAlt,
}: IsbHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const words = heading.split(" ");

  return (
    <header
      ref={ref}
      className="relative min-h-[92vh] overflow-hidden border-b border-white/[0.06] bg-[#030806]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(16,185,129,0.18), transparent 55%), radial-gradient(ellipse 70% 50% at 80% 30%, rgba(26,105,253,0.14), transparent 50%), #030806",
            "radial-gradient(ellipse 80% 60% at 30% 25%, rgba(6,182,212,0.16), transparent 55%), radial-gradient(ellipse 70% 50% at 70% 35%, rgba(16,185,129,0.12), transparent 50%), #030806",
            "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(16,185,129,0.18), transparent 55%), radial-gradient(ellipse 70% 50% at 80% 30%, rgba(26,105,253,0.14), transparent 50%), #030806",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="pointer-events-none absolute -left-20 top-32 size-72 rounded-full bg-emerald-500/10 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-20 size-80 rounded-full bg-primary/10 blur-[110px]" aria-hidden />

      <div className="container-app relative flex min-h-[92vh] flex-col justify-center py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/45">
          {breadcrumb.map((item, i) => (
            <span key={item.href} className="flex items-center gap-2">
              {i > 0 ? <span aria-hidden className="text-white/20">/</span> : null}
              <Link href={item.href} className="transition-colors hover:text-emerald-300">
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <motion.div style={{ y: textY, opacity }}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
              <span>{category}</span>
              <span aria-hidden className="text-white/20">·</span>
              <time dateTime={isoDate}>{date}</time>
              <span aria-hidden className="text-white/20">·</span>
              <span className="text-white/40">14 min read</span>
            </div>

            <h1 className="mt-6 text-balance">
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.04 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="mr-[0.28em] inline-block text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.06] tracking-[-0.03em] text-white"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/55"
            >
              {excerpt}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-6 text-sm text-white/40"
            >
              By <span className="font-medium text-white/70">{author}</span>
            </motion.p>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 via-transparent to-primary/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[1024/599] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 backdrop-blur-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">On-demand</p>
              <p className="text-lg font-bold text-white">Grocery</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
