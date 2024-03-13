import { configureStore } from '@reduxjs/toolkit';
import { citySlice } from './citySlice';
import { settingsSlice } from './settingsSlice';

export const store = configureStore({
  reducer: {
    city: citySlice.reducer,
    settings: settingsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;