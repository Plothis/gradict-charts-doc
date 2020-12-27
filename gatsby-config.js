/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `charts`,
        path: `${__dirname}/charts`,
        ignore: [`**/.*`],  // only parse the first level
      },
    },
    `gatsby-transformer-remark`,
  ],
}
