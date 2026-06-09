"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { swiftHireConfig } from "@/lib/swift-hire-config";

const RING_RADIUS = 140;

export function SwiftHireTechnologies() {
  const { technologies } = swiftHireConfig;
  const items = technologies.items;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
          <p className="mt-6 text-para text-white/65">{technologies.description}</p>
        </motion.div>

        <div className="relative mx-auto hidden min-h-[520px] max-w-3xl items-center justify-center md:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 h-36 w-36 sm:h-44 sm:w-44"
          >
            <Image src={technologies.illustration} alt="" fill className="object-contain" sizes="176px" />
          </motion.div>

          {items.map((tech, i) => {
            const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * RING_RADIUS;
            const y = Math.sin(angle) * RING_RADIUS;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.05, type: "spring", stiffness: 180 }}
                whileHover={{ scale: 1.12, zIndex: 20 }}
                className="absolute flex w-[88px] flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black/80 p-3 text-center sm:w-[100px]"
                style={{
                  left: `calc(50% + ${x}px - 44px)`,
                  top: `calc(50% + ${y}px - 40px)`,
                }}
              >
                <div className="relative h-9 w-9">
                  <Image src={tech.icon} alt="" fill className="object-contain" sizes="36px" unoptimized />
                </div>
                <span className="text-[10px] font-semibold leading-tight text-white/85">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>

        <ul className="mt-10 grid grid-cols-3 gap-2 sm:hidden">
          {items.map((tech, i) => (
            <motion.li
              key={`m-${tech.name}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-black/60 p-2 text-center"
            >
              <div className="relative h-8 w-8">
                <Image src={tech.icon} alt="" fill className="object-contain" sizes="32px" unoptimized />
              </div>
              <span className="text-[10px] text-white/80">{tech.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
