import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./document.less";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, tableOfContents, body } = data.mdx

  return (
    <div className="chart-container">
      <h1 className="chart-title">{frontmatter.title}</h1>
      <div className="chart-context">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
      }
      tableOfContents
      body
    }
  }
`;
