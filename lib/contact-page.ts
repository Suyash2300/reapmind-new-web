/** Contact page — content from https://reapmind.com/contact-us/ */

import { homeClients } from "@/lib/home-sections";
import { site } from "@/lib/site-config";

export const contactPageSeo = {
  title: "Contact Us | ReapMind Innovations",
  description:
    "Reach out to your digital transformation experts. Request a quote, schedule a free consultation, or connect with ReapMind studios in Bangalore, Mumbai, Kolhapur, and Atlanta.",
  canonical: "https://reapmind.com/contact-us/",
} as const;

export const contactHero = {
  eyebrow: "Contact Us",
  title: "Looking to lead in the digital era?",
  subtitle:
    "We are your trusted partner for advanced mobile app and digital solutions.",
  actions: [
    { label: "Request a quote", href: "#request-quote" },
    { label: "Free consultation", href: "#free-consultation" },
  ],
  clientsLabel: "Among our clients",
  logos: homeClients.logos,
} as const;

export const contactQuoteForm = {
  id: "request-quote",
  title: "Request a Quote",
  subtitle:
    "Fill out the form to receive a customized quote tailored to your needs and receive pricing & availability information.",
  submitLabel: "Submit",
  fallbackEmail: site.email,
  fallbackNote:
    "Facing trouble submitting the form? Email us at",
  budgetOptions: [
    "Below $10K",
    "$10K - $25K",
    "$25K - $50K",
    "$50 - $100K",
    "$100K and more",
  ],
  interestOptions: [
    "Software Development",
    "Team Extension",
    "DevOps",
    "IoT",
    "Digital Transformation",
    "App Development",
  ],
} as const;

export const contactTrustStats = [
  {
    id: "projects",
    value: "1,000+",
    label: "Projects Successfully Delivered",
    description:
      "A track record of bringing ideas to life with precision and expertise.",
  },
  {
    id: "retention",
    value: "99%",
    label: "Client Retention Rate",
    description:
      "Building long-term relationships through consistent quality and outstanding results.",
  },
  {
    id: "satisfaction",
    value: "98%",
    label: "Customer Satisfaction",
    description:
      "Trusted by clients globally for delivering solutions that exceed expectations.",
  },
  {
    id: "years",
    value: "12+",
    label: "Years of Innovation",
    description:
      "Combining experience and creativity to deliver cutting-edge digital solutions.",
  },
  {
    id: "countries",
    value: "20+",
    label: "Countries Served",
    description:
      "Empowering businesses worldwide with transformative technology.",
  },
] as const;

export const contactStandOut = {
  title: "How ReapMind Stand Out for You?",
  subtitle:
    "ReapMind is not an idea but an initiative to bring transformation aided by technology",
  body: "Learning with a team of seasoned experts and agile thinkers as a real-life experience.",
  highlights: [
    { id: "engagement", value: "15+ Million", label: "User Engagement" },
    { id: "delivery", value: "Guaranteed", label: "Project Delivery" },
    { id: "analysis", value: "Free", label: "Business Analysis" },
    { id: "penalty", value: "Project", label: "Penalty Enforcement" },
    { id: "ibm", value: "IBM", label: "Certified Partners" },
    { id: "delivered", value: "1000+", label: "Projects Delivered" },
    { id: "exposure", value: "12+ Years", label: "Of IT Exposure" },
    { id: "support", value: "24/7", label: "Availability" },
  ],
} as const;

export const contactProcess = {
  title: "How to Begin?",
  steps: [
    {
      id: "connect",
      phase: "First Connect",
      title: "Connect",
      description:
        "Reach out via website or email or call to discuss your vision.",
    },
    {
      id: "collaborate",
      phase: "Requirement Analysis",
      title: "Collaborate",
      description:
        "Share your project details and goals with our experts.",
    },
    {
      id: "create",
      phase: "Final Project Estimate",
      title: "Create",
      description:
        "We'll design and deliver a custom solution to elevate your business.",
    },
  ],
} as const;

export const contactAwards = {
  title: "Industry Recognitions & Awards",
  items: [
    "Clutch's Top Software Developers Winner 2023",
    "Forbes Technology Council Member 2023",
    "Top Software Development Companies by Goodfirms",
    "Fast Company Executive Board Member 2023",
  ],
} as const;

export const contactConsultationForm = {
  id: "free-consultation",
  title: "Get Free Consultation",
  subtitle:
    "Trusted by startups & Fortune 500 companies — get expert advice before you commit.",
  submitLabel: "Get Enquiry",
  benefits: [
    "Strategic development plan",
    "Cost & time estimates",
    "Solutions to scale your business",
    "Future-ready technology suggestions",
  ],
} as const;

export const contactDirect = {
  phone: site.phone,
  phoneHref: site.phoneHref,
  email: site.email,
  whatsappHref: "https://wa.me/919637828283",
} as const;
