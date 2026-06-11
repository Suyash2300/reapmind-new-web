/** Visible Next.js mark for dark UI — replaces broken black-on-black PNG asset. */

type NextjsLogoMarkProps = {
  size?: number;
  className?: string;
};

export function NextjsLogoMark({ size = 16, className = "" }: NextjsLogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      role="img"
    >
      <rect width="24" height="24" rx="5" fill="white" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="#000000"
      >
        N
      </text>
    </svg>
  );
}

export function isNextjsIcon(icon: string, name?: string) {
  return name === "Next.js" || icon.includes("nextjs");
}
