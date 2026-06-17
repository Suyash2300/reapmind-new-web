async function run() {
  const r = await fetch('https://reapmind.com/healthcare-app-development/');
  const html = await r.text();
  const matches = html.matchAll(/<div class="elementor-toggle-item">.*?<a class="elementor-toggle-title"[^>]*>(.*?)<\/a>.*?<div class="elementor-tab-content[^"]*"[^>]*>(.*?)<\/div>/gs);
  for(const match of matches) { 
    console.log('Q:', match[1].trim()); 
    console.log('A:', match[2].trim()); 
  }
}
run();
