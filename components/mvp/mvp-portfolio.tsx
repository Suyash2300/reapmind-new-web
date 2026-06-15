"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal, mvpStaggerContainer, mvpMotionVariants } from "@/components/mvp/mvp-motion";

export function MvpPortfolio() {
  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <MvpReveal variant="clipUp">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Portfolio</span>
          <h2 className="mt-4 text-display font-bold text-white">Our Recent Works</h2>
        </MvpReveal>

        <motion.div
          className="mt-16 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={mvpStaggerContainer}
        >
          {mvpConfig.portfolio.map((item) => (
            <motion.div key={item.title} variants={mvpMotionVariants.scaleIn} className="h-full">
              <Link href={item.link} className="block h-full">
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-xl shadow-black/40 sm:min-h-[360px]"
                >
                  <div className="relative m-3 flex-1 overflow-hidden rounded-[1.25rem] bg-[#f4f4f5] sm:m-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03] sm:p-3"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="relative z-20 shrink-0 bg-gradient-to-t from-black via-black to-transparent px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
                    <span className="inline-block rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                      {item.category}
                    </span>
                    <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug text-white transition-colors group-hover:text-primary sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-white/50 opacity-0 transition-opacity group-hover:opacity-100">
                      View case study
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </p>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
