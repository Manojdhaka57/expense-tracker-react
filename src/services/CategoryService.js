import HttpClient from '../helpers/HttpClient';
import { API_ENDPOINT } from '../utils';

class CategoryService {
  async getAllCategory() {
    const response = await HttpClient.get(API_ENDPOINT.GET_ALL_CATEGORIES);
    return response;
  }

  async addCategory(payload) {
    const response = await HttpClient.post(API_ENDPOINT.ADD_CATEGORY, payload);
    return response;
  }
}

export default new CategoryService();
