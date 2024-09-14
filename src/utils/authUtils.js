import { jwtDecode } from 'jwt-decode';
export const LOCAL_STORAGE_OBJECT = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
  USER_NAME: 'username',
  EXP: 'exp',
};

export const clearLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_OBJECT.ACCESS_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_OBJECT.REFRESH_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_OBJECT.USER);
  localStorage.removeItem(LOCAL_STORAGE_OBJECT.USER_NAME);
  localStorage.removeItem(LOCAL_STORAGE_OBJECT.EXP);
};

export const decodeToken = (token = '') => {
  return jwtDecode(token);
};
