"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

export function TrnmPortfolio() {
  const { caseStudies } = topReactNativeMumbaiConfig;
  const reducedMotion = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start end", "end start"] });
  const trackX = useTransform(scrollYProgress, [0, 1], ["2%", "-8%"]);

  return (
    <section ref={trackRef} className="overflow-hidden bg-[#0b0f14] py-14 md:py-20" aria-label="Portfolio case studies">
      <motion.div
        style={reducedMotion ? undefined : { x: trackX }}
        className="flex gap-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none] snap-x snap-mandatory md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.id}
            initial={reducedMotion ? false : { opacity: 0, rotateY: -25, z: -80 }}
            whileInView={{ opacity: 1, rotateY: index * -3, z: index * 12 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            whileHover={reducedMotion ? undefined : { y: -14, rotateY: 0, scale: 1.02, zIndex: 50 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1200,
              zIndex: index,
              marginTop: index % 2 === 1 ? 24 : 0,
            }}
            className="w-[min(90vw,420px)] shrink-0 snap-center"
          >
            <div className="overflow-hidden rounded-3xl border border-[#61DAFB]/20 bg-black/50 shadow-[0_30px_80px_-20px_rgba(97,218,251,0.25)] backdrop-blur-xl">
              <div className="relative aspect-[16/10]">
                <Image src={study.image} alt={study.title} fill className="object-cover" sizes="420px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white">{study.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-white/60">{study.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#61DAFB]">Results</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-[#61DAFB]/5 p-3 text-center">
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-[11px] text-white/55">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
