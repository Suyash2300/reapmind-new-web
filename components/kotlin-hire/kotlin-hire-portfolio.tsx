"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";

export function KotlinHirePortfolio() {
  const { portfolio } = kotlinHireConfig;
  const [active, setActive] = useState(0);

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{portfolio.title}</h2>
          <p className="mt-6 text-para text-white/65">{portfolio.subtitle}</p>
        </motion.div>

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
          <div className="flex gap-3">
            {portfolio.items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active === i ? "bg-[#7F52FF] text-white" : "bg-white/10 text-white/60"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="relative h-[380px] w-full max-w-lg" style={{ perspective: 1200 }}>
            <AnimatePresence mode="wait">
              <PortfolioCaseLink
                key={portfolio.items[active].title}
                href={portfolio.items[active].link}
                initial={{ opacity: 0, rotateY: -30, z: -100 }}
                animate={{ opacity: 1, rotateY: 0, z: 0 }}
                exit={{ opacity: 0, rotateY: 30, z: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/15 bg-zinc-950 shadow-2xl"
              >
                <div className="relative aspect-[4/3] bg-[#f5f5f5]">
                  <Image
                    src={portfolio.items[active].image}
                    alt={portfolio.items[active].title}
                    fill
                    className="object-contain p-4"
                    sizes="512px"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7F52FF]">
                    {portfolio.items[active].category}
                  </span>
                  <h3 className="mt-2 text-h4 font-bold text-white">{portfolio.items[active].title}</h3>
                </div>
              </PortfolioCaseLink>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
