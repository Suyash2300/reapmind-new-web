import type { Metadata } from "next";
import {
  ContactAwardsSection,
  ContactOfficesSection,
  ContactProcessSection,
  ContactStandOutSection,
  ContactTopSection,
} from "@/components/contact/contact-page-sections";
import { TestimonialsShowcase } from "@/components/testimonials/testimonials-showcase";
import { contactPageSeo } from "@/lib/contact-page";

export const metadata: Metadata = {
  title: contactPageSeo.title,
  description: contactPageSeo.description,
  alternates: {
    canonical: contactPageSeo.canonical,
  },
  openGraph: {
    title: contactPageSeo.title,
    description: contactPageSeo.description,
    url: contactPageSeo.canonical,
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <main className="bg-black text-primary-foreground">
      <ContactTopSection />
      <ContactStandOutSection />
      <ContactProcessSection />
      <TestimonialsShowcase />
      <ContactAwardsSection />
      <ContactOfficesSection />
    </main>
  );
}
