import { notFound } from "next/navigation";
import { BlogPostLayout } from "@/components/blog/blog-post-layout";
import { getAllBlogSlugs, getBlogPost, isBlogSlug } from "@/lib/blog-posts";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  if (!isBlogSlug(slug)) return {};
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: post.canonicalPath,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: post.canonicalPath,
      type: "article",
      images: post.heroImage?.startsWith("/") ? [{ url: post.heroImage }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isBlogSlug(slug)) notFound();
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <BlogPostLayout post={post} />;
}
