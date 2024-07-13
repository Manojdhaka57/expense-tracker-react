import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loaders',
  initialState: {
    showLoader: false,
  },
  reducers: {
    showLoader: (state) => {
      state.showLoader = true;
    },
    hideLoader: (state) => {
      state.showLoader = false;
    },
  },
});

export const loaderActions = loaderSlice.actions;
export default loaderSlice.reducer;
