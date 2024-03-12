import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  value: string;
}

const initialState:initialStateType = { value: "" };

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setSelectedCity: (state, action:PayloadAction<string>) => {
      state.value = action.payload;
    }
  },
});

export const { setSelectedCity } = citySlice.actions;
export default citySlice.reducer;