import { DsbArticleBody } from "@/components/doorstep-banking-blog/dsb-article-body";
import { DsbHero } from "@/components/doorstep-banking-blog/dsb-hero";
import { DsbMetricsStrip } from "@/components/doorstep-banking-blog/dsb-metrics-strip";
import { DsbReadProgress } from "@/components/doorstep-banking-blog/dsb-read-progress";
import type { doorstepBankingBlogConfig } from "@/lib/doorstep-banking-blog-config";

export function DsbArticlePage({ config }: { config: typeof doorstepBankingBlogConfig }) {
  const { article, breadcrumb, tableOfContents, sections, relatedArticles, pageCta } = config;

  return (
    <>
      <DsbReadProgress />
      <DsbHero
        breadcrumb={breadcrumb}
        category={article.category}
        author={article.author}
        date={article.date}
        isoDate={article.isoDate}
        heading={article.heading}
        excerpt={article.excerpt}
        heroImage={article.heroImage}
        heroImageAlt={article.heroImageAlt}
      />
      <DsbMetricsStrip items={article.heroHighlights} />
      <DsbArticleBody
        sections={sections}
        navItems={tableOfContents}
        relatedArticles={relatedArticles}
        pageCta={pageCta}
      />
    </>
  );
}
