import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const Item = action.payload;
      const findIndex = state.products.find((x) => x.id === Item.id);
      if (findIndex) {
        findIndex.quantity++;
        findIndex.totalPrice += findIndex.price;
      } else {
        state.products.push({
          id: Item.id,
          title: Item.title,
          price: Item.price,
          img: Item.img,
          totalPrice: Item.price,
          quantity: 1,
        });
      }
      state.totalQuantity++;
      state.totalPrice += Item.price;
    },
    inCreaseQuantity(state, action) {
      const id = action.payload;
      const findProduct = state.products.find((x) => x.id == id);
      if (findProduct) {
        findProduct.quantity++;
        findProduct.totalPrice += findProduct.price;
        state.totalQuantity++;
        state.totalPrice += findProduct.price;
      }
    },
    deCreaseQuantity(state, action) {
      const id = action.payload;
      const findProduct = state.products.find((x) => x.id == id);
      if (findProduct.quantity > 1) {
        if (findProduct) {
          findProduct.quantity--;
          findProduct.totalPrice -= findProduct.price;
          state.totalQuantity--;
          state.totalPrice -= findProduct.price;
        }
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const findProduct = state.products.find((x) => x.id == id);
      if (findProduct) {
        state.products = state.products.filter((x) => x !== findProduct);
      }
    },
  },
});

export const { addToCart, inCreaseQuantity, deCreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
