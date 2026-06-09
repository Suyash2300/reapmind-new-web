"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";

export function JavascriptHirePortfolio() {
  const { portfolio } = javascriptHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{portfolio.title}</h2>
          <p className="mt-6 text-para text-white/65">{portfolio.subtitle}</p>
        </motion.div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {portfolio.items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="w-[min(85vw,340px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
            >
              <div className="relative aspect-[4/3] bg-[#f5f5f5]">
                <Image src={item.image} alt={item.title} fill className="object-contain p-4" sizes="340px" />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F7DF1E]">{item.category}</span>
                <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
