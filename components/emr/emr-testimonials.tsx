"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function EmrTestimonials() {
  const reduced = usePrefersReducedMotion();
  const items = emrConfig.testimonials.items;

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <motion.h2
          className="text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, y: 30 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {emrConfig.testimonials.title}
        </motion.h2>

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, index) => (
            <motion.article
              key={item.name}
              className="w-[min(92vw,380px)] shrink-0 snap-center rounded-3xl border border-white/10 bg-surface-elevated p-6"
              initial={reduced ? false : { opacity: 0, scale: 0.88 }}
              whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, type: "spring", stiffness: 200 }}
              whileHover={reduced ? undefined : { scale: 1.03, y: -8 }}
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/15">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-xs text-white/55">{item.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">&ldquo;{item.quote}&rdquo;</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
