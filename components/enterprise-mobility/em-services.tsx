"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmServices() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-app bg-black py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Services</span>
          <h2 className="mt-4 text-display font-bold text-white leading-none max-w-3xl">
            {enterpriseMobilityConfig.services.title}
          </h2>
          <p className="mt-6 text-h6 text-white/70 leading-relaxed font-normal max-w-4xl">
            {enterpriseMobilityConfig.services.subtitle}
          </p>
        </GsapScrollReveal>

        <div className="mt-20 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Tabs */}
          <div className="flex flex-col gap-3">
            {enterpriseMobilityConfig.services.items.map((service, i) => (
              <GsapScrollReveal key={service.title} start={`top ${80 + i * 4}%`}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-8 rounded-2xl border transition-all duration-500 ${
                    active === i
                      ? "bg-primary/10 border-primary"
                      : "bg-white/3 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-sm font-bold uppercase tracking-widest ${active === i ? "text-primary" : "text-white/40"}`}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className={`text-h3 font-bold transition-colors ${active === i ? "text-primary" : "text-white"}`}>
                    {service.title}
                  </h3>
                  <AnimatePresence>
                    {active === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden text-para text-white/60"
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              </GsapScrollReveal>
            ))}
          </div>

          {/* Image */}
          <div className="sticky top-28 hidden lg:block">
            <div className="relative h-[560px] rounded-3xl overflow-hidden ring-1 ring-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Image
                    src={enterpriseMobilityConfig.services.items[active].image || ""}
                    alt={enterpriseMobilityConfig.services.items[active].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <motion.div
                    key={`label-${active}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="absolute bottom-8 left-8"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                      0{active + 1} / 0{enterpriseMobilityConfig.services.items.length}
                    </span>
                    <p className="mt-1 text-h3 font-bold text-white">
                      {enterpriseMobilityConfig.services.items[active].title}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
