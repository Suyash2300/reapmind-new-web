import Link from "next/link";
import { timeMaterialConfig } from "@/lib/time-material-config";

export function TmPortfolioCta() {
  return (
    <div className="border-t border-white/10 bg-surface-dark py-8">
      <div className="container-app text-center">
        <Link
          href="/contact-us#free-consultation"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-semibold text-white transition-colors hover:border-primary/50 hover:text-primary"
        >
          {timeMaterialConfig.portfolioCta}
        </Link>
      </div>
    </div>
  );
}
