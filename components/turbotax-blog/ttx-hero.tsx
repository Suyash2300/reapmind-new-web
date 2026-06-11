"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TtxHeroProps = {
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

export function TtxHero({
  breadcrumb,
  category,
  author,
  date,
  isoDate,
  heading,
  excerpt,
  heroImage,
  heroImageAlt,
}: TtxHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const floatY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <header ref={ref} className="relative min-h-[92vh] overflow-hidden border-b border-white/[0.06] bg-[#08060f]">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 75% 55% at 20% 10%, rgba(99,102,241,0.2), transparent 55%), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(163,230,53,0.1), transparent 50%), #08060f",
            "radial-gradient(ellipse 75% 55% at 40% 20%, rgba(251,146,60,0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 70% 10%, rgba(99,102,241,0.16), transparent 50%), #08060f",
            "radial-gradient(ellipse 75% 55% at 20% 10%, rgba(99,102,241,0.2), transparent 55%), radial-gradient(ellipse 50% 40% at 85% 20%, rgba(163,230,53,0.1), transparent 50%), #08060f",
          ],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        style={{ y: floatY2 }}
        className="pointer-events-none absolute -left-20 top-32 size-64 rounded-full bg-indigo-600/10 blur-3xl"
        aria-hidden
      />
      <motion.div
        style={{ y: floatY }}
        className="pointer-events-none absolute -right-16 bottom-24 size-48 rounded-full bg-lime-400/10 blur-3xl"
        aria-hidden
      />

      <div className="container-app relative flex min-h-[92vh] flex-col justify-center py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-white/45">
          {breadcrumb.map((item, i) => (
            <span key={item.href} className="flex items-center gap-2">
              {i > 0 ? <span className="text-white/20">/</span> : null}
              <Link href={item.href} className="hover:text-indigo-300">
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-400">
              {category} · <time dateTime={isoDate}>{date}</time> · 16 min read
            </p>
            <h1 className="mt-5 text-balance text-[clamp(1.85rem,3.6vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-white">
              {heading.split(" ").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                  transition={{ delay: 0.028 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="mr-[0.26em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-6 max-w-xl text-lg text-white/55"
            >
              {excerpt}
            </motion.p>
            <p className="mt-6 text-sm text-white/40">
              By <span className="text-white/70">{author}</span>
            </p>
          </div>

          <motion.div style={{ y: floatY }} className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 z-10 rounded-xl border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-semibold text-lime-300 backdrop-blur-md"
            >
              $18.2B market by 2027
            </motion.div>
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-600/25 via-transparent to-lime-400/15 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-indigo-500/25 bg-white/[0.03] p-2 backdrop-blur-xl">
              <div className="relative aspect-[1024/599] overflow-hidden rounded-[1.25rem]">
                <Image src={heroImage} alt={heroImageAlt} fill priority className="object-cover" sizes="520px" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
