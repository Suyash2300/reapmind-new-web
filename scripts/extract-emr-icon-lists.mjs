import fs from "fs";

const html = fs.readFileSync("public/emr-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

const start = html.indexOf("Best Electronic Medical Record");
const end = html.indexOf("Our Recent Works");
const chunk = html.slice(start, end);

const lists = [...chunk.matchAll(/elementor-icon-list-text[^>]*>([^<]+)</gi)].map((m) =>
  strip(m[1]),
);

const headings = [...chunk.matchAll(/elementor-heading-title[^>]*>([\s\S]*?)<\/h[23]>/gi)].map(
  (m) => strip(m[1]),
);

console.log("HEADINGS in features area:", headings);
console.log("ICON LIST:", lists);

// tab content via elementor toggle
const toggles = [];
for (const m of chunk.matchAll(
  /elementor-tab-title[^>]*>([\s\S]*?)<\/[^>]+>[\s\S]*?elementor-tab-content[^>]*>([\s\S]*?)<\/div>/gi,
)) {
  toggles.push({ title: strip(m[1]), body: strip(m[2]).slice(0, 500) });
}
console.log("TOGGLES:", toggles);

fs.writeFileSync("public/emr-icon-lists.json", JSON.stringify({ headings, lists, toggles }, null, 2));
