import fs from "fs";
import path from "path";

const outDir = path.join("public", "testimonials");
fs.mkdirSync(outDir, { recursive: true });

const assets = [
  ["mohammed-mirza.jpg", "https://reapmind.com/wp-content/uploads/2023/08/2-1024x1016.jpg"],
  ["jeremy-del-zotto.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/jeremy-del-zotto-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png"],
  ["gunjan-jain.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Gunjan-jain-rl7hpjnjx2fx53mc5j2h28jfwh1az7zyvojnph3l4c.png"],
  ["roland-owens.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Roland_owens-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png"],
  ["sd-shibulal.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/S.D-Sgibulal-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png"],
  ["matthew-carter.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Matthew-Carter-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png"],
  ["murugan-kandasamy.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Murugan-Candasamy-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png"],
];

for (const [name, url] of assets) {
  const dest = path.join(outDir, name);
  const res = await fetch(url);
  if (!res.ok) {
    console.error("FAIL", name, res.status);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log("saved", name, buf.length);
}
