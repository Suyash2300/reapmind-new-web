import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { NsArticlePage } from "@/components/nearshoring-blog/ns-article-page";
import { CompanyLocations } from "@/components/company/company-locations";
import { nearshoringOffshoringBlogConfig } from "@/lib/nearshoring-offshoring-blog-config";

export const metadata: Metadata = {
  title: nearshoringOffshoringBlogConfig.meta.title,
  description: nearshoringOffshoringBlogConfig.meta.description,
  alternates: {
    canonical: nearshoringOffshoringBlogConfig.meta.canonical,
  },
  openGraph: {
    title: nearshoringOffshoringBlogConfig.meta.title,
    description: nearshoringOffshoringBlogConfig.meta.description,
    url: nearshoringOffshoringBlogConfig.meta.canonical,
    type: "article",
    publishedTime: "2023-11-24",
    authors: [nearshoringOffshoringBlogConfig.article.author],
  },
};

export default function NearshoringOffshoringBlogPage() {
  const { article, tableOfContents, sections, relatedArticles, consultation } =
    nearshoringOffshoringBlogConfig;

  return (
    <main className="flex flex-col bg-black text-primary-foreground">
      <NsArticlePage
        article={{
          category: article.category,
          author: article.author,
          date: article.date,
          heading: article.heading,
          excerpt: article.excerpt,
          heroHighlights: article.heroHighlights,
        }}
        tableOfContents={tableOfContents}
        sections={sections}
        relatedArticles={relatedArticles}
        cta={{
          title: "Build your offshore or nearshore team with confidence",
          body: "ReapMind helps companies in the US and Europe set up offshore development centers in India — with vetted engineers, clear delivery models, and up to 30% cost reduction.",
          primaryLabel: "Book a consultation",
          primaryHref: "/contact-us#free-consultation",
          secondaryLabel: "Offshore services",
          secondaryHref: "/offshore-development-company-in-bangalore",
        }}
      />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
