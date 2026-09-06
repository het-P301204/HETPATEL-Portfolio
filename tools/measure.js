// Phase 5G rendered-measurement harness. Loaded into the page via sync XHR.
window.__M = function (opts) {
  opts = opts || {};
  var de = document.documentElement, out = {};

  // ---------- colour ----------
  function parseC(s) {
    var m = s && s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    var p = m[1].split(',').map(function (v) { return parseFloat(v); });
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  }
  function lum(c) {
    var f = [c.r, c.g, c.b].map(function (v) {
      v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * f[0] + 0.7152 * f[1] + 0.0722 * f[2];
  }
  function bgOf(el) {
    var e = el;
    while (e && e.nodeType === 1) {
      var c = parseC(getComputedStyle(e).backgroundColor);
      if (c && c.a > 0.05) return c;
      e = e.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  function ratio(fg, bg) {
    var a = lum(fg), b = lum(bg);
    return Math.round(((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)) * 100) / 100;
  }
  function contrastOf(el) {
    var cs = getComputedStyle(el);
    var fg = parseC(cs.color); if (!fg) return null;
    var bg = bgOf(el.parentElement || el);
    var px = parseFloat(cs.fontSize);
    var bold = parseInt(cs.fontWeight, 10) >= 700;
    var large = px >= 24 || (px >= 18.66 && bold);
    var r = ratio(fg, bg);
    return { px: Math.round(px * 100) / 100, ratio: r, large: large,
             need: large ? 3 : 4.5, pass: r >= (large ? 3 : 4.5),
             fg: cs.color, bg: 'rgb(' + Math.round(bg.r) + ',' + Math.round(bg.g) + ',' + Math.round(bg.b) + ')' };
  }

  // ---------- per-line character counts ----------
  function lineCounts(el, cap) {
    cap = cap || 4000;
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    var range = document.createRange(), lines = [], cur = null, lastTop = null, n = 0, node;
    while ((node = w.nextNode())) {
      var t = node.nodeValue;
      for (var i = 0; i < t.length; i++) {
        if (++n > cap) break;
        range.setStart(node, i); range.setEnd(node, i + 1);
        var rc = range.getBoundingClientRect();
        if (rc.height === 0 && rc.width === 0) continue;
        var top = Math.round(rc.top);
        if (lastTop === null || Math.abs(top - lastTop) > 3) { cur = { s: '' }; lines.push(cur); lastTop = top; }
        cur.s += t[i];
      }
    }
    // normalise runs of collapsed whitespace so a rendered line counts the
    // characters a reader actually sees, not the source indentation.
    return lines.map(function (l) { return l.s.replace(/\s+/g, ' ').replace(/^ | $/g, '').length; });
  }
  function stats(a) {
    if (!a.length) return null;
    var s = a.slice().sort(function (x, y) { return x - y; });
    return { n: a.length, min: s[0], max: s[s.length - 1],
             median: s[Math.floor(s.length / 2)],
             p90: s[Math.min(s.length - 1, Math.floor(s.length * 0.9))] };
  }

  // ---------- basics ----------
  out.url = location.pathname;
  out.vw = innerWidth; out.vh = innerHeight;
  out.dpr = devicePixelRatio;
  out.docH = de.scrollHeight;
  out.screens = Math.round((de.scrollHeight / innerHeight) * 100) / 100;
  out.docW = de.scrollWidth;
  out.hOverflow = de.scrollWidth > innerWidth + 1;
  out.rootFont = getComputedStyle(de).fontSize;
  out.bodyFont = getComputedStyle(document.body).fontSize;
  out.bodyFamily = getComputedStyle(document.body).fontFamily.split(',')[0];
  out.bodyBg = getComputedStyle(document.body).backgroundColor;
  out.fontsLoaded = document.fonts ? document.fonts.status : 'n/a';
  out.newsreaderLoaded = document.fonts ? document.fonts.check('19px Newsreader') : null;

  // proto banner height (stripped before ship)
  var pb = document.querySelector('.proto');
  out.protoH = pb ? Math.round(pb.getBoundingClientRect().height) : 0;
  out.docH_noProto = out.docH - out.protoH;
  out.screens_noProto = Math.round((out.docH_noProto / innerHeight) * 100) / 100;

  // ---------- overflow offenders ----------
  var off = [];
  var all = document.querySelectorAll('body *');
  for (var i = 0; i < all.length; i++) {
    var r = all[i].getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    if (r.right > innerWidth + 1 || r.left < -1) {
      if (all[i].classList.contains('skip')) continue;
      off.push({ sel: all[i].tagName.toLowerCase() + (all[i].className ? '.' + String(all[i].className).split(' ').join('.') : ''),
                 left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width) });
    }
  }
  out.overflowEls = off.slice(0, 10);

  // ---------- headings ----------
  out.headings = [].map.call(document.querySelectorAll('h1,h2,h3,h4,h5,h6'), function (h) {
    var cs = getComputedStyle(h);
    return { lvl: h.tagName, px: Math.round(parseFloat(cs.fontSize) * 100) / 100,
             lh: cs.lineHeight, w: cs.fontWeight,
             text: h.textContent.trim().slice(0, 48) };
  });

  // ---------- tap targets ----------
  var links = document.querySelectorAll('a[href], button');
  var tt = [];
  for (var j = 0; j < links.length; j++) {
    var a = links[j];
    if (a.classList.contains('skip')) continue;
    var rects = a.getClientRects();
    if (!rects.length) continue;
    var bb = a.getBoundingClientRect();
    if (bb.width === 0 && bb.height === 0) continue;
    var maxH = 0, maxW = 0;
    for (var k = 0; k < rects.length; k++) { maxH = Math.max(maxH, rects[k].height); maxW = Math.max(maxW, rects[k].width); }
    // inline-in-text exemption (WCAG 2.2 SC 2.5.8): link sits inside a text block
    // with sibling text content around it and is not a standalone control.
    var p = a.parentElement;
    var ptxt = p ? p.textContent.trim().length : 0;
    var atxt = a.textContent.trim().length;
    var inlineInText = getComputedStyle(a).display === 'inline' && ptxt > atxt + 20;
    tt.push({ text: a.textContent.trim().slice(0, 34),
              cls: a.className || (a.parentElement ? '^' + a.parentElement.className : ''),
              h: Math.round(maxH * 10) / 10, w: Math.round(maxW * 10) / 10,
              inlineExempt: inlineInText,
              pass: inlineInText || (maxH >= 24 && maxW >= 24) });
  }
  out.tapTotal = tt.length;
  out.tapFails = tt.filter(function (x) { return !x.pass; });
  out.tapAll = opts.allTaps ? tt : undefined;

  // ---------- contrast on every distinct text role ----------
  var roleSel = opts.contrastSel || ['p', '.lede', '.region-label', '.nt-date', '.nt-super', '.facts dt',
    '.facts dd', '.facts a', '.apparatus dt', '.apparatus dd', '.ix-framing', '.ix-record', '.ix-note',
    '.wmeta', '.wline', '.inset', '.more a', '.site-nav a', '.site-name', '.foot-id', '.foot-id strong',
    '.foot-nav a', '.foot-contact a', '.site-footer p', '.index > li > a', '.worklist > li > a',
    '.backlink', '.revisions dt', '.revisions dd', '.contact a', 'h1', 'h2', '.notes li > p'];
  var cres = {};
  roleSel.forEach(function (s) {
    var el;
    try { el = document.querySelector(s); } catch (e) { return; }
    if (!el) return;
    var c = contrastOf(el);
    if (c) cres[s] = c;
  });
  out.contrast = cres;
  out.contrastFails = Object.keys(cres).filter(function (k) { return !cres[k].pass; })
    .map(function (k) { return { sel: k, ratio: cres[k].ratio, px: cres[k].px, need: cres[k].need }; });

  // ---------- measure (chars per line) ----------
  var mSel = opts.measureSel || ['.home .block > p:not(.region-label):not(.placeholder):not(.inset):not(.more)',
    '.investigation p:not(.inset):not(.placeholder)', '.notes li > p:not(.nt-date):not(.nt-super)',
    '.ix-framing', '.lede', '.facts dd'];
  var meas = {};
  mSel.forEach(function (s) {
    var els;
    try { els = document.querySelectorAll(s); } catch (e) { return; }
    if (!els.length) return;
    var acc = [];
    for (var i2 = 0; i2 < Math.min(els.length, 6); i2++) {
      var L = lineCounts(els[i2]);
      if (L.length > 1) acc = acc.concat(L.slice(0, -1)); // drop ragged last line
      else if (L.length === 1) acc = acc.concat(L);
    }
    var st = stats(acc);
    if (st) { st.colPx = Math.round(els[0].getBoundingClientRect().width); meas[s] = st; }
  });
  out.measure = meas;

  // ---------- spacing between top-level blocks ----------
  function gaps(sel) {
    var els = document.querySelectorAll(sel), g = [];
    for (var i3 = 1; i3 < els.length; i3++) {
      var prev = els[i3 - 1].getBoundingClientRect(), cur2 = els[i3].getBoundingClientRect();
      g.push(Math.round(cur2.top - prev.bottom));
    }
    return g;
  }
  out.gaps = {
    blocks: gaps('.home > .block, .home > .identity'),
    notes: gaps('.notes > li'),
    index: gaps('.index > li'),
    worklist: gaps('.worklist > li')
  };

  // ---------- footer ----------
  var f = document.querySelector('.site-footer');
  if (f) {
    var fr = f.getBoundingClientRect();
    var mainEl = document.querySelector('main');
    var mr = mainEl ? mainEl.getBoundingClientRect() : null;
    out.footer = {
      h: Math.round(fr.height),
      pctOfDoc: Math.round((fr.height / out.docH) * 1000) / 10,
      gapFromMain: mr ? Math.round(fr.top - mr.bottom) : null,
      lines: f.querySelectorAll('p, nav').length,
      left: Math.round(fr.left),
      navWrapped: (function () {
        var n = f.querySelector('.foot-nav'); if (!n) return null;
        var as = n.querySelectorAll('a'); if (!as.length) return null;
        var t = as[0].getBoundingClientRect().top, wrapped = false;
        for (var q = 1; q < as.length; q++) if (Math.abs(as[q].getBoundingClientRect().top - t) > 3) wrapped = true;
        return wrapped;
      })()
    };
  }

  // ---------- left-edge alignment across regions ----------
  var edge = {};
  ['.proto', '.site-header', '.home', '.investigation', '.site-footer'].forEach(function (s) {
    var e2 = document.querySelector(s);
    if (e2) edge[s] = Math.round(e2.getBoundingClientRect().left + parseFloat(getComputedStyle(e2).paddingLeft));
  });
  out.textEdges = edge;

  // ---------- nav ----------
  var nav = document.querySelector('.site-nav');
  if (nav) {
    out.nav = { items: [].map.call(nav.querySelectorAll('a'), function (a2) { return a2.textContent.trim(); }),
                current: (function () { var c2 = nav.querySelector('[aria-current="page"]'); return c2 ? c2.textContent.trim() : null; })(),
                headerH: Math.round(document.querySelector('.site-header').getBoundingClientRect().height) };
  }

  // ---------- above-the-fold ----------
  var afEls = [];
  document.querySelectorAll('h1, .lede, .region-label, .notes > li, .index > li, .worklist > li, .site-footer').forEach(function (e3) {
    var r3 = e3.getBoundingClientRect();
    if (r3.top < innerHeight && r3.bottom > 0) {
      afEls.push((e3.tagName.toLowerCase()) + (e3.className ? '.' + String(e3.className).split(' ')[0] : '') + ':' + (e3.textContent.trim().slice(0, 30)));
    }
  });
  out.aboveFold = afEls.slice(0, 14);

  // ---------- notes-specific ----------
  var notes = document.querySelectorAll('.notes > li');
  if (notes.length) {
    out.notesInfo = {
      count: notes.length,
      supersessions: document.querySelectorAll('.nt-super').length,
      heights: [].map.call(notes, function (n2) { return Math.round(n2.getBoundingClientRect().height); }),
      words: [].map.call(notes, function (n2) { return n2.textContent.trim().split(/\s+/).length; }),
      firstTop: Math.round(notes[0].getBoundingClientRect().top + scrollY),
      lastBottom: Math.round(notes[notes.length - 1].getBoundingClientRect().bottom + scrollY),
      noteFontPx: Math.round(parseFloat(getComputedStyle(notes[0].querySelector('p:not(.nt-date)')).fontSize) * 100) / 100,
      bodyFontPx: Math.round(parseFloat(getComputedStyle(document.body).fontSize) * 100) / 100
    };
  }

  // ---------- facts (About) ----------
  var facts = document.querySelector('.facts');
  if (facts) {
    var dts = facts.querySelectorAll('dt'), dds = facts.querySelectorAll('dd');
    out.factsInfo = {
      cols: getComputedStyle(facts).gridTemplateColumns,
      dtWidths: [].map.call(dts, function (d) { return Math.round(d.getBoundingClientRect().width); }),
      dtWrapped: [].map.call(dts, function (d) { return d.getClientRects().length > 1; }),
      dtTexts: [].map.call(dts, function (d) { return d.textContent.trim(); }),
      ddLeft: [].map.call(dds, function (d) { return Math.round(d.getBoundingClientRect().left); }),
      ddRight: [].map.call(dds, function (d) { return Math.round(d.getBoundingClientRect().right); }),
      blockRight: Math.round(facts.getBoundingClientRect().right),
      blockH: Math.round(facts.getBoundingClientRect().height)
    };
  }

  return out;
};
