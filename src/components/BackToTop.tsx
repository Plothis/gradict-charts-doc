import React, { Component } from 'react';
import styled from 'styled-components';
import { scrollToTop } from '../utils/scroll';

interface State {
  on: boolean;
}
const ToTopButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 80px;
  width: 40px;
  height: 40px;
  background-color: #5d6590;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  span {
    line-height: 40px;
    font-size: 14px;
  }
  /* 移动端取消返回顶部 */
  @media screen and (max-width: 600px) {
    /* width: 35px;
    height: 35px;
    span {
      font-size: 13px;
      line-height: 35px;
    } */
    display: none;
  }
`;

function farAway() {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  return currentScroll > 300;
}

class BackToTop extends Component<{}, State> {
  state = {} as State;
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const initialState = farAway() ? { on: true } : { on: false };
    this.setState(initialState);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const on = this.state.on;
    if ((farAway() && !on) || (!farAway() && on)) this.setState(({ on }) => ({ on: !on }));
  };
  render() {
    return this.state.on ? (
      <ToTopButton onClick={scrollToTop}>
        <span className="font_family icon-backtop1" />
      </ToTopButton>
    ) : null;
  }
}

export default BackToTop;
