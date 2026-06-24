"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

interface BlogDetailPlatformProps {
  children: ReactNode;
  titleHtml: string;
  imageUrl: string;
  metaContent: ReactNode;
  backHref: string;
}

export function BlogDetailPlatform({
  children,
  titleHtml,
  imageUrl,
  metaContent,
  backHref,
}: BlogDetailPlatformProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the hero image
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 800], [0, 300]);
  const opacityImage = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="blog-detail"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-black"
        ref={containerRef}
      >
        {/* Cinematic Parallax Hero */}
        <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden mt-20">
          <motion.div 
            style={{ y: yImage, opacity: opacityImage }} 
            className="absolute inset-0 h-full w-full"
          >
            <Image 
              src={imageUrl} 
              alt="Hero background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container-app mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-20">
              
              {/* Back Button with Morphing Animation */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <Link 
                  href={backHref} 
                  className="group relative inline-flex h-10 items-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-white/60 backdrop-blur-xl transition-colors hover:text-white"
                >
                  <motion.div 
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "tween", ease: "easeInOut" }}
                  />
                  <ChevronLeftIcon className="mr-2 h-4 w-4 relative z-10 transition-transform group-hover:-translate-x-1" />
                  <span className="relative z-10">Back to Journal</span>
                </Link>
              </motion.div>

              {/* Title Reveal */}
              <motion.h1 
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              />

              {/* Meta Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {metaContent}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 -mt-20 container-app mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-24">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
