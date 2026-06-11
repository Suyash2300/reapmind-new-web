import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { TgoBenefits } from "@/components/top-golang/tgo-benefits";
import { TgoClients } from "@/components/top-golang/tgo-clients";
import { TgoEngagement } from "@/components/top-golang/tgo-engagement";
import { TgoFaq } from "@/components/top-golang/tgo-faq";
import { TgoHero } from "@/components/top-golang/tgo-hero";
import { TgoHireCta } from "@/components/top-golang/tgo-hire-cta";
import { TgoIndustries } from "@/components/top-golang/tgo-industries";
import { TgoInsights } from "@/components/top-golang/tgo-insights";
import { TgoMidHireCta } from "@/components/top-golang/tgo-mid-hire-cta";
import { TgoPortfolioScroll } from "@/components/top-golang/tgo-portfolio-scroll";
import { TgoProcess } from "@/components/top-golang/tgo-process";
import { TgoServices } from "@/components/top-golang/tgo-services";
import { TgoStandout } from "@/components/top-golang/tgo-standout";
import { TgoStats } from "@/components/top-golang/tgo-stats";
import { TgoTechStack } from "@/components/top-golang/tgo-tech-stack";
import { TgoWhyGolang } from "@/components/top-golang/tgo-why-golang";
import { TgoWhyReapmind } from "@/components/top-golang/tgo-why-reapmind";
import { topGolangConfig } from "@/lib/top-golang-config";

const { meta, consultation } = topGolangConfig;

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

export default function TopGolangDevelopmentCompanyPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <TgoHero />
      <TgoClients />
      <TgoServices />
      <TgoStandout />
      <TgoWhyGolang />
      <TgoPortfolioScroll />
      <TgoMidHireCta />
      <TgoBenefits />
      <TgoStats />
      <TgoProcess />
      <TgoHireCta />
      <TgoWhyReapmind />
      <TgoIndustries />
      <TgoEngagement />
      <TgoTechStack />
      <TgoFaq />
      <TgoInsights />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
