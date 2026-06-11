"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

function BenefitCard({ title, description, index }: { title: string; description: string; index: number }) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 18 });

  return (
    <motion.article
      ref={ref}
      onMouseMove={(e) => {
        if (reducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      initial={reducedMotion ? false : { opacity: 0, rotateX: 20, y: 50 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`rounded-2xl border border-[#61DAFB]/20 bg-gradient-to-br from-[#61DAFB]/10 to-transparent p-5 backdrop-blur-xl sm:p-6 ${index % 3 === 1 ? "lg:translate-y-6" : index % 3 === 2 ? "lg:-translate-y-4" : ""}`}
    >
      <h3 className="text-base font-bold text-[#61DAFB] sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
    </motion.article>
  );
}

export function TrnmBenefits() {
  const { benefits } = topReactNativeMumbaiConfig;

  return (
    <section className="bg-[#0b0f14] py-14 md:py-20" aria-labelledby="trnm-benefits-heading" style={{ perspective: 1000 }}>
      <div className="container-app">
        <BlurFadeIn as="h2" id="trnm-benefits-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </BlurFadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, i) => (
            <BenefitCard key={item.id} title={item.title} description={item.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
