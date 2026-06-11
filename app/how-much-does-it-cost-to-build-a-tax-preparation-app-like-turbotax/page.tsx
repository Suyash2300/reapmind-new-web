import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { TtxArticlePage } from "@/components/turbotax-blog/ttx-article-page";
import { turbotaxBlogConfig } from "@/lib/turbotax-blog-config";

const { meta, consultation, article } = turbotaxBlogConfig;

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

export default function TurbotaxAppCostPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-primary-foreground">
      <TtxArticlePage config={turbotaxBlogConfig} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
