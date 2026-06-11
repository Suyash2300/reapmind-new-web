import { D2cArticleBody } from "@/components/d2c-app-cost-blog/d2c-article-body";
import { D2cHero } from "@/components/d2c-app-cost-blog/d2c-hero";
import { D2cMetricsStrip } from "@/components/d2c-app-cost-blog/d2c-metrics-strip";
import { D2cReadProgress } from "@/components/d2c-app-cost-blog/d2c-read-progress";
import type { d2cAppCostBlogConfig } from "@/lib/d2c-app-cost-blog-config";

export function D2cArticlePage({ config }: { config: typeof d2cAppCostBlogConfig }) {
  const { article, breadcrumb, tableOfContents, sections, relatedArticles, pageCta } = config;

  return (
    <>
      <D2cReadProgress />
      <D2cHero
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
      <D2cMetricsStrip items={article.heroHighlights} />
      <D2cArticleBody
        sections={sections}
        navItems={tableOfContents}
        relatedArticles={relatedArticles}
        pageCta={pageCta}
      />
    </>
  );
}
