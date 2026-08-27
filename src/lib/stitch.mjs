import fs from 'node:fs';
import path from 'node:path';

const SCREENS_DIR = path.resolve('public/stitch-screens');

// Return the inner HTML of a screen's <body> (the exact design, no <html>/<head>).
export function screenBody(id) {
  const html = fs.readFileSync(path.join(SCREENS_DIR, `${id}.html`), 'utf-8');
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return m ? m[1] : html;
}

// Return the tailwind.config assignment from one screen so the shared <head> can use it.
export function screenConfig() {
  const html = fs.readFileSync(
    path.join(SCREENS_DIR, '685587f3b3fd493aaf9bcd8e3289738e.html'),
    'utf-8'
  );
  const m = html.match(/<script id="tailwind-config">([\s\S]*?)<\/script>/i);
  return m ? m[1].trim() : 'tailwind.config = {};';
}

// Each Stitch screen bundles its OWN <header>, mobile <nav>, and <footer>, all styled
// differently per page. We strip those so the Astro shell can render ONE uniform,
// premium nav + footer across every route. Returns the screen's unique body content.
export function screenContent(id) {
  let body = screenBody(id);
  body = body.replace(/<header[\s\S]*?<\/header>/gi, '');
  body = body.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  // mobile bottom nav: Stitch marks it `class="md:hidden ..."`
  body = body.replace(/<nav\s+class="md:hidden[\s\S]*?<\/nav>/gi, '');
  // any remaining bare <nav> that isn't the shared shell
  body = body.replace(/<nav[\s\S]*?<\/nav>/gi, '');
  return body;
}
