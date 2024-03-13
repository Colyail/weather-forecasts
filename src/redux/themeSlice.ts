import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

export enum ThemeTypes {
  Light = "dark",
  Dark = "light",
}

type initialStateType = {
  theme: ThemeTypes;
}

const initialState:initialStateType = { theme: ThemeTypes.Dark };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action:PayloadAction<ThemeTypes>) => {
      state.theme = action.payload;
    }
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;