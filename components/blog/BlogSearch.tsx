'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { SearchIcon, XIcon } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchExpandVariants } from './blog-animations';

export function BlogSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentSearch = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(currentSearch);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      params.delete('page'); // Reset to page 1 on search
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    // Only push if the value has actually changed to avoid unnecessary router.push calls
    const handler = setTimeout(() => {
      if (searchTerm !== currentSearch) {
        router.push(`${pathname}?${createQueryString('q', searchTerm)}`, { scroll: false });
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, pathname, router, createQueryString, currentSearch]);

  const handleClear = () => {
    setSearchTerm('');
    router.push(`${pathname}?${createQueryString('q', '')}`, { scroll: false });
    inputRef.current?.focus();
  };

  const isExpanded = isFocused || searchTerm.length > 0;

  return (
    <div className="relative flex justify-end w-full lg:w-auto h-12">
      <motion.div 
        variants={searchExpandVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative flex items-center h-12 overflow-hidden rounded-full border border-white/10 backdrop-blur-xl"
        style={{ 
          boxShadow: isFocused ? '0 0 20px rgba(var(--primary-rgb), 0.2)' : 'none',
          borderColor: isFocused ? 'rgba(var(--primary-rgb), 0.5)' : 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <button 
          onClick={() => inputRef.current?.focus()}
          className="absolute left-0 flex h-full w-12 items-center justify-center text-white/50 transition-colors hover:text-white"
          aria-label="Search"
        >
          <SearchIcon className="h-5 w-5" />
        </button>

        <input
          ref={inputRef}
          type="text"
          className="h-full w-full bg-transparent pl-12 pr-12 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-0"
          placeholder="Search articles, topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <AnimatePresence>
          {searchTerm && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              transition={{ duration: 0.2 }}
              type="button"
              className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
              onClick={handleClear}
              aria-label="Clear search"
            >
              <XIcon className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
