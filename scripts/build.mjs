import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const siteURL='https://fev20.github.io/Embediz/';
const context={window:{}};
vm.createContext(context);
for(const name of ['content.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),context,{filename:name});
const site=context.window.EmbedizSite;
const data=context.window.EMBEDIZ;
const shell=fs.readFileSync(path.join(root,'src/page.html'),'utf8');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const organization={'@type':'Organization','@id':siteURL+'#organization',name:'Embediz',url:siteURL,description:site.pages[0].description};
const website={'@type':'WebSite','@id':siteURL+'#website',name:'Embediz',url:siteURL,inLanguage:'ko',publisher:{'@id':organization['@id']}};
function structuredData(page){
  const url=siteURL+page.path;
  const graph=[organization,website,{'@type':'WebPage','@id':url+'#webpage',url,name:page.title,description:page.description,inLanguage:'ko',isPartOf:{'@id':website['@id']},about:{'@id':organization['@id']}}];
  if(page.path){
    const crumbs=[{name:'Embediz',item:siteURL}];
    if(page.project)crumbs.push({name:'프로젝트',item:siteURL+'projects/'});
    if(page.note)crumbs.push({name:'연구 기록',item:siteURL+'notes/'});
    crumbs.push({name:page.title.replace(/ \| Embediz$/,''),item:url});
    graph.push({'@type':'BreadcrumbList',itemListElement:crumbs.map((c,i)=>({'@type':'ListItem',position:i+1,...c}))});
  }
  if(page.note){
    const note=data.notes.find(n=>n.id===page.note);
    graph.push({'@type':'Article',headline:note.title,description:note.summary,datePublished:note.date.replaceAll('.','-'),inLanguage:'ko',mainEntityOfPage:{'@id':url+'#webpage'},author:{'@id':organization['@id']},publisher:{'@id':organization['@id']}});
  }
  return JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c');
}
const outputPages=[...site.pages,{key:'404',path:'404.html',nav:'',title:'페이지를 찾을 수 없습니다 | Embediz',description:'요청한 페이지를 찾을 수 없습니다.',notFound:true}];
for(const page of outputPages){
  const depth=page.path.split('/').filter(Boolean).length;
  const base=page.notFound?new URL(siteURL).pathname:depth?'../'.repeat(depth):'./';
  let html=shell.replace('{{MAIN}}',site.render(page.key,base));
  html=site.rewriteLinks(html,base);
  html=html.replace(/(<a\b[^>]*data-nav=")([^"]+)(")/g,(all,before,nav,after)=>all+(nav===page.nav?' aria-current="page"':''));
  html=html.replace(/<title>[^<]*<\/title>/,`<title>${esc(page.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/,`<meta name="description" content="${esc(page.description)}">`)
    .replace(/<meta property="og:title"[^>]*>/,`<meta property="og:title" content="${esc(page.title)}">`)
    .replace(/<meta property="og:description"[^>]*>/,`<meta property="og:description" content="${esc(page.description)}">`)
    .replace(/<meta property="og:type"[^>]*>/,`<meta property="og:type" content="${page.note?'article':'website'}">`)
    .replace(/(href|src)="\.\/(assets\/favicon\.svg|styles\.css|content\.js|app\.js)"/g,(_,attr,file)=>`${attr}="${base}${file}"`);
  const extra=[
    `<meta name="embediz-root" content="${base}">`,
    `<meta name="robots" content="${page.notFound?'noindex,follow':'index,follow,max-image-preview:large'}">`,
    `<meta property="og:site_name" content="Embediz">`,
    `<meta property="og:locale" content="ko_KR">`,
    `<meta name="twitter:card" content="summary">`,
    `<meta name="twitter:title" content="${esc(page.title)}">`,
    `<meta name="twitter:description" content="${esc(page.description)}">`,
    `<link rel="sitemap" type="application/xml" href="${base}sitemap.xml">`
  ];
  if(!page.notFound)extra.push(`<link rel="canonical" href="${siteURL+page.path}">`,`<meta property="og:url" content="${siteURL+page.path}">`,`<script type="application/ld+json">${structuredData(page)}</script>`);
  html=html.replace('</head>',extra.map(t=>'  '+t).join('\n')+'\n</head>');
  const target=path.join(root,page.notFound?page.path:page.path+'index.html');
  fs.mkdirSync(path.dirname(target),{recursive:true});
  fs.writeFileSync(target,html);
}
const urls=site.pages.map(p=>`  <url><loc>${esc(siteURL+p.path)}</loc></url>`).join('\n');
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`Generated ${site.pages.length} indexable pages, 404.html and sitemap.xml.`);
