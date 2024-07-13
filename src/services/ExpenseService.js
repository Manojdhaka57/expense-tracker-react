import HttpClient from '../helpers/HttpClient';
import { API_ENDPOINT } from '../utils';

class ExpenseService {
  async allExpenses(payload) {
    const response = await HttpClient.post(API_ENDPOINT.ALL_EXPENSES, payload);
    console.log('@test_', response);
    return response;
  }
}
export default new ExpenseService();
