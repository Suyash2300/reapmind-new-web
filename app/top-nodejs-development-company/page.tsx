import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { TnjBenefits } from "@/components/top-nodejs/tnj-benefits";
import { TnjClients } from "@/components/top-nodejs/tnj-clients";
import { TnjEngagement } from "@/components/top-nodejs/tnj-engagement";
import { TnjFaq } from "@/components/top-nodejs/tnj-faq";
import { TnjHero } from "@/components/top-nodejs/tnj-hero";
import { TnjHireCta } from "@/components/top-nodejs/tnj-hire-cta";
import { TnjIndustries } from "@/components/top-nodejs/tnj-industries";
import { TnjInsights } from "@/components/top-nodejs/tnj-insights";
import { TnjPortfolioScroll } from "@/components/top-nodejs/tnj-portfolio-scroll";
import { TnjProcess } from "@/components/top-nodejs/tnj-process";
import { TnjServices } from "@/components/top-nodejs/tnj-services";
import { TnjStandout } from "@/components/top-nodejs/tnj-standout";
import { TnjStats } from "@/components/top-nodejs/tnj-stats";
import { TnjTechStack } from "@/components/top-nodejs/tnj-tech-stack";
import { TnjWhyNodejs } from "@/components/top-nodejs/tnj-why-nodejs";
import { TnjWhyReapmind } from "@/components/top-nodejs/tnj-why-reapmind";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

const { meta, consultation } = topNodejsConfig;

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

export default function TopNodejsDevelopmentCompanyPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <TnjHero />
      <TnjClients />
      <TnjServices />
      <TnjPortfolioScroll />
      <TnjStandout />
      <TnjWhyNodejs />
      <TnjBenefits />
      <TnjStats />
      <TnjProcess />
      <TnjHireCta />
      <TnjWhyReapmind />
      <TnjIndustries />
      <TnjEngagement />
      <TnjTechStack />
      <TnjFaq />
      <TnjInsights />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
