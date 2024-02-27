import commerce from "./commercejs";

export async function addToCart(productObj) {
  const { productId, quantity, variants } = productObj;

  const cart = await commerce.cart.add(productId, quantity, variants);
  return cart;
}

export async function cart() {
  const cart = await commerce.cart.retrieve();
  return cart;
}

export async function updateProductCartQuantity(obj) {
  const { productId, quantity } = obj;

  const data = await commerce.cart.update(productId, quantity);
  return data;
}

export async function removeProductFromCart(productId) {
  const data = await commerce.cart.remove(productId);
  return data;
}

export async function cartToEmpty() {
  const data = await commerce.cart.empty();
  return data;
}
