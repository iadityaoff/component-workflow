#!/usr/bin/env node
/**
 * Build a precompiled Tailwind stylesheet for card preview iframes.
 *
 * Why: each preview iframe was pulling cdn.tailwindcss.com (play-CDN
 * with runtime JIT) which is ~130KB + recurring parse/compile work
 * inside every iframe. That makes the grid feel broken on first paint.
 *
 * This script scans src/data/registry/*.ts for Tailwind classes used
 * inside the variant `code:` strings, runs Tailwind once with our
 * project config, and writes the result to public/preview-vendor/preview.css.
 * Iframes then <link> to a same-origin stylesheet that the browser
 * caches across all cards.
 *
 * Safe to run repeatedly; output is deterministic given the same inputs.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public", "preview-vendor", "preview.css");
const CONTENT_ENTRY = path.join(ROOT, "src", "data", "registry");

// Write a minimal Tailwind entry file that pulls the base, components,
// and utilities layers. We reuse the project's tailwind.config.js but
// override `content` to point at the registry + previews where variants
// live, so unused utilities don't balloon the file.
const tmpEntryDir = path.join(ROOT, ".preview-css-build");
fs.mkdirSync(tmpEntryDir, { recursive: true });

const tmpCss = path.join(tmpEntryDir, "entry.css");
fs.writeFileSync(
  tmpCss,
  `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n`
);

const tmpConfig = path.join(tmpEntryDir, "tailwind.config.cjs");
fs.writeFileSync(
  tmpConfig,
  `const base = require(${JSON.stringify(path.join(ROOT, "tailwind.config.js"))});\n` +
    `module.exports = {\n` +
    `  ...base,\n` +
    `  content: [\n` +
    `    ${JSON.stringify(path.join(ROOT, "src/data/registry/**/*.ts"))},\n` +
    `    ${JSON.stringify(path.join(ROOT, "src/data/components.ts"))},\n` +
    `    ${JSON.stringify(path.join(ROOT, "src/components/previews/**/*.tsx"))},\n` +
    `  ],\n` +
    `  corePlugins: { preflight: true },\n` +
    `};\n`
);

const bin = path.join(ROOT, "node_modules", ".bin", "tailwindcss");
if (!fs.existsSync(bin)) {
  console.error(`tailwindcss CLI not found at ${bin}. Run npm install.`);
  process.exit(1);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });

const cmd = [
  JSON.stringify(bin),
  "-i",
  JSON.stringify(tmpCss),
  "-o",
  JSON.stringify(OUT),
  "-c",
  JSON.stringify(tmpConfig),
  "--minify",
].join(" ");

console.log("Building preview Tailwind stylesheet...");
execSync(cmd, { stdio: "inherit" });

const sz = fs.statSync(OUT).size;
console.log(`Wrote ${OUT} (${(sz / 1024).toFixed(1)} KB)`);
