module.exports = {
  siteMetadata: {
    // siteUrl: "https://tuzhidian.com",
    title: "gradict-charts",
  },
  pathPrefix: `/gradict-charts-doc`,
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `charts`,
        path: `${__dirname}/charts`,
        ignore: [`**/.*`],  // only parse the first level
      }
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/index.tsx`),
      },
    },
  ],
};
