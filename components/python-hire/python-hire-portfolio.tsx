"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { pythonHireConfig } from "@/lib/python-hire-config";

export function PythonHirePortfolio() {
  const { portfolio } = pythonHireConfig;
  const [active, setActive] = useState(1);

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

        <div className="relative mx-auto flex h-[420px] max-w-4xl items-center justify-center" style={{ perspective: 1400 }}>
          {portfolio.items.map((item, i) => {
            const offset = i - active;
            const isActive = i === active;
            return (
              <PortfolioCaseLink
                key={item.title}
                href={item.link}
                onClick={(e) => {
                  if (!isActive) {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                animate={{
                  x: offset * 120,
                  z: isActive ? 80 : -Math.abs(offset) * 60,
                  rotateY: offset * -22,
                  scale: isActive ? 1 : 0.82,
                  opacity: Math.abs(offset) > 1 ? 0 : 1,
                  zIndex: 10 - Math.abs(offset),
                }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className="absolute w-[min(85vw,320px)] cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative aspect-[4/3] bg-[#f5f5f5]">
                  <Image src={item.image} alt={item.title} fill className="object-contain p-4" sizes="320px" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#3776AB]">{item.category}</span>
                  <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                </div>
              </PortfolioCaseLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
