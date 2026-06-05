"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { lifeConfig } from "@/lib/life-config";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";

export function LifeCulture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="section-app bg-surface-dark py-32 overflow-hidden">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden bg-white/5">
            <motion.div style={{ y, height: "140%" }} className="absolute inset-x-0 -top-[20%] w-full">
              <Image
                src={lifeConfig.culture.image}
                alt="Culture"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]" />
          </div>

          <div className="order-1 lg:order-2">
            <GsapScrollReveal>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                {lifeConfig.culture.title}
              </span>
              <h2 className="mt-6 text-display font-bold leading-none text-white">
                {lifeConfig.culture.heading}
              </h2>
              
              <div className="mt-10 space-y-8">
                {lifeConfig.culture.paragraphs.map((p, i) => (
                  <p key={i} className="text-h4 text-white/70 leading-relaxed font-medium">
                    {p}
                  </p>
                ))}
              </div>
            </GsapScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
