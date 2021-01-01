const { createFilePath } = require(`gatsby-source-filesystem`)

// create URL slugs for markdown pages
// https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `charts/`, trailingSlash: false })
    createNodeField({
      node,
      name: `slug`,
      value: `/charts${slug}`
    });
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const docTemplate = require.resolve(`./src/templates/document.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // create markdown page via template
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: docTemplate,
    })
  })
}