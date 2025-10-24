/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.animauxlogis.fr',
  changefreq: 'daily',
  exclude: ['/%2F'],
  generateRobotsTxt: true,
  sitemapSize: 7000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },

      {
        userAgent: 'ia_archiver',
        disallow: '/',
         },
      
      {
        userAgent: 'Qwantify',
        crawlDelay: '10',
      },
    ],
  },

}
