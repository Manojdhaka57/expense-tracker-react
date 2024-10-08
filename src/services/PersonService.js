import HttpClient from '../helpers/HttpClient';
import { API_ENDPOINT } from '../utils';

class PersonService {
  async addPerson(payload) {
    const response = await HttpClient.post(API_ENDPOINT.ADD_PERSON, payload);
    return response;
  }
  async allPersons() {
    const response = await HttpClient.get(API_ENDPOINT.ALL_PERSONS);
    return response;
  }
  async editPerson(payload) {
    const response = await HttpClient.patch(
      `${API_ENDPOINT.EDIT_PERSON}/${payload.personId}`,
      payload
    );
    return response;
  }
  async deletePerson(payload) {
    const response = await HttpClient.delete(
      `${API_ENDPOINT.DELETE_PERSON}/${payload.personId}`,
      payload
    );
    return response;
  }

  async getPersonDetails(payload) {
    const response = await HttpClient.get(
      `${API_ENDPOINT.GET_PERSON_DETAILS}/${payload.personId}`
    );
    return response;
  }

  async userTransactionsSummary(payload) {
    const response = await HttpClient.post(
      API_ENDPOINT.USER_TRANSACTION_SUMMARY,
      payload
    );
    return response;
  }

  async getPersonTransactionSummary(payload) {
    const response = await HttpClient.post(
      API_ENDPOINT.PERSON_TRANSACTIONS_SUMMARY,
      payload
    );
    return response;
  }

  async getPersonTransactionHistory(payload) {
    const response = await HttpClient.post(
      API_ENDPOINT.PERSON_TRANSACTIONS_HISTORY,
      payload
    );
    return response;
  }

  async getTransactionDetails(payload) {
    const response = await HttpClient.get(
      `${API_ENDPOINT.TRANSACTION_DETAILS}/${payload.transactionId}`
    );
    return response;
  }

  async addTransaction(payload) {
    const response = await HttpClient.post(
      API_ENDPOINT.ADD_TRANSACTION,
      payload
    );
    return response;
  }

  async editTransaction(payload) {
    const response = await HttpClient.patch(
      `${API_ENDPOINT.EDIT_TRANSACION}/${payload.transactionId}`,
      payload
    );
    return response;
  }

  async deleteTransaction(payload) {
    const response = await HttpClient.delete(
      `${API_ENDPOINT.DELETE_TRANSACTION}/${payload.transactionId}`
    );
    return response;
  }
}

export default new PersonService();
