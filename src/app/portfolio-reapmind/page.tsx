"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, Sparkles, ExternalLink, Compass } from "lucide-react";

const PORTFOLIO_ITEMS = [
  {
    title: "Deutsche Quality Systems India (DQS India)",
    href: "https://reapmind.com/portfolio/deutsche-quality-systems-india-dqs-india-audit-app/",
    image: "/images/portfolio/wp-content/uploads/2025/04/2.jpg",
    categories: ["Utility", "Audit"]
  },
  {
    title: "Lakshya Academy",
    href: "https://reapmind.com/portfolio/lakshya-academy-empowering-education/",
    image: "/images/portfolio/wp-content/uploads/2025/03/3.jpg",
    categories: ["Education", "Web"]
  },
  {
    title: "MTeducare",
    href: "https://reapmind.com/portfolio/mt-educare-education-management/",
    image: "/images/portfolio/wp-content/uploads/2025/03/1.jpg",
    categories: ["Education", "Management"]
  },
  {
    title: "Organic World",
    href: "https://reapmind.com/portfolio/organic-world/",
    image: "/images/portfolio/wp-content/uploads/2025/03/banner-2.png",
    categories: ["eCommerce & Retail"]
  },
  {
    title: "PawSpace",
    href: "https://reapmind.com/portfolio/pawspace/",
    image: "/images/portfolio/wp-content/uploads/2025/03/banner-1.png",
    categories: ["On-Demand", "Services"]
  },
  {
    title: "Municipal Banking",
    href: "https://reapmind.com/portfolio/muncipal-banking/",
    image: "/images/portfolio/wp-content/uploads/2024/10/Municipal-Bank-hero-image.png",
    categories: ["Finance", "Banking"]
  },
  {
    title: "BeeMate",
    href: "https://reapmind.com/portfolio/beemate-enhancing-school-transportation-safety-and-communication/",
    image: "/images/portfolio/wp-content/uploads/2024/10/Beemate-Portfolio-Image.png",
    categories: ["Logistics", "IoT"]
  },
  {
    title: "Leep Rideshare",
    href: "https://reapmind.com/portfolio/leep-rideshare-app/",
    image: "/images/portfolio/wp-content/uploads/2024/05/Rideshare.png",
    categories: ["Logistics", "On-Demand"]
  },
  {
    title: "Vkonnect Health",
    href: "https://reapmind.com/portfolio/vkonnect-health/",
    image: "/images/portfolio/wp-content/uploads/2023/05/VKonnect-copy.webp",
    categories: ["Healthcare", "Pharmaceutical"]
  },
  {
    title: "MechUni",
    href: "https://reapmind.com/portfolio/mechuni-mechanical-services-and-parking-app/",
    image: "/images/portfolio/wp-content/uploads/2023/05/mechuni-3-1.webp",
    categories: ["eCommerce & Retail", "Logistics"]
  },
  {
    title: "Carloana",
    href: "https://reapmind.com/portfolio/carloana-car-finance-made-smarter/",
    image: "/images/portfolio/wp-content/uploads/2023/05/Carloana.webp",
    categories: ["Finance", "Automotive"]
  },
  {
    title: "& Connection",
    href: "https://reapmind.com/portfolio/worlds-best-tool-for-personal-connections/",
    image: "/images/portfolio/wp-content/uploads/2023/05/Connection-1.webp",
    categories: ["Social Media", "On-Demand"]
  },
  {
    title: "Happy Harvest Farms",
    href: "https://reapmind.com/portfolio/happy-harvest-farms-delivery/",
    image: "/images/portfolio/wp-content/uploads/2023/05/Happy-Harvest-2.webp",
    categories: ["eCommerce & Retail", "Agriculture"]
  },
  {
    title: "Formulaw",
    href: "https://reapmind.com/portfolio/formulaw-consult-lawyer-online/",
    image: "/images/portfolio/wp-content/uploads/2023/05/Formulaw.webp",
    categories: ["On-Demand", "Services"]
  },
  {
    title: "i30 Coaching",
    href: "https://reapmind.com/portfolio/i30-jee-neet-foundation-coaching-programs-app-reapmind/",
    image: "/images/portfolio/wp-content/uploads/2023/05/i30-Thumbnail.webp",
    categories: ["Education", "E-learning"]
  }
];

const ALL_CATEGORIES = [
  "All",
  "Healthcare",
  "Education",
  "Finance",
  "eCommerce & Retail",
  "Logistics",
  "On-Demand"
];

export default function PortfolioReapmind() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => 
        item.categories.some(cat => 
          cat.toLowerCase().includes(selectedCategory.toLowerCase()) || 
          selectedCategory.toLowerCase().includes(cat.toLowerCase())
        )
      );

  return (
    <div className="relative min-h-screen bg-background pt-44 lg:pt-48 pb-24 px-6 overflow-hidden">
      {/* Immersive background texture and ambient flares - simplified blur for performance */}
      <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none" />
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-2xl transform-gpu" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-brand-deep/5 blur-2xl transform-gpu" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Our Portfolio"
          title="Clean, Smart &amp; Premium Engineering"
          description="Explore our elite portfolio of cutting-edge solutions built for global leaders. We fuse award-winning designs with powerful, scalable technologies to deliver outstanding products."
          align="center"
        />

        {/* Dynamic Category Filter Bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {ALL_CATEGORIES.map(category => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer overflow-hidden transform-gpu ${
                  isActive
                    ? "text-white bg-accent shadow-[0_4px_15px_rgba(var(--accent-rgb),0.25)]"
                    : "bg-surface/50 border border-border/60 text-muted-foreground hover:text-heading hover:border-accent/40 backdrop-blur-md"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-accent -z-10 transform-gpu"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {category === "All" && <Compass className="h-3.5 w-3.5" />}
                  {category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Staggered Portfolio Grid - Removed layout-FLIP calculation triggers to avoid stutters */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => {
              const caseSlug = item.href.replace(/\/$/, "").split("/").pop();
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut", delay: Math.min(index * 0.02, 0.15) }}
                  className="section-card section-card-interactive group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-5 shadow-2xl bg-surface/30 backdrop-blur-xl border border-border/40 hover:border-accent/30 transition-all duration-300 transform-gpu will-change-transform"
                >
                  {/* Premium Hover Glow Border */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2rem]" />
                  
                  {/* Image container */}
                  <Link
                    href={`/portfolio/${caseSlug}`}
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-black/5 dark:bg-black/40 block group-hover:shadow-lg transition-all duration-300 transform-gpu"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                      <span className="text-white text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                        View Case Study <ExternalLink className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>

                  {/* Portfolio Card Content */}
                  <div className="mt-5 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Categories Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.categories.map(cat => (
                          <span key={cat} className="badge-pill !px-3 !py-1 !text-[9px] !font-bold tracking-wider uppercase bg-surface/60 border border-border/40 text-muted-foreground">
                            {cat}
                          </span>
                        ))}
                      </div>
                      
                      <Link href={`/portfolio/${caseSlug}`}>
                        <h3 className="text-xl font-bold text-heading group-hover:text-accent transition-colors duration-300 leading-snug">
                          {item.title}
                        </h3>
                      </Link>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="mt-6 pt-4 border-t border-border/40 flex justify-between items-center">
                      <Link
                        href={`/portfolio/${caseSlug}`}
                        className="accent-link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group/btn"
                      >
                        Explore Case
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
