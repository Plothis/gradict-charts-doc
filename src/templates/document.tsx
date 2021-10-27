import React, { useMemo } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./document.less";
import { parseChartFromMDX } from "../utils/parseMDX";
import { ChartContext } from "../components/graphDetail/context";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, tableOfContents, body } = data.mdx

  const { chartList } = useMemo(() => {
    return parseChartFromMDX(data.allFile.nodes)
  }, [])
  const pathList = window.location.pathname.split('/');
  const fileName = pathList[pathList.length - 1];
  const target = chartList.find(item => item.path === fileName)

  return (
    <ChartContext.Provider value={{chartList, currentChart: target}}>
      <div className="chart-container pg-chart">
        {/* <h1 className="chart-title">{frontmatter.title}</h1> */}
        <div className="chart-context">
      
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </ChartContext.Provider>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    allFile {
      nodes {
        name
        childMdx {
          mdxAST
        }
      }
    }
    mdx(fields: { slug: { eq: $path } }) {
      tableOfContents
      body
    }
  }
`;
