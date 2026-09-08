const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replacements
  // info: ℹ -> <Icon icon={Info} size={16} />
  content = content.replace(/ℹ/g, '<Icon icon={Info} size={16} />');
  // check: ✓ -> <Icon icon={Check} size={16} />
  content = content.replace(/✓/g, '<Icon icon={Check} size={16} />');
  // cross: ✕ -> <Icon icon={X} size={16} />
  content = content.replace(/✕/g, '<Icon icon={X} size={16} />');
  // alert: ⚠ -> <Icon icon={AlertTriangle} size={16} />
  content = content.replace(/⚠/g, '<Icon icon={AlertTriangle} size={16} />');
  // arrow right: → -> <Icon icon={ArrowRight} size={16} />
  content = content.replace(/→/g, '<Icon icon={ArrowRight} size={16} />');
  // arrow left: ← -> <Icon icon={ArrowLeft} size={16} />
  content = content.replace(/←/g, '<Icon icon={ArrowLeft} size={16} />');
  // up arrow: ↑ -> <Icon icon={ArrowUp} size={16} />
  content = content.replace(/↑/g, '<Icon icon={ArrowUp} size={16} />');
  
  // Emojis mapping
  content = content.replace(/📊/g, '<Icon icon={BarChart} size={16} />');
  content = content.replace(/🧩/g, '<Icon icon={Puzzle} size={16} />');
  content = content.replace(/⚙/g, '<Icon icon={Settings} size={16} />');
  content = content.replace(/📁/g, '<Icon icon={Folder} size={16} />');
  content = content.replace(/🎉/g, '<Icon icon={PartyPopper} size={16} />');
  content = content.replace(/⚡/g, '<Icon icon={Zap} size={16} />');
  content = content.replace(/🎨/g, '<Icon icon={Palette} size={16} />');
  content = content.replace(/📦/g, '<Icon icon={Package} size={16} />');
  content = content.replace(/🔒/g, '<Icon icon={Lock} size={16} />');
  content = content.replace(/🌸/g, '<Icon icon={Flower} size={16} />');
  content = content.replace(/✨/g, '<Icon icon={Sparkles} size={16} />');
  content = content.replace(/🚀/g, '<Icon icon={Rocket} size={16} />');
  content = content.replace(/🎯/g, '<Icon icon={Target} size={16} />');
  content = content.replace(/💬/g, '<Icon icon={MessageCircle} size={16} />');
  content = content.replace(/🌈/g, '<Icon icon={Rainbow} size={16} />');
  content = content.replace(/👩/g, '<Icon icon={User} size={16} />');
  content = content.replace(/💻/g, '<Icon icon={Laptop} size={16} />');
  content = content.replace(/🤖/g, '<Icon icon={Bot} size={16} />');
  content = content.replace(/🎁/g, '<Icon icon={Gift} size={16} />');
  content = content.replace(/👥/g, '<Icon icon={Users} size={16} />');
  content = content.replace(/📧/g, '<Icon icon={Mail} size={16} />');
  content = content.replace(/🔗/g, '<Icon icon={Link} size={16} />');
  content = content.replace(/🏠/g, '<Icon icon={Home} size={16} />');

  // Find all used icons to generate imports
  const iconsUsed = [...new Set([...content.matchAll(/<Icon icon={([A-Za-z]+)}/g)].map(m => m[1]))];

  if (content !== originalContent) {
    console.log(`Updated ${filePath}`);
    console.log(`Icons used: ${iconsUsed.join(', ')}`);
    // We should manually add imports if they are missing in the file.
    // For now, let's just write the replaced content.
    fs.writeFileSync(filePath, content, 'utf8');
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
