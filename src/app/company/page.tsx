import { Metadata } from "next";
import CompanyClient from "./company-client";

export const metadata: Metadata = {
  title: "About ReapMind Innovations | Top Digital Transformation Company",
  description: "About us - We strive to help businesses thrive through innovation. Who we are - We are proud to be acknowledged as a top digital transformation company in India and the United States. As a premium brand, we work with innovative technologies in a results-oriented environment.",
  openGraph: {
    title: "About ReapMind Innovations | Top Digital Transformation Company",
    description: "About us - We strive to help businesses thrive through innovation. Who we are - We are proud to be acknowledged as a top digital transformation company in India and the United States. As a premium brand, we work with innovative technologies in a results-oriented environment.",
    url: "https://reapmind.com/company",
    siteName: "ReapMind",
    type: "website",
  },
};

export default function CompanyPage() {
  return <CompanyClient />;
}
