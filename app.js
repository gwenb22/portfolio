// Site de Gwenaëlle Besson — en-tête, pied de page, cartes projet, page projet, stickers, galerie, brief.
(function () {
  var S = window.SITE;
  var page = document.body.getAttribute('data-page');
  document.documentElement.classList.add('js');

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function projectHref(id) { return 'projet-' + id + '.html'; }
  function cur(p) { return page === p ? ' aria-current="page"' : ''; }

  /* ---------- En-tête et pied de page (une seule source pour les 5 pages) ---------- */
  var top = $('#chrome-top');
  if (top) {
    top.outerHTML =
      '<a class="skip" href="#main">Aller au contenu</a>' +
      '<header class="nav" id="top"><div class="wrap">' +
      '<a class="brand" href="index.html"><img src="logo-header.svg" alt="Gwenaëlle Besson" width="160" height="48"></a>' +
      '<button class="burger" type="button" aria-expanded="false" aria-controls="menu"><i></i>Menu</button>' +
      '<nav class="nav-links" id="menu" aria-label="Navigation principale">' +
      '<a href="projets.html"' + cur('projets') + '>Projets</a>' +
      '<a href="a-propos.html"' + cur('a-propos') + '>À propos</a>' +
      '<a class="btn btn-primary btn-sm" href="contact.html"' + cur('contact') + '>Me contacter</a>' +
      '</nav></div></header>';
  }
  var bottom = $('#chrome-bottom');
  if (bottom) {
    bottom.outerHTML =
      '<footer class="footer"><div class="wrap">' +
      '<span>© 2026 Gwenaëlle Besson · Montpellier</span>' +
      '<nav aria-label="Réseaux">' +
      '<a href="' + S.linkedin + '">LinkedIn</a><a href="' + S.instagram + '">Instagram</a><a href="mentions-legales.html"' + cur('mentions') + '>Mentions légales</a><a href="#top">Haut de page ↑</a>' +
      '</nav></div></footer>';
  }
  var nav = $('.nav'), burger = $('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
    });
  }

  /* ---------- Cartes projet ---------- */
  function prize(p) { return p.prize ? '<span class="prize"><span aria-hidden="true">★</span>Grand prix</span>' : ''; }
  function card(p, withDesc) {
    return '<a class="card" data-type="' + p.type + '" style="--c: var(--' + p.color + ')" href="' + projectHref(p.id) + '">' +
      '<div class="card-top"><span class="card-tags"><span class="tag">' + esc(p.category) + '</span>' + prize(p) + '</span><span class="year">' + p.year + '</span></div>' +
      '<div class="card-img"><img src="' + p.img + '" alt="' + esc(p.alt) + '" loading="lazy"></div>' +
      '<div class="card-foot"><div><h3>' + esc(p.title) + '</h3><p>' + esc(p.when) + '</p>' +
      (withDesc ? '<p class="card-desc">' + esc(p.desc) + '</p>' : '') +
      '</div><span class="go" aria-hidden="true">→</span></div></a>';
  }
  function feature(p, first) {
    return '<a class="card feature" data-type="' + p.type + '" style="--c: var(--' + p.color + ')" href="' + projectHref(p.id) + '">' +
      '<div class="card-main"><div class="card-top"><span class="tag">' + esc(p.category) + '</span><span class="year">' + p.year + '</span></div>' +
      '<div class="card-img"><img src="' + p.img + '" alt="' + esc(p.alt) + '"></div></div>' +
      '<div class="card-side"><div><span class="tag">' + esc(p.when) + '</span>' +
      '<h3 style="margin-top:1rem">' + esc(p.title) + '</h3><p class="desc"><span class="long">' + esc(p.desc) + '</span><span class="short">' + esc(p.short || p.desc) + '</span></p></div>' +
      '<div class="side-foot"><span class="cta-txt">Voir le projet</span><span class="go" aria-hidden="true">→</span></div></div></a>';
  }
  function grid(list, withDesc, useFeature) {
    var first = true;
    return list.map(function (p) {
      if (useFeature && p.type === 'pro') { var f = feature(p, first); first = false; return f; }
      return card(p, withDesc);
    }).join('');
  }

  var homeGrid = $('#home-projects');
  if (homeGrid) homeGrid.innerHTML = grid(S.projects, false, true);

  var allGrid = $('#all-projects');
  if (allGrid) {
    var filters = $('#filters'), out = $('#filter-count');
    var counts = {}; S.projects.forEach(function (p) { counts[p.type] = (counts[p.type] || 0) + 1; });
    filters.insertAdjacentHTML('afterbegin', S.types.map(function (t) {
      var n = t.id === 'all' ? S.projects.length : (counts[t.id] || 0);
      return '<button class="filter" type="button" data-type="' + t.id + '" aria-pressed="' + (t.id === 'all') + '">' + t.label + '<b>' + n + '</b></button>';
    }).join(''));
    var show = function (type) {
      var list = S.projects.filter(function (p) { return type === 'all' || p.type === type; });
      allGrid.innerHTML = grid(list, true, type === 'all');
      out.textContent = list.length + (list.length > 1 ? ' projets affichés' : ' projet affiché');
      $$('.filter', filters).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-type') === type); });
    };
    filters.addEventListener('click', function (e) { var b = e.target.closest('.filter'); if (b) show(b.getAttribute('data-type')); });
    show('all');
  }

  /* ---------- Savoir-faire ---------- */
  $$('[data-skills]').forEach(function (ul) {
    ul.innerHTML = S.skills.map(function (s, i) {
      return '<li class="svc"><span class="svc-num" aria-hidden="true">0' + (i + 1) + '</span><h3>' + esc(s.title) + '</h3><ul>' +
        s.items.map(function (it) { return '<li>' + esc(it) + '</li>'; }).join('') + '</ul></li>';
    }).join('');
  });

  /* ---------- Page projet (gabarit unique, alimenté par data.js) ---------- */
  var pm = $('#project');
  if (pm) {
    var id = document.body.getAttribute('data-project') || new URLSearchParams(location.search).get('id');
    var idx = Math.max(0, S.projects.findIndex(function (p) { return p.id === id; }));
    var p = S.projects[idx], n = S.projects.length;
    var prev = S.projects[(idx - 1 + n) % n], next = S.projects[(idx + 1) % n];
    var li = function (a) { return a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join(''); };
    document.title = p.title + ' – ' + p.subtitle + ' – Gwenaëlle Besson';
    var g = p.gallery || [];
    pm.innerHTML =
      '<div class="crumb"><div class="wrap"><a href="projets.html">← Tous les projets</a><span>Projet ' + (idx + 1) + ' / ' + n + ' · ' + esc(p.title) + '</span></div></div>' +
      '<section class="p-hero wrap"><div class="p-tags"><span class="tag">' + esc(p.category) + '</span><span class="tag">' + esc(p.when) + '</span>' + prize(p) + '</div>' +
      '<h1>' + esc(p.title) + '<small class="outline">' + esc(p.subtitle) + '</small></h1>' +
      '<div class="cover" style="--c: var(--' + p.color + ')"><img src="' + p.img + '" alt="' + esc(p.alt) + '"><span class="stamp">' + esc(p.stamp) + '</span></div></section>' +
      '<section class="meta-strip"><dl class="wrap"><div><dt>Rôle</dt><dd>' + esc(p.role) + '</dd></div><div><dt>Catégorie</dt><dd>' + esc(p.category) + '</dd></div>' +
      '<div><dt>Compétences clés</dt><dd><ul class="chips">' + li(p.skills) + '</ul></dd></div></dl></section>' +
      '<section class="ctx wrap"><div class="reveal"><h2>Le <span class="hl-cyan">contexte</span></h2><p>' + esc(p.context) + '</p></div>' +
      '<div class="goals reveal"><h3>Objectifs</h3><ol>' + p.objectives.map(function (o, i) { return '<li><b>0' + (i + 1) + '</b>' + esc(o) + '</li>'; }).join('') + '</ol></div></section>' +
      '<section class="missions"><div class="wrap"><h2>Missions &amp;<br>réalisations</h2><ul class="reveal">' + li(p.missions) + '</ul></div></section>' +
      (g.length ? '<section class="gallery wrap"><div class="gallery-head"><h2>Galerie</h2><small>' + g.length + ' visuel' + (g.length > 1 ? 's' : '') + ' · cliquez pour agrandir</small></div>' +
        '<div class="g-grid reveal' + (g.length === 2 || g.length === 4 ? ' two' : '') + '">' + g.map(function (m, i) {
          return '<button class="g-item' + (m.asis ? ' raw' : '') + '" type="button" data-i="' + i + '" aria-label="Agrandir : ' + esc(m.caption) + '">' +
            (m.video ? '<video src="' + m.src + '" muted loop autoplay playsinline preload="metadata"></video><span class="g-video">▶ Vidéo</span>'
              : '<img src="' + m.src + '" alt="" loading="lazy">') +
            '<span class="g-cap">' + esc(m.caption) + '<i>' + (i + 1) + ' / ' + g.length + '</i></span></button>';
        }).join('') + '</div></section>' : '') +
      '<section class="results wrap"><h2>Résultats</h2><ul class="reveal">' + li(p.results) + '</ul></section>' +
      '<nav class="pn" aria-label="Autres projets">' +
      '<a class="pn-prev" href="' + projectHref(prev.id) + '"><small>← Projet précédent</small><strong>' + esc(prev.title) + '</strong></a>' +
      '<a class="pn-next" style="--c: var(--' + next.color + ')" href="' + projectHref(next.id) + '"><small>Projet suivant</small><strong>' + esc(next.title) + ' <i aria-hidden="true">→</i></strong></a></nav>';

    /* Visionneuse */
    if (g.length) {
      var lb = document.createElement('dialog');
      lb.className = 'lb';
      lb.setAttribute('aria-label', 'Galerie ' + p.title);
      lb.innerHTML = '<div class="lb-in"><div class="lb-bar"><span class="lb-count"></span><button class="lb-btn" type="button" data-a="close" aria-label="Fermer">✕</button></div>' +
        '<div class="lb-stage"><button class="lb-btn" type="button" data-a="prev" aria-label="Visuel précédent">←</button><div class="lb-media"></div>' +
        '<button class="lb-btn" type="button" data-a="next" aria-label="Visuel suivant">→</button></div></div>';
      document.body.appendChild(lb);
      var at = 0;
      var draw = function () {
        var m = g[at];
        $('.lb-media', lb).innerHTML = m.video ? '<video src="' + m.src + '" controls autoplay muted loop playsinline></video>' : '<img src="' + m.src + '" alt="' + esc(m.caption) + '">';
        var vid = $('.lb-media video', lb);
        if (vid) { vid.muted = true; vid.defaultMuted = true; var pl = vid.play(); if (pl && pl.catch) pl.catch(function () {}); }
        $('.lb-count', lb).textContent = (at + 1) + ' / ' + g.length;
      };
      var go = function (d) { at = (at + d + g.length) % g.length; draw(); };
      pm.addEventListener('click', function (e) {
        var b = e.target.closest('.g-item'); if (!b) return;
        at = +b.getAttribute('data-i'); draw(); lb.showModal();
      });
      lb.addEventListener('click', function (e) {
        var b = e.target.closest('[data-a]');
        if (b) { var a = b.getAttribute('data-a'); if (a === 'close') lb.close(); else go(a === 'next' ? 1 : -1); return; }
        if (!e.target.closest('.lb-media img, .lb-media video, .lb-btn')) lb.close();
      });
      lb.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') go(1);
        if (e.key === 'ArrowLeft') go(-1);
      });
      lb.addEventListener('close', function () { $('.lb-media', lb).innerHTML = ''; });
    }
  }

  /* ---------- Stickers : glisser (souris, stylet), flèches du clavier, limites du panneau ---------- */
  var z = 10;
  var desktop = function () { return window.matchMedia('(min-width: 761px)').matches; };
  $$('.stk').forEach(function (el) {
    var panel = el.closest('.play'), ox = 0, oy = 0, sx, sy, lim, drag = false;
    var apply = function () { el.style.setProperty('--x', ox + 'px'); el.style.setProperty('--y', oy + 'px'); };
    var limits = function () {
      var r = el.getBoundingClientRect(), b = panel.getBoundingClientRect(), pad = 6;
      return { minX: ox + (b.left + pad - r.left), maxX: ox + (b.right - pad - r.right), minY: oy + (el.parentNode.getBoundingClientRect().top - r.top), maxY: oy + (b.bottom - pad - r.bottom) };
    };
    var clamp = function () { ox = Math.min(lim.maxX, Math.max(lim.minX, ox)); oy = Math.min(lim.maxY, Math.max(lim.minY, oy)); };
    // Bureau : sticker déplaçable (focus clavier). Mobile : simple élément fixe, sans mention « déplaçable ».
    var setMode = function () {
      if (desktop()) {
        el.tabIndex = 0;
        el.setAttribute('role', 'img');
        el.setAttribute('aria-roledescription', 'sticker déplaçable');
      } else {
        el.removeAttribute('tabindex');
        el.removeAttribute('role');
        el.removeAttribute('aria-roledescription');
        ox = 0; oy = 0; drag = false; el.classList.remove('back'); apply();
      }
    };
    setMode();
    window.matchMedia('(min-width: 761px)').addEventListener('change', setMode);
    el.addEventListener('pointerdown', function (e) {
      if (!desktop()) return;
      drag = true; lim = limits(); sx = e.clientX - ox; sy = e.clientY - oy;
      el.classList.remove('back'); el.style.zIndex = ++z; el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', function (e) {
      if (!drag) return;
      ox = e.clientX - sx; oy = e.clientY - sy; clamp(); apply();
    });
    ['pointerup', 'pointercancel'].forEach(function (t) { el.addEventListener(t, function () { drag = false; }); });
    el.addEventListener('keydown', function (e) {
      var d = { ArrowLeft: [-16, 0], ArrowRight: [16, 0], ArrowUp: [0, -16], ArrowDown: [0, 16] }[e.key];
      if (!d || !desktop()) return;
      e.preventDefault(); lim = limits(); ox += d[0]; oy += d[1]; clamp(); el.classList.remove('back'); el.style.zIndex = ++z; apply();
    });
    el._reset = function () { ox = 0; oy = 0; el.classList.add('back'); apply(); };
  });
  $$('.play-reset').forEach(function (btn) {
    btn.addEventListener('click', function () { $$('.stk', btn.closest('.play')).forEach(function (el) { el._reset(); }); });
  });

  /* ---------- Brief express : prépare un e-mail, rien n'est envoyé par le site ---------- */
  var form = $('#brief');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var needs = $$('input[name="besoin"]:checked', form).map(function (i) { return i.value; });
      var name = form.elements.nom.value.trim(), msg = form.elements.message.value.trim();
      var subject = 'Projet' + (needs.length ? ' : ' + needs.join(', ') : '') + (name ? ' – ' + name : '');
      var body = 'Bonjour Gwenaëlle,\n\n' + (needs.length ? 'Mon besoin : ' + needs.join(', ') + '.\n\n' : '') + (msg ? msg + '\n\n' : '') + (name ? name : '');
      location.href = 'mailto:' + S.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  /* ---------- Apparition au défilement ---------- */
  var rev = $$('.reveal');
  var check = function () {
    rev = rev.filter(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) { el.classList.add('in'); return false; }
      return true;
    });
  };
  window.addEventListener('scroll', check, { passive: true });
  window.addEventListener('resize', check);
  var tick = setInterval(function () { check(); if (!rev.length) clearInterval(tick); }, 400);
  check();
})();
