import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Popover } from 'antd';
import size from 'lodash/size';
import { ChartContext } from './context';
import { getChartFileCommit } from '../../api/common';

const ContributeName = styled.span`
  margin: 0 10px;
`;
const Iblock = styled.div`
  display: inline-block;
`;
interface Props {
  data: {
    [name: string]: {date: string, content: string}[]
  }
  /** default get commiter, if true, will merge props.data */
  merge: boolean
}
// TODO antd v4 popover 没办法自己消失了...
export const Contributors: React.FC<Props> = ({ data = {}, merge }) => {
  const { currentChart } = useContext(ChartContext);
  const [contributorMap, setContributorMap] = useState({});
  useEffect(() => {
    getCommiter()
  }, [])

  const getCommiter = async () => {
    const commitList = await getChartFileCommit(`/charts/${currentChart.path}.${currentChart.extension}`);
    const map: Props['data'] = {};
    commitList.forEach(item => {
      const commiter = item.commit;
      const name = commiter.committer.name;
      if (map[name] === undefined) {
        map[name] = [];
      }
      const date = commiter.committer.date.substr(0, commiter.committer.date.indexOf('T'));
      map[name].push({date: date, content: commiter.message});
    });

    // 合并写死的数据，之前的编辑不是在github上
    if (merge) {
      setContributorMap(Object.assign({}, data, map ))
      return
    }
    setContributorMap(Object.assign({}, map ))
  }
  return (
    <div style={{ marginBottom: '18px' }}>
      {Object.keys(contributorMap).map((key, i) => {
        const info = contributorMap[key];
        const contentEl = (
          <>
            {info.map((item, index) => <div key={index}>{item.date} {item.content}</div>)}
          </>
        );

        return (
          <Iblock key={i}>
            <Popover placement="right" content={contentEl}>
              <ContributeName>{key}</ContributeName>
            </Popover>
            {size(contributorMap) !== i + 1 && '  •  '}
          </Iblock>
        );
      })}
    </div>
  );
};