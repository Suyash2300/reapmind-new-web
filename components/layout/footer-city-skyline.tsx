/** Decorative Mumbai-style skyline — matches reapmind.com footer illustration */
export function FooterCitySkyline({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 76"
      fill="none"
      aria-hidden
      className={className}
    >
      <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
        <path d="M107 68H60" />
        <path d="M1 14v12h12V8h8v18h7V1h15v20" />
        <path d="M99 28v12h-7V5h7v11" />
        <path d="M23 52v14h7V29h-7v11" />
        <path d="M43 10h11v58H43z" />
        <path d="M58 18h6v50h-6z" />
        <path d="M68 8h5v60h-5z" />
        <path d="M77 22h4v46h-4z" />
        <path d="M85 14h6v54h-6z" />
        <path d="M95 26h5v42h-5z" />
        <path d="M104 20h4v48h-4z" />
        <path d="M112 30h4v38h-4z" />
        <path d="M118 24h4v44h-4z" />
        <path d="M14 58h29" />
        <path d="M52 62h38" />
        <path d="M8 68h44" />
      </g>
    </svg>
  );
}
