import { createSlice } from '@reduxjs/toolkit';

const personSlice = createSlice({
  name: 'person',
  initialState: {
    allPersons: [],
    personDetails: {},
  },
  reducers: {
    updateAllPersons: (state, action) => {
      state.allPersons = action.payload;
    },
  },
});

export default personSlice.reducer;
export const personActions = personSlice.actions;

export const personActionTypes = {
  ADD_PERSON: 'person/ADD_PERSON',
  GET_ALL_PERSONS: 'person/GET_ALL_PERSONS',
  EDIT_PERSON: 'person/EDIT_PERSON',
  DELETE_PERSON: 'person/DELETE_PERSON',
};
