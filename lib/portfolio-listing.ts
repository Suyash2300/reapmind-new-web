import { portfolioCases, type PortfolioCaseStudy } from "@/lib/portfolio";

export const portfolioListingPage = {
  metaTitle:
    "Portfolio | ReapMind Innovations - Top Digital Transformation Company in India USA UK UAE",
  metaDescription:
    "Showcase of clean, smart, and effective designs — explore ReapMind's mobile apps, web platforms, and digital products across healthcare, eCommerce, logistics, and pharmaceuticals.",
  canonical: "https://reapmind.com/portfolio-reapmind/",
  eyebrow: "Showcase",
  title: "Clean, smart & effective designs",
  subtitle:
    "Product engineering across mobile, web, and enterprise — built for scale, crafted for humans.",
} as const;

export const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "ecommerce-retail", label: "eCommerce & Retail" },
  { id: "healthcare", label: "Healthcare" },
  { id: "logistics", label: "Logistics" },
  { id: "pharmaceutical", label: "Pharmaceutical" },
] as const;

export type PortfolioFilterId = (typeof portfolioFilters)[number]["id"];

export type PortfolioCategory = Exclude<PortfolioFilterId, "all">;

type ListingMeta = {
  slug: string;
  listingTitle: string;
  categories: readonly PortfolioCategory[];
};

/** Display order aligned with https://reapmind.com/portfolio-reapmind/ */
const listingMeta: readonly ListingMeta[] = [
  {
    slug: "deutsche-quality-systems-india-dqs-india-audit-app",
    listingTitle: "Deutsche Quality Systems India (DQS India) – Audit App",
    categories: ["healthcare"],
  },
  {
    slug: "lakshya-academy-empowering-education",
    listingTitle:
      "Lakshya Academy: Empowering Education Through Technology",
    categories: [],
  },
  {
    slug: "mt-educare-education-management",
    listingTitle: "MTeducare: Revolutionizing Education Management",
    categories: [],
  },
  {
    slug: "organic-world",
    listingTitle: "organic world",
    categories: ["ecommerce-retail"],
  },
  {
    slug: "pawspace",
    listingTitle: "PawSpace",
    categories: ["ecommerce-retail"],
  },
  {
    slug: "muncipal-banking",
    listingTitle: "Municipal banking",
    categories: [],
  },
  {
    slug: "beemate-enhancing-school-transportation-safety-and-communication",
    listingTitle:
      "BeeMate – Enhancing School Transportation Safety and Communication",
    categories: ["logistics"],
  },
  {
    slug: "leep-rideshare-app",
    listingTitle: "Leep – Rideshare App",
    categories: ["logistics"],
  },
  {
    slug: "vkonnect-health",
    listingTitle: "Vkonnect Health – Online Health Care App",
    categories: ["healthcare", "pharmaceutical"],
  },
  {
    slug: "mechuni-mechanical-services-and-parking-app",
    listingTitle: "MechUni – Online Mechanical Services & Parking",
    categories: ["ecommerce-retail", "logistics"],
  },
  {
    slug: "carloana-car-finance-made-smarter",
    listingTitle: "Carloana – Car Finance Made Smarter",
    categories: [],
  },
  {
    slug: "worlds-best-tool-for-personal-connections",
    listingTitle: "& Connection – Online Dating Application",
    categories: [],
  },
  {
    slug: "happy-harvest-farms-delivery",
    listingTitle: "Happy Harvest Farms Delivery",
    categories: ["ecommerce-retail"],
  },
  {
    slug: "formulaw-consult-lawyer-online",
    listingTitle: "Formulaw – Online Consultation Lawyer",
    categories: [],
  },
  {
    slug: "i30-jee-neet-foundation-coaching-programs-app-reapmind",
    listingTitle:
      "i30 – JEE, NEET & Foundation Coaching Programs App",
    categories: [],
  },
];

const casesBySlug = new Map<string, PortfolioCaseStudy>(
  portfolioCases.map((c) => [c.slug, c]),
);

export type PortfolioListingCard = PortfolioCaseStudy & {
  listingTitle: string;
  categories: readonly PortfolioCategory[];
};

export const portfolioListingCards = listingMeta.flatMap((meta) => {
  const study = casesBySlug.get(meta.slug);
  if (!study) return [];
  const card: PortfolioListingCard = {
    ...study,
    listingTitle: meta.listingTitle,
    categories: meta.categories,
  };
  return [card];
});

export function filterPortfolioCards(
  cards: readonly PortfolioListingCard[],
  filter: PortfolioFilterId,
): PortfolioListingCard[] {
  if (filter === "all") return [...cards];
  return cards.filter((card) => card.categories.includes(filter));
}
