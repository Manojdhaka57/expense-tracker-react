import HttpClient from '../helpers/HttpClient';
import { API_ENDPOINT } from '../utils';

class AuthService {
  async login(payload) {
    const response = await HttpClient.post(API_ENDPOINT.LOGIN, payload);
    return response;
  }
  async logout() {
    const response = await HttpClient.post(API_ENDPOINT.LOGOUT);
    return response;
  }
  async validate() {
    const response = await HttpClient.post(API_ENDPOINT.VALIDATE);
    return response;
  }
  async refreshToken() {
    const response = await HttpClient.post(API_ENDPOINT.REFRESH_TOKEN);
    return response;
  }
}
export default new AuthService();
