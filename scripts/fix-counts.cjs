const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // If it's a registry file containing component string literals, we just replace with 600+
  if (filePath.includes('src/data/registry/') || filePath.includes('src/data/components.ts')) {
    content = content.replace(/1,400\+/g, '600+').replace(/1,500\+/g, '600+').replace(/1500\+/g, '600+');
  } else {
    // If it's an app file, we can use the dynamic REGISTRY_COUNT
    // But since it's tricky to inject the import dynamically via regex and handle JSX string interpolation,
    // let's just use "600+" to be safe and simple, or we can inject REGISTRY_COUNT if we want to be fancy.
    // The requirement says: "Replace hardcoded '1,400+' with dynamic length across all pages"
    
    // For App files, let's just use dynamic count if we can find where to inject it.
    // Actually, to make it perfectly dynamic, I will manually patch TopBar, MagicChatPage, MetaHead, and AllPreviews.
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git', 'dist'].includes(file)) scanDir(fullPath);
    } else if (/\.(tsx|ts)$/.test(file)) {
      processFile(fullPath);
    }
  }
}

scanDir(srcDir);
