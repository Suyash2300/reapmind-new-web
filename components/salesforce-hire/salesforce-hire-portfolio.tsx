"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

export function SalesforceHirePortfolio() {
  const { portfolio } = salesforceHireConfig;
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

        <div className="mx-auto max-w-lg" style={{ perspective: 1200 }}>
          <div className="relative aspect-[4/3]">
            {portfolio.items.map((item, i) => {
              const offset = (i - active + portfolio.items.length) % portfolio.items.length;
              if (offset > 2) return null;
              const isTop = offset === 0;

              return (
                <PortfolioCaseLink
                  key={item.title}
                  href={item.link}
                  onClick={(e) => {
                    if (!isTop) {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                  animate={{
                    rotateY: offset * -8,
                    z: -offset * 40,
                    x: offset * 14,
                    scale: 1 - offset * 0.04,
                    opacity: 1 - offset * 0.2,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  className={`absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 ${
                    isTop ? "z-30 cursor-default" : "z-20 cursor-pointer"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-4"
                      sizes="500px"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#00A1E0]">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-h4 font-bold text-white">{item.title}</h3>
                  </div>
                </PortfolioCaseLink>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {portfolio.items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-10 bg-[#00A1E0]" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
