/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://threadlock.ai',
  generateRobotsTxt: false,          // robots.txt managed manually
  changefreq: 'monthly',
  priority: 0.7,
  exclude: [
    '/content/*',
    '/api/*',
  ],
  additionalPaths: async (config) => {
    // Jurisdiction pages get higher priority
    const fs = require('fs')
    const path = require('path')
    const paths = []

    const crawl = (dir, urlBase) => {
      if (!fs.existsSync(dir)) return
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
          crawl(path.join(dir, entry.name), `${urlBase}/${entry.name}`)
        } else if (entry.name.endsWith('.md') && entry.name !== '_index.md') {
          const slug = entry.name.replace('.md', '')
          paths.push({
            loc: `${urlBase}/${slug}/`,
            changefreq: 'monthly',
            priority: 0.8,
          })
        } else if (entry.name === '_index.md') {
          paths.push({
            loc: `${urlBase}/`,
            changefreq: 'monthly',
            priority: 0.75,
          })
        }
      }
    }

    crawl('./content/jurisdictions/us', '/states')
    crawl('./content/jurisdictions/ca', '/ca')

    return paths
  },
}
