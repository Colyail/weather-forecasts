import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

export enum UnitTypes {
  Imperial = "Imperial",
  Metric = "Metric",
  Standard = "Standard",
}

export enum UnitSymbols {
  Imperial = "°F",
  Metric = "°C",
  Standard = "K",
}

export enum TimeFormat {
  Meridiem = "Meridiem",
  Full = "Full"
}

type initialStateType = {
  unitType: UnitTypes;
  timeFormat: TimeFormat;
  unitSymbol?: UnitSymbols;
}

const initialState: initialStateType = {
  unitType: UnitTypes.Metric,
  timeFormat: TimeFormat.Full,
  unitSymbol: UnitSymbols.Metric,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<initialStateType>) => {
      state.unitType = action.payload.unitType;
      state.timeFormat = action.payload.timeFormat;
      state.unitSymbol = action.payload.unitType === UnitTypes.Imperial 
        ? UnitSymbols.Imperial
        : action.payload.unitType === UnitTypes.Metric
        ? UnitSymbols.Metric : UnitSymbols.Standard

    }
  }
});

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;