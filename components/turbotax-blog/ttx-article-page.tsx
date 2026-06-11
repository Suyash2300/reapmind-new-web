import { TtxArticleBody } from "@/components/turbotax-blog/ttx-article-body";
import { TtxHero } from "@/components/turbotax-blog/ttx-hero";
import { TtxMetricsStrip } from "@/components/turbotax-blog/ttx-metrics-strip";
import { TtxReadProgress } from "@/components/turbotax-blog/ttx-read-progress";
import type { turbotaxBlogConfig } from "@/lib/turbotax-blog-config";

export function TtxArticlePage({ config }: { config: typeof turbotaxBlogConfig }) {
  const { article, breadcrumb, tableOfContents, sections, relatedArticles, pageCta } = config;

  return (
    <>
      <TtxReadProgress />
      <TtxHero
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
      <TtxMetricsStrip items={article.heroHighlights} />
      <TtxArticleBody
        sections={sections}
        navItems={tableOfContents}
        relatedArticles={relatedArticles}
        pageCta={pageCta}
      />
    </>
  );
}
