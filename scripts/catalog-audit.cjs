const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const babel = require('@babel/core');
const Module = require('node:module');
require.extensions['.ts'] = require.extensions['.tsx'] = (mod, file) => {
 const source = fs.readFileSync(file, 'utf8');
 const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 } }).outputText;
 mod._compile(output, file);
};
const { ALL_COMPONENTS, COMPONENT_BY_ID } = require('../src/data/components.ts');
const { ALL_CATEGORIES } = require('../src/data/categories.ts');
const { parseHash } = require('../src/lib/router.tsx');
const assert = require('node:assert/strict');
assert.equal(new Set(ALL_COMPONENTS.map(c => c.id)).size, ALL_COMPONENTS.length);
for (const category of ALL_CATEGORIES) assert.equal(category.count, ALL_COMPONENTS.filter(c => c.categorySlug === category.slug).length, category.slug);
for (const item of ALL_COMPONENTS) { assert.equal(COMPONENT_BY_ID[item.id], item); assert.ok(ALL_CATEGORIES.some(c => c.slug === item.categorySlug), item.id); }
for (const [url, page, category] of [
 ['#/community/components/s/announcement','components','announcements'],
 ['#/community/components/s/data-visualization','components','charts-and-data-viz'],
 ['#/community/components/s/button','components','buttons'],
 ['#/community/authors','authors'], ['#/community/bookmarks','bookmarks'],
 ['#/community/icons/animated','icons'], ['#/community/components/newest','components-newest'],
 ['#/libraries/magic-ui','libraries'], ['#/sign-in','signin'], ['#/profile','profile'],
 ['#/does-not-exist','not-found'], ['#/community/shaders','components','shaders'],
]) {
 const parsed = parseHash(url); assert.equal(parsed.route.page, page, url); if(category) assert.equal(parsed.query.cat, category, url);
}
const failures=[];
for (const item of ALL_COMPONENTS) {
 try { babel.parseSync(item.code, {filename:'component.tsx', presets:[[require.resolve('@babel/preset-typescript'),{allExtensions:true,isTSX:true}], require.resolve('@babel/preset-react')]}); }
 catch(e) { failures.push({id:item.id,message:e.message}); }
}
const data={components:ALL_COMPONENTS.length,categories:ALL_CATEGORIES.length,syntaxFailures:failures,records:ALL_COMPONENTS.map(({code,...item})=>({...item,sourceLength:code.length}))};
if(process.argv[2]) fs.writeFileSync(process.argv[2],JSON.stringify(data,null,2));
console.log(JSON.stringify({components:data.components,categories:data.categories,syntaxFailures:failures},null,2));
if(failures.length) process.exitCode=1;
