/** Visible Ionic mark for dark UI — no ionic PNG assets in repo. */

type IonicLogoMarkProps = {
  size?: number;
  className?: string;
};

export function IonicLogoMark({ size = 16, className = "" }: IonicLogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      role="img"
    >
      <circle cx="12" cy="12" r="11" fill="#3880FF" />
      <circle cx="12" cy="12" r="5.5" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill="white" />
    </svg>
  );
}

export function isIonicIcon(icon: string, name?: string) {
  return icon === "__ionic__" || name === "Ionic Framework" || icon.includes("ionic");
}
