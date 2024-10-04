import { configureStore } from "@reduxjs/toolkit";
import Products from "./productSlice";
import Cart from "./cartSlice";
import Order from "./orderSlice";

export const store = configureStore({
  reducer: {
    Products,
    Cart,
    Order,
  },
});
