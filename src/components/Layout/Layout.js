import React from 'react';
import {
  StyledContent,
  StyledContentWrapper,
  StyledLayout,
} from './Layout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <StyledContentWrapper>
        <Header />
        <StyledContent>{children}</StyledContent>
        <Footer />
      </StyledContentWrapper>
    </StyledLayout>
  );
};

export default Layout;
