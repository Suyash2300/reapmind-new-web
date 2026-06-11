"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

const ACCENTS = ["#22d3ee", "#a78bfa", "#06b6d4", "#8b5cf6", "#38bdf8", "#c084fc", "#0ea5e9", "#7c3aed", "#67e8f9"];

function BentoCard({ title, description, index }: { title: string; description: string; index: number }) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const accent = ACCENTS[index % ACCENTS.length];
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, ${accent}38, transparent 70%)`;
  const spans = index === 0 || index === 4 || index === 8;

  return (
    <motion.article
      ref={ref}
      onMouseMove={(e) => {
        if (reducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      initial={reducedMotion ? false : { opacity: 0, y: 40, skewY: 2 }}
      whileInView={{ opacity: 1, y: 0, skewY: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: (index % 3) * 0.05, duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6 ${spans ? "md:col-span-2" : ""}`}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100" style={{ background: spotlight }} />
      <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
    </motion.article>
  );
}

export function TexServices() {
  const { services } = topExpressjsConfig;

  return (
    <section className="bg-[#0c0f1a] py-14 md:py-20" aria-labelledby="tex-services-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tex-services-heading" className="text-h3 font-bold text-white sm:text-h2">
          {services.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.08} className="mt-4 max-w-4xl text-para text-white/65">
          {services.intro}
        </BlurFadeIn>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <BentoCard key={item.id} title={item.title} description={item.description} index={i} />
          ))}
        </div>
        <BlurFadeIn delay={0.12} className="mt-10 text-center">
          <Link href="/contact-us#free-consultation" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#22d3ee]/50 bg-[#22d3ee]/10 px-10 text-sm font-semibold text-[#22d3ee] hover:bg-[#22d3ee]/20">
            {services.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
