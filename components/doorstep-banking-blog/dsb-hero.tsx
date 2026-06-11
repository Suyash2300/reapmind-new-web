"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type DsbHeroProps = {
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

export function DsbHero({
  breadcrumb,
  category,
  author,
  date,
  isoDate,
  heading,
  excerpt,
  heroImage,
  heroImageAlt,
}: DsbHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const stackRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const stackY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <header ref={ref} className="relative min-h-[92vh] overflow-hidden border-b border-white/[0.06] bg-[#03080c]">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(6,182,212,0.18), transparent 55%), radial-gradient(ellipse 55% 45% at 90% 15%, rgba(14,165,233,0.12), transparent 50%), #03080c",
            "radial-gradient(ellipse 80% 60% at 30% 10%, rgba(245,158,11,0.08), transparent 55%), radial-gradient(ellipse 55% 45% at 70% 5%, rgba(6,182,212,0.16), transparent 50%), #03080c",
            "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(6,182,212,0.18), transparent 55%), radial-gradient(ellipse 55% 45% at 90% 15%, rgba(14,165,233,0.12), transparent 50%), #03080c",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <svg className="pointer-events-none absolute bottom-0 left-0 w-full opacity-[0.12]" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden>
        <motion.path
          d="M0,40 Q300,80 600,40 T1200,40 L1200,80 L0,80 Z"
          fill="url(#dsbWave)"
          animate={{ d: ["M0,40 Q300,80 600,40 T1200,40 L1200,80 L0,80 Z", "M0,50 Q300,10 600,50 T1200,50 L1200,80 L0,80 Z", "M0,40 Q300,80 600,40 T1200,40 L1200,80 L0,80 Z"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="dsbWave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container-app relative flex min-h-[92vh] flex-col justify-center py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-white/45">
          {breadcrumb.map((item, i) => (
            <span key={item.href} className="flex items-center gap-2">
              {i > 0 ? <span className="text-white/20">/</span> : null}
              <Link href={item.href} className="hover:text-cyan-300">
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
              {category} · <time dateTime={isoDate}>{date}</time> · 14 min read
            </p>
            <h1 className="mt-5 text-balance text-[clamp(1.85rem,3.8vw,2.85rem)] font-bold leading-[1.1] tracking-tight text-white">
              {heading.split(" ").map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.03 * i, duration: 0.45 }}
                  className="mr-[0.28em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-xl text-lg text-white/55"
            >
              {excerpt}
            </motion.p>
            <p className="mt-6 text-sm text-white/40">
              By <span className="text-white/70">{author}</span>
            </p>
          </div>

          <motion.div
            style={{ y: stackY, rotateZ: stackRotate, perspective: 1200 }}
            className="relative mx-auto w-full max-w-md"
          >
            {[0, 1, 2].map((layer) => (
              <motion.div
                key={layer}
                initial={{ opacity: 0, y: 40 + layer * 12, rotateX: 18 - layer * 4 }}
                animate={{ opacity: 1, y: layer * 14, rotateX: 8 - layer * 3, x: layer * 10 }}
                transition={{ delay: 0.2 + layer * 0.12, type: "spring", stiffness: 80 }}
                className={`absolute inset-x-0 ${layer === 0 ? "relative" : ""}`}
                style={{ zIndex: 3 - layer, transformStyle: "preserve-3d" }}
              >
                <div
                  className={`overflow-hidden rounded-2xl border bg-white/[0.03] p-1.5 backdrop-blur-xl ${
                    layer === 0 ? "border-cyan-400/30 shadow-[0_30px_80px_rgba(6,182,212,0.2)]" : "border-white/10"
                  }`}
                >
                  {layer === 0 ? (
                    <div className="relative aspect-[1024/599] overflow-hidden rounded-xl">
                      <Image src={heroImage} alt={heroImageAlt} fill priority className="object-cover" sizes="480px" />
                    </div>
                  ) : (
                    <div
                      className={`rounded-xl bg-gradient-to-br to-transparent ${layer === 1 ? "from-cyan-500/10" : "from-cyan-500/5"}`}
                      style={{ height: 120 - layer * 20 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
