import { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | ReapMind",
  description: "Get in touch with ReapMind for a free consultation on your next digital transformation project. Reach out to our offices in Bangalore, Mumbai, Kolhapur, and USA.",
};

export default function ContactPage() {
  return <ContactClient />;
}
