"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

const BENTO_LAYOUTS = [
  "md:col-span-2 md:row-span-1",
  "",
  "md:mt-8",
  "",
  "md:col-span-2",
  "",
  "md:-mt-4",
  "",
  "md:col-span-2 md:col-start-2",
];

function ServiceCard({ title, description, index }: { title: string; description: string; index: number }) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mx}px ${my}px, rgba(97,218,251,0.32), transparent 70%)`;

  return (
    <motion.article
      ref={ref}
      onMouseMove={(e) => {
        if (reducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      initial={reducedMotion ? false : { opacity: 0, clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.06, duration: 0.65 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#61DAFB]/8 via-transparent to-transparent p-5 backdrop-blur-xl sm:p-6 ${BENTO_LAYOUTS[index] ?? ""}`}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: spotlight }} />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#61DAFB]/70">0{index + 1}</span>
      <h3 className="mt-2 text-base font-bold text-white sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
    </motion.article>
  );
}

export function TrnmServices() {
  const { services } = topReactNativeMumbaiConfig;

  return (
    <section className="bg-[#0b0f14] py-14 md:py-20" aria-labelledby="trnm-services-heading">
      <div className="container-app">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <BlurFadeIn as="h2" id="trnm-services-heading" className="text-h3 font-bold text-white sm:text-h2">
            {services.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.06} className="text-para text-white/65 lg:text-right">
            {services.intro}
          </BlurFadeIn>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <ServiceCard key={item.id} title={item.title} description={item.description} index={i} />
          ))}
        </div>
        <BlurFadeIn delay={0.1} className="mt-12 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#61DAFB]/45 bg-[#61DAFB]/10 px-10 text-sm font-semibold text-[#61DAFB] hover:bg-[#61DAFB]/20"
          >
            {services.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
