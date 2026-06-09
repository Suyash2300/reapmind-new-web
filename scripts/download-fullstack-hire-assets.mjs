import fs from "fs";
import path from "path";
import https from "https";

const ASSETS = [
  ["hero.jpg", "https://reapmind.com/wp-content/uploads/2024/11/Full-Stack-1024x1024.png"],
  ["tech-illustration.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/6th-image-5-rl7hpippq8egoigf0723xm0z6xmodravri8tmb6hkw.png"],
  ["tech-html.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/HTML-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-css.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/CSS-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-javascript.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/JavaScript-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-react.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/React-2-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-angular.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Angular-2-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-vue.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Vue.js-2-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png"],
  ["tech-jquery.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/jQuery-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png"],
  ["tech-bootstrap.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Bootstrap-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-typescript.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/TypeScript-2-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png"],
  ["tech-nodejs.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Node.js-3-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-express.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Express.js-1-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-nestjs.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/NestJS-2-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-python.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Python-1-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-django.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Django-1-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-flask.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Flask-1-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-ruby.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Ruby-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png"],
  ["tech-java.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Java-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-spring.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Spring-Boot-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png"],
  ["tech-php.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/PHP-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-go.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Go-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-mysql.png", "https://reapmind.com/wp-content/uploads/2024/11/MySQL-2.png"],
  ["tech-postgresql.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/PostgreSQL-2-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-mongodb.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/MongoDB-2-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-cassandra.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Cassandra-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-git.png", "https://reapmind.com/wp-content/uploads/2024/11/Git.png"],
  ["tech-docker.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Docker-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-kubernetes.png", "https://reapmind.com/wp-content/uploads/2024/11/Kubernetes.png"],
  ["tech-aws.png", "https://reapmind.com/wp-content/uploads/2024/11/AWS-4.png"],
  ["tech-azure.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Azure-4-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png"],
  ["tech-gcp.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/GCP-4-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
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
  ["portfolio-happy-harvest.webp", "https://reapmind.com/wp-content/uploads/2023/05/Happy-HArvest-2-1.webp"],
  ["portfolio-carloana.webp", "https://reapmind.com/wp-content/uploads/2023/05/Carloana.webp"],
  ["testimonial-mirza.jpg", "https://reapmind.com/wp-content/uploads/2023/08/2.jpg"],
  ["testimonial-jeremy.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/jeremy-del-zotto-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png"],
  ["testimonial-gunjan.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Gunjan-jain-rl7hpjnjx2fx53mc5j2h28jfwh1az7zyvojnph3l4c.png"],
  ["testimonial-roland.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Roland_owens-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png"],
  ["testimonial-shibulal.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/S.D-Sgibulal-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png"],
  ["testimonial-matthew.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Matthew-Carter-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png"],
  ["testimonial-murugan.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Murugan-Candasamy-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png"],
];

const dir = path.join("public", "fullstack-hire");
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
  console.log(`download ${name}`);
  await download(url, dest);
}

console.log("done");
