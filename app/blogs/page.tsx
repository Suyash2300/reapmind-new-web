import type { Metadata } from "next";
import { BlogsListing } from "@/components/blog/blogs-listing";

export const metadata: Metadata = {
  title: "Blogs & Insights | ReapMind Innovations",
  description:
    "Read the latest insights on AI, healthcare technology, enterprise software, and digital product development from ReapMind Innovations.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  return <BlogsListing />;
}
