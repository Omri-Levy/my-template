import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const rootReducer = createSlice({
  name: `root`,
  initialState,
  reducers: {
    setSignUpFormDetails: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetSignUpFormDetails: () => initialState,
  },
});

export const { reducer } = rootReducer;
export const {
  setSignUpFormDetails,
  resetSignUpFormDetails,
} = rootReducer.actions;
