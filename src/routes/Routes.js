import React, { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../utils';
import Layout from '../components/Layout/Layout';
const Login = lazy(() => import('../pages/Login/Login'));
const AppRoutes = () => {
  return (
    <Suspense fallback='loading....'>
      <Layout>
        <Routes>
          <Route index path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default AppRoutes;
