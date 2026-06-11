import type { Metadata } from "next";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { TrnmBenefits } from "@/components/top-react-native-mumbai/trnm-benefits";
import { TrnmClients } from "@/components/top-react-native-mumbai/trnm-clients";
import { TrnmEngagement } from "@/components/top-react-native-mumbai/trnm-engagement";
import { TrnmFaq } from "@/components/top-react-native-mumbai/trnm-faq";
import { TrnmHero } from "@/components/top-react-native-mumbai/trnm-hero";
import { TrnmHireCta } from "@/components/top-react-native-mumbai/trnm-hire-cta";
import { TrnmIndustries } from "@/components/top-react-native-mumbai/trnm-industries";
import { TrnmInsights } from "@/components/top-react-native-mumbai/trnm-insights";
import { TrnmPortfolio } from "@/components/top-react-native-mumbai/trnm-portfolio";
import { TrnmProcess } from "@/components/top-react-native-mumbai/trnm-process";
import { TrnmServices } from "@/components/top-react-native-mumbai/trnm-services";
import { TrnmStats } from "@/components/top-react-native-mumbai/trnm-stats";
import { TrnmTechStack } from "@/components/top-react-native-mumbai/trnm-tech-stack";
import { TrnmWhyReactNative } from "@/components/top-react-native-mumbai/trnm-why-react-native";
import { TrnmWhyReapmind } from "@/components/top-react-native-mumbai/trnm-why-reapmind";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

const { meta, consultation } = topReactNativeMumbaiConfig;

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

export default function TopReactNativeDevelopmentCompanyInMumbaiPage() {
  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <TrnmHero />
      <TrnmClients />
      <TrnmServices />
      <TrnmPortfolio />
      <TrnmWhyReactNative />
      <TrnmBenefits />
      <TrnmStats />
      <TrnmProcess />
      <TrnmHireCta />
      <TrnmWhyReapmind />
      <TrnmIndustries />
      <TrnmEngagement />
      <TrnmTechStack />
      <TrnmFaq />
      <TrnmInsights />
      <AmConsultationSection consultation={consultation} />
      <CompanyLocations />
    </main>
  );
}
