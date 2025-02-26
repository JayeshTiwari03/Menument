import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import beverageReducer from "./slices/beveragesSlice";
import categoryReducer from "./oldRedux/categoryReducers";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    beverage: beverageReducer,
    category: categoryReducer,
  },
});
