import React from 'react';
import {
  StyledContent,
  StyledContentWrapper,
  StyledLayout,
} from './Layout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useAuth } from '../../providers/AuthProvider';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
import AlertComponent from '../AlertComponent/AlertComponent';

const Layout = ({ children }) => {
  const auth = useAuth();
  const { showLoader } = useSelector((state) => state.loaders);
  return (
    <StyledLayout>
      <StyledContentWrapper>
        <AlertComponent />
        <Header />
        <StyledContent>{children}</StyledContent>
        <Footer />
      </StyledContentWrapper>
      {(auth.isLoading || showLoader) && <Loader backdrop zIndex={9999} />}
    </StyledLayout>
  );
};

export default Layout;
