import { companyConfig } from "@/lib/company-config";
import { CompanyHero } from "@/components/company/company-hero";
import { CompanyStats } from "@/components/company/company-stats";
import { CompanyExperience } from "@/components/company/company-experience";
import { CompanyServices } from "@/components/company/company-services";
import { CompanyWhyUs } from "@/components/company/company-why-us";
import { CompanyValues } from "@/components/company/company-values";
import { CompanyLocations } from "@/components/company/company-locations";
import { CompanyCTA } from "@/components/company/company-cta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | ReapMind Innovations",
  description: companyConfig.hero.description,
};

export default function CompanyPage() {
  return (
    <main className="flex flex-col bg-surface-dark text-primary-foreground">
      <CompanyHero />
      <CompanyStats />
      <CompanyServices />
      <CompanyWhyUs />
      <CompanyExperience />
      <CompanyValues />
      <CompanyLocations />
      <CompanyCTA />
    </main>
  );
}

