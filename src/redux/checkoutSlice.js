import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutId: localStorage.getItem("checkoutId") || null,
  availableCountriesCode: [],
  selectedCountry: "",
  selectedState: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateCheckoutId(state, action) {
      state.checkoutId = action.payload;
    },

    updateCountriesCode(state, action) {
      state.availableCountriesCode = action.payload;
    },

    updateSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },

    updateSelectedState(state, action) {
      state.selectedState = action.payload;
    },
  },
});

export const {
  updateCheckoutId,
  updateCountriesCode,
  updateSelectedCountry,
  updateSelectedState,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
