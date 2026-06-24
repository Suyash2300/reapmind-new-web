import { Suspense } from 'react';
import { Metadata } from 'next';
import { getAllBlogs, getAllCategories } from '../../lib/blog';
import { BlogCard } from '../../components/blog/BlogCard';
import { BlogSearch } from '../../components/blog/BlogSearch';
import { BlogCategories } from '../../components/blog/BlogCategories';
import { BlogPagination } from '../../components/blog/BlogPagination';
import { BlogListingPlatform, BlogGridClient } from '../../components/blog/BlogListingPlatform';

export const metadata: Metadata = {
  title: 'Blog | ReapMind Innovations',
  description: 'Insights, trends, and expert opinions on technology, design, and business.',
  openGraph: {
    title: 'Blog | ReapMind Innovations',
    description: 'Insights, trends, and expert opinions on technology, design, and business.',
    url: 'https://reapmind.com/blogs/',
    siteName: 'ReapMind Innovations',
    type: 'website',
  },
};

const POSTS_PER_PAGE = 9;

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const searchQuery = typeof resolvedSearchParams.q === 'string' ? resolvedSearchParams.q.toLowerCase() : '';
  const categoryFilter = typeof resolvedSearchParams.category === 'string' ? resolvedSearchParams.category : 'All';

  const allBlogs = await getAllBlogs();
  const allCategories = await getAllCategories();

  // Apply filters
  let filteredBlogs = allBlogs;
  
  if (categoryFilter !== 'All') {
    filteredBlogs = filteredBlogs.filter((blog) => blog.categories.includes(categoryFilter));
  }
  
  if (searchQuery) {
    filteredBlogs = filteredBlogs.filter(
      (blog) => 
        blog.title.toLowerCase().includes(searchQuery) || 
        blog.excerpt.toLowerCase().includes(searchQuery) ||
        blog.content.toLowerCase().includes(searchQuery)
    );
  }

  // Check if we are showing featured (only on page 1, and no search/category filter applied)
  const isDefaultView = currentPage === 1 && !searchQuery && categoryFilter === 'All';
  
  // Extract top 3 for featured if default view
  const featuredBlogs = isDefaultView ? filteredBlogs.slice(0, 3) : [];
  const blogsToPaginate = isDefaultView ? filteredBlogs.slice(3) : filteredBlogs;

  // Calculate pagination
  const totalPages = Math.ceil(blogsToPaginate.length / POSTS_PER_PAGE);
  const paginatedBlogs = blogsToPaginate.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const heroHeading = (
    <>
      Insights, Ideas & <br className="hidden md:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Technology Trends</span>
    </>
  );

  const heroText = (
    <>Explore our latest thoughts on technology trends, software engineering, digital transformation, and business innovation.</>
  );

  const statsContent = (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white mb-1">{allBlogs.length}+</span>
        <span className="text-xs text-white/50 uppercase tracking-wider">Expert Articles</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white mb-1">{allCategories.length}</span>
        <span className="text-xs text-white/50 uppercase tracking-wider">Topics Covered</span>
      </div>
      <div className="flex flex-col items-center justify-center col-span-2 md:col-span-1">
        <span className="text-3xl font-bold text-white mb-1">Weekly</span>
        <span className="text-xs text-white/50 uppercase tracking-wider">New Insights</span>
      </div>
    </div>
  );

  return (
    <BlogListingPlatform 
      heroHeading={heroHeading}
      heroText={heroText}
      statsContent={statsContent}
    >
      {/* Filters and Search */}
      <div className="mb-16 flex flex-col items-center justify-between gap-8 lg:flex-row bg-black/60 backdrop-blur-2xl border border-white/10 p-4 sm:p-6 rounded-[2rem] sticky top-[100px] z-40 shadow-2xl shadow-black/50">
        <Suspense fallback={<div className="h-12 w-full animate-pulse bg-white/5 rounded-full" />}>
          <BlogCategories categories={allCategories} />
          <BlogSearch />
        </Suspense>
      </div>

      {/* Featured Section */}
      {isDefaultView && featuredBlogs.length > 0 && (
        <div className="mb-24 relative">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            <span className="bg-primary w-2 h-8 rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
            Featured Articles
          </h2>
          
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Top Featured Post - spans 8 columns */}
            {featuredBlogs[0] && (
              <div className="lg:col-span-8">
                <BlogCard blog={featuredBlogs[0]} featured variant="large" />
              </div>
            )}
            
            {/* Next 2 Featured Posts - span 4 columns stacked */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {featuredBlogs.slice(1, 3).map((blog, idx) => (
                <div key={idx} className="flex-1">
                  <BlogCard blog={blog} featured={false} variant="minimal" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="relative">
        {isDefaultView && (
           <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
             <span className="bg-white/20 w-2 h-8 rounded-full" />
             Latest Publications
           </h2>
        )}
        
        {paginatedBlogs.length > 0 ? (
          <BlogGridClient>
            {paginatedBlogs.map((blog) => (
              <div key={blog.id} className="h-[480px]">
                <BlogCard blog={blog} variant="standard" />
              </div>
            ))}
          </BlogGridClient>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5 border-dashed py-32 text-center backdrop-blur-sm">
            <div className="bg-white/10 p-6 rounded-full mb-6">
              <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <p className="mb-2 text-2xl font-bold text-white">No articles found</p>
            <p className="text-white/50 max-w-md mx-auto">We couldn't find any articles matching your search criteria. Try adjusting your filters.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-20">
        <BlogPagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          searchQuery={searchQuery} 
          categoryFilter={categoryFilter} 
        />
      </div>
    </BlogListingPlatform>
  );
}
