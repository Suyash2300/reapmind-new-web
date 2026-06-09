import { notFound } from "next/navigation";
import { PortfolioCaseStudyLayout } from "@/components/portfolio/portfolio-case-study-layout";
import { getPortfolioCase, getPortfolioSlugs } from "@/lib/portfolio";
import { getPortfolioCaseStudyContent } from "@/lib/portfolio-case-study-content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getPortfolioCase(slug);
  const content = getPortfolioCaseStudyContent(slug);
  if (!study || !content) return { title: "Case study | ReapMind" };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: content.canonical,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: content.canonical,
      type: "article",
      images: content.heroImage ? [{ url: content.heroImage }] : undefined,
    },
  };
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getPortfolioCase(slug);
  const content = getPortfolioCaseStudyContent(slug);
  if (!study || !content) notFound();

  return <PortfolioCaseStudyLayout study={study} content={content} />;
}
