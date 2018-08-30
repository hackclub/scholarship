module.exports = {
  siteMetadata: {
    title: 'The Hack Club Scholarship',
    url: 'https://scholarship.hackclub.com',
    img: 'https://scholarship.hackclub.com/metadata.jpg',
    description: 'Apply for a grant for technology-interested high schoolers in Cincinnati'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/icon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
  ],
}
