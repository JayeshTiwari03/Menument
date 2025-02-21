import { createSlice } from "@reduxjs/toolkit";

export const beveragesSlice = createSlice({
  name: "beverage",
  initialState: {
    apiData: [],
    loading: false,
  },
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
    setBeverageData: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.apiData = action.payload;
      } else {
        state.apiData = [...state.apiData, action.payload];
      }
    },
  },
});

export const { isLoading, setBeverageData } = beveragesSlice.actions;

export default beveragesSlice.reducer;
