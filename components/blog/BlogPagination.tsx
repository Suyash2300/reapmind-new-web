'use client';

import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  searchQuery: string;
  categoryFilter: string;
}

export function BlogPagination({ currentPage, totalPages, searchQuery, categoryFilter }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const createUrl = (page: number) => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (categoryFilter !== 'All') params.set('category', categoryFilter);
    params.set('page', page.toString());
    return `/blogs?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center gap-2 rounded-full border border-white/5 bg-white/5 p-2 backdrop-blur-xl w-max mx-auto shadow-2xl">
      {/* Prev Button */}
      {currentPage > 1 ? (
        <Link
          href={createUrl(currentPage - 1)}
          className="group flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-white/10"
        >
          <ChevronLeftIcon className="h-4 w-4 text-white/70 transition-colors group-hover:text-white" />
        </Link>
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent opacity-30 cursor-not-allowed">
          <ChevronLeftIcon className="h-4 w-4 text-white" />
        </div>
      )}

      {/* Pages */}
      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNumber = i + 1;
          const isCurrentPage = pageNumber === currentPage;
          
          return (
            <Link
              key={pageNumber}
              href={createUrl(pageNumber)}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                isCurrentPage ? 'text-black' : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {isCurrentPage && (
                <motion.div
                  layoutId="activePaginationMarker"
                  className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{pageNumber}</span>
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={createUrl(currentPage + 1)}
          className="group flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-white/10"
        >
          <ChevronRightIcon className="h-4 w-4 text-white/70 transition-colors group-hover:text-white" />
        </Link>
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent opacity-30 cursor-not-allowed">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </div>
      )}
    </div>
  );
}
