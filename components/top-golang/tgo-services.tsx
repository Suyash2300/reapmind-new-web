"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

function BentoCard({ title, description, index }: { title: string; description: string; index: number }) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(400px circle at ${mx}px ${my}px, rgba(0,173,216,0.35), transparent 72%)`;
  const layout = index % 4 === 0 ? "md:col-span-2 md:row-span-1" : index % 5 === 0 ? "md:mt-6" : "";

  return (
    <motion.article
      ref={ref}
      onMouseMove={(e) => {
        if (reducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      initial={reducedMotion ? false : { opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.05, duration: 0.55 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#00ADD8]/10 to-transparent p-5 backdrop-blur-lg sm:p-6 ${layout}`}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100" style={{ background: spotlight }} />
      <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
    </motion.article>
  );
}

export function TgoServices() {
  const { services } = topGolangConfig;

  return (
    <section className="bg-[#0a1014] py-14 md:py-20" aria-labelledby="tgo-services-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tgo-services-heading" className="text-h3 font-bold text-white sm:text-h2">
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
          <Link href="/contact-us#free-consultation" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#00ADD8]/50 bg-[#00ADD8]/10 px-10 text-sm font-semibold text-[#00ADD8] hover:bg-[#00ADD8]/20">
            {services.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
