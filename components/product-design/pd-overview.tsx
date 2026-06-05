"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { productDesignConfig } from "@/lib/product-design-config";

export function PdOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="section-app bg-surface-dark py-32 overflow-hidden">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div>
            <GsapScrollReveal>
              <h2 className="text-display font-bold text-white leading-none tracking-tight">
                {productDesignConfig.overview.title}
              </h2>
              <div className="mt-10 space-y-6">
                {productDesignConfig.overview.paragraphs.map((p, i) => (
                  <p key={i} className="text-para text-white/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/contact-reapmind"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 font-bold text-white hover:scale-105 transition-transform"
                >
                  {productDesignConfig.overview.cta}
                </Link>
              </div>
            </GsapScrollReveal>
          </div>

          {/* Image */}
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden bg-white/5">
            <motion.div style={{ y: imgY }} className="absolute inset-x-0 h-[120%] -top-[10%]">
              <Image
                src={productDesignConfig.overview.image}
                alt="Product Development"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
