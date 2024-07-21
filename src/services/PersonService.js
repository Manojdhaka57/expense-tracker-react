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
}

export default new PersonService();
