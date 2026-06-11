"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

function StackCard({ title, description, index, total }: { title: string; description: string; index: number; total: number }) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const offset = index * 6;

  return (
    <motion.article
      ref={ref}
      onMouseMove={(e) => {
        if (reducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      initial={reducedMotion ? false : { opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
        zIndex: total - index,
        marginTop: index > 0 ? `-${offset}px` : 0,
      }}
      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl sm:p-6"
    >
      <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
    </motion.article>
  );
}

export function TnjBenefits() {
  const { benefits } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="bg-[#050a06] py-14 md:py-20" aria-labelledby="tnj-benefits-heading" style={{ perspective: 1200 }}>
      <div className="container-app">
        <BlurFadeIn as="h2" id="tnj-benefits-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </BlurFadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
          {benefits.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="mx-auto mt-10 hidden max-w-2xl space-y-2 lg:block md:max-w-3xl">
          {benefits.items.map((item, i) => (
            <StackCard key={item.id} title={item.title} description={item.description} index={i} total={benefits.items.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
