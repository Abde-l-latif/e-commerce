import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const OrderData = createSlice({
  name: "Order",
  initialState,
  reducers: {
    getData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { getData } = OrderData.actions;

export default OrderData.reducer;
