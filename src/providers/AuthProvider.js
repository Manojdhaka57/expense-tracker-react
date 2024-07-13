import React, { createContext, useContext, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_OBJECT,
  clearLocalStorage,
  decodeToken,
} from '../utils/authUtils';
import AuthService from '../services/AuthService';
import { pick } from 'lodash';
import { ROUTES } from '../utils';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem(LOCAL_STORAGE_OBJECT.USER) || {}
  );
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const tokenValidation = async (refreshToken, accessToken) => {
    localStorage.setItem(LOCAL_STORAGE_OBJECT.REFRESH_TOKEN, refreshToken);
    localStorage.setItem(LOCAL_STORAGE_OBJECT.ACCESS_TOKEN, accessToken);
    const decodedToken = decodeToken(accessToken);
    if (accessToken) {
      localStorage.setItem(LOCAL_STORAGE_OBJECT.USER, decodedToken);
      setUser(decodedToken);
      setErrors({});
      setIsLoading(false);
    } else {
      clearLocalStorage();
      setErrors({
        message: 'You are not an authorized user',
      });
      setIsLoading(false);
    }
  };
  const login = async (credentials) => {
    setIsLoading(true);
    try {
      const response = await AuthService.login(credentials);
      const { refreshToken, accessToken } = pick(response.data.data, [
        'refreshToken',
        'accessToken',
      ]);
      tokenValidation(refreshToken, accessToken);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setIsLoading(false);
      const { data } = pick(error.response, ['data']);
      setErrors(data);
    }
  };
  const logout = async () => {
    AuthService.logout();
    clearLocalStorage();
    setUser({});
    navigate(ROUTES.LOGIN);
  };
  const value = useMemo(
    () => ({
      user,
      errors,
      isLoading,
      login,
      logout,
    }),
    [user, errors, isLoading]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
