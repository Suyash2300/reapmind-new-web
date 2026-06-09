import { getPortfolioCase, type PortfolioSlug } from "@/lib/portfolio";

export type HomeMeetingIndustry = {
  id: string;
  industryLabel: string;
  caseStudyTitle: string;
  description: string;
  imageSrc: string;
  portfolioHref: string;
};

type IndustryConfig = {
  id: string;
  industryLabel: string;
  slug: PortfolioSlug;
  /** Optional override when portfolio card image is a better fit */
  imageSrc?: string;
  description?: string;
};

/**
 * Homepage industry slots — aligned to actual project verticals (not legacy
 * reapmind.com carousel pairings). Each row maps one industry to one case study.
 */
const industryConfigs = [
  {
    id: "healthcare",
    industryLabel: "Healthcare",
    slug: "vkonnect-health",
    description:
      "Vkonnect Health is a digital healthcare platform built for accessible consultations, certified medical content, and patient engagement at scale — connecting doctors, caregivers, and users in one secure ecosystem.",
  },
  {
    id: "finance",
    industryLabel: "Finance",
    slug: "carloana-car-finance-made-smarter",
    description:
      "Carloana simplifies car buying and financing with Kotak Mahindra Bank and Bank of Baroda integrations — helping buyers compare cars, variants, and loan options in a single, user-friendly web experience.",
  },
  {
    id: "banking",
    industryLabel: "Banking",
    slug: "muncipal-banking",
    description:
      "Municipal Bank’s mobile banking app gives customers a seamless, all-in-one platform to manage finances, access banking services, and explore personalized financial products on the go.",
  },
  {
    id: "logistics",
    industryLabel: "Logistics & Mobility",
    slug: "leep-rideshare-app",
    description:
      "Leep Ride revolutionizes cab booking with a dependable rideshare experience across India, the USA, and the UK — real-time tracking, flexible ride options, and secure payments built for commuters and businesses.",
  },
  {
    id: "ecommerce",
    industryLabel: "eCommerce & Retail",
    slug: "happy-harvest-farms-delivery",
    description:
      "Happy Harvest Farms connects shoppers to 1,200+ organic farmers for certified, chemical-free produce across India — a farm-to-table marketplace with next-day delivery and a trusted organic catalog.",
  },
  {
    id: "education",
    industryLabel: "Education",
    slug: "mt-educare-education-management",
    description:
      "MTeducare streamlines school and college operations with unified administration, scheduling, communication, and student engagement — helping institutions run smarter and deliver better learning outcomes.",
  },
] as const satisfies readonly IndustryConfig[];

function toIndustryItem(config: IndustryConfig): HomeMeetingIndustry {
  const study = getPortfolioCase(config.slug);
  if (!study) {
    throw new Error(`Missing portfolio case for industry: ${config.slug}`);
  }

  return {
    id: config.id,
    industryLabel: config.industryLabel,
    caseStudyTitle: study.title,
    description: config.description ?? study.summary,
    imageSrc: config.imageSrc ?? study.image,
    portfolioHref: study.href,
  };
}

export const homeMeetingIndustries: {
  title: string;
  goToCaseStudies: { label: string; href: string };
  items: HomeMeetingIndustry[];
} = {
  title: "Meeting the Unique Needs of Every Industry",
  goToCaseStudies: {
    label: "Go to case studies",
    href: "/portfolio-reapmind",
  },
  items: industryConfigs.map(toIndustryItem),
};
