import type { Metadata } from "next";
import { HealthcareServicePage } from "@/components/healthcare-service/healthcare-service-page";
import { oamsConfig } from "@/lib/oams-config";

export const metadata: Metadata = {
  title: oamsConfig.meta.title,
  description: oamsConfig.meta.description,
  alternates: { canonical: oamsConfig.meta.canonicalPath },
};

export default function OnlineAppointmentManagementPage() {
  return <HealthcareServicePage config={oamsConfig} />;
}
