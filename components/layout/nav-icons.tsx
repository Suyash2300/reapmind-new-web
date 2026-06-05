import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ className, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function NavItemIcon({
  label,
  className = "size-4",
}: {
  label: string;
  className?: string;
}) {
  const key = label.toLowerCase();
  if (key === "about") return <IconUsers className={className} />;
  if (key === "services") return <IconLayers className={className} />;
  if (key === "industries") return <IconBuilding className={className} />;
  if (key === "technologies") return <IconCpu className={className} />;
  if (key === "resources") return <IconBookOpen className={className} />;
  return <IconGrid className={className} />;
}

export function NavGroupIcon({
  title,
  className = "size-4",
}: {
  title?: string;
  className?: string;
}) {
  const key = (title ?? "").toLowerCase();

  if (key.includes("design")) return <IconPenTool className={className} />;
  if (key.includes("technology development")) return <IconSparkles className={className} />;
  if (key.includes("hire")) return <IconUserPlus className={className} />;
  if (key.includes("business model")) return <IconHandshake className={className} />;
  if (key.includes("healthcare")) return <IconHeartPulse className={className} />;
  if (key.includes("marketplace")) return <IconShoppingBag className={className} />;
  if (key.includes("travel") || key.includes("transport")) return <IconCar className={className} />;
  if (key.includes("media") || key.includes("social")) return <IconShare className={className} />;
  if (key.includes("education")) return <IconGraduationCap className={className} />;
  if (key.includes("popular")) return <IconTrendingUp className={className} />;
  if (key.includes("banking") || key.includes("finance")) return <IconLandmark className={className} />;
  if (key.includes("tech stack")) return <IconCode className={className} />;
  if (key.includes("portfolio")) return <IconBriefcase className={className} />;
  if (key.includes("blog")) return <IconNewspaper className={className} />;

  return <IconGrid className={className} />;
}

export function NavLinkIcon({
  label,
  className = "size-3.5",
}: {
  label: string;
  className?: string;
}) {
  const key = label.toLowerCase();
  if (key.includes("team")) return <IconUsers className={className} />;
  if (key.includes("life")) return <IconSparkles className={className} />;
  if (key.includes("portfolio")) return <IconBriefcase className={className} />;
  if (key.includes("contact")) return <IconMail className={className} />;
  if (key.includes("who")) return <IconBuilding className={className} />;
  return <IconChevronRight className={className} />;
}

function IconUsers({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </IconBase>
  );
}

function IconLayers({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
    </IconBase>
  );
}

function IconBuilding({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12h12M10 6h.01M10 10h.01M10 14h.01M14 6h.01M14 10h.01M14 14h.01" />
    </IconBase>
  );
}

function IconCpu({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </IconBase>
  );
}

function IconBookOpen({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </IconBase>
  );
}

function IconGrid({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </IconBase>
  );
}

function IconPenTool({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    </IconBase>
  );
}

function IconSparkles({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5L12 3z" />
      <path d="M5 19l1-3M19 5l-3 1" />
    </IconBase>
  );
}

function IconUserPlus({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </IconBase>
  );
}

function IconHandshake({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l2.6-2.6a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-2 2" />
      <path d="m7 13-2-2a1 1 0 0 0-1.4 0L1 13.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l2-2" />
      <path d="M8 12 4 8M16 12l4-4" />
    </IconBase>
  );
}

function IconHeartPulse({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.5 9.5h4l1.5 3 2-6 1.5 3h4" />
    </IconBase>
  );
}

function IconShoppingBag({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
    </IconBase>
  );
}

function IconCar({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3l-2-5H4L2 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M5 13h14" />
    </IconBase>
  );
}

function IconShare({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
    </IconBase>
  );
}

function IconGraduationCap({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </IconBase>
  );
}

function IconTrendingUp({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </IconBase>
  );
}

function IconLandmark({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M3 22h18M6 18V8l6-4 6 4v10" />
      <path d="M10 12h4M10 16h4" />
    </IconBase>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </IconBase>
  );
}

function IconBriefcase({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect x="2" y="8" width="20" height="12" rx="2" />
      <path d="M2 14h20" />
    </IconBase>
  );
}

function IconNewspaper({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9h18v9a2 2 0 0 1-2 2Z" />
      <path d="M10 6h8M10 10h8M10 14h4" />
    </IconBase>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </IconBase>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  );
}

/** Rounded badge wrapper for mega menu section titles */
export function NavIconBadge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ${className}`}
    >
      {children}
    </span>
  );
}
