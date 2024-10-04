import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchLetters: "",
  filtredData: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    SearchData: (state, action) => {
      state.searchLetters = action.payload;
      state.filtredData = state.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(state.searchLetters.toLowerCase());
      });
    },
  },
});

export const { addProducts, SearchData } = ProductSlice.actions;

export default ProductSlice.reducer;
