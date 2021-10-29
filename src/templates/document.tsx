import React, { useMemo } from "react";
import { StaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from 'styled-components';
import "./document.less";
import { parseChartFromMDX } from "../utils/parseMDX";
import { ChartContext } from "../components/graphDetail/context";
import CataLog from "../components/graphDetail/CataLog";

const Wrap = styled.div`
  display: flex;
  background: #fff;
`;

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
  const catalogData = Array.isArray(target.tableOfContents.items) && target.tableOfContents.items.length === 1 ? target.tableOfContents.items[0].items : []
  return (
    <ChartContext.Provider value={{chartList: chartList, currentChart: target}}>
      <div className="chart-container pg-chart">
        {/* <h1 className="chart-title">{frontmatter.title}</h1> */}
        <div className="chart-context">
          {/* <CataLog catalogData={catalogData} /> */}
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
      `}
      render={data => {
        return <Template allFile={data.allFile} mdx={data.mdx} {...props} />
      }}
    />
  )
}
export default TemplateWrap;


