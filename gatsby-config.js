module.exports = {
  siteMetadata: {
    title: `Gulf Coast Phone Repair`,
    description: `We repair phones and tablets cracked screens and batteries`,
    author: `@codementation`,
    siteUrl: `https://gulfcoastphonerepair.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/images/raster/favicon.png`,

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gulfcoastphonerepair.com',
        sitemap: 'https://gulfcoastphonerepair.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
