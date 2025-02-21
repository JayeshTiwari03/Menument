import { createSlice } from "@reduxjs/toolkit";
// slice name,
// initialState
// reducer function
// export actions and reducers

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    apiData: [],
    loading: false,
  },
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMenuData: (state, action) => {
      state.apiData = action.payload;
    },
  },
});

export const { isLoading, setMenuData } = menuSlice.actions;
export default menuSlice.reducer;
