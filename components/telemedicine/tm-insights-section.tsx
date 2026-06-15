"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { telemedicineInsights } from "@/lib/telemedicine-config";

type TmInsightsSectionProps = {
  title?: string;
};

export function TmInsightsSection({ title = "Latest Insights" }: TmInsightsSectionProps) {
  return (
    <section className="section-app border-t border-white/5 bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-8">
          <GsapScrollReveal>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Resources</span>
            <h2 className="mt-4 text-h2 font-bold leading-none text-white sm:text-display">{title}</h2>
          </GsapScrollReveal>
          <GsapScrollReveal className="shrink-0">
            <Link
              href="/blogs"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-bold text-white transition-all hover:bg-white hover:text-black"
            >
              View all insights
            </Link>
          </GsapScrollReveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {telemedicineInsights.map((article, i) => (
            <GsapScrollReveal key={`${article.link}-${article.date}-${i}`} start={`top ${84 + i * 3}%`}>
              <Link href={article.link} className="group block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-black transition-colors duration-500 hover:border-primary/30"
                >
                  <div className="relative aspect-[16/10] bg-[#050505]">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white/50">
                      <span className="text-primary">{article.category}</span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="flex-1 text-h5 font-bold leading-snug text-white transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-sm text-white/50">By {article.author}</p>
                  </div>
                </motion.div>
              </Link>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
