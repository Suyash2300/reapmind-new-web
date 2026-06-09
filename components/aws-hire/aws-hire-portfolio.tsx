"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { awsHireConfig } from "@/lib/aws-hire-config";

export function AwsHirePortfolio() {
  const { portfolio } = awsHireConfig;
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

        <div className="relative mx-auto flex min-h-[420px] max-w-4xl items-center justify-center">
          {portfolio.items.map((item, i) => {
            const offset = i - active;
            const isActive = i === active;
            return (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                animate={{
                  x: offset * 55,
                  y: Math.abs(offset) * 12,
                  scale: isActive ? 1 : 0.9,
                  rotate: offset * -4,
                  zIndex: isActive ? 30 : 10 - Math.abs(offset),
                  opacity: Math.abs(offset) > 1 ? 0.4 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="absolute w-[min(90vw,360px)] overflow-hidden rounded-[1.75rem] border border-white/15 bg-zinc-950 shadow-2xl"
              >
                <div className="relative aspect-[4/3] bg-[#f5f5f5]">
                  <Image src={item.image} alt={item.title} fill className="object-contain p-4" sizes="360px" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900]">{item.category}</span>
                  <h3 className="mt-2 text-h4 font-bold text-white">{item.title}</h3>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
