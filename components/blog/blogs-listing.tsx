import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog-posts";

export function BlogsListing() {
  const posts = getAllBlogPosts();

  return (
    <main className="bg-black text-white">
      <header className="section-app border-b border-white/10 pb-12 pt-28 sm:pt-32">
        <div className="container-app">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5eead4]">
            Resources
          </p>
          <h1 className="mt-4 text-h1 font-black text-white md:text-display">Latest Insights</h1>
          <p className="mt-5 max-w-2xl text-para text-white/70">
            Articles on AI, healthcare technology, enterprise software, and digital product
            development from the ReapMind team.
          </p>
        </div>
      </header>

      <section className="section-app py-12 sm:py-16">
        <div className="container-app">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const image =
                post.heroImage && post.heroImage.startsWith("/") ? post.heroImage : null;
              return (
                <li key={post.slug}>
                  <Link
                    href={post.canonicalPath}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated"
                  >
                    {image ? (
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={image}
                          alt={post.heroTitle}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5eead4]">
                        {post.category}
                      </p>
                      <h2 className="mt-2 line-clamp-3 flex-1 text-base font-bold text-white group-hover:text-[#5eead4]">
                        {post.heroTitle}
                      </h2>
                      <p className="mt-3 text-xs text-white/60">
                        {post.date}
                        {post.author ? ` · ${post.author}` : ""}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
