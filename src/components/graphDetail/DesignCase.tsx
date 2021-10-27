import React from 'react';
import styled from 'styled-components';

const CaseContent = styled.div`
  margin: 0 60px;
  column-count: 2;
  column-gap: 30px;

  >div{
    break-inside: avoid;
  }

  >div:not(:first-child) {
    margin-top: 30px;
  }
`;

// TODO 点击查询放大图
const Container = ({ children }) => {
  return <CaseContent>{children}</CaseContent>;
}

interface ItemProps {
  description: string;
  image: string;
  link?: string;
}


const CaseBlock = styled.div`
  padding: 20px;
  /* 该用 column count 方式后，第二排上面的阴影看不到了，先用 border 实现 */
  /* box-shadow: 0px 0px 4px 2px rgba(211, 211, 211, 0.5); */
  border: 1px solid rgb(230, 230, 230);
  overflow: hidden;

  img {
    width: 100%;
  }

  .case-text {
    padding: 10px 20px;
    color: #4a4a4a;
    font-size: 14px;
    text-align: justify;
    line-height: 30px;
    @media screen and (max-width: 600px) {
      line-height: 20px;
      font-size: 13px;
      padding: 10px 0;
    }
  }

  .view-origin {
    border: 1px solid #d0d0d0;
    float: right;
    font-size: 14px;
    border-radius: 2px;
    text-align: center;
    padding: 8px 12px;
    cursor: pointer;
    color: rgb(74, 74, 74);
    text-decoration: none;
  }
`;

const Item: React.FC<ItemProps> = ({ image, description, link }) => {
  return (
    <CaseBlock>
      <div
      // TODO 预览
      // onClick={() => this.handlePreview(i * 2)}
      >
        <img src={image} />
      </div>
      <div className="case-text">{description}</div>
      {link ? (
        <a className="view-origin" href={link} target="_blank" rel="noopener noreferrer">
          查看出处
        </a>
      ) : null}
    </CaseBlock>
  )
}

export default { Container, Item };