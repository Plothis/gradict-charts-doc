import React from 'react';
import styled from 'styled-components';
import { Popover } from 'antd';
import { size } from 'lodash';

const ContributeName = styled.span`
margin: 0 10px;
`;

// TODO antd v4 popover 没办法自己消失了...
export const Contributors = ({ data = [] }) => {
  return (
    <div style={{ marginBottom: '18px' }}>
      {Object.keys(data).map((key, i) => {
        const info = data[key];
        const contentEl = (
          <>
            {info.map((item, index) => <div key={index}>{item.date} {item.content}</div>)}
          </>
        );
        return (
          <>
            <Popover trigger="hover" placement="right" content={contentEl}>
              <ContributeName>{key}</ContributeName>
            </Popover>
            {size(data) !== i + 1 && '  •  '}
          </>
        );
      })}
    </div>
  );
};