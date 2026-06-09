"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";

export function FullstackHirePortfolio() {
  const { portfolio } = fullstackHireConfig;
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

        <div className="relative mx-auto flex h-[400px] max-w-lg items-center justify-center">
          {portfolio.items.map((item, i) => {
            const offset = (i - active + portfolio.items.length) % portfolio.items.length;
            if (offset > 2) return null;
            return (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  rotate: offset === 0 ? 0 : offset === 1 ? 8 : -8,
                  x: offset === 0 ? 0 : offset === 1 ? 40 : -40,
                  y: offset * 12,
                  scale: 1 - offset * 0.06,
                  zIndex: 10 - offset,
                  opacity: 1 - offset * 0.2,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 24 }}
                onClick={(e) => {
                  if (offset !== 0) {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                className="absolute w-full max-w-sm cursor-pointer overflow-hidden rounded-[1.75rem] border border-white/15 bg-zinc-950 shadow-2xl"
                style={{ zIndex: 10 - offset }}
              >
                <div className="relative aspect-[4/3] bg-[#f5f5f5]">
                  <Image src={item.image} alt={item.title} fill className="object-contain p-4" sizes="384px" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#6366F1]">{item.category}</span>
                  <h3 className="mt-2 text-h4 font-bold text-white">{item.title}</h3>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {portfolio.items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-[#6366F1]" : "w-2 bg-white/20"}`}
              aria-label={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
