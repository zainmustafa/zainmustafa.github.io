module.exports = {
  siteMetadata: {
    title: 'Zain Mustafa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123676534-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      },
    },
  ],
  pathPrefix : `/zainmustafa.github.io`
}