import { getInsightCards } from "@/lib/blog-posts";
import type {
  HealthcareServiceConfig,
  HealthcareServiceFactoryInput,
} from "./healthcare-service-types";
import {
  healthcareClientLogos,
  healthcareClientLogosTitle,
  healthcareCtas,
  healthcarePortfolio,
  healthcareProcessSteps,
  healthcareSectors,
  healthcareTestimonials,
  healthcareWhyUs,
} from "./healthcare-service-shared";

function toInterfaces(modules: HealthcareServiceFactoryInput["modules"]) {
  return modules.map((module) => ({
    title: module.title,
    items: [{ label: module.title, description: module.description }],
    summary: module.description,
  }));
}

function toBenefits(
  title: string,
  modules: HealthcareServiceFactoryInput["modules"],
  override?: HealthcareServiceFactoryInput["benefitsItems"],
) {
  if (override?.length) {
    return { title, items: override };
  }
  return {
    title,
    items: modules.slice(0, 3).map((module) => ({
      title: module.title,
      description: module.description,
    })),
  };
}

export function createHealthcareServiceConfig(
  input: HealthcareServiceFactoryInput,
): HealthcareServiceConfig {
  const assetPrefix = input.assetPrefix.endsWith("/")
    ? input.assetPrefix
    : `${input.assetPrefix}/`;

  return {
    meta: {
      title: input.metaTitle,
      description: input.metaDescription,
      canonicalPath: input.canonicalPath,
    },
    breadcrumb: [
      { label: "Home", href: "/" },
      {
        label: input.breadcrumbLabel,
        href: input.canonicalPath,
        current: true,
      },
    ],
    hero: {
      heading: input.heroHeading,
      description:
        input.heroParagraphs?.join(" ") ?? input.heroDescription,
      paragraphs: input.heroParagraphs,
      primaryCta: "Reach out to get started on your requirements",
      secondaryCta: "Have a Idea? Contact Us",
      image: input.heroImage,
      accentColor: "#0EA5E9",
    },
    clientLogos: {
      title: healthcareClientLogosTitle,
      logos: healthcareClientLogos(assetPrefix),
    },
    features: {
      title: input.featuresTitle,
      intro: input.featuresIntro,
      image: input.featuresImage,
      envisionedTitle: input.envisionedTitle,
    },
    interfaces: toInterfaces(input.modules),
    portfolio: [...healthcarePortfolio],
    ctas: { ...healthcareCtas },
    benefits: {
      ...toBenefits(input.benefitsTitle, input.modules, input.benefitsItems),
      hidden: input.hideBenefits,
    },
    process: {
      title: input.processTitle,
      subtitle:
        "We believe in delivering flawless mobile apps that ensure our clients gain a legacy in their business space. With the standard development process our team design, deploy and deliver quality products that result in bringing intended outcome in terms of quality and efficiency.",
      tagline:
        "Delivering services that empower businesses to reap the benefits of digital transformation",
      steps: [...healthcareProcessSteps],
      cta: "Convert your Idea into Mobile App",
    },
    whyUs: {
      title: input.whyUsTitle,
      intro: healthcareWhyUs.intro,
      items: [...healthcareWhyUs.items],
    },
    sectors: {
      title: "Catering to Diverse Sectors: Our Targeted Industry Solutions",
      items: healthcareSectors(assetPrefix),
    },
    testimonials: { title: healthcareTestimonials.title, items: [...healthcareTestimonials.items] },
    insights: {
      title: "Latest Insights",
      articles: getInsightCards(assetPrefix),
    },
    consultation: {
      title: "Get a Free Consultation from our Technology Expert",
      subtitle: "Trusted by Global Companies. Contact Us Today!",
    },
  };
}
