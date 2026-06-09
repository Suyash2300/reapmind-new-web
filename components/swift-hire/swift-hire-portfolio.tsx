"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { swiftHireConfig } from "@/lib/swift-hire-config";

export function SwiftHirePortfolio() {
  const { portfolio } = swiftHireConfig;
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

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {portfolio.items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8, rotate: -1 }}
              className="w-[min(85vw,380px)] shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-white/15 bg-zinc-950 shadow-xl"
            >
              <div className="relative aspect-[4/3] bg-[#f5f5f5]">
                <Image src={item.image} alt={item.title} fill className="object-contain p-4" sizes="380px" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F05138]">{item.category}</span>
                <h3 className="mt-2 text-h4 font-bold text-white">{item.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
