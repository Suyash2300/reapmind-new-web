import { getPageData } from "@/data/content";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = await params;
  const data = getPageData(p.slug);
  
  if (!data) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = await params;
  const data = getPageData(p.slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-44 lg:pt-48 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
          <span className="capitalize">{data.category}</span>
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
          {data.title.split('|')[0].trim()}
        </h1>
        <p className="mb-12 max-w-2xl text-xl text-muted-foreground">
          {data.description}
        </p>

        <div className="rounded-2xl border border-border bg-surface p-8 backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Premium {data.category} Solution
          </h2>
          <p className="mb-6 text-muted-foreground">
            This is a dynamically generated page preserving the exact SEO route structure from the legacy site. The modern architecture utilizes Next.js App Router for optimal Server-Side Rendering (SSR) and Lighthouse 95+ performance.
          </p>
          <div className="flex gap-4">
            <button type="button" className="btn-primary px-6 py-3">
              Get Started
            </button>
            <button className="rounded-lg border border-border bg-elevated px-6 py-3 font-medium text-foreground transition-colors hover:bg-surface">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
