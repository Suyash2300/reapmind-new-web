import fs from "fs";

const html = fs.readFileSync("public/ris-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const idx = html.indexOf("Why Choose ReapMind as your Desired");
const end = html.indexOf("What clients say about us", idx);
const chunk = html.slice(idx, end);

// all h3 in chunk
const h3 = [...chunk.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map((m) => strip(m[1]));

// icon list items
const iconList = [];
for (const m of chunk.matchAll(/icon-list-text[^>]*>([\s\S]*?)<\/span>/gi)) {
  const t = strip(m[1]);
  if (t.length > 5) iconList.push(t);
}

// dt-fancy-title
const fancy = [...chunk.matchAll(/dt-fancy-title[^>]*>([\s\S]*?)<\/[^>]+>/gi)].map((m) => strip(m[1]));

// split by widget sections
const widgets = chunk.split("elementor-widget");
const widgetTitles = widgets
  .map((w) => {
    const t = w.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const p = w.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    if (t && p) return { title: strip(t[1]), description: strip(p[1]) };
    return null;
  })
  .filter(Boolean);

console.log(JSON.stringify({ h3, iconList, fancy: fancy.slice(0, 15), widgetTitles }, null, 2));
