import React, { useMemo } from 'react';
import { Provider, connect } from "react-redux";

import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import Contribution from '../components/Contribution'
import BackToTop from '../components/BackToTop';
import { store } from '../store/store';

const Container = styled.div``;
const Content = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 1264px;
  @media screen and (max-width: 1344px) {
    max-width: 1008px;
  }
  @media screen and (max-width: 1088px) {
    max-width: 752px;
  }
  @media screen and (max-width: 832px) {
    width: 496px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Layout: React.FC<{ path?: string, location?: any, data: any }> = ({ children, path, location, data, ...other }) => {
  // 404 page without layout
  // if (location.key === 'initial') return children;
  console.log('Layout', other)
  return (
    <Provider store={store}>
      <Container>
        <Header />
        {path === '/about/' ? children : <Content>{children}</Content>}
        <Footer />
        <BackToTop />
        <Contribution />
      </Container>
    </Provider>
  )
};

export default Layout;