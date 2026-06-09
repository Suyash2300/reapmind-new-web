"use client";

import { motion } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal, mvpMotionVariants } from "@/components/mvp/mvp-motion";

export function MvpWhyUs() {
  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <MvpReveal variant="fadeRight" className="mb-16 max-w-3xl">
          <h2 className="text-display font-black leading-tight text-white">{mvpConfig.whyUs.title}</h2>
        </MvpReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mvpConfig.whyUs.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={mvpMotionVariants[i % 3 === 0 ? "blurIn" : i % 3 === 1 ? "scaleIn" : "rotateIn"]}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8"
            >
              <motion.div
                className="absolute inset-0 bg-primary/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <h3 className="relative text-h5 font-bold text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="relative mt-4 text-para leading-relaxed text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
