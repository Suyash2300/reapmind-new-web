"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

export function FlutterHirePortfolio() {
  const { portfolio } = flutterHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, rotateX: 25 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ transformPerspective: 900 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{portfolio.title}</h2>
          <p className="mt-6 text-para text-white/65">{portfolio.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3" style={{ perspective: 1200 }}>
          {portfolio.items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, rotateY: i % 2 === 0 ? -35 : 35, z: -80 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotateY: i % 2 === 0 ? 4 : -4, y: -12, z: 20 }}
              className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 ${
                i === 1 ? "md:-mt-6" : i === 2 ? "md:mt-6" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
