"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AnimatedHtmlContent({ content }: { content: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // We select direct block-level children of the prose container to animate them as they scroll into view
    const elements = containerRef.current.querySelectorAll(
      ":scope > p, :scope > h2, :scope > h3, :scope > h4, :scope > ul, :scope > ol, :scope > blockquote, :scope > pre, :scope > .wp-block-image, :scope > img"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible-block");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => {
      el.classList.add("hidden-block");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [content]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .hidden-block {
          opacity: 0;
          transform: translateY(30px);
          filter: blur(4px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), 
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                      filter 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .visible-block {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }
        
        /* Specialized animations for different blocks */
        .prose blockquote.hidden-block {
          transform: translateX(-30px);
        }
        .prose blockquote.visible-block {
          transform: translateX(0);
        }
        
        .prose pre.hidden-block {
          transform: scale(0.95) translateY(20px);
        }
        .prose pre.visible-block {
          transform: scale(1) translateY(0);
        }

        .prose img.hidden-block {
          transform: scale(1.05);
          clip-path: inset(10% 10% 10% 10%);
        }
        .prose img.visible-block {
          transform: scale(1);
          clip-path: inset(0% 0% 0% 0%);
          transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1),
                      clip-path 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}} />
      <div 
        ref={containerRef}
        className="prose prose-invert prose-lg md:prose-xl max-w-none 
                   prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                   prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                   prose-h3:mt-12 prose-h3:mb-4
                   prose-p:text-white/80 prose-p:leading-relaxed
                   prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-hover hover:prose-a:underline
                   prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-img:w-full prose-img:object-cover
                   prose-ul:text-white/80 prose-li:marker:text-primary
                   prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:text-white/90 prose-blockquote:font-medium prose-blockquote:not-italic
                   prose-pre:bg-black/80 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:shadow-2xl
                   prose-code:text-primary-light prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
