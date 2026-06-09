"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { reactHireConfig } from "@/lib/react-hire-config";

export function ReactHirePortfolio() {
  const { portfolio } = reactHireConfig;
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app mb-14">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{portfolio.title}</h2>
          <p className="mt-6 text-para text-white/65">{portfolio.subtitle}</p>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1rem,calc((100vw-1280px)/2+1rem))] pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {portfolio.items.map((item, i) => (
          <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, rotateY: 35, x: 80 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1, duration: 0.65 }}
            whileHover={{ scale: 1.03 }}
            style={{ transformPerspective: 1000 }}
            className="w-[min(85vw,420px)] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950"
          >
            <div className="relative aspect-[4/3] bg-[#f5f5f5]">
              <Image src={item.image} alt={item.title} fill className="object-contain p-6" sizes="420px" />
            </div>
            <div className="border-t border-white/10 p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#61DAFB]">{item.category}</span>
              <h3 className="mt-2 text-h4 font-bold text-white">{item.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
