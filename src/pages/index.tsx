import React, { useState, useEffect, useMemo } from "react";
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import { useTheme } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { animated, useSpring } from 'react-spring';
import { CKBJson } from '@antv/knowledge';
import { cloneDeep, forIn, isEmpty } from 'lodash'
import SpecificButton from '../components/SpecificButton';;
import Layout from '../layout/index';
import ChartList from '../components/ChartList';
import { chartProps } from '../constants/props';
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
function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

const SHAPE_ENNAME = 'shape';
const zhCompletedKB = CKBJson('zh-CN', true);

const CHART_MAP = {
  pie_chart: {
    path: 'pie'
  },
  sankey_diagram: {
    path: 'sankey'
  }
}

export function Home(props) {

  const width = useWidth();
  const [showFilters, setShowFilters] = useState(true);
  const [queries, setQueries] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState([]);
  const [springProps, setSpringProps] = useSpring(() => ({
    config: { tension: 2000, friction: 100, precision: 1 },
    from: {height: 0},
    to: { height: true ? 'auto' : 0}
  }));

  const allCharts = useMemo(() => {
    const chartList = []
    props.data.allFile.nodes.forEach(({name}) => {
      for (const key in zhCompletedKB) {
        if (Object.prototype.hasOwnProperty.call(zhCompletedKB, key)) {
          const element = zhCompletedKB[key];
          if (key.includes(name)) {
            chartList.push({
              ...element,
              path: CHART_MAP[key].path,
            });
            break;
          }
        }
      }

    });

    // setQueries(chartList)
    return chartList
  }, [])


  useEffect(() => {

    setQueries(chartProps)
    return () => {
 
    }
  }, [])
  async function clearFilter() {
    // await this.props.clearFilters();
    // this.getCharts();
    // Router.push(
    //   {
    //     pathname: '/',
    //     query: {}
    //   },
    //   {
    //     pathname: '/',
    //     query: {}
    //   },
    //   { shallow: true }
    // );
  }
  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters)
  }
  const toggleFilters  = () => {
    setShowFilters(!showFilters);
  }
  const CNMap = []
  const charts = allCharts
  const  filterArray = []
  
  return (
    <div>
      {queries.length > 0 ? (
        <>
          {/* desktop */}
          {width !== 'xs' && (
            <div className="index-table">
              <Collapse in={showFilters} timeout="auto">
                {queries.map((query, i) => (
                  <Line key={i}>
                    <div className="line-name">
                      {/* <span className={`icon font_family icon-${query.iconName}`} /> */}
                      {query.name}
                    </div>
                    <div className="line-content">
                      <div className="buttons">
                        {Array.isArray(query.children) && query.children.map((child, j) => {
                          if (!filters[query.enName]) {
         
                            return null;
                          }
                          const active = filters[query.enName].indexOf(child.enName) >= 0;
                          if (query.enName === SHAPE_ENNAME) {
                            return (
                              <span
                                key={j}
                                className={`icon pure-icon font_family icon-${child.iconName} ${active ? 'active' : ''}`}
                                // active={active ? 'active' : null}
                                onClick={() => this.clickButton(query, child)}
                              />
                            );
                          } else {
                            return (
                              <SpecificButton key={j} variant="outlined" active={active ? 'active' : null} onClick={() => this.clickButton(query, child)}>
                                {child.iconName ? <span className={`icon font_family icon-${child.iconName} ${active ? 'active' : ''}`} /> : null}
                                {child.cnName}
                              </SpecificButton>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </Line>
                ))}
                <div className="search-filters">
                  <div {...springProps} >
                    {(props) => (
                      <animated.div className="items" style={props}>
                        筛选内容:
                        {filterArray.map((item, i) => (
                          <div className="search-button" key={i}>
                            {CNMap[item.type]}:{item.type === SHAPE_ENNAME ? <span className={`icon font_family icon-${item.iconName}`} /> : <span>{CNMap[item.value]}</span>}
                            <CloseOutlinedIcon style={{ fontSize: 16, marginLeft: '4px' }} onClick={() => this.removeFilter(item)} />
                          </div>
                        ))}
                        <div className="clear" onClick={this.clearFilter}>
                          清除
                        </div>
                      </animated.div>
                    )}
                  </div>
                </div>
              </Collapse>
              <Collapse in={!showFilters} timeout="auto">
                <div className="filter-hint">高级筛选</div>
              </Collapse>
              <ExpandMoreIcon className="toggle-search" onClick={toggleFilters} style={showFilters ? { transform: 'rotate(180deg)' } : {}} />
            </div>
          )}
          <ChartList charts={charts} />
        </>
      ) : (
        <div style={{ height: '80vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress className="" color="primary" />
        </div>
      )}
      {/* mobile */}
      {width === 'xs' && (
        <Drawer open={showMobileFilters} anchor="top" onClose={toggleMobileFilters} PaperProps={{ className: 'mobile-filters-drawer' }}>
          <div className="mobile-filters">
            {queries.map((query, i) => (
              <MobileLine key={i}>
                <div className="line-name">
                  {/* <span className={`icon font_family icon-${query.iconName}`} /> */}
                  {query.cnName}
                </div>
                <div className="line-content">
                  <div className="buttons">
                    {Array.isArray(query.children) && query.children.map((child, j) => {
                      const active = filters[query.enName].indexOf(child.enName) >= 0;
                      if (query.enName === SHAPE_ENNAME) {
                        return (
                          <span
                            key={j}
                            className={`icon pure-icon font_family icon-${child.iconName} ${active ? 'active' : ''}`}
                            // active={active ? 'active' : null}
                            onClick={() => this.clickButton(query, child)}
                          />
                        );
                      } else {
                        return (
                          <SpecificButton key={j} variant="outlined" active={active ? 'active' : null} onClick={() => this.clickButton(query, child)}>
                            {child.iconName ? <span className={`icon font_family icon-${child.iconName} ${active ? 'active' : ''}`} /> : null}
                            {child.cnName}
                          </SpecificButton>
                        );
                      }
                    })}
                  </div>
                </div>
              </MobileLine>
            ))}
            <div className="search-filters">
              <div {...springProps}>
                {(props) => (
                  <animated.div className="items" style={props}>
                    筛选内容:
                    {filterArray.map((item, i) => (
                      <div className="search-button" key={i}>
                        {CNMap[item.type]}:{item.type === SHAPE_ENNAME ? <span className={`icon font_family icon-${item.iconName}`} /> : <span>{CNMap[item.value]}</span>}
                        <CloseOutlinedIcon style={{ fontSize: 16, marginLeft: '4px' }} onClick={() => this.removeFilter(item)} />
                      </div>
                    ))}
                    {/* <div className="clear" onClick={this.clearFilter}>
                    清除
                  </div> */}
                  </animated.div>
                )}
              </div>
            </div>
          </div>
          <div className="function-buttons">
            <div className="clear" onClick={clearFilter}>
              清空
            </div>
            <div className="confirm" onClick={toggleMobileFilters}>
              确定
            </div>
          </div>
        </Drawer>
      )}
  </div>
  )
}

const HomeWrap = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query{
          allFile {
            nodes {
              name
            }
          }
        }
      `}
      render={data => <Home data={data} {...props} />}
    />
  )
}
export default HomeWrap