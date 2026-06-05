import { Metadata } from "next";
import { mumbaiModConfig } from "@/lib/mumbai-mod-config";
import { MmHero } from "@/components/mumbai-mod/mm-hero";
import { MmWhyChoose } from "@/components/mumbai-mod/mm-why-choose";
import { MmProcess } from "@/components/mumbai-mod/mm-process";
import { EmPortfolio } from "@/components/enterprise-mobility/em-portfolio";
import { MmServices } from "@/components/mumbai-mod/mm-services";
import { MmBenefits } from "@/components/mumbai-mod/mm-benefits";
import { EmSectors } from "@/components/enterprise-mobility/em-sectors";
import { MmWhyUs } from "@/components/mumbai-mod/mm-why-us";
import { EmTestimonials } from "@/components/enterprise-mobility/em-testimonials";
import { MmFaq } from "@/components/mumbai-mod/mm-faq";
import { CompanyLocations } from "@/components/company/company-locations";

export const metadata: Metadata = {
  title: mumbaiModConfig.meta.title,
  description: mumbaiModConfig.meta.description,
};

export default function MumbaiModPage() {
  return (
    <main className="flex flex-col bg-black text-white selection:bg-primary/30 overflow-x-hidden">
      <MmHero />
      <MmWhyChoose />
      <MmProcess />
      <EmPortfolio />
      <MmServices />
      <MmBenefits />
      <EmSectors />
      <MmWhyUs />
      <EmTestimonials />
      <MmFaq />
      <CompanyLocations />
    </main>
  );
}
