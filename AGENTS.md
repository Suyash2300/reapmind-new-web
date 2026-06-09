<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## ReapMind site rebuild — SEO & routes

Migrating from **https://reapmind.com** (WordPress + Yoast). Preserve search equity:

- **Keep the same URL paths** as the live site unless a **301 redirect** is explicitly planned (old → new, one hop).
- **Keep the same `<title>`, meta description, and H1 topic** per page when possible.
- **Body copy and UI can change** (Next.js, Apple-style motion) as long as **search intent stays the same** — don’t reuse H1/metas for a different offer.
- Marketing pages should be **crawlable** (real HTML for hero/headings; `metadata` / `generateMetadata` per route; sitemap + canonicals).
- After launch: monitor **Google Search Console** for 404s and ranking dips on migrated URLs.

Design direction: premium SaaS / Apple-tier scroll motion (GSAP + Lenis for story sections; Framer for UI polish). Not a generic agency template clone.

## Responsive (required on every UI)

**Everything we build must work on mobile, tablet, and desktop** — not desktop-only with a later “mobile pass.”

- **Mobile-first layout:** base styles for small screens; scale up with `sm:` / `md:` / `lg:` / `xl:`.
- **Fluid type & spacing:** use project tokens (`text-h1`, `container-app`, `section-app`) — avoid fixed px widths for main content.
- **Navigation:** desktop mega-menus + **mobile drawer** pattern (see `site-header.tsx`); no hover-only critical actions.
- **Touch targets:** buttons/links ≥ ~44px tap area; adequate spacing in nav and CTAs.
- **Images/media:** `sizes` on `next/image`; no horizontal overflow (`overflow-x` on body sections).
- **Motion:** respect `prefers-reduced-motion`; simplify or disable pin/scrub/heavy GSAP on small viewports when needed.
- **Test breakpoints:** ~375px (phone), ~768px (tablet), ~1280px+ (desktop) before calling a section done.

## Homepage sections (defaults)

When adding new homepage blocks unless the user says otherwise:

- **Placement:** append at the **bottom** of `app/page.tsx` (last section before the footer) — do not insert mid-page by default.
- **Theme:** use the site **dark/black** palette — `bg-surface-dark`, `text-primary-foreground`, white headings, `text-white/70` body. Cards: `border-border-strong`, `bg-surface-elevated`, primary hover glow (match `home-intro-stats-section`, `home-digital-excellence-section`). Do **not** use `bg-surface-warm` or light/white section backgrounds unless explicitly requested.
- **Reuse:** do not extract shared UI primitives or refactor for DRY unless the user asks.
