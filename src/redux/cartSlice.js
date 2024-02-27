import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  cartId: localStorage.getItem("cartId") || null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartId(state, action) {
      state.cartId = action.payload;
    },

    showHideCart(state, action) {
      state.showCart = action.payload;
    },
  },
});

export const { updateCartId, showHideCart } = cartSlice.actions;
export default cartSlice.reducer;
