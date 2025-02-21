import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./src/store/slices/menuSlice";
import beverageReducer from "./src/store/slices/beveragesSlice";
import categoryReducer from "./src/store/oldRedux/categoryReducers";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    beverage: beverageReducer,
    category: categoryReducer,
  },
});
