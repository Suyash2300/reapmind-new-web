"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

const blogCategories = [
  { name: "Artificial Intelligence", href: "/blogs/?term=artificial-intelligence" },
  { name: "App Development", href: "/blogs/?term=android-app-development" },
  { name: "Cloud", href: "/blogs/?term=cloud-management" },
  { name: "Travel / Transport", href: "/how-is-immersive-technology-reshaping-travel-and-tourism/" },
  { name: "Node JS", href: "/top-nodejs-development-company/" },
  { name: "Python", href: "/top-python-development-company/" },
];

export function HealthcareBlogs() {
  return (
    <section className="bg-surface-dark py-16 md:py-24 border-t border-border-strong">
      <div className="container-app">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h2 className="text-h3 font-bold text-white sm:text-h2">
                Blogs & Insights
              </h2>
              <p className="mt-2 text-white/70">
                Explore our latest thoughts on technology and healthcare.
              </p>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-dark"
            >
              View All Blogs
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {blogCategories.map((category, idx) => (
            <FadeIn key={category.name} delay={idx * 0.1}>
              <Link
                href={category.href}
                className="group flex h-full min-h-[120px] flex-col items-center justify-center rounded-2xl border border-border-strong bg-surface-elevated/50 p-4 text-center transition-all hover:border-primary/50 hover:bg-primary/5"
              >
                <span className="font-medium text-white/80 transition-colors group-hover:text-primary-foreground">
                  {category.name}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
