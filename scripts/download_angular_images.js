const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Angular-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'angularjs.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/CSS-rl7hpey7hjqdyx3sjz5ri2oiuaefunzcm6vpo7xies.png',
    name: 'css.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/data-binding-1-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'data-binding.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/controllers-1-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'controllers.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Gulp-JS-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'gulp-js.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/JS-1-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'javascript.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/image-40.png',
    name: 'ng-inspector.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Jasmine-JS-1-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'jasmine.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/10/scopes-1.png',
    name: 'scopes.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/HTML-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'html.png'
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
  const dir = path.join(__dirname, '..', 'public', 'images', 'angular');
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
