import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    const content = fs.readFileSync(sitemapPath, 'utf-8');
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=600');
    res.status(200).send(content);
  } catch (err) {
    console.error('[sitemap] Failed to read public/sitemap.xml:', err);
    res.status(404).end('Sitemap not found');
  }
}
