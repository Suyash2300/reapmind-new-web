"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";

type InsightArticle = {
  title: string;
  category: string;
  date: string;
  author: string;
  link: string;
};

type ServiceInsightsSectionProps = {
  title?: string;
  articles: InsightArticle[];
};

export function ServiceInsightsSection({
  title = "Latest Insights",
  articles,
}: ServiceInsightsSectionProps) {
  return (
    <section className="section-app border-t border-white/5 bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-8">
          <GsapScrollReveal>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Resources
            </span>
            <h2 className="mt-4 text-h2 font-bold leading-none text-white sm:text-display">
              {title}
            </h2>
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
          {articles.map((article, i) => (
            <GsapScrollReveal
              key={`${article.link}-${article.date}`}
              start={`top ${84 + i * 3}%`}
            >
              <Link href={article.link} className="group block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="flex h-full flex-col rounded-3xl border border-white/5 bg-black p-6 transition-colors duration-500 hover:border-primary/30 sm:p-8"
                >
                  <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white/50">
                    <span className="text-primary">{article.category}</span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="flex-1 text-h5 font-bold leading-snug text-white transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-sm text-white/50">By {article.author}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Read more
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </motion.div>
              </Link>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
