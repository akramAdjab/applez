import { useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

import Heading from "../../ui/Heading";
import Price from "../../ui/Price";
import Row from "../../ui/Row";
import Button from "../../ui/Button";

import { formatCurrency } from "../../utilis/helpers";
import { useUpdateProductCartQuantity } from "./useUpdateProductCartQuantity";
import { useRemoveProductFromCart } from "./useRemoveProductFromCart";
import CartProductOptions from "./CartProductOptions";

function CartItem({ product, smallScreens }) {
  // Distracturing the product object
  const {
    id: productId,
    quantity,
    name,
    image: { url },
    price: { raw: price },
    selected_options: options,
  } = product;

  // Getting all the informations about the COLOR option from the product object by looping over the array of options
  const optionColor = options.find((option) =>
    option.group_name.includes("Color")
  );

  // Getting all the informations about the MODEL option from the product object by looping over the array of options
  const optionModel = options.find((option) =>
    option.group_name.includes("Model")
  );
  const optionModelName = optionModel ? optionModel.option_name : name;

  // Getting all the informations about the REST OF options from the product object by looping over the array of options
  const optionsWithoutColorAndModel = options.filter(
    (option) =>
      !option.group_name.includes("Color") &&
      !option.group_name.includes("Model")
  );

  // Using state for updating the quantity to UI before FETCHING
  const [quantityState, setQuantityState] = useState(quantity);

  // CUSTOM HOOKS
  const { updateProductCartQuantity, isUpdatingQuantity } =
    useUpdateProductCartQuantity();
  const { removeProductFromCart, isRemovingProduct } =
    useRemoveProductFromCart();

  function handleDec() {
    // Remove product from the cart
    if (quantityState <= 1) {
      setQuantityState(1);
      removeProductFromCart(productId);
    } else {
      // 1. Update the state
      setQuantityState((quantity) => (quantity -= 1));

      // 2, Update the product quantity
      updateProductCartQuantity({
        productId,
        quantity: { quantity: quantityState - 1 },
      });
    }
  }

  function handleInc() {
    // 1. Update the state
    setQuantityState((quantity) => (quantity += 1));

    // 2, Update the product quantity
    updateProductCartQuantity({
      productId,
      quantity: { quantity: quantityState + 1 },
    });
  }

  return (
    <>
      <Row $direction="column">
        {/* <img src={url} alt={optionModel.option_name} /> */}
        <Heading as="h4" data-cursor-img={!smallScreens ? `${url}` : ""}>
          {optionModelName}, {optionColor.option_name}
        </Heading>
        {smallScreens && (
          <>
            <CartProductOptions
              optionsWithoutColorAndModel={optionsWithoutColorAndModel}
            />
            <Price>{formatCurrency(price)}</Price>
          </>
        )}
      </Row>

      {/* Product options in large screens */}
      {!smallScreens && (
        <CartProductOptions
          optionsWithoutColorAndModel={optionsWithoutColorAndModel}
        />
      )}

      <Row $align="center" className="cart-quantity">
        <Button
          $variation="secondary"
          $size="small"
          disabled={isUpdatingQuantity || isRemovingProduct}
          onClick={handleDec}
        >
          <HiOutlineMinus />
        </Button>
        <p>{quantityState}</p>
        <Button
          $variation="secondary"
          $size="small"
          disabled={isUpdatingQuantity}
          onClick={handleInc}
        >
          <HiOutlinePlus />
        </Button>
      </Row>
      {!smallScreens && <Price>{formatCurrency(price)}</Price>}
    </>
  );
}

export default CartItem;
