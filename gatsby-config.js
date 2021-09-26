/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/gradict-charts-doc`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `charts`,
        path: `${__dirname}/charts`,
        ignore: [`**/.*`],  // only parse the first level
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/index.tsx`),
      },
    },
  ],
}
