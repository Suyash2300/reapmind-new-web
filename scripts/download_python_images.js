const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Python-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'python.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Django-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'django.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Flask-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'flask.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/FastApi-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'fastapi.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Pandas-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'pandas.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/NumPy-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'numpy.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/scikitlearn-rl7hpkl943gkggo8je7i21mmqrmgcdhsgzj4lul1ks.png',
    name: 'scikit-learn.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/TensorFlow.js-rl7hpkl8vbpibhz7e1i91o6you5t4dn4c0t86r3l6s.png',
    name: 'tensorflow.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/pytorch-rl7hpkl8qxtt41feijjvzcq4jpw84m4fhhsxdbeda4.png',
    name: 'pytorch.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/CI-CD-rl7hpjnf1nar5obotya951004ymzm349xzot4tpo1g.png',
    name: 'ci-cd.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/SQL-rl7hpkl98hc1haabogovpirgqcicts80a4cam3o9v8.png',
    name: 'sql.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/No-sql-rl7hpjng0qbg2sz8w81807eonr8xis3wkmyofkvgtw.png',
    name: 'nosql.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/Python-Developers-1024x1024.png',
    name: 'python-developers.png'
  }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  const dir = path.join(__dirname, '..', 'public', 'images', 'python');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const img of images) {
    const dest = path.join(dir, img.name);
    console.log(`Downloading ${img.url} to ${dest}...`);
    try {
      await download(img.url, dest);
      console.log(`Downloaded ${img.name} successfully.`);
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }
}

main();
