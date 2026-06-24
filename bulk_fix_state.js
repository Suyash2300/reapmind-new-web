const fs = require('fs');
const path = require('path');

const stateFiles = [
  'components/ai-copilot/ac-services.tsx',
  'components/blockchain/bc-core-services.tsx',
  'components/blockchain/bc-extended-services.tsx',
  'components/blockchain/bc-networks.tsx',
  'components/fixed-cost/fc-differentiators.tsx',
  'components/generative-ai/gai-services.tsx',
  'components/metaverse/mv-journey-solutions.tsx',
  'components/metaverse/mv-services360.tsx',
  'components/nft-marketplace/nft-dev-process.tsx',
  'components/nft-marketplace/nft-services.tsx',
  'components/nft-marketplace/nft-tech-stack.tsx',
  'components/offshore-bangalore/ob-differentiators.tsx',
  'components/offshore-bangalore/ob-process.tsx',
  'components/offshore-bangalore/ob-services.tsx',
  'components/remote-contract/rc-process.tsx',
  'components/services/services-supporting-section.tsx',
  'components/services/services-workshop-section.tsx',
  'components/startup/su-industries.tsx',
  'components/startup/su-services.tsx',
  'components/startup/su-tech-stack.tsx',
  'components/time-material/tm-how-it-works.tsx',
  'components/time-material/tm-tech-stack.tsx',
  'components/time-material/tm-why-choose.tsx'
];

stateFiles.forEach(file => {
  let filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // We want to replace `useState(` with `useState<string>(` 
    // where it's used for IDs like `useState(something)`
    // Let's replace all `useState(` that don't already have generics, 
    // and aren't false/true/0 (booleans/numbers). We know these specific files have ID state issues.
    
    // specifically target: useState(something)
    // we can just replace `useState(` with `useState<string>(` for the specific variables
    // usually it's `const [activeId, setActiveId] = useState(`
    content = content.replace(/useState\(([^)]+)\)/g, (match, p1) => {
      // Don't replace if it's already generic or if it's a boolean/number
      if (match.includes('<') || p1 === 'true' || p1 === 'false' || !isNaN(p1)) {
        return match;
      }
      return `useState<string>(${p1})`;
    });

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed useState in: ' + filePath);
    }
  }
});
