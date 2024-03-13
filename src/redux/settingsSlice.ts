import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

export enum UnitTypes {
  Imperial = "Imperial",
  Metric = "Metric",
  Standard = "Standard",
}

export enum TimeFormat {
  Meridiem = "Meridiem",
  Full = "Full"
}

type initialStateType = {
  unitType: UnitTypes;
  timeFormat: TimeFormat;
}

const initialState: initialStateType = {
  unitType: UnitTypes.Metric,
  timeFormat: TimeFormat.Full
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<initialStateType>) => {
      state.unitType = action.payload.unitType;
      state.timeFormat = action.payload.timeFormat;
    }
  }
});

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;