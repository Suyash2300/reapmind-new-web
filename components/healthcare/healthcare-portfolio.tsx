"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";
import Image from "next/image";
import Link from "next/link";

export function HealthcarePortfolio() {
  const { title, items } = healthcareConfig.portfolio;
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: trackRef });
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  const colors = [
    "from-blue-900/40 to-blue-600/20",
    "from-emerald-900/40 to-emerald-600/20",
    "from-purple-900/40 to-purple-600/20",
    "from-orange-900/40 to-orange-600/20",
    "from-primary/40 to-primary/10",
  ];

  return (
    <section className="bg-surface-dark py-24 border-t border-white/5 overflow-hidden">
      <div className="container-app mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-h2 font-bold text-primary-foreground mb-4"
        >
          {title}
        </motion.h2>
        <p className="text-white/60 text-lg max-w-2xl">
          Explore our successful case studies demonstrating how we transform healthcare businesses.
        </p>

        {/* Scroll progress bar */}
        <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/60"
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.5rem,calc((100vw-80rem)/2))] pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="relative w-[min(88vw,480px)] shrink-0 snap-center rounded-[2rem] border border-white/10 overflow-hidden bg-[#0c0c0c] flex flex-col group"
          >
            {/* Image Section */}
            <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/5">
              <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-40 z-0`} />
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 z-10"
                  sizes="(max-width: 768px) 88vw, 480px"
                />
              )}
            </div>

            {/* Content Section */}
            <div className="relative p-8 md:p-10 flex-1 flex flex-col z-20">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 mb-6 self-start">
                <span className="text-sm font-medium text-white/90">Case Study 0{index + 1}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed mb-8 line-clamp-3">{item.description}</p>

              <div className="flex flex-wrap items-center gap-6 mb-8 mt-auto">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Downloads</p>
                  <p className="text-xl font-bold text-white">{item.downloads}</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">Active Users</p>
                  <p className="text-xl font-bold text-white">{item.users}</p>
                </div>
              </div>

              <Link
                href="/portfolio-reapmind"
                className="inline-flex items-center gap-2 text-primary hover:text-white font-semibold transition-colors group/btn text-base mt-2 self-start"
              >
                View Case Study
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

