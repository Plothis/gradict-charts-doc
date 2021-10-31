const { createFilePath } = require(`gatsby-source-filesystem`);
const docTemplate = require.resolve(`./src/templates/document.tsx`);

// create URL slugs for markdown pages
// https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx` || node.internal.type === "MarkdownRemark") {
    const relativeFilePath  = createFilePath({ node, getNode, basePath: `src/charts`, trailingSlash: false})

    createNodeField({
      node,
      name: `slug`,
      value: `/charts${relativeFilePath}`
    });
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
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
  result.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: docTemplate,
      // context: {a: 1}
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
