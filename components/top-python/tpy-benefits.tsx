"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

function StackCard({ title, description, index, total }: { title: string; description: string; index: number; total: number }) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 180, damping: 18 });

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
      initial={reducedMotion ? false : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
        zIndex: total - index,
        marginTop: index > 0 ? `-${index * 5}px` : 0,
      }}
      className="rounded-2xl border border-[#3776AB]/30 bg-[#3776AB]/5 p-5 backdrop-blur-xl sm:p-6"
    >
      <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
    </motion.article>
  );
}

export function TpyBenefits() {
  const { benefits } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tpy-benefits-heading" style={{ perspective: 1200 }}>
      <div className="container-app">
        <BlurFadeIn as="h2" id="tpy-benefits-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </BlurFadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
          {benefits.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="font-bold text-[#3776AB]">{item.title}</h3>
              <p className="mt-2 text-sm text-white/65">{item.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="mx-auto mt-10 hidden max-w-2xl space-y-1 lg:block md:max-w-3xl">
          {benefits.items.map((item, i) => (
            <StackCard key={item.id} title={item.title} description={item.description} index={i} total={benefits.items.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
