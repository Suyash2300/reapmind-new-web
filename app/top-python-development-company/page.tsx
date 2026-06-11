import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { TpyBenefits } from "@/components/top-python/tpy-benefits";
import { TpyClients } from "@/components/top-python/tpy-clients";
import { TpyEngagement } from "@/components/top-python/tpy-engagement";
import { TpyFaq } from "@/components/top-python/tpy-faq";
import { TpyHero } from "@/components/top-python/tpy-hero";
import { TpyHireCta } from "@/components/top-python/tpy-hire-cta";
import { TpyIndustries } from "@/components/top-python/tpy-industries";
import { TpyInsights } from "@/components/top-python/tpy-insights";
import { TpyMidHireCta } from "@/components/top-python/tpy-mid-hire-cta";
import { TpyPortfolioScroll } from "@/components/top-python/tpy-portfolio-scroll";
import { TpyProcess } from "@/components/top-python/tpy-process";
import { TpyServices } from "@/components/top-python/tpy-services";
import { TpyStats } from "@/components/top-python/tpy-stats";
import { TpyTechStack } from "@/components/top-python/tpy-tech-stack";
import { TpyWhyPython } from "@/components/top-python/tpy-why-python";
import { TpyWhyReapmind } from "@/components/top-python/tpy-why-reapmind";
import { topPythonConfig } from "@/lib/top-python-config";

const { meta, consultation } = topPythonConfig;

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

export default function TopPythonDevelopmentCompanyPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <TpyHero />
      <TpyClients />
      <TpyServices />
      <TpyWhyPython />
      <TpyPortfolioScroll />
      <TpyMidHireCta />
      <TpyBenefits />
      <TpyStats />
      <TpyProcess />
      <TpyHireCta />
      <TpyWhyReapmind />
      <TpyIndustries />
      <TpyEngagement />
      <TpyTechStack />
      <TpyFaq />
      <TpyInsights />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
