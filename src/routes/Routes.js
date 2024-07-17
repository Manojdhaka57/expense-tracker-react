import React, { Suspense } from 'react';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../utils';
import Layout from '../components/Layout/Layout';
import { StyledLoading } from '../styled/GlobalStyled';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import AddPage from '../pages/AddPage/AddPage';
const AddCategory = lazy(() => import('../pages/AddCategory/AddCategory'));
const AddExpense = lazy(() => import('../pages/AddExpense/AddExpense'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const Login = lazy(() => import('../pages/Login/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const AppRoutes = () => {
  return (
    <Suspense fallback={<StyledLoading>loading .....</StyledLoading>}>
      <Layout>
        <Routes>
          <Route
            index
            path={ROUTES.LOGIN}
            element={
              <PublicRoute isAuthCheck={true}>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/'
            element={<Navigate to={ROUTES.LOGIN} replace={true} />}
          />
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ADD}
            element={
              <ProtectedRoute>
                <AddPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ADD_EXPENSE}
            element={
              <ProtectedRoute>
                <AddExpense />
              </ProtectedRoute>
            }
          />
          <Route
            path={ROUTES.ADD_CATEGORY}
            element={
              <ProtectedRoute>
                <AddCategory />
              </ProtectedRoute>
            }
          />
          <Route path={'/*'} element={<PageNotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default AppRoutes;
