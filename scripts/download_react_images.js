const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/React-JS-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'reactjs.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/JS-ES6-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'javascript-es6.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/JSX-1-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'jsx.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/HTML-1-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'html.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/CSS-1-rl7hpey7hjqdyx3sjz5ri2oiuaefunzcm6vpo7xies.png',
    name: 'css.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Webpack-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'webpack.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/React-Router-1-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'react-router.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Babel-1-rl7hpey7qbhi5jj94xq9d5p6xlpi79150i5eam2gpc.png',
    name: 'babel.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/React-Developers-1024x1024.png',
    name: 'react-developers.png'
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
  const dir = path.join(__dirname, '..', 'public', 'images', 'react');
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
