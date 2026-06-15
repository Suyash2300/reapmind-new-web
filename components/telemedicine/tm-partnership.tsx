"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

export function TmPartnership() {
  const { bridge } = telemedicineConfig;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const layer1 = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const layer2 = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="tm-partnership-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div style={{ y: layer1 }} className="absolute -right-20 top-0 h-[70%] w-[45%] opacity-30">
          <Image src="/telemedicine/Teams-rl7hpeyg0j7fmvixa3ucfr60r7b50ck8pjrhmofnz4.jpeg" alt="" fill className="object-cover" sizes="45vw" />
        </motion.div>
        <motion.div style={{ y: layer2 }} className="absolute -left-16 bottom-0 h-1/2 w-1/3 opacity-20">
          <Image src="/telemedicine/doctor.png" alt="" fill className="object-contain object-left-bottom p-6" sizes="33vw" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/70" />
      </div>

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="tm-partnership-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {bridge.title}
        </BlurFadeIn>

        <div className="mt-8 max-w-4xl space-y-5">
          {bridge.paragraphs.map((para, i) => (
            <BlurFadeIn key={`partner-${i}`} delay={0.05 * i}>
              <p className="text-para leading-relaxed text-white/68">
                <WordReveal text={para} delay={0.06 + i * 0.03} />
              </p>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
