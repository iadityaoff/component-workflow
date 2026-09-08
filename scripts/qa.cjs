/**
 * 21st-Clone QA Gate
 * ───────────────────────────────────────────────────────────────────
 * Enforces component quality rules:
 *  - No text glyphs (✓, ✕, ⚠, ℹ)
 *  - No emojis (🎉, 🚀, ✨, 🔥, etc.)
 *  - No external placeholders (unsplash, picsum, etc.)
 *  - No accidental secrets (API keys)
 *  - Encourages <Icon /> wrapper over raw <svg>
 * ───────────────────────────────────────────────────────────────────
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');

// Configuration
const RULES = {
  glyphs: {
    pattern: /[✓✔✕✗⚠ℹ★☆→←↑↓⇒⇐➜➝➞●◉○◦▪▫■□]/g,
    message: 'Found decorative unicode glyph. Use a Lucide icon instead.',
    severity: 'error',
    // Comments and JSDoc bullets are fine; scan only JSX/string content.
    skipInComments: true,
  },
  emojis: {
    pattern: /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu,
    message: 'Found emoji. Emojis are prohibited in production components.',
    severity: 'error'
  },
  placeholders: {
    pattern: /(placeholder\.com|unsplash\.com|picsum\.photos|placeholder\.id)/gi,
    message: 'Found external placeholder URL. Use local assets or generated images.',
    severity: 'error'
  },
  secrets: {
    pattern: /(sk-[a-zA-Z0-9]{20,}|key-[a-zA-Z0-9]{32,}|AIza[0-9A-Za-z-_]{35})/g,
    message: 'Potential secret/API key detected!',
    severity: 'error'
  },
  rawSvg: {
    pattern: /<svg/g,
    message: 'Found raw <svg> tag in registry. Use the <Icon /> primitive.',
    severity: 'warn',
    onlyIn: ['src/data/registry/']
  }
};

let errorCount = 0;
let warnCount = 0;

function scanDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        scanDir(fullPath);
      }
    } else if (/\.(tsx|ts|js|jsx)$/.test(file)) {
      checkFile(fullPath);
    }
  }
}

// Strip JS/TS comments (line + block + JSDoc) but preserve their
// positions with whitespace so error line numbers stay accurate.
function stripComments(src) {
  let out = '';
  let i = 0;
  const len = src.length;
  let inStr = null; // '"', "'", or '`'
  while (i < len) {
    const c = src[i];
    const n = src[i + 1];
    if (inStr) {
      out += c;
      if (c === '\\' && i + 1 < len) { out += n; i += 2; continue; }
      if (c === inStr) inStr = null;
      i += 1; continue;
    }
    if (c === '/' && n === '/') {
      while (i < len && src[i] !== '\n') { out += src[i] === '\n' ? '\n' : ' '; i += 1; }
      continue;
    }
    if (c === '/' && n === '*') {
      i += 2; out += '  ';
      while (i < len && !(src[i] === '*' && src[i + 1] === '/')) {
        out += src[i] === '\n' ? '\n' : ' ';
        i += 1;
      }
      if (i < len) { out += '  '; i += 2; }
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; out += c; i += 1; continue; }
    out += c; i += 1;
  }
  return out;
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const noComments = stripComments(content);
  const relativePath = path.relative(path.join(__dirname, '..'), filePath);

  Object.entries(RULES).forEach(([ruleName, rule]) => {
    // Check path restrictions
    if (rule.onlyIn && !rule.onlyIn.some(p => relativePath.startsWith(p))) {
      return;
    }

    const haystack = rule.skipInComments ? noComments : content;
    let m;
    const re = new RegExp(rule.pattern.source, rule.pattern.flags);
    while ((m = re.exec(haystack)) !== null) {
      const line = getLineNumber(haystack, m.index);
      const logMsg = `[${rule.severity.toUpperCase()}] ${relativePath}:${line} - ${rule.message} (Found: "${m[0]}")`;
      if (rule.severity === 'error') {
        console.error('\x1b[31m%s\x1b[0m', logMsg);
        errorCount++;
      } else {
        console.warn('\x1b[33m%s\x1b[0m', logMsg);
        warnCount++;
      }
      if (!re.global) break;
    }
  });
}

function getLineNumber(content, index) {
  const lines = content.substring(0, index).split('\n');
  return lines.length;
}

console.log('--- Starting 21st-Clone QA Gate ---');
scanDir(SRC_DIR);
console.log('\n--- Scan Summary ---');
console.log(`${errorCount} errors, ${warnCount} warnings`);

if (errorCount > 0) {
  console.error('\x1b[31m%s\x1b[0m', 'QA Gate FAILED: Fix the errors above.');
  process.exit(1);
} else {
  console.log('\x1b[32m%s\x1b[0m', 'QA Gate PASSED.');
  process.exit(0);
}
