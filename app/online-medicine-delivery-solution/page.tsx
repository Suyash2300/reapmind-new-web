import type { Metadata } from "next";
import { HealthcareServicePage } from "@/components/healthcare-service/healthcare-service-page";
import { omdConfig } from "@/lib/omd-config";

export const metadata: Metadata = {
  title: omdConfig.meta.title,
  description: omdConfig.meta.description,
  alternates: { canonical: omdConfig.meta.canonicalPath },
};

export default function OnlineMedicineDeliveryPage() {
  return <HealthcareServicePage config={omdConfig} />;
}
