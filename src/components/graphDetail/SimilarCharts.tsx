import isEmpty from 'lodash/isEmpty';
import React, { useContext, useMemo, useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';
import ChartList from '../ChartList';
import { ChartInfo, parseChartFromMDX, zhCompletedKB } from '../../utils/parseMDX';
import { ChartContext } from './context';
import { makeStyles } from '@material-ui/core/styles';

const Container = styled.section`
  margin-top: 60px;
`;
const Title = styled.h2`
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 6px;
`;

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  tabsRoot: {
    borderBottom: 'none',
  },
  tabsIndicator: {
    backgroundColor: 'transparent',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    border: '1px solid #e6e6e6',
    '&:not(:first-child)': {
      borderLeft: 'none',
    },
    '&:hover': {
      opacity: 0.7,
      // color: '#fff',
      // background: '#9B9B9B',
    },
    '&$tabSelected': {
      color: '#fff',
      background: '#9B9B9B',
    },
    '&:focus': {
      // color: '#fff',
      // background: '#9B9B9B',
    },
  },
  tabSelected: {},
});

const ifHide = (msg) => ({
  borderBottom: !isEmpty(msg) ? '1px solid #e6e6e6' : 'none',
});

export const SimilarCharts: React.FC<{}> = (props) => {

  const [value, setValue] = useState(0);
  const { chartList, currentChart } = useContext(ChartContext);
  const classes = useStyles();


  const getChartLike = (type: string, or?: boolean) => {
    if (!currentChart) {
      return []
    }
    const typeValues = currentChart[type]
    return chartList.filter((item) => {
      if(item.path === currentChart.path) {
        return false;
      }
      for (let i = 0; i < typeValues.length; i++) {
        const value = typeValues[i];
        if (`${type}-${value}` in item.$searchMap) {
          return true
        }
        return false
      }
      return item[type]
    })
  }
  const aShape = getChartLike('shape')
  const aFunction = getChartLike('purpose')
  // 求交集
  const aShapeFunction = useMemo(() => {
    const map: Record<string, ChartInfo> = aShape.reduce((pre, current) => {
      if (!pre[current.path]) {
        pre[current.path] = current
      }
      return pre
    }, {} as Record<string, ChartInfo>);

    return aFunction.filter(item => item.path in map);
  }, [])

  const handleChange = (event, value) => {
    setValue(value);
  };
  return (
    <Container>

      <Tabs value={value} classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }} indicatorColor="primary" textColor="primary" centered onChange={handleChange}>
         {/* <Tab label="全部" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} /> */}
        <Tab label="仅外形相似" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
        <Tab label="仅功能相似" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
        <Tab label="外形功能都相似" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
      </Tabs> 
      {/* {value === 0 && <ChartList charts={aTotal} isFlex={true} />} */}
      {value === 0 && <ChartList charts={aShape} isFlex={true} />}
      {value === 1 && <ChartList charts={aFunction} isFlex={true} />}
      {value === 2 && <ChartList charts={aShapeFunction} isFlex={true} />}
    </Container>
  );
};


export default SimilarCharts

