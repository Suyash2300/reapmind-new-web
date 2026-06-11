import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { TexBenefits } from "@/components/top-expressjs/tex-benefits";
import { TexClients } from "@/components/top-expressjs/tex-clients";
import { TexEngagement } from "@/components/top-expressjs/tex-engagement";
import { TexFaq } from "@/components/top-expressjs/tex-faq";
import { TexHero } from "@/components/top-expressjs/tex-hero";
import { TexHireCta } from "@/components/top-expressjs/tex-hire-cta";
import { TexIndustries } from "@/components/top-expressjs/tex-industries";
import { TexInsights } from "@/components/top-expressjs/tex-insights";
import { TexMidHireCta } from "@/components/top-expressjs/tex-mid-hire-cta";
import { TexPortfolioScroll } from "@/components/top-expressjs/tex-portfolio-scroll";
import { TexProcess } from "@/components/top-expressjs/tex-process";
import { TexServices } from "@/components/top-expressjs/tex-services";
import { TexStats } from "@/components/top-expressjs/tex-stats";
import { TexTechStack } from "@/components/top-expressjs/tex-tech-stack";
import { TexWhyExpress } from "@/components/top-expressjs/tex-why-express";
import { TexWhyReapmind } from "@/components/top-expressjs/tex-why-reapmind";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

const { meta, consultation } = topExpressjsConfig;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    type: "website",
    images: [{ url: meta.ogImage }],
  },
};

export default function TopExpressjsDevelopmentCompanyPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <TexHero />
      <TexClients />
      <TexServices />
      <TexWhyExpress />
      <TexPortfolioScroll />
      <TexMidHireCta />
      <TexBenefits />
      <TexStats />
      <TexProcess />
      <TexHireCta />
      <TexWhyReapmind />
      <TexIndustries />
      <TexEngagement />
      <TexTechStack />
      <TexFaq />
      <TexInsights />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
