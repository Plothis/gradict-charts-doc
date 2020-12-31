import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

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
const Layout = (props) => (
  <Container className={props.className}>
    {props.page === 'chart' ? props.children : <Content>{props.children}</Content>}
    <Footer />
  </Container>
);

export default Layout;