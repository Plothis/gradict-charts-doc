import React, { Component } from 'react';
import Grow from '@material-ui/core/Grow';
import FeedBackContentNew from './FeedBackContentNew';
import styled from 'styled-components';


interface State {
    checked: boolean;
}
const FeedbackButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 40px;
  height: 40px;
  background-color: #5d6590;
  color: #fff;
  text-align: center;
  cursor: pointer;
  padding-top: 11px;
  box-sizing: border-box;
  border-radius: 2px;
  &:hover {
    .tooltip {
      transform: scale(1, 1);
    }
  }
  .icon{
    position: relative;
    top: -2px;
    font-size: 24px;
  }
  .tooltip {
    transform: scale(0, 0);
    transform-origin: right center;
    transition: transform 0.3s;
    position: absolute;
    top: 5px;
    right: 70px;
    width: 110px;
    height: 40px;
    line-height: 40px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
    color: #4a4a4a;
  }
  /* 移动端取消反馈 */
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
// TODO: arrow for hover
// &::after {
//   content: '';
//   position: absolute;
//   right: 0;
//   top: 50%;
//   transform: translate(80%, -50%) rotate(45deg);
//   transform-origin: center center;
//   width: 10px;
//   height: 10px;
//   box-shadow: 2px 0px 12px 0px rgba(0, 0, 0, 0.2);
// }
const FeedBackContainer = styled.div`
  position: fixed;
  right: 80px;
  bottom: 20px;
  cursor: pointer;
`;

class Contribution extends Component<{}, State> {
  state = { checked: false };
  handleChange = () => {
    this.setState((state) => ({ checked: !state.checked }));
  };
  render() {
    const { checked } = this.state;
    return (
      <div>
        <FeedbackButton onClick={this.handleChange}>
          <span className="font_family icon-feedback1 icon" />
          <span className="tooltip">内容反馈</span>
        </FeedbackButton>
        <Grow in={checked} style={{ transformOrigin: 'right bottom', border: 'solid 1px #e6e6e6', width: '460px', display: checked ? 'block' : 'none' }}>
          <FeedBackContainer style={{ background: '#fff' }}>
            {/* <FeedBackContent toggleFeedback={this.handleChange} /> */}
            <FeedBackContentNew toggleFeedback={this.handleChange} />
          </FeedBackContainer>
        </Grow>
      </div>
    );
  }
}

export default Contribution;
