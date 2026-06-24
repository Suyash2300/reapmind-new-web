"use client";

import Link from 'next/link';
import { format } from 'date-fns';
import { BlogPost } from '../../types/blog';
import { calculateReadingTime, extractFeaturedImage } from '../../lib/blog-client-utils';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import { cardHoverVariants } from './blog-animations';

interface BlogCardProps {
  blog: BlogPost;
  featured?: boolean;
  variant?: 'large' | 'standard' | 'minimal' | 'trending';
}

export function BlogCard({ blog, featured = false, variant = 'standard' }: BlogCardProps) {
  const readingTime = calculateReadingTime(blog.content);
  const imageUrl = extractFeaturedImage(blog);
  
  // Spotlight & Tilt Hooks
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for tilt
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  // Spotlight position as percentage (for CSS radial-gradient)
  const spotlightX = useTransform(smoothX, [-0.5, 0.5], [0, 100]);
  const spotlightY = useTransform(smoothY, [-0.5, 0.5], [0, 100]);

  // Create radial gradient string for the spotlight
  const spotlightBackground = useMotionTemplate`radial-gradient(400px circle at ${spotlightX}% ${spotlightY}%, rgba(var(--primary-rgb), 0.12), transparent 80%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // Determine heights and typography based on variant
  const isLarge = variant === 'large' || featured;
  const isMinimal = variant === 'minimal';
  const imgHeight = isLarge ? 'h-[300px] sm:h-[400px]' : isMinimal ? 'h-40' : 'h-56';
  const titleClass = isLarge ? 'text-2xl sm:text-4xl leading-tight' : 'text-xl';
  const clampClass = isLarge ? 'line-clamp-3' : 'line-clamp-2';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className="group relative h-full w-full"
    >
      <motion.div
        variants={cardHoverVariants}
        initial="initial"
        whileHover="hover"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-xl transition-colors duration-500 hover:border-white/20 hover:bg-surface-elevated"
      >
        {/* Dynamic Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlightBackground }}
        />
        
        {/* Static Hover Glow (fallback) */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Image Container */}
        <div className={`relative w-full overflow-hidden ${imgHeight} z-10`} style={{ transform: "translateZ(30px)" }}>
          <Image 
            src={imageUrl} 
            alt={blog.title} 
            fill 
            className="object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-110" 
            sizes={isLarge ? "(max-width: 1200px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent" />
          
          {/* Categories overlaid on image if minimal */}
          {isMinimal && (
             <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {blog.categories.slice(0, 1).map((category) => (
                  category !== 'Uncategorized' && (
                    <span
                      key={category}
                      className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-white border border-white/10"
                    >
                      {category}
                    </span>
                  )
                ))}
             </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-8 z-10 relative" style={{ transform: "translateZ(40px)" }}>
          {!isMinimal && (
            <div className="mb-5 flex flex-wrap gap-2">
              {blog.categories.slice(0, 2).map((category) => (
                category !== 'Uncategorized' && (
                  <span
                    key={category}
                    className="rounded-full bg-white/5 backdrop-blur-md px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-sm border border-white/10 transition-colors group-hover:border-primary/40 group-hover:text-primary-light group-hover:bg-primary/20"
                  >
                    {category}
                  </span>
                )
              ))}
            </div>
          )}
          
          <h3 className={`mb-4 font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 ${titleClass} ${clampClass}`}>
            <span dangerouslySetInnerHTML={{ __html: blog.title }} />
          </h3>
          
          {!isMinimal && blog.excerpt && (
            <p className="mb-6 text-white/50 line-clamp-3 text-sm sm:text-base leading-relaxed font-light transition-colors group-hover:text-white/70">
              {blog.excerpt.replace(/<[^>]+>/g, '')}
            </p>
          )}
          
          <div className="mt-auto flex items-center justify-between text-xs font-medium text-white/40 pt-6 border-t border-white/5 transition-colors group-hover:border-white/10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4 text-white/30 transition-colors group-hover:text-primary/70" />
                <time dateTime={blog.date}>
                  {format(new Date(blog.date), 'MMM d, yyyy')}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4 text-white/30 transition-colors group-hover:text-primary/70" />
                <span>{readingTime}</span>
              </div>
            </div>
            
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-500 ease-[0.22,1,0.36,1] group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] group-hover:translate-x-2 group-hover:rotate-[-45deg] relative overflow-hidden">
              <ArrowRightIcon className="h-4 w-4 z-10" />
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Absolute clickable overlay for semantics since motion.div wraps content */}
      <Link href={`/blogs/${blog.slug}`} className="absolute inset-0 z-20 rounded-[2rem]" aria-label={`Read ${blog.title}`}>
        <span className="sr-only">Read {blog.title}</span>
      </Link>
    </motion.div>
  );
}
