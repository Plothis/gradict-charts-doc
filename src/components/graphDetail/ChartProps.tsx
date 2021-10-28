import React, { useContext } from 'react';

import { ChartContext } from './context';


export const ChartProps: React.FC<{ name: string }> = (props) => {
  const { currentChart } = useContext(ChartContext);
  let propsMap = {}
  if (currentChart) {
    propsMap = {
      '形状': currentChart.shape,
      '图类': currentChart.category,
      '功能': currentChart.purpose,
    }
  }
  return (
    <div style={{ marginBottom: '18px' }}>
      <ul>
        {Object.keys(propsMap).map((typeName, index) => {
          return (
            <li key={typeName}>
              <strong>{typeName}：</strong>{propsMap[typeName].join(' • ')}
            </li>
          )
        })}
      </ul>
    </div>
  );
};