import type { Metadata } from "next";
import { HealthcareServicePage } from "@/components/healthcare-service/healthcare-service-page";
import { emrConfig } from "@/lib/emr-config";

export const metadata: Metadata = {
  title: emrConfig.meta.title,
  description: emrConfig.meta.description,
  alternates: { canonical: emrConfig.meta.canonicalPath },
};

export default function ElectronicMedicalRecordPage() {
  return <HealthcareServicePage config={emrConfig} />;
}
