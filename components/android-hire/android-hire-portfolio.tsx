"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { androidHireConfig } from "@/lib/android-hire-config";

export function AndroidHirePortfolio() {
  const { portfolio } = androidHireConfig;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const item = portfolio.items[index];

  const go = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  };

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, rotateX: 12 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          style={{ perspective: 1000 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{portfolio.title}</h2>
          <p className="mt-6 text-para text-white/65">{portfolio.subtitle}</p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 sm:min-h-[500px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                custom={dir}
                initial={{ opacity: 0, rotateY: dir > 0 ? 70 : -70, x: dir > 0 ? 80 : -80 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: dir > 0 ? -70 : 70, x: dir > 0 ? -80 : 80 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1200 }}
                className="absolute inset-0 flex flex-col"
              >
                <div className="relative m-5 flex-1 overflow-hidden rounded-[1.5rem] bg-[#f5f5f5] sm:m-8">
                  <Image src={item.image} alt={item.title} fill className="object-contain p-4" sizes="900px" />
                </div>
                <div className="px-8 pb-8 text-center">
                  <span className="rounded-full border border-primary/40 bg-primary/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-h3 font-bold text-white">{item.title}</h3>
                </div>
              </motion.a>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go((index - 1 + portfolio.items.length) % portfolio.items.length)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 hover:border-primary"
            >
              ←
            </button>
            {portfolio.items.map((p, i) => (
              <button
                key={p.title}
                type="button"
                aria-label={p.title}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2 bg-white/30"}`}
              />
            ))}
            <button
              type="button"
              aria-label="Next"
              onClick={() => go((index + 1) % portfolio.items.length)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 hover:border-primary"
            >
              →
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href={portfolio.viewMoreHref}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 px-8 font-bold text-white transition-colors hover:border-primary hover:text-primary"
            >
              {portfolio.viewMoreLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
