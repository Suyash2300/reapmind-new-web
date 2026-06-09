"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { reactHireConfig } from "@/lib/react-hire-config";

export function ReactHireRelated() {
  const { relatedHire } = reactHireConfig;

  return (
    <section className="section-app overflow-hidden bg-black py-24">
      <div className="container-app">
        <div className="flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, skewX: 8, x: 40 }}
              whileInView={{ opacity: 1, skewX: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              whileHover={{ skewX: -2, y: -8 }}
              className="flex w-[min(88vw,340px)] shrink-0 flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 md:w-auto"
            >
              <span className="text-4xl font-black text-[#61DAFB]/20">0{i + 1}</span>
              <h3 className="mt-4 text-h5 font-bold text-white">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{card.description}</p>
              <Link
                href={card.href}
                className="mt-6 inline-flex min-h-[44px] items-center font-bold text-[#61DAFB]"
              >
                {relatedHire.ctaLabel} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
