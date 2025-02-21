import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./src/store/slices/menuSlice";
import beverageReducer from "./src/store/slices/beveragesSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    beverage: beverageReducer,
  },
});
