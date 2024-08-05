import HttpClient from '../helpers/HttpClient';
import { API_ENDPOINT } from '../utils';

class ExpenseService {
  async allExpenses(payload) {
    const response = await HttpClient.post(API_ENDPOINT.ALL_EXPENSES, payload);
    return response;
  }

  async expensesSummary(payload) {
    const response = await HttpClient.post(
      API_ENDPOINT.EXPENSES_SUMMARY,
      payload
    );
    return response;
  }

  async addExpense(payload) {
    const response = await HttpClient.post(API_ENDPOINT.ADD_EXPENSE, payload);
    return response;
  }

  async getCategoryWiseExpense(payload) {
    const response = await HttpClient.post(
      API_ENDPOINT.GET_CATEGORY_WISE_EXPENSE,
      payload
    );
    return response;
  }
}
export default new ExpenseService();
