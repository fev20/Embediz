import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const context={window:{}};
vm.createContext(context);
for(const file of ['content.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
const pages=context.window.EmbedizSite.pages;
const siteURL='https://fev20.github.io/Embediz/';
const titles=new Set();
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const page of pages){
  const html=fs.readFileSync(path.join(root,page.path,'index.html'),'utf8');
  assert(html.includes('<main id="main" tabindex="-1">')&&!html.includes('<main id="main" tabindex="-1"></main>'),`Empty body: ${page.path}`);
  assert.equal((html.match(/<h1\b/g)||[]).length,1,`Expected one main heading: ${page.path}`);
  const title=html.match(/<title>(.*?)<\/title>/)[1];
  assert(!titles.has(title),`Duplicate title: ${title}`);titles.add(title);
  assert(html.includes(`<link rel="canonical" href="${siteURL+page.path}">`),`Canonical: ${page.path}`);
  assert(sitemap.includes(`<loc>${siteURL+page.path}</loc>`),`Sitemap: ${page.path}`);
  assert(!html.includes('href="#/'),`Hash navigation: ${page.path}`);
  const structured=html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
  assert(structured&&JSON.parse(structured[1])['@graph'].length>=3,`Structured data: ${page.path}`);
  for(const [,attr,raw] of html.matchAll(/\b(href|src)="([^"]+)"/g)){
    if(!raw||raw.startsWith('#')||/^(https?:|mailto:|data:)/.test(raw))continue;
    const url=new URL(raw,siteURL+page.path);
    const relative=decodeURIComponent(url.pathname.slice('/Embediz/'.length));
    assert(url.pathname.startsWith('/Embediz/'),`Outside project root: ${raw}`);
    const file=path.join(root,relative.endsWith('/')||!relative?relative+'index.html':relative);
    assert(fs.existsSync(file),`Broken ${attr} on ${page.path}: ${raw}`);
  }
}
assert(!fs.readFileSync(path.join(root,'404.html'),'utf8').includes('<link rel="canonical"'));
assert(fs.readFileSync(path.join(root,'404.html'),'utf8').includes('noindex,follow'));
assert.equal((sitemap.match(/<loc>/g)||[]).length,pages.length);
console.log(`Verified ${pages.length} complete HTML pages, local links, metadata and sitemap.`);
