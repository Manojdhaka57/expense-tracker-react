import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  show: false,
  type: '',
  message: '',
  messageId: '',
  messageValues: {},
};
const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      return {
        ...initialState,
        ...action.payload,
      };
    },
    hideAlert: () => {
      return initialState;
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice.reducer;
