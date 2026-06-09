"use client";

import { motion } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal } from "@/components/mvp/mvp-motion";

export function MvpTechStack() {
  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <MvpReveal variant="rotateIn" className="mb-16 text-center">
          <h2 className="text-display font-black text-white">{mvpConfig.techStack.title}</h2>
        </MvpReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:gap-5">
          {mvpConfig.techStack.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                type: i === 0 ? "spring" : "tween",
                stiffness: 120,
              }}
              whileHover={{ y: -6, borderColor: "rgba(var(--color-primary), 0.5)" }}
              className={`flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 ${
                i === 0 ? "lg:col-span-3" : i === 1 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8 + i * 2, ease: "linear" }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10"
              >
                <span className="text-lg font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
              </motion.div>
              <div>
                <h3 className="text-h5 font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
