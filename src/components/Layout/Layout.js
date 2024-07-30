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
import isEmpty from 'lodash/isEmpty';

const Layout = ({ children }) => {
  const auth = useAuth();
  const { showLoader } = useSelector((state) => state.loaders);
  const isAuthenticated = !isEmpty(auth?.user);
  return (
    <StyledLayout>
      <StyledContentWrapper>
        <AlertComponent />
        {isAuthenticated && <Header />}
        <StyledContent $isauthenticated={isAuthenticated}>
          {children}
        </StyledContent>
        {isAuthenticated && <Footer />}
      </StyledContentWrapper>
      {(auth.isLoading || showLoader) && <Loader backdrop zIndex={9999} />}
    </StyledLayout>
  );
};

export default Layout;
