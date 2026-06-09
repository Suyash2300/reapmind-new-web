import fs from "fs";

const html = fs.readFileSync("public/angular-hire-source.html", "utf8");
const imgs = [...html.matchAll(/<img[^>]+>/g)].map((m) => m[0]);
for (const img of imgs) {
  const src = img.match(/src="([^"]+)"/)?.[1];
  const alt = img.match(/alt="([^"]*)"/)?.[1];
  if (src?.includes("uploads") && /Angular|CSS|Gulp|Karma|Jasmine|JavaScript|HTML|Binding|Controller|inspector|Scopes|scopes|JS-|data-binding|image-4/i.test((alt || "") + src)) {
    console.log(alt || "(no alt)", "->", src);
  }
}
