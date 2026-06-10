import fs from "fs";

const html = fs.readFileSync("public/emr-source.html", "utf8");

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/&#038;/g, "&")
    .replace(/&#8217;/g, "'")
    .trim();
}

function strip(htmlFrag) {
  return decode(htmlFrag.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
const desc = html.match(/name="description"[^>]*content="([^"]+)"/)?.[1];
const canonical = html.match(/rel="canonical"[^>]*href="([^"]+)"/)?.[1];

const imgs = [
  ...new Set(
    [...html.matchAll(/https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s)]+/g)].map((m) =>
      m[0].replace(/\\$/g, ""),
    ),
  ),
];

const headings = {};
for (const tag of ["h1", "h2", "h3", "h4", "h5"]) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  const items = [];
  let m;
  while ((m = re.exec(html)) && items.length < 60) {
    const t = strip(m[1]);
    if (t.length > 2 && t.length < 500) items.push(t);
  }
  headings[tag] = [...new Set(items)];
}

const iconBoxes = [];
for (const m of html.matchAll(
  /elementor-icon-box-title[^>]*>\s*<span[^>]*>([^<]+)<\/span>[\s\S]*?elementor-icon-box-description[^>]*>\s*<p[^>]*>([\s\S]*?)<\/p>/gi,
)) {
  iconBoxes.push({ title: strip(m[1]), desc: strip(m[2]) });
}

const boxes = [];
for (const m of html.matchAll(
  /<h4 class="box-heading">\s*([^<]+?)\s*<\/h4>\s*<div class="box-description">\s*([\s\S]*?)\s*<\/div>/g,
)) {
  boxes.push({ title: strip(m[1]), desc: strip(m[2]) });
}

const tabs = [];
for (const m of html.matchAll(
  /<h5 class="the7-e-tab-title-text">\s*([^<]+?)\s*<\/h5>[\s\S]*?<p>([^<]+)<\/p>/g,
)) {
  const t = strip(m[1]);
  const d = strip(m[2]);
  if (!tabs.find((x) => x.title === t)) tabs.push({ title: t, desc: d });
}

const processSteps = [
  ...new Set(
    [...html.matchAll(/elementor-price-table__feature-inner[\s\S]*?<span\s*>([^<]+)<\/span>/g)].map((m) =>
      strip(m[1]),
    ),
  ),
];

const paragraphs = [];
for (const m of html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)) {
  const t = strip(m[1]);
  if (t.length > 80 && t.length < 2000 && !/cookie|popupmaker|©20/i.test(t)) paragraphs.push(t);
}

const links = [
  ...new Set(
    [...html.matchAll(/href="(\/[^"#?]+)"/g)]
      .map((m) => m[1])
      .filter((l) => !l.includes("wp-content") && l.length < 120),
  ),
];

const extract = {
  title,
  desc,
  canonical,
  imgs,
  headings,
  iconBoxes,
  boxes,
  tabs,
  processSteps,
  paragraphs: [...new Set(paragraphs)].slice(0, 40),
  links: links.slice(0, 80),
};

fs.writeFileSync("public/emr-extract.json", JSON.stringify(extract, null, 2));
console.log("TITLE:", title);
console.log("H1:", headings.h1);
console.log("H2 count:", headings.h2?.length);
console.log("Images:", imgs.length);
console.log("Icon boxes:", iconBoxes.length);
console.log("Boxes:", boxes.length);
console.log("Tabs:", tabs.length);
console.log("Process:", processSteps);
console.log("Wrote public/emr-extract.json");
