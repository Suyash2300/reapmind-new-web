import { writeFileSync } from "node:fs";

const slugs = [
  "how-much-does-it-cost-to-develop-an-ai-agent-for-the-human-resource-industry",
  "how-much-does-it-cost-to-develop-an-ai-agent-in-2025",
  "why-your-enterprise-needs-a-custom-intranet-portal-and-how-to-build-one-that-actually-works",
  "how-to-build-an-ai-powered-language-learning-app-features-process-costs-2025-guide",
  "smarter-school-bus-monitoring-solution-with-iot-mobility-in-2025",
  "devops-automation-approaching-business-critical-functionality",
  "the-role-of-ai-in-intelligent-document-processing-and-management-benefits-and-applications",
  "emr-integration-in-healthcare-systems-benefits-features-process-costs",
  "cybersecurity-in-manufacturing-building-cyber-resilience-for-smart-factories",
  "how-much-does-it-cost-to-develop-a-mutual-fund-investment-portal-or-app",
  "healthcare-workforce-management-software-a-catalyst-for-streamlined-business-operations",
  "how-an-ai-chatbot-for-higher-education-revolutionizes-student-support-services",
];

function decodeHtml(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/&#038;/g, "&")
    .replace(/&hellip;/g, "…")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"');
}

function stripTags(html) {
  return decodeHtml(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n\n")
      .replace(/<li[^>]*>/gi, "\n• ")
      .replace(/<\/li>/gi, "")
      .replace(/<[^>]+>/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
}

function getMeta(html, name) {
  const patterns = [
    new RegExp(`name="${name}"[^>]*content="([^"]+)"`, "i"),
    new RegExp(`property="${name}"[^>]*content="([^"]+)"`, "i"),
    new RegExp(`content="([^"]+)"[^>]*name="${name}"`, "i"),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return decodeHtml(m[1]);
  }
  return null;
}

function extractSections(html) {
  const headerEnd = html.lastIndexOf("</header>");
  const footerStart = html.indexOf("<footer", headerEnd > 0 ? headerEnd : 0);
  const slice = html.slice(
    headerEnd > 0 ? headerEnd : 0,
    footerStart > 0 ? footerStart : undefined,
  );

  const sections = [];
  const re =
    /<(h[23])[^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([\s\S]*?)<\/\1>[\s\S]*?(?=<h[23][^>]*class="[^"]*elementor-heading-title|<footer|$)/gi;
  let match;
  while ((match = re.exec(slice)) !== null) {
    const title = stripTags(match[2]);
    if (!title || title.length < 3) continue;
    const blockEnd = re.lastIndex;
    const blockStart = match.index;
    const blockHtml = slice.slice(blockStart, blockEnd);
    const paragraphs = [...blockHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((m) => stripTags(m[1]))
      .filter((p) => p.length > 40);
    if (paragraphs.length) {
      sections.push({ title, paragraphs });
    }
  }

  if (!sections.length) {
    const paragraphs = [...slice.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((m) => stripTags(m[1]))
      .filter((p) => p.length > 80)
      .slice(0, 12);
    if (paragraphs.length) sections.push({ title: "Overview", paragraphs });
  }

  return sections;
}

function extractHeroImage(html) {
  const m =
    html.match(/property="og:image"[^>]*content="([^"]+)"/i) ||
    html.match(/content="([^"]+)"[^>]*property="og:image"/i);
  return m ? m[1] : null;
}

function extractAuthorDate(html) {
  const author =
    getMeta(html, "author") ||
    html.match(/class="[^"]*author[^"]*"[^>]*>([^<]+)/i)?.[1]?.trim();
  const dateMatch = html.match(
    /datetime="(\d{4}-\d{2}-\d{2})"[^>]*>([^<]+)</i,
  );
  return {
    author: author ? decodeHtml(author) : "ReapMind Innovations",
    date: dateMatch ? decodeHtml(dateMatch[2].trim()) : null,
    isoDate: dateMatch ? dateMatch[1] : null,
  };
}

async function fetchOne(slug) {
  const url = `https://reapmind.com/${slug}/`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${slug}: ${res.status}`);
  const html = await res.text();

  const h1Match = html.match(
    /<h1[^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i,
  );
  const heroTitle = h1Match ? stripTags(h1Match[1]) : slug;
  const { author, date, isoDate } = extractAuthorDate(html);

  return {
    slug,
    canonicalPath: `/${slug}`,
    metaTitle: getMeta(html, "title") || heroTitle,
    metaDescription: getMeta(html, "description") || "",
    heroTitle,
    heroImage: extractHeroImage(html),
    category:
      html.match(/rel="category tag"[^>]*>([^<]+)/i)?.[1]?.trim() ||
      "Blog",
    author,
    date: date || "",
    isoDate: isoDate || "",
    sections: extractSections(html),
  };
}

const posts = [];
for (const slug of slugs) {
  try {
    const post = await fetchOne(slug);
    posts.push(post);
    console.log("OK", slug, post.sections.length, "sections");
  } catch (e) {
    console.error("FAIL", slug, e.message);
  }
}

const out = `/* Auto-generated by scripts/build-blog-post-data.mjs — do not edit by hand */\n\nexport type BlogPostSection = {\n  title: string;\n  paragraphs: string[];\n};\n\nexport type BlogPostContent = {\n  slug: string;\n  canonicalPath: string;\n  metaTitle: string;\n  metaDescription: string;\n  heroTitle: string;\n  heroImage: string | null;\n  category: string;\n  author: string;\n  date: string;\n  isoDate: string;\n  sections: BlogPostSection[];\n};\n\nexport const blogPostContent: Record<string, BlogPostContent> = ${JSON.stringify(
  Object.fromEntries(posts.map((p) => [p.slug, p])),
  null,
  2,
)} as const;\n\nexport const blogSlugs = ${JSON.stringify(posts.map((p) => p.slug))} as const;\n`;

writeFileSync("lib/blog-post-content.ts", out);
console.log("Wrote lib/blog-post-content.ts with", posts.length, "posts");
