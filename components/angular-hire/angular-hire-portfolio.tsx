"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { angularHireConfig } from "@/lib/angular-hire-config";

export function AngularHirePortfolio() {
  const { portfolio } = angularHireConfig;
  const [focused, setFocused] = useState(1);

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{portfolio.title}</h2>
          <p className="mt-6 text-para text-white/65">{portfolio.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3" style={{ perspective: 1200 }}>
          {portfolio.items.map((item, i) => {
            const isFocused = focused === i;
            return (
              <PortfolioCaseLink
                key={item.title}
                href={item.link}
                onMouseEnter={() => setFocused(i)}
                onFocus={() => setFocused(i)}
                initial={{ opacity: 0, rotateY: -25, z: -80 }}
                whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.65 }}
                animate={{
                  rotateY: isFocused ? 0 : i === 0 ? 8 : i === 2 ? -8 : 0,
                  scale: isFocused ? 1.04 : 0.95,
                  zIndex: isFocused ? 10 : 1,
                }}
                className={`group relative overflow-hidden rounded-[1.75rem] border bg-zinc-950 ${
                  isFocused
                    ? "border-primary/40 shadow-[0_20px_60px_rgba(26,105,253,0.15)]"
                    : "border-white/10"
                } ${i === 1 ? "md:-mt-6" : i === 2 ? "md:mt-6" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{item.category}</span>
                  <h3 className="mt-2 text-h4 font-bold text-white">{item.title}</h3>
                </div>
              </PortfolioCaseLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
