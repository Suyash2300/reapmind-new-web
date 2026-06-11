import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { DsbArticlePage } from "@/components/doorstep-banking-blog/dsb-article-page";
import { doorstepBankingBlogConfig } from "@/lib/doorstep-banking-blog-config";

const { meta, consultation, article } = doorstepBankingBlogConfig;

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

export default function DoorstepBankingAppCostPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-primary-foreground">
      <DsbArticlePage config={doorstepBankingBlogConfig} />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
