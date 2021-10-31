import React, { useMemo } from "react";
import { StaticQuery, graphql, useStaticQuery, PageProps } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./document.less";
import { parseChartFromMDX } from "../utils/parseMDX";
import { ChartContext } from "../components/graphDetail/context";

interface Props extends PageProps {
  data: any
}
const Template = function Template({
  data,
  path,
}: Props) {
  const { chartList } = useMemo(() => {
    return parseChartFromMDX(data.allFile ? data.allFile.nodes : [])
  }, [])
  const pathList = path.split('/');
  const fileName = pathList[pathList.length - 1];
  const target = chartList.find(item => item.path === fileName)
  // const catalogData = target && Array.isArray(target.tableOfContents.items) && target.tableOfContents.items.length === 1 ? target.tableOfContents.items[0].items : []

  return (
    <ChartContext.Provider value={{chartList: chartList, currentChart: target}}>
      <div className="chart-container pg-chart">
        {/* <h1 className="chart-title">{frontmatter.title}</h1> */}
        <div className="chart-context">
          {target ? <MDXRenderer>{target.body}</MDXRenderer>: null}
        </div>
      </div>
      </ChartContext.Provider>
  )
}


export default Template;


export const query = graphql`
  query {
    allFile {
      nodes {
        name
        extension
        childMdx {
          mdxAST
          body
          slug
          tableOfContents
        }
      }
    }
  }
`