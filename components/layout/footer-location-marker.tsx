import Image from "next/image";
import {
  footerCountryFlags,
  type FooterCountryCode,
  type FooterLocationItem,
} from "@/lib/footer-config";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"
      />
      <circle cx="12" cy="10" r="2.5" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 7l8 5 8-5M4 7v10h16V7"
      />
    </svg>
  );
}

export function FooterCountryFlag({ code }: { code: FooterCountryCode }) {
  const { label, src } = footerCountryFlags[code];

  return (
    <div
      className="mt-1 size-9 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/[0.06]"
      role="img"
      aria-label={`${label} flag`}
    >
      <Image
        src={src}
        alt=""
        width={36}
        height={36}
        className="size-full object-cover"
      />
    </div>
  );
}

export function FooterLocationMarker({ item }: { item: FooterLocationItem }) {
  if (item.countryCode) {
    return <FooterCountryFlag code={item.countryCode} />;
  }

  const href = item.href ?? "";
  const iconClass =
    "mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70";

  if (href.startsWith("tel:")) {
    return (
      <div className={iconClass} aria-hidden>
        <PhoneIcon />
      </div>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <div className={iconClass} aria-hidden>
        <MailIcon />
      </div>
    );
  }

  return (
    <div className={iconClass} aria-hidden>
      <PinIcon />
    </div>
  );
}
