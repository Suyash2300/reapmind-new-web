"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BlogPost } from "../../types/blog";
import { BlogCard } from "./BlogCard";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [posts]);

  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-10 mb-20">
      <motion.div 
        ref={carouselRef} 
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-6 pb-8 px-4"
        >
          {posts.slice(0, 6).map((post, i) => (
            <motion.div 
              key={post.id} 
              className="min-w-[300px] md:min-w-[400px] h-[450px] shrink-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <BlogCard blog={post} variant="standard" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Drag Indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2 text-white/40 text-sm font-medium tracking-widest uppercase">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Drag to explore
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
