import Image from "next/image";
import Link from "next/link";
import type { BlogPostContent } from "@/lib/blog-post-content";
import { blogInsightCards } from "@/lib/blog-posts";

type BlogPostLayoutProps = {
  post: BlogPostContent;
};

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-4" aria-hidden>
      <path
        d="M10.5 3.5L5.5 8l5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogPostLayout({ post }: BlogPostLayoutProps) {
  const related = blogInsightCards
    .filter((card) => card.slug !== post.slug)
    .slice(0, 3);

  const heroImage =
    post.heroImage && post.heroImage.startsWith("/") ? post.heroImage : null;

  return (
    <main className="bg-black text-white">
      <article>
        <header className="section-app border-b border-white/10 pb-12 pt-28 sm:pt-32">
          <div className="container-app">
            <Link
              href="/blogs"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeftIcon />
              Back to insights
            </Link>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#5eead4]">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-4xl text-h2 font-black leading-tight text-white md:text-display">
              {post.heroTitle}
            </h1>

            <p className="mt-5 text-sm text-white/60">
              {post.date}
              {post.author ? ` · By ${post.author}` : null}
            </p>

            {heroImage ? (
              <div className="relative mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={heroImage}
                  alt={post.heroTitle}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            ) : null}
          </div>
        </header>

        <div className="section-app py-12 sm:py-16">
          <div className="container-app max-w-3xl">
            {post.sections.map((section, sectionIndex) => (
              <section key={`${sectionIndex}-${section.title}`} className="mb-12 last:mb-0">
                <h2 className="text-h3 font-bold text-white">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={`${sectionIndex}-${paragraphIndex}`}
                      className="text-para leading-relaxed text-white/75"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <section className="section-app border-t border-white/10 bg-surface-header py-16">
          <div className="container-app max-w-3xl text-center">
            <h2 className="text-h3 font-bold text-white">Ready to discuss your project?</h2>
            <p className="mt-4 text-para text-white/70">
              Talk to ReapMind&apos;s technology experts for a free consultation on your next
              initiative.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-white"
            >
              Get free consultation
            </Link>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="section-app border-t border-white/10 py-16">
            <div className="container-app">
              <h2 className="text-h3 font-bold text-white">More insights</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {related.map((card) => (
                  <li key={card.slug}>
                    <Link
                      href={card.link}
                      className="block rounded-2xl border border-white/10 bg-surface-elevated p-5 transition-colors hover:border-[#0D9488]/50"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5eead4]">
                        {card.category}
                      </p>
                      <h3 className="mt-2 line-clamp-3 text-base font-bold text-white">
                        {card.title}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </article>
    </main>
  );
}
