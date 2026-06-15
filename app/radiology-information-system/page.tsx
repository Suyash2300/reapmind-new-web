import type { Metadata } from "next";
import { HealthcareServicePage } from "@/components/healthcare-service/healthcare-service-page";
import { risConfig } from "@/lib/ris-config";

export const metadata: Metadata = {
  title: risConfig.meta.title,
  description: risConfig.meta.description,
  alternates: { canonical: risConfig.meta.canonicalPath },
};

export default function RadiologyInformationSystemPage() {
  return <HealthcareServicePage config={risConfig} />;
}
