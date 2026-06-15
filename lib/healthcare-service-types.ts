import type { getInsightCards } from "@/lib/blog-posts";

export type HealthcareServiceInterface = {
  title: string;
  items: { label: string; description: string }[];
  summary: string;
};

export type HealthcareServiceConfig = {
  meta: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  breadcrumb: { label: string; href: string; current?: boolean }[];
  hero: {
    heading: string;
    description: string;
    paragraphs?: string[];
    primaryCta: string;
    secondaryCta: string;
    image: string;
    accentColor: string;
  };
  clientLogos: {
    title: string;
    logos: { name: string; src: string }[];
  };
  features: {
    title: string;
    intro: string;
    image: string;
    envisionedTitle: string;
  };
  interfaces: HealthcareServiceInterface[];
  portfolio: {
    title: string;
    category: string;
    image: string;
    link: string;
  }[];
  ctas: {
    afterPortfolio: { title: string; primaryLabel: string };
    afterProcess: { title: string; primaryLabel: string };
    afterBenefits: { title: string; primaryLabel: string };
    afterWhyUs: { title: string; primaryLabel: string };
  };
  benefits: {
    title: string;
    items: { title: string; description: string }[];
    hidden?: boolean;
  };
  process: {
    title: string;
    subtitle: string;
    tagline: string;
    steps: string[];
    cta: string;
  };
  whyUs: {
    title: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  sectors: {
    title: string;
    items: { name: string; icon: string }[];
  };
  testimonials: {
    title: string;
    items: {
      name: string;
      role: string;
      image: string;
      quote: string;
    }[];
  };
  insights: {
    title: string;
    articles: ReturnType<typeof getInsightCards>;
  };
  consultation: {
    title: string;
    subtitle: string;
  };
};

export type HealthcareServiceFactoryInput = {
  assetPrefix: string;
  canonicalPath: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbLabel: string;
  heroHeading: string;
  heroDescription: string;
  heroImage: string;
  featuresTitle: string;
  featuresIntro: string;
  featuresImage: string;
  envisionedTitle: string;
  modules: { title: string; description: string }[];
  benefitsTitle: string;
  whyUsTitle: string;
  processTitle: string;
  heroParagraphs?: string[];
  benefitsItems?: { title: string; description: string }[];
  hideBenefits?: boolean;
};
