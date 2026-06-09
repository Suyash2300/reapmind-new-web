"use client";

import { motion } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal, mvpStaggerFast, mvpMotionVariants } from "@/components/mvp/mvp-motion";

export function MvpBenefits() {
  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <MvpReveal variant="fadeUp" className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-h2 font-black leading-tight text-white md:text-display">{mvpConfig.benefits.title}</h2>
        </MvpReveal>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={mvpStaggerFast}
        >
          {mvpConfig.benefits.items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={mvpMotionVariants[i % 2 === 0 ? "fadeLeft" : "fadeRight"]}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              className="group flex h-full gap-5 rounded-2xl border border-white/5 bg-black/50 p-6 sm:p-8"
            >
              <motion.span
                animate={{ rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: i * 0.3 }}
                className="text-4xl font-black leading-none text-primary/30 group-hover:text-primary"
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>
              <div>
                <h3 className="text-h5 font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="mt-3 text-para leading-relaxed text-white/60">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
