import React, { useMemo } from "react";
import { StaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./document.less";
import { parseChartFromMDX } from "../utils/parseMDX";
import { ChartContext } from "../components/graphDetail/context";

const Template = function Template({
  path,
  allFile,
}) {

  const { chartList } = useMemo(() => {
    return parseChartFromMDX(allFile ? allFile.nodes : [])
  }, [])
  const pathList = path.split('/');
  const fileName = pathList[pathList.length - 1];
  const target = chartList.find(item => item.path === fileName)

  return (
    <ChartContext.Provider value={{chartList: chartList, currentChart: target}}>
      <div className="chart-container pg-chart">
        {/* <h1 className="chart-title">{frontmatter.title}</h1> */}
        <div className="chart-context">
          <MDXRenderer>{target ? target.body : null}</MDXRenderer>
        </div>
      </div>
      </ChartContext.Provider>
  )
}

const TemplateWrap = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile {
            nodes {
              name
              childMdx {
                mdxAST
                body
              }
            }
          }
        }
      `}
      render={data => {
        return <Template allFile={data.allFile} mdx={data.mdx} {...props} />
      }}
    />
  )
}
export default TemplateWrap;


