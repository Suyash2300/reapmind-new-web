"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

const ACCENTS = ["#3776AB", "#FFD43B", "#4B8BBE", "#306998", "#FFE873", "#5B9BD5", "#2E5F88", "#C4A000", "#6CA6CD"];

function BentoCard({ title, description, index, wide }: { title: string; description: string; index: number; wide?: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const accent = ACCENTS[index % ACCENTS.length];
  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mx}px ${my}px, ${accent}40, transparent 72%)`;

  return (
    <motion.article
      ref={ref}
      onMouseMove={(e) => {
        if (reducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      initial={reducedMotion ? false : { opacity: 0, rotateX: 12, y: 36 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: (index % 3) * 0.05, duration: 0.55 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-5 backdrop-blur-lg sm:p-6 ${wide ? "md:col-span-2" : ""}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: spotlight }} />
      <span className="font-mono text-xs font-bold" style={{ color: accent }}>{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-3 text-base font-bold text-white sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
    </motion.article>
  );
}

export function TpyServices() {
  const { services } = topPythonConfig;

  return (
    <section className="bg-[#0a1628] py-14 md:py-20" aria-labelledby="tpy-services-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tpy-services-heading" className="text-h3 font-bold text-white sm:text-h2">
          {services.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.08} className="mt-4 max-w-4xl text-para text-white/65">
          {services.intro}
        </BlurFadeIn>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <BentoCard key={item.id} title={item.title} description={item.description} index={i} wide={i === 0 || i === 6} />
          ))}
        </div>
        <BlurFadeIn delay={0.12} className="mt-10 text-center">
          <Link href="/contact-us#free-consultation" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#FFD43B]/40 bg-[#FFD43B]/10 px-10 text-sm font-semibold text-[#FFD43B] hover:bg-[#FFD43B]/20">
            {services.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
