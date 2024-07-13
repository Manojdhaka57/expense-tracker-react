import React, { Fragment } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../utils';
import { useAuth } from '../providers/AuthProvider';
import isEmpty from 'lodash/isEmpty';

export const PublicRoute = ({ children, isAuthCheck }) => {
  const auth = useAuth();
  if (isAuthCheck && !isEmpty(auth?.user)) {
    return <Navigate to={ROUTES.DASHBOARD} replace={true} />;
  }
  return <Fragment>{children ? children : <Outlet />}</Fragment>;
};
