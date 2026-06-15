import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleLayout } from "@/components/blog/blog-article-layout";
import { AmConsultationSection } from "@/components/app-mod-bangalore/am-consultation-section";
import { CompanyLocations } from "@/components/company/company-locations";
import { getBlogPost, toBlogSections, toTableOfContents } from "@/lib/blog-utils";
import { getPublicBlogPaths, isBlogSlug } from "@/lib/blog-posts";
import { resolveBlogSlug } from "@/lib/blog-routes";

type PageProps = { params: Promise<{ slug: string }> };

const FALLBACK_HERO = "/short-video-app/Featured-Image-scaled.png";

export function generateStaticParams() {
  return getPublicBlogPaths().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog | ReapMind" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://reapmind.com/${resolveBlogSlug(slug)}/`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: post.canonicalPath,
      type: "article",
      images:
        post.heroImage && post.heroImage.startsWith("/")
          ? [{ url: post.heroImage }]
          : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  // Guard: only render known blog slugs; let other dynamic routes fall through
  if (!isBlogSlug(slug)) notFound();

  const post = getBlogPost(slug);
  if (!post) notFound();

  const sections = toBlogSections(post);
  const tableOfContents = toTableOfContents(sections);

  return (
    <main className="flex flex-col overflow-x-hidden bg-black text-primary-foreground">
      <BlogArticleLayout
        article={{
          category: post.category,
          author: post.author,
          date: post.date,
          heading: post.heroTitle,
          excerpt: post.metaDescription,
          heroBackgroundImage: post.heroImage ?? FALLBACK_HERO,
        }}
        tableOfContents={tableOfContents}
        sections={sections}
        cta={{
          title: "Ready to build your next app?",
          body: "Talk to ReapMind's team for a free consultation on strategy, timelines, and cost.",
          primaryLabel: "Book a consultation",
          primaryHref: "/contact-us#free-consultation",
          secondaryLabel: "View services",
          secondaryHref: "/services",
        }}
      />
      <AmConsultationSection />
      <CompanyLocations />
    </main>
  );
}
