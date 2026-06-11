import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { D2cArticlePage } from "@/components/d2c-app-cost-blog/d2c-article-page";
import { d2cAppCostBlogConfig } from "@/lib/d2c-app-cost-blog-config";

const { meta, consultation, article } = d2cAppCostBlogConfig;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    type: "article",
    publishedTime: article.isoDate,
    authors: [article.author],
    images: [{ url: meta.ogImage }],
  },
};

export default function D2cAppDevelopmentCostPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-primary-foreground">
      <D2cArticlePage config={d2cAppCostBlogConfig} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
