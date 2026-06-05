import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioCase, getPortfolioSlugs } from "@/lib/portfolio";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = getPortfolioCase(slug);
  if (!item) return { title: "Case study | ReapMind" };
  return {
    title: `${item.title} Case Study | ReapMind`,
    description: item.summary,
  };
}

/** Route shell only — full case study layout will ship later */
export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getPortfolioCase(slug);
  if (!item) notFound();

  return (
    <main className="section-app bg-background">
      <div className="container-app max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Case study
        </p>
        <h1 className="mt-2 text-h2 font-bold text-foreground">{item.title}</h1>
        <p className="mt-4 text-para text-muted">{item.summary}</p>
        <p className="mt-8 text-para text-secondary">
          Full case study experience is coming soon. Explore more work below.
        </p>
        <Link
          href="/portfolio-reapmind"
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
