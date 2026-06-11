import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { IsbArticlePage } from "@/components/instashop-blog/isb-article-page";
import { instashopBlogConfig } from "@/lib/instashop-blog-config";

const { meta, consultation, article } = instashopBlogConfig;

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

export default function InstashopGroceryAppCostPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-primary-foreground">
      <IsbArticlePage config={instashopBlogConfig} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
