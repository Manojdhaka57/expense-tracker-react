import { personActionTypes } from '../store/slices/personSlice';

export const addPerson = (payload) => ({
  type: personActionTypes.ADD_PERSON,
  payload,
});

export const getAllPersons = () => ({
  type: personActionTypes.GET_ALL_PERSONS,
});

export const editPerson = (payload) => ({
  type: personActionTypes.EDIT_PERSON,
  payload,
});

export const deletePerson = (payload) => ({
  type: personActionTypes.DELETE_PERSON,
  payload,
});
