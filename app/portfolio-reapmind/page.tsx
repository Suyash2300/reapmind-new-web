import Link from "next/link";
import { portfolioCases, portfolioListing } from "@/lib/portfolio";

export const metadata = {
  title: "Portfolio | ReapMind",
  description: portfolioListing.description,
};

export default function PortfolioListingPage() {
  return (
    <main className="section-app bg-background">
      <div className="container-app">
        <h1 className="text-h2 font-bold text-foreground">
          {portfolioListing.title}
        </h1>
        <p className="mt-4 max-w-3xl text-para text-muted">
          {portfolioListing.description}
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioCases.map((item) => (
            <li key={item.slug}>
              <Link
                href={item.href}
                className="block rounded-2xl border border-border bg-white p-6 transition-colors hover:border-primary hover:shadow-md"
              >
                <h2 className="text-subtitle font-bold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-primary">{item.tagline}</p>
                <p className="mt-3 text-para text-muted line-clamp-2">
                  {item.summary}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">
                  View case study →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
