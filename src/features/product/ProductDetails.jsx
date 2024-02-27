import { useRef, useState } from "react";
import styled from "styled-components";

import Row from "../../ui/Row";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Price from "../../ui/Price";

import { formatCurrency } from "../../utilis/helpers";
import { useAddToCart } from "../cart/useAddToCart";

const StyledProductDetails = styled.div`
  height: 100%;

  display: grid;
  grid-template-rows: 1fr auto;
  gap: var(--space-7);

  @media only screen and (max-width: 50em) {
    & {
      padding-left: var(--space-11);
      padding-right: var(--space-11);
    }
  }

  @media only screen and (max-width: 31.25em) {
    & {
      padding-left: var(--space-7);
      padding-right: var(--space-7);
    }
  }

  @media only screen and (max-width: 27.5em) {
    & {
      padding-left: var(--space-2);
      padding-right: var(--space-2);
    }
  }

  @media only screen and (max-width: 20em) {
    & {
      padding-left: 0;
      padding-right: 0;
    }
  }

  & button {
    flex: 1;
  }
`;

const DetailsContainer = styled.div`
  overflow: scroll;

  display: flex;
  flex-direction: column;
  gap: var(--space-11);
`;

const Details = styled.div`
  & h3 {
    margin-bottom: var(--space-6);
    & span {
      color: var(--color-grey-500);
    }
  }
`;

const Option = styled.div`
  padding: var(--space-5);
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-lg);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & input {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & p {
    color: var(--color-grey-500);
  }
`;

// TODO: Restructure this component later, and make it simpler.
function ProductDetails({
  productId,
  variants,
  price,
  setImgsIndex,
  onAddError,
}) {
  const [additionalPrice, setAdditionalPrice] = useState(0);
  const ref = useRef();

  const { addToCart, isAdding } = useAddToCart();

  function handleClick() {
    const inputs = [...ref.current.querySelectorAll("input")];
    const colorVariants = [
      ...[...ref.current.querySelectorAll("h3")]
        .find((el) => el.textContent.includes("Color"))
        .parentElement.querySelectorAll("input"),
    ];

    inputs.forEach((input) => {
      // 1. Remove the disabled class from all the parents elements fo the input
      input.parentElement.classList.remove("disabled");

      // 2. Add the disabled class only the NON selected options
      !input.checked && input.parentElement.classList.add("disabled");
    });

    // 3. Calculate the new price based on selected options
    const price = inputs
      .filter((input) => input.checked)
      .reduce((acc, cur) => acc + Number(cur.value), 0);

    // 4. Add this price to USE STATE HOOK to render to UI
    setAdditionalPrice(price);

    // 5. Get current select color variant
    const currentColorInputIndex = colorVariants.findIndex(
      (input) => input.checked
    );

    setImgsIndex(currentColorInputIndex === -1 ? 0 : currentColorInputIndex);
  }

  function handleAddToCart() {
    // 1. Select all the inputs
    const inputs = [...ref.current.querySelectorAll("input")];

    // 2. Get the parent elements of these inputs
    let parentOfInputs = new Set();
    inputs.forEach((input) => {
      parentOfInputs.add(input.name);
    });

    // 2. Get the checked inputs
    const checkedInputsCategory = inputs.filter((input) => input.checked);
    const checkedInputsCategoryName = checkedInputsCategory.map(
      (input) => input.name
    );

    const inputsOptionsID = checkedInputsCategory.map(
      (input) => input.parentElement.id
    );
    const inputsValuesID = checkedInputsCategory.map((input) => input.id);

    // 3. Based on this condition: add to cart or render error
    if ([...parentOfInputs].length === checkedInputsCategoryName.length) {
      const variantsObj = {};
      inputsOptionsID.forEach((id, i) => (variantsObj[id] = inputsValuesID[i]));

      const productObj = {
        productId,
        quantity: 1,
        variants: variantsObj,
      };

      addToCart(productObj);
      onAddError(false);
    } else {
      onAddError(true);
    }
  }

  return (
    <StyledProductDetails>
      <DetailsContainer ref={ref}>
        {variants.map((variant) => (
          <Details key={variant.id}>
            <Heading as="h3" className="heading">
              {variant.name}.
            </Heading>
            <Row $direction="column" className="options">
              {variant.options.map((option) => (
                <Option
                  className="disabled"
                  onClick={handleClick}
                  id={variant.id}
                  key={option.id}
                >
                  <input
                    type="radio"
                    id={option.id}
                    name={variant.name}
                    value={option.price.raw}
                  />
                  <Heading as="h4">{option.name}</Heading>
                  <p>+{formatCurrency(option.price.raw)}</p>
                </Option>
              ))}
            </Row>
          </Details>
        ))}
      </DetailsContainer>

      <Row $align="center" $justify="space-between" $gap={5}>
        <Button disabled={isAdding} onClick={handleAddToCart}>
          {isAdding ? "Adding..." : "Add to cart"}
        </Button>
        <Price>{formatCurrency(price + additionalPrice)}</Price>
      </Row>
    </StyledProductDetails>
  );
}

export default ProductDetails;
