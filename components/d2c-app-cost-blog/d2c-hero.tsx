"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type D2cHeroProps = {
  breadcrumb: readonly { label: string; href: string }[];
  category: string;
  author: string;
  date: string;
  isoDate: string;
  heading: string;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
};

export function D2cHero({
  breadcrumb,
  category,
  author,
  date,
  isoDate,
  heading,
  excerpt,
  heroImage,
  heroImageAlt,
}: D2cHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <header ref={ref} className="relative min-h-[90vh] overflow-hidden border-b border-white/[0.06] bg-[#07050f]">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 70% 55% at 15% 20%, rgba(139,92,246,0.22), transparent 55%), radial-gradient(ellipse 60% 45% at 85% 25%, rgba(217,70,239,0.14), transparent 50%), #07050f",
            "radial-gradient(ellipse 70% 55% at 25% 30%, rgba(245,158,11,0.12), transparent 55%), radial-gradient(ellipse 60% 45% at 75% 20%, rgba(139,92,246,0.18), transparent 50%), #07050f",
            "radial-gradient(ellipse 70% 55% at 15% 20%, rgba(139,92,246,0.22), transparent 55%), radial-gradient(ellipse 60% 45% at 85% 25%, rgba(217,70,239,0.14), transparent 50%), #07050f",
          ],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="container-app relative flex min-h-[90vh] flex-col justify-center py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-white/45">
          {breadcrumb.map((item, i) => (
            <span key={item.href} className="flex items-center gap-2">
              {i > 0 ? <span className="text-white/20">/</span> : null}
              <Link href={item.href} className="hover:text-violet-300">{item.label}</Link>
            </span>
          ))}
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div style={{ opacity }}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400">
              {category} · <time dateTime={isoDate}>{date}</time> · 12 min read
            </p>
            <h1 className="mt-5 text-balance text-[clamp(2rem,4.2vw,3.1rem)] font-bold leading-[1.08] tracking-tight text-white">
              {heading.split(" ").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 32, rotateX: 40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.035 * i, duration: 0.5 }}
                  className="mr-[0.25em] inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-6 max-w-xl text-lg text-white/55"
            >
              {excerpt}
            </motion.p>
            <p className="mt-6 text-sm text-white/40">
              By <span className="text-white/70">{author}</span>
            </p>
          </motion.div>

          <motion.div style={{ scale: imgScale }} className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-violet-600/30 via-fuchsia-500/10 to-amber-400/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] border border-violet-500/20 bg-white/[0.03] p-2 backdrop-blur-xl">
              <div className="relative aspect-[1024/599] overflow-hidden rounded-[1.5rem]">
                <Image src={heroImage} alt={heroImageAlt} fill priority className="object-cover" sizes="520px" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
