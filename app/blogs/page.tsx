import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CompanyLocations } from "@/components/company/company-locations";
import { listBlogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blogs & Insights | ReapMind Innovations",
  description:
    "Read the latest insights on AI, healthcare technology, enterprise software, and digital product development from ReapMind Innovations.",
  alternates: {
    canonical: "https://reapmind.com/blogs/",
  },
};

export default function BlogsPage() {
  const posts = listBlogPosts();

  return (
    <main className="flex flex-col overflow-x-hidden bg-surface-dark text-primary-foreground">
      <section className="border-b border-white/10 py-12 md:py-16">
        <div className="container-app">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Resources</p>
          <h1 className="mt-3 text-h2 font-bold text-white sm:text-h1">Latest Insights</h1>
          <p className="mt-4 max-w-2xl text-para text-white/65">
            Expert articles on app development, AI, healthcare technology, and enterprise digital
            transformation.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-app">
          {posts.length === 0 ? (
            <p className="text-para text-white/60">Articles are loading. Please check back shortly.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/60"
                >
                  {post.heroImage ? (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.heroImage}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {post.category}
                    </p>
                    <h2 className="mt-2 line-clamp-3 text-lg font-bold text-white group-hover:text-primary">
                      {post.heroTitle}
                    </h2>
                    <p className="mt-2 text-sm text-white/55">
                      {post.date} · {post.author}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CompanyLocations />
    </main>
  );
}
