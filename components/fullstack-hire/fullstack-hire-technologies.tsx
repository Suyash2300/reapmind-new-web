"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";

export function FullstackHireTechnologies() {
  const { technologies } = fullstackHireConfig;

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

        <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-[260px]"
          >
            <Image src={technologies.illustration} alt="" fill className="object-contain" sizes="260px" unoptimized />
          </motion.div>

          <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {technologies.items.map((tech, i) => {
              const fromCorner = i % 4;
              const origin =
                fromCorner === 0
                  ? "top left"
                  : fromCorner === 1
                    ? "top right"
                    : fromCorner === 2
                      ? "bottom left"
                      : "bottom right";
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-8px" }}
                  transition={{
                    delay: (i % 5) * 0.04 + Math.floor(i / 5) * 0.06,
                    type: "spring",
                    stiffness: 240,
                    damping: 18,
                  }}
                  style={{ transformOrigin: origin }}
                  whileHover={{ y: -5, boxShadow: "0 14px 36px rgba(99,102,241,0.22)" }}
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/60 p-3 text-center"
                >
                  <div className="flex h-[70px] w-[70px] items-center justify-center rounded-xl bg-white p-1">
                    <Image
                      src={tech.icon}
                      alt=""
                      width={70}
                      height={70}
                      className="max-h-[70px] max-w-[70px] object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-[9px] font-semibold leading-tight text-white/85 sm:text-[10px]">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
