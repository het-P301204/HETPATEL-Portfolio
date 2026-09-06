// Local static server for rendering and validating prototypes.
// Dev tooling only — not part of the site. Serves prototype/ at :8931 and
// exposes two validation endpoints:
//   /__measure.js    the measurement harness, injected into a page
//   /__harness.html  renders any page in an exact-width iframe, scaled to fit
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'prototype');
const TOOLS = __dirname;
const PORT = 8931;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.json': 'application/json',
};

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';

  if (p === '/__measure.js' || p === '/__harness.html') {
    const f = path.join(TOOLS, p.slice(3));
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)], 'Cache-Control': 'no-store' });
    return res.end(fs.readFileSync(f));
  }

  const file = path.join(ROOT, p);
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('forbidden'); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain' }); return res.end('404 ' + p); }
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    res.end(data);
  });
}).listen(PORT, '127.0.0.1', () => console.log('serving ' + ROOT + ' on http://localhost:' + PORT));
