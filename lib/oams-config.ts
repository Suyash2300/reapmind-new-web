import { createHealthcareServiceConfig } from "./healthcare-service-factory";

export const oamsConfig = createHealthcareServiceConfig({
  assetPrefix: "/oams",
  canonicalPath: "/online-appointment-management-system",
  metaTitle: "Online Appointment Management System in India & USA | ReapMind",
  metaDescription:
    "Online appointment management system is nothing but an E-Health system, which offers patients or any other user a convenient way to book a doctor's visit anywhere, anytime online.",
  breadcrumbLabel: "Online Appointment Management",
  heroHeading: "Healthcare Online Appointment Management System",
  heroDescription:
    "Online appointment management is an E-Health system that allows patients to schedule a doctor's visit from anywhere, at any time — with integrated registration, treatment, check-out, and reporting on one calendar.",
  heroImage: "/oams/blog-hr-ai-agent.png",
  featuresTitle: "Features of Online Appointment Management System",
  featuresIntro:
    "Reduce waiting-room crowding, automate reminders, and give clinicians a single view of schedules, walk-ins, and follow-ups across every channel.",
  featuresImage: "/oams/blog-document-ai.png",
  envisionedTitle:
    "Why Choose ReapMind as your Envisioned Online Appointment Management Partner?",
  modules: [
    {
      title: "Pre-registration",
      description:
        "Collect patient data before visits, run insurance eligibility checks, reduce waiting-area crowding, and store searchable records for faster intake.",
    },
    {
      title: "Scheduling",
      description:
        "Patients book open slots online while staff send automated email or phone reminders and manage reschedules from a unified backend.",
    },
    {
      title: "Appointment Management",
      description:
        "Customize slots by date, time, and physician with automated patient planning and self-service changes or cancellations when needed.",
    },
    {
      title: "Reminder",
      description:
        "Keep patients informed of upcoming visits with shared appointment details and recall lists for medications and follow-up care.",
    },
    {
      title: "Visit Management",
      description:
        "Track check-in, check-out, and no-shows while supporting accurate billing and HIPAA-aligned documentation across every visit.",
    },
    {
      title: "Physician Management",
      description:
        "Manage physician calendars, vacation time, and daily caseloads without switching between disconnected scheduling tools.",
    },
    {
      title: "Business Reports",
      description:
        "Drill into operational data with dashboards and reports that help clinicians visualize trends and improve clinic performance.",
    },
  ],
  benefitsTitle: "Benefits of Online Appointment Management System",
  whyUsTitle: "Why Choose ReapMind as your Desired Online Appointment Management?",
  processTitle:
    "Our end-end development process to get develop an Online Appointment Management System",
});
