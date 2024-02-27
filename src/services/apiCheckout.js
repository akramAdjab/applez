import commerce from "./commercejs";

export async function checkout(cartId) {
  const data = await commerce.checkout.generateToken(cartId, {
    type: "cart",
  });
  return data;
}

export async function captureOrder({ checkoutId, order }) {
  const data = await commerce.checkout.capture(checkoutId, order);
  console.log(data);
  return data;
}

export async function getAvailableCountries(checkoutId) {
  // if (localStorage.getItem("countries")) {
  //   return JSON.parse(localStorage.getItem("countries"));
  // } else {
  const { countries } = await commerce.services.localeListShippingCountries(
    checkoutId
  );
  return countries;
  // }
}

// export async function getCities(checkoutId, countriesCode) {
//   // if (localStorage.getItem("cities")) {
//   //   return JSON.parse(localStorage.getItem("cities"));
//   // } else {
//   const promises = countriesCode.map((country) =>
//     commerce.services.localeListShippingSubdivisions(checkoutId, country)
//   );

//   const cities = await Promise.all(promises);
//   return cities;
//   // }
// }
