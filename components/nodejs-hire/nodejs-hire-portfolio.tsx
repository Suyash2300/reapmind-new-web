"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";

export function NodejsHirePortfolio() {
  const { portfolio } = nodejsHireConfig;
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const indicatorWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{portfolio.title}</h2>
          <p className="mt-6 text-para text-white/65">{portfolio.subtitle}</p>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {portfolio.items.map((item, i) => (
            <PortfolioCaseLink
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="group w-[min(85vw,360px)] shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-white/15 bg-zinc-950 shadow-2xl"
              style={{ perspective: 1000 }}
            >
              <div className="relative aspect-[4/3] bg-[#f5f5f5]">
                <Image src={item.image} alt={item.title} fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" sizes="360px" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#339933]">{item.category}</span>
                <h3 className="mt-2 text-h4 font-bold text-white">{item.title}</h3>
              </div>
            </PortfolioCaseLink>
          ))}
        </div>

        <div className="mx-auto mt-6 h-1 max-w-xs overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full rounded-full bg-[#339933]" style={{ width: indicatorWidth }} />
        </div>
      </div>
    </section>
  );
}
