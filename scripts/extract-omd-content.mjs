import fs from "fs";

const html = fs.readFileSync("public/omd-source.html", "utf8");

const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
const desc = html.match(/name="description"[^>]*content="([^"]+)"/)?.[1];
const canonical = html.match(/rel="canonical"[^>]*href="([^"]+)"/)?.[1];

console.log("TITLE:", title);
console.log("DESC:", desc);
console.log("CANONICAL:", canonical);

const imgs = [
  ...new Set(
    [...html.matchAll(/https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s)]+/g)].map((m) =>
      m[0].replace(/\\$/g, "")
    )
  ),
];

console.log("\nIMAGE COUNT:", imgs.length);
imgs.forEach((u) => console.log(u));

for (const tag of ["h1", "h2", "h3", "h4"]) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  const items = [];
  let m;
  while ((m = re.exec(html)) && items.length < 40) {
    const t = m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (t.length > 2 && t.length < 400) items.push(t);
  }
  console.log(`\n${tag.toUpperCase()} (${[...new Set(items)].length}):`);
  [...new Set(items)].forEach((t) => console.log(" -", t));
}

// elementor icons / feature sections
const iconBoxes = [];
for (const m of html.matchAll(
  /elementor-icon-box-title[^>]*>\s*<span[^>]*>([^<]+)<\/span>[\s\S]*?elementor-icon-box-description[^>]*>\s*<p[^>]*>([\s\S]*?)<\/p>/gi
)) {
  iconBoxes.push({
    title: m[1].trim(),
    desc: m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
  });
}
console.log("\nICON BOXES:", iconBoxes.length);
iconBoxes.forEach((b) => console.log(`### ${b.title}\n${b.desc.slice(0, 200)}...\n`));

const boxes = [];
for (const m of html.matchAll(
  /<h4 class="box-heading">\s*([^<]+?)\s*<\/h4>\s*<div class="box-description">\s*([\s\S]*?)\s*<\/div>/g
)) {
  const title = m[1].trim();
  const desc = m[2]
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#8211;/g, "-")
    .replace(/\s+/g, " ")
    .trim();
  boxes.push({ title, desc });
}

// Process steps
const steps = [];
for (const m of html.matchAll(
  /elementor-icon-list-text[^>]*>([^<]+)<\/span>/g
)) {
  const t = m[1].trim();
  if (["Agile Approach", "Planning", "UI / UX Designing", "Coding", "Quality Assurance", "Launch"].includes(t)) {
    steps.push(t);
  }
}

// Customer features - icon list items near Customer Management
const customerIdx = html.indexOf("Customer Management");
const customerChunk = html.slice(customerIdx, customerIdx + 8000);
const customerFeatures = [
  ...new Set(
    [...customerChunk.matchAll(/elementor-icon-list-text[^>]*>([^<]+)<\/span>/g)].map((m) =>
      m[1].trim()
    )
  ),
];

console.log("\nBOXES:", boxes.length);
boxes.forEach((b) => console.log(`### ${b.title}\n${b.desc.slice(0, 150)}...\n`));
const tabs = [];
for (const m of html.matchAll(
  /<h5 class="the7-e-tab-title-text">\s*([^<]+?)\s*<\/h5>[\s\S]*?<p>([^<]+)<\/p>/g
)) {
  const title = m[1].replace(/&amp;/g, "&").trim();
  const desc = m[2].replace(/&amp;/g, "&").trim();
  if (!tabs.find((t) => t.title === title)) tabs.push({ title, desc });
}

const processSteps = [
  ...new Set(
    [...html.matchAll(/elementor-price-table__feature-inner[\s\S]*?<span\s*>([^<]+)<\/span>/g)].map(
      (m) => m[1].trim()
    )
  ),
];

console.log("STEPS:", processSteps);
console.log("TABS:", tabs.length);
tabs.forEach((t) => console.log(`- ${t.title}: ${t.desc.slice(0, 80)}...`));

fs.writeFileSync(
  "public/omd-extract.json",
  JSON.stringify({ title, desc, canonical, imgs, iconBoxes, boxes, processSteps, tabs }, null, 2)
);
