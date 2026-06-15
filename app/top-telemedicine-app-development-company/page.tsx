import type { Metadata } from "next";
import { HealthcareServicePage } from "@/components/healthcare-service/healthcare-service-page";
import { telemedicineConfig } from "@/lib/telemedicine-config";

export const metadata: Metadata = {
  title: telemedicineConfig.meta.title,
  description: telemedicineConfig.meta.description,
  alternates: { canonical: telemedicineConfig.meta.canonicalPath },
};

export default function TelemedicineAppPage() {
  return <HealthcareServicePage config={telemedicineConfig} />;
}
