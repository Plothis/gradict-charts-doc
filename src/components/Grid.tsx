import React from 'react';
import styled from 'styled-components';

export default function Grid({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled('div')`
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, 240px);
  user-select: none;
  @media screen and (max-width: 600px) {
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fit, 163px);
    justify-content: center;
  }
  & > div:last-of-type:nth-child(odd) {
    /* grid-column: 1/-1; */
  }
`;
