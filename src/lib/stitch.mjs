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
