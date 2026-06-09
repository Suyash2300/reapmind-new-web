import fs from "fs";
import path from "path";
import https from "https";

const ASSETS = [
  ["hero.jpg", "https://reapmind.com/wp-content/uploads/2024/11/Angular-Developers-1024x1024.png"],
  ["tech-illustration.png", "https://reapmind.com/wp-content/uploads/2023/04/Large.png"],
  [
    "tech-angular.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Angular-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png",
  ],
  [
    "tech-css.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/CSS-rl7hpey7qbhoaiqjfrbzxag71r8rl0mhsjsqwi0yf0.png",
  ],
  [
    "tech-data-binding.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/data-binding-1-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png",
  ],
  [
    "tech-controllers.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/controllers-1-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png",
  ],
  [
    "tech-gulp.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Gulp-JS-1-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png",
  ],
  [
    "tech-javascript.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/JS-1-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png",
  ],
  [
    "tech-karma.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/image-40-rl7hpklciw24lln9fhot5dq1c8nnkkwuv7zc7epafg.png",
  ],
  [
    "tech-ng-inspector.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/image-41-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png",
  ],
  [
    "tech-jasmine.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Jasmine-JS-1-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png",
  ],
  ["tech-scopes.png", "https://reapmind.com/wp-content/uploads/2024/10/scopes-1.png"],
  [
    "tech-html.png",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/HTML-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png",
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
  ["testimonial-jeremy.jpg", "https://reapmind.com/wp-content/uploads/2023/08/1.jpg"],
  ["testimonial-gunjan.jpg", "https://reapmind.com/wp-content/uploads/2023/08/2.jpg"],
  ["testimonial-roland.jpg", "https://reapmind.com/wp-content/uploads/2023/08/5.jpg"],
  ["testimonial-shibulal.jpg", "https://reapmind.com/wp-content/uploads/2023/08/S.-D.-Shibulal.jpg"],
  [
    "testimonial-matthew.jpg",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Matthew-Carter-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png",
  ],
  [
    "testimonial-murugan.jpg",
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Murugan-Candasamy-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png",
  ],
];

const dir = path.join("public", "angular-hire");
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
