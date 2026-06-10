import fs from "fs";

const html = fs.readFileSync("public/emr-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const boxes = [];
for (const m of html.matchAll(
  /elementskit-info-image-box[\s\S]*?<img[^>]*src="([^"]+)"[\s\S]*?elementskit-info-box-title">\s*([\s\S]*?)<\/h3>[\s\S]*?elementskit-box-style-content">\s*([\s\S]*?)\s*<\/div>/gi,
)) {
  const image = m[1];
  const title = strip(m[2]);
  const description = strip(m[3]);
  if (title && description) boxes.push({ title, description, image });
}

// simpler: box-style-content after h3 in image-box
const alt = [];
for (const m of html.matchAll(
  /<h3 class="elementskit-info-box-title">\s*([\s\S]*?)<\/h3>[\s\S]*?elementskit-box-style-content">\s*([\s\S]*?)\s*<\/div>/gi,
)) {
  const title = strip(m[1]);
  const description = strip(m[2]);
  const chunk = m[0];
  const img = chunk.match(/src="(https:\/\/reapmind\.com\/wp-content\/uploads\/[^"]+)"/)?.[1] || "";
  if (title && description) alt.push({ title, description, image: img });
}

const merged = alt.length ? alt : boxes;
const emrBoxes = merged.filter((b) =>
  /Patient|Task Management|Scheduling|Flow|History|Sort|Reports|Service Highlights/i.test(b.title),
);

console.log("BOXES:", emrBoxes.length);
emrBoxes.forEach((b) => console.log("\n#", b.title, "\n", b.description.slice(0, 120), "\n IMG:", b.image));

fs.writeFileSync("public/emr-boxes.json", JSON.stringify(emrBoxes, null, 2));
