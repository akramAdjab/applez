import { memo } from "react";
import { HiMiniLockClosed } from "react-icons/hi2";
import styled from "styled-components";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ProductItemRow from "../../ui/ProductItemRow";

import { countryName, formatCurrency } from "../../utilis/helpers";
import { useSelector } from "react-redux";

const StyledCheckoutDetails = styled.div`
  padding: var(--space-9);
  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-700-light);

  flex-basis: 40%;
`;

const StyledRowPrice = styled(Row)`
  padding: var(--space-11) 0;
  border-bottom: 1px solid var(--color-grey-300);

  & .total-price:first-of-type {
    color: var(--color-primary-700);
    font-size: var(--text-7);
    font-weight: var(--weight-4);
  }

  & p:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-1);

    & span {
      color: var(--color-accent-900);

      display: flex;
      align-items: center;
    }
  }
`;

const StyledRowDetails = styled(Row)`
  padding: var(--space-11) 0;

  & p:first-of-type {
    font-weight: var(--weight-4);
    text-transform: capitalize;
  }

  & p {
    line-height: 1.7;
  }
`;

const CheckoutDetails = memo(function CheckoutDetails({ checkout }) {
  const { selectedCountry } = useSelector((state) => state.checkout);

  const {
    total: { raw: totalPrice } = {},
    line_items: items,
    shipping_methods: shippingMethods,
  } = checkout || {};

  const currentShippingMethod =
    selectedCountry === ""
      ? {
          price: {
            raw: 0,
          },
        }
      : shippingMethods.find(
          (shipping) => shipping.description === selectedCountry
        );

  return (
    <StyledCheckoutDetails>
      <StyledRowPrice $direction="column" $gap={9} className="text-center">
        <Heading as="h4" color="lightDark">
          Total amount
        </Heading>
        <Row $direction="column" $gap={5}>
          <p className="total-price">
            {formatCurrency(
              totalPrice +
                (!selectedCountry ? 0 : currentShippingMethod.price.raw)
            )}
          </p>
          {selectedCountry ? (
            <p
              style={{ fontWeight: "var(--weight-4)" }}
              className="text-small text-light"
            >
              Shipping to {countryName.of(selectedCountry)} is included at{" "}
              {formatCurrency(currentShippingMethod.price.raw)}!
            </p>
          ) : (
            <p className="text-small text-light" style={{ lineHeight: "1.5" }}>
              It seems that you haven&apos;t selected a country to calculate
              your shipping cost.
            </p>
          )}
        </Row>
        <p className="text-small">
          <span>
            <HiMiniLockClosed />
          </span>{" "}
          Secure Payment
        </p>
      </StyledRowPrice>
      <StyledRowDetails $direction="column" $gap={9}>
        <Heading as="h4" color="lightDark">
          Order summary
        </Heading>

        <Row $direction="column" $gap={7}>
          {items?.map((item, i) => (
            <ProductItemRow items={items} item={item} index={i} key={item.id} />
          ))}
        </Row>
      </StyledRowDetails>
    </StyledCheckoutDetails>
  );
});

export default CheckoutDetails;
