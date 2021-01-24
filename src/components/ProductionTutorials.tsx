import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
`;

const Td = styled.td`
  border: 1px solid #d0d0d0;
  padding: 10px 10px;
  text-align: center;
  color: #4a4a4a;
`;

type ToolItem = {
  readonly link?: string;
  readonly linkText: string;
}

interface Props {
  data: Record<string, Record<string, ToolItem[]>>
}

export const ProductionTutorials: React.FC<Props> = ({ data }) => {
  const newTableData = handleTableData(data || {});
  return (
    <Table>
      <tbody>{newTableData.map((item, i) => renderTR(item, i))}</tbody>
    </Table>
  );
}

function renderTR(item, index) {
  const columnOne = item.columnOne ? (
    <Td width="25%" rowSpan={item.columnOne.rowSpan}>
      {item.columnOne.text}
    </Td>
  ) : null;

  const columnTwo = item.columnTwo ? (
    <Td width="25%" rowSpan={item.columnTwo.rowSpan}>
      {item.columnTwo.text}
    </Td>
  ) : null;

  const columnThree = (
    <Td width="50%" style={{ textAlign: 'left', paddingLeft: '15px' }}>
      {item.columnThree.link ? (
        <a href={item.columnThree.link} style={{ textDecoration: 'underline', color: '#4a4a4a' }} target="__blank">
          {item.columnThree.linkText}
        </a>
      ) : (
          item.columnThree.linkText
        )}
    </Td>
  );

  return (
    <tr style={item.background ? { background: '#f6f6f6' } : null} key={index}>
      {columnOne}
      {columnTwo}
      {columnThree}
    </tr>
  );
}


function handleTableData(data: Props['data']) {
  let result = [];
  let background = 0;
  const newData = Object.keys(data).map((key) => ({
    text: key,
    children: data[key]
  }));

  newData.forEach((group) => {
    let length = 0;
    const newGroup = Object.keys(group.children).map((key) => {
      var subLength;
      // 插入空数据的文本，计算长度
      if (group.children[key].length === 0) {
        group.children[key] = [{ linkText: '--' }];
        subLength = 1;
      } else {
        subLength = group.children[key].length;
      }
      length += subLength;
      return {
        text: key,
        children: group.children[key],
        length: subLength
      };
    });

    // 每一大类的数据
    var groupData = [];
    // 每一大类的背景色不同
    background = 1 - background;
    newGroup.forEach((item, i) => {
      item.children.forEach((subItem, j) => {
        if (j === 0) {
          if (i === 0) {
            // 大类第一项，含有三列
            groupData.push({
              columnOne: {
                rowSpan: length,
                text: group.text
              },
              columnTwo: {
                rowSpan: item.length,
                text: item.text
              },
              columnThree: subItem,
              background: background
            });
          } else {
            // 小类第一项，含有两列
            groupData.push({
              columnTwo: {
                rowSpan: item.length,
                text: item.text
              },
              columnThree: subItem,
              background: background
            });
          }
        } else {
          // 最后一列
          groupData.push({
            columnThree: subItem,
            background: background
          });
        }
      });
    });

    // TODO 这一页的类型待补全
    result = result.concat(groupData);
    group.children = newGroup;
    group.length = length;
  });
  return result;
}
