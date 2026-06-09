import Link from "next/link";
import { BlogArticleContent, BlogTableOfContents } from "@/components/blog/blog-article-content";
import { BlogArticleHero } from "@/components/blog/blog-article-hero";
import type { BlogSection } from "@/lib/nearshoring-offshoring-blog-config";

type BlogArticleLayoutProps = {
  article: {
    category: string;
    author: string;
    date: string;
    heading: string;
    excerpt?: string;
    heroBackgroundImage: string;
    heroHighlights?: readonly { value: string; label: string }[];
  };
  tableOfContents: readonly { id: string; label: string }[];
  sections: readonly BlogSection[];
  cta?: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

export function BlogArticleLayout({
  article,
  tableOfContents,
  sections,
  cta,
}: BlogArticleLayoutProps) {
  return (
    <>
      <BlogArticleHero
        category={article.category}
        author={article.author}
        date={article.date}
        heading={article.heading}
        excerpt={article.excerpt}
        heroBackgroundImage={article.heroBackgroundImage}
        highlights={article.heroHighlights}
      />

      <section className="relative overflow-hidden bg-black py-10 text-primary-foreground md:py-12 lg:py-14">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(26,105,253,0.08),transparent_70%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"
          aria-hidden
        />

        <div className="container-app relative">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] xl:gap-12">
            <aside className="hidden lg:block">
              <BlogTableOfContents items={tableOfContents} />
            </aside>

            <div className="min-w-0">
              <details className="group mb-6 overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/80 backdrop-blur-sm lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-bold text-white [&::-webkit-details-marker]:hidden">
                  Table of Contents
                  <span className="text-primary transition-transform group-open:rotate-180" aria-hidden>
                    ▾
                  </span>
                </summary>
                <nav aria-label="Table of contents" className="space-y-2 border-t border-white/8 px-5 py-4">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </details>

              <div className="rounded-[1.75rem] border border-white/10 bg-surface-elevated/35 p-5 shadow-[0_24px_80px_-40px_rgba(26,105,253,0.35)] backdrop-blur-sm sm:p-7 md:p-9 lg:p-10">
                <BlogArticleContent sections={sections} />
              </div>

              {cta ? (
                <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-primary/35 p-6 sm:mt-10 sm:p-8">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(26,105,253,0.18)_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]"
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Next step</p>
                    <h2 className="mt-3 text-h4 font-bold text-white sm:text-h3">{cta.title}</h2>
                    <p className="mt-3 max-w-2xl text-para leading-relaxed text-white/65">{cta.body}</p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Link
                        href={cta.primaryHref}
                        className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                      >
                        {cta.primaryLabel}
                      </Link>
                      <Link
                        href={cta.secondaryHref}
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-8 text-sm font-semibold text-white transition-colors hover:border-white/40"
                      >
                        {cta.secondaryLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
