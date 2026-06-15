"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { risConfig } from "@/lib/ris-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RisHowItWorks() {
  const reduced = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${spotX}% ${spotY}%, rgba(124,58,237,0.35), transparent 65%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    spotX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  const titleWords = risConfig.howItWorks.title.split(" ");

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-h2 font-black text-white md:text-display">
            {titleWords.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="mr-[0.25em] inline-block"
                initial={reduced ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="mt-6 text-para leading-relaxed text-white/75"
            initial={reduced ? false : { opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={reduced ? undefined : { opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            {risConfig.howItWorks.intro}
          </motion.p>
        </div>

        <motion.div
          ref={containerRef}
          onMouseMove={onMove}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-violet-950/20 sm:aspect-[16/10]"
          initial={reduced ? false : { opacity: 0, rotateY: -12 }}
          whileInView={reduced ? undefined : { opacity: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          style={{ transformStyle: "preserve-3d", perspective: 1200 }}
        >
          {!reduced && (
            <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ background: spotlight }} />
          )}
          <Image
            src={risConfig.howItWorks.image}
            alt={risConfig.howItWorks.title}
            fill
            quality={90}
            className="object-contain object-center p-2 sm:object-cover sm:p-0"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </motion.div>
      </div>
    </section>
  );
}
