import type { Metadata } from "next";
import { HealthcareServicePage } from "@/components/healthcare-service/healthcare-service-page";
import { oltConfig } from "@/lib/olt-config";

export const metadata: Metadata = {
  title: oltConfig.meta.title,
  description: oltConfig.meta.description,
  alternates: { canonical: oltConfig.meta.canonicalPath },
};

export default function OnlineLabTestPage() {
  return <HealthcareServicePage config={oltConfig} />;
}
