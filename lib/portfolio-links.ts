/** Internal portfolio paths (replaces legacy https://reapmind.com/portfolio/* links). */

export const portfolioCasePaths = {
  leep: "/portfolio/leep-rideshare-app",
  happyHarvest: "/portfolio/happy-harvest-farms-delivery",
  carloana: "/portfolio/carloana-car-finance-made-smarter",
  dqs: "/portfolio/deutsche-quality-systems-india-dqs-india-audit-app",
  lakshya: "/portfolio/lakshya-academy-empowering-education",
  mtEducare: "/portfolio/mt-educare-education-management",
  organicWorld: "/portfolio/organic-world",
  pawspace: "/portfolio/pawspace",
  municipalBanking: "/portfolio/muncipal-banking",
} as const;

/** Map legacy live-site portfolio URLs to local app routes. */
export function toInternalPortfolioHref(href: string): string {
  if (!href.startsWith("http")) return href;

  const map: Record<string, string> = {
    "https://reapmind.com/portfolio/leep-rideshare": portfolioCasePaths.leep,
    "https://reapmind.com/portfolio/leep-rideshare-app": portfolioCasePaths.leep,
    "https://reapmind.com/portfolio/happy-harvest": portfolioCasePaths.happyHarvest,
    "https://reapmind.com/portfolio/happy-harvest-farms-delivery":
      portfolioCasePaths.happyHarvest,
    "https://reapmind.com/portfolio/carloana": portfolioCasePaths.carloana,
    "https://reapmind.com/portfolio/carloana-car-finance-made-smarter":
      portfolioCasePaths.carloana,
    "https://reapmind.com/portfolio/deutsche-quality-systems-india-dqs-india-audit-app":
      portfolioCasePaths.dqs,
    "https://reapmind.com/portfolio/lakshya-academy-empowering-education":
      portfolioCasePaths.lakshya,
    "https://reapmind.com/portfolio/mt-educare-education-management":
      portfolioCasePaths.mtEducare,
    "https://reapmind.com/portfolio/organic-world": portfolioCasePaths.organicWorld,
    "https://reapmind.com/portfolio/pawspace": portfolioCasePaths.pawspace,
    "https://reapmind.com/portfolio/muncipal-banking": portfolioCasePaths.municipalBanking,
  };

  const normalized = href.replace(/\/$/, "");
  return map[normalized] ?? href;
}

export function isInternalAppHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}
