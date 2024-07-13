import React, { Fragment } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { ROUTES } from '../utils';

export const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  if (isEmpty(auth?.user)) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return <Fragment>{children ? children : <Outlet />}</Fragment>;
};
