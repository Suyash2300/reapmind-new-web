import { IsbArticleBody } from "@/components/instashop-blog/isb-article-body";
import { IsbCostStrip } from "@/components/instashop-blog/isb-cost-strip";
import { IsbHero } from "@/components/instashop-blog/isb-hero";
import { IsbReadProgress } from "@/components/instashop-blog/isb-read-progress";
import type { instashopBlogConfig } from "@/lib/instashop-blog-config";

type IsbArticlePageProps = {
  config: typeof instashopBlogConfig;
};

export function IsbArticlePage({ config }: IsbArticlePageProps) {
  const { article, breadcrumb, tableOfContents, sections, relatedArticles, pageCta } = config;

  return (
    <>
      <IsbReadProgress />
      <IsbHero
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
      <IsbCostStrip items={article.heroHighlights} />
      <IsbArticleBody
        sections={sections}
        navItems={tableOfContents}
        relatedArticles={relatedArticles}
        pageCta={pageCta}
      />
    </>
  );
}
