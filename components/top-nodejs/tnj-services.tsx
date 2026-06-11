"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

const ACCENTS = ["#339933", "#22c55e", "#10b981", "#059669", "#34d399", "#4ade80", "#16a34a", "#15803d", "#14532d"];

function BentoCard({ title, description, index, wide }: { title: string; description: string; index: number; wide?: boolean }) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const accent = ACCENTS[index % ACCENTS.length];
  const spotlight = useMotionTemplate`radial-gradient(400px circle at ${mx}px ${my}px, ${accent}35, transparent 70%)`;

  return (
    <motion.article
      ref={ref}
      onMouseMove={(e) => {
        if (reducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      initial={reducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: (index % 3) * 0.06, duration: 0.55 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:p-6 ${wide ? "md:col-span-2" : ""}`}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: spotlight }} />
      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>{String(index + 1).padStart(2, "0")}</span>
      <h3 className="mt-3 text-base font-bold text-white sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
    </motion.article>
  );
}

export function TnjServices() {
  const { services } = topNodejsConfig;

  return (
    <section className="bg-[#050a06] py-14 md:py-20" aria-labelledby="tnj-services-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tnj-services-heading" className="text-h3 font-bold text-white sm:text-h2">
          {services.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.08} className="mt-4 max-w-4xl text-para text-white/65">
          {services.intro}
        </BlurFadeIn>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <BentoCard key={item.id} title={item.title} description={item.description} index={i} wide={i === 0 || i === 8} />
          ))}
        </div>
        <BlurFadeIn delay={0.12} className="mt-10 text-center">
          <Link href="/contact-us#free-consultation" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#339933]/50 bg-[#339933]/10 px-10 text-sm font-semibold text-white hover:bg-[#339933]/20">
            {services.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
