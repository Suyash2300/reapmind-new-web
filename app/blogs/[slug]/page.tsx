import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getAllBlogs, getBlogBySlug, getRelatedBlogs, sanitizeBlogContent, calculateReadingTime, extractFeaturedImage } from '../../../lib/blog';
import { RelatedPosts } from '../../../components/blog/RelatedPosts';
import { SharePanel } from '../../../components/blog/SharePanel';
import { ReadingProgress } from '../../../components/blog/ReadingProgress';
import { CalendarIcon, ClockIcon, UserIcon } from 'lucide-react';
import { BlogDetailPlatform } from '../../../components/blog/BlogDetailPlatform';
import { AnimatedHtmlContent } from '../../../components/blog/AnimatedHtmlContent';

// Generate static params for all blogs at build time
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate dynamic metadata for SEO and Social Sharing
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return {
      title: 'Post Not Found | ReapMind Innovations',
    };
  }

  const plainExcerpt = blog.excerpt ? blog.excerpt.replace(/<[^>]+>/g, '').trim() : '';
  const description = plainExcerpt || blog.content.replace(/<[^>]+>/g, '').substring(0, 160).trim() + '...';

  const imageUrl = extractFeaturedImage(blog);
  const keywords = [...(blog.categories || []), ...(blog.tags || [])];

  return {
    title: `${blog.title} | ReapMind Innovations`,
    description: description,
    keywords: keywords.length > 0 ? keywords : ['ReapMind Innovations', 'Technology Blog', 'Software Development'],
    alternates: {
      canonical: `https://reapmind.com/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: description,
      url: `https://reapmind.com/blogs/${blog.slug}`,
      siteName: 'ReapMind Innovations',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.creator || 'ReapMind Innovations'],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: description,
      images: [imageUrl],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const relatedPosts = await getRelatedBlogs(blog.slug, blog.categories);
  const sanitizedContent = sanitizeBlogContent(blog.content);
  const readingTime = calculateReadingTime(blog.content);
  
  const plainExcerpt = blog.excerpt ? blog.excerpt.replace(/<[^>]+>/g, '').trim() : '';
  const description = plainExcerpt || blog.content.replace(/<[^>]+>/g, '').substring(0, 160).trim() + '...';
  
  const imageUrl = extractFeaturedImage(blog);

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: description,
    image: imageUrl,
    datePublished: blog.date,
    author: {
      '@type': 'Person',
      name: blog.creator || 'ReapMind Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ReapMind Innovations',
      logo: {
        '@type': 'ImageObject',
        url: 'https://reapmind.com/wp-content/uploads/2024/07/reapmind-logo.svg',
      },
    },
  };

  const metaContent = (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {blog.categories.map((category) => (
          category !== 'Uncategorized' && (
            <span
              key={category}
              className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
            >
              {category}
            </span>
          )
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/60">
        {blog.creator && (
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4 text-primary" />
              <span className="text-white">{blog.creator.split('@')[0]}</span>
            </div>
        )}
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <time dateTime={blog.date}>
            {format(new Date(blog.date), 'MMMM d, yyyy')}
          </time>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4" />
          <span>{readingTime}</span>
        </div>
      </div>
    </>
  );

  return (
    <>
      <ReadingProgress />
      
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogDetailPlatform
        titleHtml={blog.title}
        imageUrl={imageUrl}
        metaContent={metaContent}
        backHref="/blogs"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Share Panel (Hidden on Mobile, Sticky on Desktop) */}
          <div className="hidden lg:block w-16 shrink-0 relative mt-10">
            <SharePanel title={blog.title} slug={blog.slug} />
          </div>

          {/* Article Content */}
          <article className="flex-1 max-w-4xl mx-auto lg:mx-0 w-full bg-black/40 p-6 sm:p-10 lg:p-16 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Mobile Share (Top) */}
            <div className="lg:hidden mb-12 flex gap-4 border-b border-white/10 pb-8">
              <span className="text-sm font-bold text-white/50 uppercase tracking-widest flex items-center">Share</span>
              <div className="flex-1" />
              <SharePanel title={blog.title} slug={blog.slug} />
            </div>

            <AnimatedHtmlContent content={sanitizedContent} />
          </article>
        </div>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="mt-32 max-w-5xl mx-auto w-full">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4 text-center justify-center">
              <span className="bg-primary w-2 h-8 rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
              Keep Reading
            </h2>
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </BlogDetailPlatform>
    </>
  );
}
