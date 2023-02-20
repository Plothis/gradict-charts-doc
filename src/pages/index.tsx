import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { useStaticQuery, graphql, PageProps } from 'gatsby'
import Collapse from '@material-ui/core/Collapse';
import CircularProgress from '@material-ui/core/CircularProgress';
import Drawer from '@material-ui/core/Drawer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { animated, useSpring } from 'react-spring';
import SpecificButton from '../components/SpecificButton';;
import ChartList from '../components/ChartList';
import { ChartInfo, ChartProp, parseProps, parseChartFromMDX } from "../utils/parseMDX";
import { Dispatch, RootState } from "../store/store";
import { useWidth } from "../hooks/withWidth";


interface ChartQuery { 
  name: string
  /** 属性类型 */
  type: string
  /** 属性值 */
  value: string
}
interface Props extends PageProps{
  data: any
}
const Line = styled.div`
  display: flex;
  min-height: 60px;
  border-bottom: 1px solid #e6e6e6;
  &:not(:first-child) {
    border-top: none;
  }
  .line-name {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f6f6f6;
    min-width: 140px;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    border-right: 1px solid #e6e6e6;
    .font_family {
      color: #27a59e;
      margin-right: 10px;
    }
  }
  .line-content {
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding-left: 60px;
    .no-limit {
      display: flex;
      color: #343e73;
      min-width: 140px;
      justify-content: center;
    }
    .buttons {
      .font_family {
        &.active {
          color: #343e72;
        }
        color: #9b9b9b;
        margin-right: 10px;
      }
      .pure-icon {
        cursor: pointer;
        margin-right: 48px;
        font-size: 26px;
        padding-left: 10px;
      }
      display: flex;
      flex-wrap: wrap;
      margin: 8px 0 0;
      button {
        font-weight: normal;
        width: 140px;
        margin: 0px 8px 8px;
      }
    }
  }
`;
const MobileLine = styled.div`
  padding: 10px 16px;
  .line-name {
    color: #9b9b9b;
    font-size: 12px;
  }
  .line-content {
    flex-grow: 1;
    display: flex;
    align-items: center;
    font-size: 14px;
    .no-limit {
      display: flex;
      color: #343e73;
      min-width: 140px;
      justify-content: center;
    }
    .buttons {
      .font_family {
        &.active {
          color: #343e72;
        }
        color: #9b9b9b;
        margin-right: 6px;
      }
      .pure-icon {
        cursor: pointer;
        margin-right: 48px;
        margin-bottom: 8px;
        font-size: 26px;
        padding-left: 10px;
      }
      display: flex;
      flex-wrap: wrap;
      margin: 8px 0 0;
      button {
        padding: 0;
        text-align: center;
        line-height: 34px;
        font-weight: normal;
        width: 110px;
        margin: 0px 4px 8px 0;
      }
    }
  }
`;


export default function Home(props: Props) {
  const data = useStaticQuery(graphql`
  query{
    allFile {
      nodes {
        name
        childMdx {
          mdxAST
        }
      }
    }
  }
`)
  const showMobileFilters = useSelector((state: RootState) => state.indexPage.showMobileFilters)
  const dispatch = useDispatch<Dispatch>()
  const width = useWidth();
  const [showFilters, setShowFilters] = useState(true);
  const [queries, setQueries] = useState<ChartQuery[]>([]);
  const [filters, setFilters] = useState<ChartInfo[]>([]);
  const [springProps, animate] = useSpring(() => ({
    config: { tension: 2000, friction: 100, precision: 1 },
    from: { height: 0 },
    to: { height: 'auto' },
  }));
  const { propsList: chartProps, propMap } = parseProps()
  const { chartList } = useMemo(() => {
    return parseChartFromMDX(data.allFile.nodes)
  }, [])

  useEffect(() => {
    setFilters(chartList)
  }, [])

  useEffect(() => {
    if (queries.length > 0) {
      animate({ height: 'auto' })
    } else {
      animate({ height: 0 })
    }
    setFilters(queryChart())
  }, [queries])

  const isPropButtonActive = (type: string, propValue: string) => {
    for (const query of queries) {
      if (query.type === type && query.value === propValue) {
        return true
      }
    }
    return false
  }
  const clearFilter = () => {
    setQueries([])
  }
  const changeSearch = (queryProp: ChartQuery) => {
    const newQueries = [...queries]

    const index = newQueries.findIndex((item) => item.type === queryProp.type && item.value === queryProp.value)
    if (index > -1) {
      newQueries.splice(index, 1)
    } else {
      newQueries.push(queryProp)
    }
    setQueries(newQueries)
  };
  const queryChart = () => {
    const chartMap: Record<string, ChartInfo> = {}

    // {  shape: ['圆形', '方形'], xxx: []}
    const queryMap: Record<string, string[]> = {}
    
    if (queries.length === 0) {
      return [...chartList]
    }
    // 按type + 值 归纳，同组的查询条件为or，不同type为and
    queries.forEach(query => {
      if (queryMap[query.type] === undefined) {
        queryMap[query.type] = []
      }
      queryMap[query.type].push(`${query.type}-${query.value}`)
    })

    for (const chartInfo of chartList) {
      let matchCount = 0
      const keysLen = Object.keys(queryMap).length
      for (const propType in queryMap) {
        if (Object.prototype.hasOwnProperty.call(queryMap, propType)) {
          const queryProps = queryMap[propType];
          for (const propValue of queryProps) {   
            // 同类属性命中一个即可 
            if (propValue in chartInfo.$searchMap) {
              matchCount++
              continue
            }
          }
        }
      }
      // 大类需要完全匹配
      if (keysLen === matchCount) {
        chartMap[chartInfo.name] = chartInfo
      }
    }
    return Object.values(chartMap)
  }
  const clickPropButton = (query: ChartProp, propValue: string) => {
    changeSearch({ type: query.enName, name: query.cnName, value: propValue })
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  }
  const removeFilter = (query: ChartQuery) => {
    changeSearch(query)
  }

  return (
    <div>
      {chartList.length > 0 ? (
        <>
          {/* desktop */}
          {width !== 'xs' && (
            <div className="index-table">
              <Collapse in={showFilters} timeout="auto">
                {chartProps.map((query, i) => (
                  <Line key={i}>
                    <div className="line-name">
                      <span className={`icon font_family icon-${query.iconName}`} />
                      {query.cnName}
                    </div>
                    <div className="line-content">
                      <div className="buttons">
                        {Array.isArray(query.children) && query.children.map((propValue, j) => {
                          // if (!filters[query.name]) {
                          //   return null;
                          // }
                          const active = isPropButtonActive(query.enName, propValue)
                          return (
                            <SpecificButton key={j} variant="outlined" active={active ? 'active' : undefined} onClick={() => clickPropButton(query, propValue)}>
                              {/* {child.iconName ? <span className={`icon font_family icon-${child.iconName} ${active ? 'active' : ''}`} /> : null} */}
                              {propValue}
                            </SpecificButton>
                          );
                        })}
                      </div>
                    </div>
                  </Line>
                ))}
                <div className="search-filters">
                  <animated.div className="items" style={springProps}>
                    筛选内容:
                    {queries.map((item, i) => (
                      <div className="search-button" key={i}>
                        <span>{item.name}: {item.value}</span>
                        <CloseOutlinedIcon style={{ fontSize: 16, marginLeft: '4px' }} onClick={() => removeFilter(item)} />
                      </div>
                    ))}
                    <div className="clear" onClick={clearFilter}>
                      清除
                    </div>
                  </animated.div>
                </div>
              </Collapse>
              <Collapse in={!showFilters} timeout="auto">
                <div className="filter-hint">高级筛选</div>
              </Collapse>
              <ExpandMoreIcon className="toggle-search" onClick={toggleFilters} style={showFilters ? { transform: 'rotate(180deg)' } : {}} />
            </div>
          )}
          <ChartList charts={filters} />
        </>
      ) : (
        <div style={{ height: '80vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress className="" color="primary" />
        </div>
      )}
      {/* mobile */}
      {width === 'xs' && (
        <Drawer open={showMobileFilters} anchor="top" onClose={dispatch.indexPage.toggleMobileFilters} PaperProps={{ className: 'mobile-filters-drawer' }}>
          <div className="mobile-filters">
            {chartProps.map((query, i) => (
              <MobileLine key={i}>
                <div className="line-name">
                  {/* <span className={`icon font_family icon-${query.iconName}`} /> */}
                  {query.cnName}
                </div>
                <div className="line-content">
                  <div className="buttons">
                    {Array.isArray(query.children) && query.children.map((propValue, j) => {
                      const active = isPropButtonActive(query.enName, propValue)
                      return (
                        <SpecificButton key={j} variant="outlined" active={active ? 'active' : undefined} onClick={() => clickPropButton(query, propValue)}>
                          {/* {child.iconName ? <span className={`icon font_family icon-${child.iconName} ${active ? 'active' : ''}`} /> : null} */}
                          {propValue}
                        </SpecificButton>
                      );
                    })}
                  </div>
                </div>
              </MobileLine>
            ))}
            <div className="search-filters">
              <animated.div className="items" style={springProps}>
                筛选内容:
                {queries.map((item, i) => (
                  <div className="search-button" key={i}>
                    <span>{item.name}: {item.value}</span>
                    <CloseOutlinedIcon style={{ fontSize: 16, marginLeft: '4px' }} onClick={() => removeFilter(item)} />
                  </div>
                ))}
                {/* <div className="clear" onClick={this.clearFilter}>
                    清除
                  </div> */}
              </animated.div>
            </div>
          </div>
          <div className="function-buttons">
            <div className="clear" onClick={clearFilter}>
              清空
            </div>
            <div className="confirm" onClick={dispatch.indexPage.toggleMobileFilters}>
              确定
            </div>
          </div>
        </Drawer>
      )}
    </div>
  )
}


// export const pageQuery = graphql`
//   query{
//     allFile {
//       nodes {
//         name
//         childMdx {
//           mdxAST
//         }
//       }
//     }
//   }
// `
