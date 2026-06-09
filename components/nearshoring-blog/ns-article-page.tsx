import Link from "next/link";
import { NsArticleBody } from "@/components/nearshoring-blog/ns-article-body";
import { NsHero } from "@/components/nearshoring-blog/ns-hero";
import { NsMetricsStrip } from "@/components/nearshoring-blog/ns-metrics-strip";
import { NsReadProgress } from "@/components/nearshoring-blog/ns-read-progress";
import type { BlogSection } from "@/lib/nearshoring-offshoring-blog-config";

type NsArticlePageProps = {
  article: {
    category: string;
    author: string;
    date: string;
    heading: string;
    excerpt: string;
    heroHighlights: readonly { value: string; label: string }[];
  };
  tableOfContents: readonly { id: string; label: string }[];
  sections: readonly BlogSection[];
  relatedArticles: readonly {
    title: string;
    category: string;
    date: string;
    author: string;
    link: string;
  }[];
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

export function NsArticlePage({
  article,
  tableOfContents,
  sections,
  relatedArticles,
  cta,
}: NsArticlePageProps) {
  return (
    <>
      <NsReadProgress />
      <NsHero
        category={article.category}
        author={article.author}
        date={article.date}
        heading={article.heading}
        excerpt={article.excerpt}
      />
      <NsMetricsStrip items={article.heroHighlights} />

      <div className="bg-black text-primary-foreground">
        <NsArticleBody sections={sections} navItems={tableOfContents} />

        <section className="border-t border-white/[0.06]">
          <div className="container-app grid gap-8 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12 lg:py-20">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Work with ReapMind</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">{cta.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-white/50">{cta.body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link
                href={cta.primaryHref}
                className="inline-flex min-h-12 items-center justify-center bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {cta.primaryLabel}
              </Link>
              <Link
                href={cta.secondaryHref}
                className="inline-flex min-h-12 items-center justify-center border border-white/20 px-8 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                {cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] bg-[#050505] py-14 lg:py-16">
          <div className="container-app">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-lg font-semibold text-white">Continue reading</h2>
              <Link href="/blogs" className="text-sm text-white/45 transition-colors hover:text-white">
                All insights →
              </Link>
            </div>
            <ul className="mt-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {relatedArticles.map((post) => (
                <li key={post.title}>
                  <Link
                    href={post.link}
                    className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="max-w-2xl text-base font-medium text-white/85 transition-colors group-hover:text-white">
                      {post.title}
                    </span>
                    <span className="shrink-0 text-xs uppercase tracking-[0.12em] text-white/35">{post.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
