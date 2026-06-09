import fs from "fs";
import path from "path";
import https from "https";

const ASSETS = [
  [
    "hero.png",
    "https://reapmind.com/wp-content/uploads/2024/11/React-Developers-1024x1024.png",
  ],
  ["tech-illustration.png", "https://reapmind.com/wp-content/uploads/2023/04/Large.png"],
  [
    "tech-react.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/React-JS-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png",
  ],
  [
    "tech-javascript.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/JS-ES6-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png",
  ],
  [
    "tech-jsx.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/JSX-1-rl7hpfw39e6evolkde57fniuczgax637qtgax2c1bw.png",
  ],
  [
    "tech-html.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/HTML-1-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png",
  ],
  [
    "tech-css.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/CSS-1-rl7hpey7qbhoaiqjfrbzxag71r8rl0mhsjsqwi0yf0.png",
  ],
  [
    "tech-webpack.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Webpack-rl7hpkl9q0ui162yktauuj4t2ii61b42452so2k62k.png",
  ],
  [
    "tech-babel.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Babel-1-rl7hpey8y69jfxjzilipi9gjp906yvv12uw30xz7ek.png",
  ],
  [
    "tech-react-router.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/React-Router-1-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png",
  ],
  ["bosch.png", "https://reapmind.com/wp-content/uploads/2023/10/bosch.png"],
  ["oracle.png", "https://reapmind.com/wp-content/uploads/2023/10/oracle.png"],
  ["disney-client.png", "https://reapmind.com/wp-content/uploads/2023/10/disney-client.png"],
  ["siemens-client.png", "https://reapmind.com/wp-content/uploads/2023/10/Siemens-client.png"],
  ["client-logos-21.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-21.png"],
  ["client-logos-6.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-6.png"],
  ["client-logos-23.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-23.png"],
  ["client-logos-14.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-14.png"],
  ["client-logos-22.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-22.png"],
  ["client-logos-1.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-1.png"],
  ["client-logos.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos.png"],
  ["client-logos-2.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-2.png"],
  ["client-logos-3.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-3.png"],
  ["client-logos-12.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-12.png"],
  ["client-logos-4.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-4.png"],
  ["client-logos-5.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-5.png"],
  ["client-logos-7.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-7.png"],
  ["client-logos-8.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-8.png"],
  ["client-logos-9.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-9.png"],
  ["client-logos-11.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-11.png"],
  ["client-logos-13.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-13.png"],
  ["portfolio-leep.png", "https://reapmind.com/wp-content/uploads/2024/10/Leep.png"],
  [
    "portfolio-happy-harvest.webp",
    "https://reapmind.com/wp-content/uploads/2023/05/Happy-HArvest-2-1.webp",
  ],
  ["portfolio-carloana.webp", "https://reapmind.com/wp-content/uploads/2023/05/Carloana.webp"],
  [
    "testimonial-jeremy.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/jeremy-del-zotto-rl7hpklfbr92m4ef2vnt7pb95co3ksc8i4ahb70fxo.png",
  ],
  [
    "testimonial-gunjan.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Gunjan-jain-rl7hpjnl4x7saifs8d96n7jsjysqd38i5zmztx1u3w.png",
  ],
  [
    "testimonial-roland.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Roland_owens-rl7hpklfbr92m4ef2vnt7pb95co3ksc8i4ahb70fxo.png",
  ],
  [
    "testimonial-shibulal.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/S.D-Sgibulal-rl7hpklfbr92m4ef2vnt7pb95co3ksc8i4ahb70fxo.png",
  ],
  [
    "testimonial-matthew.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Matthew-Carter-rl7hpjnl4x7saifs8d96n7jsjysqd38i5zmztx1u3w.png",
  ],
  [
    "testimonial-murugan.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Murugan-Candasamy-rl7hpjnl4x7saifs8d96n7jsjysqd38i5zmztx1u3w.png",
  ],
];

const dir = path.join("public", "react-hire");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(dest);
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", reject);
  });
}

for (const [name, url] of ASSETS) {
  const dest = path.join(dir, name);
  if (fs.existsSync(dest)) {
    console.log(`skip ${name}`);
    continue;
  }
  process.stdout.write(`download ${name}... `);
  await download(url, dest);
  console.log("ok");
}
