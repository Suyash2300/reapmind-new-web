"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal, mvpStaggerContainer, mvpMotionVariants } from "@/components/mvp/mvp-motion";

export function MvpInsights() {
  return (
    <section className="section-app border-t border-white/5 bg-black py-32">
      <div className="container-app">
        <MvpReveal variant="fadeLeft" className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-display font-bold text-white">{mvpConfig.insights.title}</h2>
          <Link
            href="/blogs"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-bold text-white hover:bg-white hover:text-black"
          >
            View all insights
          </Link>
        </MvpReveal>

        <motion.div
          className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={mvpStaggerContainer}
        >
          {mvpConfig.insights.articles.map((article) => (
            <motion.div key={article.title} variants={mvpMotionVariants.fadeUp} className="h-full">
              <Link href={article.link} className="group block h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface-dark"
                >
                  <div className="relative aspect-video w-full shrink-0 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-2 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider text-white/50">
                      <span className="text-primary">{article.category}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="line-clamp-3 flex-1 text-base font-bold leading-snug text-white group-hover:text-primary sm:text-lg">
                      {article.title}
                    </h3>
                    <p className="mt-4 pt-4 text-xs text-white/50">By {article.author}</p>
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
