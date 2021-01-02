import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';

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
const Layout = ({ children, path, location }) => {
  // console.log('children: ', children.type.noLayout);
  // 404 page without layout
  // if (location.key === 'initial') return children;
  return (
    <Container>
      <Header />
      {path === '/about/' ? children : <Content>{children}</Content>}
      <Footer />
    </Container>
  )
};

export default Layout;
