#!/usr/bin/env node
/*
  Génère ce qui dépend de data.js et du nom de domaine :
    - le bloc <head> « SEO » (titre, description, favicon, Open Graph) de chaque page,
    - une page statique par projet (projet-<id>.html), pour des aperçus de lien corrects,
    - sitemap.xml et robots.txt.
  Usage : node tools/build.js          (à relancer après avoir modifié data.js ou la configuration ci-dessous)
*/
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

/* ---------- Configuration ---------- */
const SITE = {
  url: 'https://portfolio.gwenaellebesson.fr',   // adresse du portfolio, sans « / » final
  name: 'Gwenaëlle Besson',
  image: 'assets/og-image.jpg',                    // 1200 × 630, image de partage
  imageAlt: 'Gwenaëlle Besson – Communication. Création. Digital.',
  themeColor: '#111111'
};

const PAGES = [
  { file: 'index.html', path: '', title: 'Gwenaëlle Besson – Communication, création, digital',
    desc: 'Gwenaëlle Besson, professionnelle freelance en communication : identité visuelle, contenus digitaux et stratégie. Découvrez mes projets.' },
  { file: 'projets.html', path: 'projets.html', title: 'Projets – Gwenaëlle Besson',
    desc: 'Les projets de Gwenaëlle Besson, freelance en communication : La Cave de Gabi, Terra Hominis, Groupe Com, Félines-Minervois, Kimiyo et La Casa del Gusto.' },
  { file: 'a-propos.html', path: 'a-propos.html', title: 'À propos – Gwenaëlle Besson',
    desc: 'Parcours, expériences et atouts de Gwenaëlle Besson, professionnelle freelance en communication, diplômée du BUT Métiers du Multimédia et de l’Internet.' },
  { file: 'contact.html', path: 'contact.html', title: 'Contact – Gwenaëlle Besson',
    desc: 'Un projet de communication ? Contactez Gwenaëlle Besson, freelance : identité visuelle, réseaux sociaux, site web, stratégie.' },
  { file: 'mentions-legales.html', path: 'mentions-legales.html', title: 'Mentions légales – Gwenaëlle Besson',
    desc: 'Mentions légales du site de Gwenaëlle Besson : éditeur, hébergeur, propriété intellectuelle et données personnelles.' }
];

/* ---------- Données ---------- */
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8'), sandbox);
const DATA = sandbox.window.SITE;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const abs = p => SITE.url + '/' + p;

function seoBlock({ title, desc, pathPart, extra = '' }) {
  const url = abs(pathPart);
  return `<!-- seo:start (généré par tools/build.js : ne pas modifier à la main) -->
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="${SITE.themeColor}">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="icon" href="favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${abs(SITE.image)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(SITE.imageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" href="fonts/oswald-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>${extra}
<!-- seo:end -->`;
}
const SEO_RE = /<!-- seo:start[\s\S]*?<!-- seo:end -->/;

const personJsonLd = `
<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org', '@type': 'Person', name: SITE.name,
  jobTitle: 'Freelance en communication et création digitale', url: SITE.url + '/',
  sameAs: [DATA.linkedin, DATA.instagram]
})}</script>`;

/* ---------- Pages écrites à la main ---------- */
for (const p of PAGES) {
  const file = path.join(ROOT, p.file);
  const html = fs.readFileSync(file, 'utf8');
  if (!SEO_RE.test(html)) throw new Error(p.file + ' : repère <!-- seo:start --> introuvable');
  const block = seoBlock({ title: p.title, desc: p.desc, pathPart: p.path, extra: p.file === 'index.html' ? personJsonLd : '' });
  fs.writeFileSync(file, html.replace(SEO_RE, () => block));
}

/* ---------- Une page statique par projet ---------- */
const template = fs.readFileSync(path.join(ROOT, 'tools', 'projet.template.html'), 'utf8');
for (const old of fs.readdirSync(ROOT).filter(f => /^projet-.*\.html$/.test(f))) fs.unlinkSync(path.join(ROOT, old));
for (const pr of DATA.projects) {
  const file = `projet-${pr.id}.html`;
  const block = seoBlock({ title: `${pr.title} – ${pr.subtitle} – ${SITE.name}`, desc: `${pr.desc} Projet de ${SITE.name}, freelance en communication.`, pathPart: file });
  fs.writeFileSync(path.join(ROOT, file), template.replace(SEO_RE, () => block).replace(/\{\{ID\}\}/g, pr.id));
}

/* ---------- Plan du site et robots.txt ---------- */
const today = new Date().toISOString().slice(0, 10);
const urls = [...PAGES.map(p => p.path), ...DATA.projects.map(p => `projet-${p.id}.html`)];
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => `  <url><loc>${abs(u)}</loc><lastmod>${today}</lastmod></url>`).join('\n') + '\n</urlset>\n');
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${abs('sitemap.xml')}\n`);

/* ---------- Contrôles ---------- */
const problems = [];
for (const pr of DATA.projects) {
  for (const f of [pr.img, ...(pr.gallery || []).map(g => g.src)]) if (!fs.existsSync(path.join(ROOT, f))) problems.push('fichier manquant : ' + f);
  if (!pr.desc) problems.push('description vide : ' + pr.id);
}
for (const f of [SITE.image, 'favicon.svg', 'favicon-32.png', 'apple-touch-icon.png', 'logo-header.svg']) if (!fs.existsSync(path.join(ROOT, f))) problems.push('fichier manquant : ' + f);
console.log(`OK : ${PAGES.length} pages, ${DATA.projects.length} pages projet, sitemap.xml, robots.txt`);
if (problems.length) { console.error('\nÀ corriger :\n- ' + problems.join('\n- ')); process.exitCode = 1; }
