import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Container = styled.div`
  position: relative;
  ol li {
    color: rgb(187, 187, 187);
  }
`;

const ShowAllButton = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 1));
`;

export const Reference: React.FC = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);

  const [props, set] = useSpring(() => ({
    config: { tension: 1000, friction: 100, precision: 1 },
    to: { height: 300, overflow: 'hidden' }
  }));

  const showAll = () => {
    setShow(true);
    set({ to: { height: 'auto' } });
  };

  return (
    <Container>
      <animated.div className="reference" style={props}>{children}</animated.div>
      {show ? null : (
        <ShowAllButton onClick={showAll}>
          <Button style={{ color: '#343E73' }}>[ 查看所有 ]</Button>
        </ShowAllButton>
      )}
    </Container>
  );
};