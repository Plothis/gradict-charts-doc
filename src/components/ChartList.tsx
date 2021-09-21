import React from 'react';
import Grid from './Grid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Container = styled.div`
  position: relative;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  cursor: pointer;
  .title {
    background: #f6f6f6;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    color: #4a4a4a;
    text-decoration: none;
    text-decoration-style: none;
  }
  .picture {
    text-align: center;
    height: 0;
    padding-bottom: 83%;
    position: relative;
    img {
      width: 100%;
    }
    .coming-soon {
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      .icon {
        font-size: 24px;
      }
      .text {
        margin-top: 8px;
      }
    }
  }
  &:hover {
    .description {
      width: 100%;
      height: auto;
      transform: translateY(0);
      visibility: visible;
      transition: transform 0.5s;
    }
  }
  .description {
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
    transform: translateY(100%);
    height: -60px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 16px 30px;
    box-sizing: border-box;
  }
`;

// 该组件供
// 1. 首页 chart list
// 2. 详情页 chart list 使用
export default function ChartList({ charts, isFlex = false }) {
  return (
    <div style={{ marginTop: '30px', marginBottom: '60px' }}>
      {isFlex ? (
        <div className="flex-charts">
          {charts &&
            charts.map((graph, i) => (
              <div className="chart" key={i}>
                {renderChart(graph, i)}
              </div>
            ))}
        </div>
      ) : (
        <Grid>{charts && charts.map((graph, i) => renderChart(graph, i))}</Grid>
      )}
    </div>
  );
}

function renderChart(graph, index) {
  if (graph.disabled) {
    return (
      <Container key={index}>
        <div className="title">{graph.name}</div>
        <div className="picture">
          <img src={graph.image} alt={graph.name} />
          <div className="coming-soon">
            <span className="icon font_family icon-jingqingqidai" style={{ color: '#fff' }} />
            <span className="text">敬请期待</span>
          </div>
        </div>
        {/* {graph.briefIntroduction ? <div className="description">{graph.briefIntroduction}</div> : null} */}
      </Container>
    );
  } else {
    return (
      <Link to={`/charts/${graph.path}`}  key={index}>
        <Container>
          <div className="title">{graph.name}</div>
          <div className="picture">
            <img src={graph.image} alt={graph.name} />
          </div>
          {/* {graph.briefIntroduction ? <div className="description">{graph.briefIntroduction}</div> : null} */}
        </Container>
      </Link>
    );
  }
}
ChartList.propTypes = {
  charts: PropTypes.array.isRequired
};
