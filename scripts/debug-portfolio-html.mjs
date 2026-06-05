const slug = process.argv[2] ?? "deutsche-quality-systems-india-dqs-india-audit-app";
const html = await fetch(`https://reapmind.com/portfolio/${slug}/`).then((r) => r.text());
const headerEnd = html.lastIndexOf("</header>");
const slice = html.slice(headerEnd);
const h1 = slice.match(/<h1 class="elementor-heading-title[^"]*">([\s\S]*?)<\/h1>/i);
console.log("H1:", h1?.[1]?.replace(/<[^>]+>/g, ""));
const headings = [...slice.matchAll(/<h[1-6][^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(
  (m) => m[1].replace(/<[^>]+>/g, "").trim(),
);
console.log("Headings:", headings.slice(0, 25));
