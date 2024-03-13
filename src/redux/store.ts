import { configureStore } from '@reduxjs/toolkit';
import { citySlice } from './citySlice';
import { settingsSlice } from './settingsSlice';
import { themeSlice } from './themeSlice';

export const store = configureStore({
  reducer: {
    city: citySlice.reducer,
    settings: settingsSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;