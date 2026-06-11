import type { BlogSection } from "@/lib/nearshoring-offshoring-blog-config";
import type { BlogPostContent } from "@/lib/blog-post-content";
import { blogPostContent } from "@/lib/blog-post-content";
import { resolveBlogSlug } from "@/lib/blog-routes";

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getBlogPost(slug: string): BlogPostContent | undefined {
  const resolved = resolveBlogSlug(slug);
  return blogPostContent[resolved];
}

export function toBlogSections(post: BlogPostContent): BlogSection[] {
  return post.sections.map((section) => ({
    id: slugifyHeading(section.title),
    title: section.title,
    paragraphs: section.paragraphs,
  }));
}

export function toTableOfContents(sections: BlogSection[]) {
  return sections.map((section) => ({
    id: section.id,
    label: section.title,
  }));
}
