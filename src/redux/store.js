import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import checkoutReducer from "./checkoutSlice";
import introVideoReducer from "./introVideoSlice";
import orderReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    introVideo: introVideoReducer,
    order: orderReducer,
  },
});

export default store;
