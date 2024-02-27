import { State } from "country-state-city";
import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import ProductItemRow from "../../ui/ProductItemRow";

import { countryName, formatCurrency } from "../../utilis/helpers";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledOrderDetails = styled.div`
  /* IF THERE'S ONLY ONE ITEM */
  align-self: start;
  position: sticky;
  top: var(--space-5);
  left: 0;

  @media only screen and (max-width: 56.25em) {
    & {
      position: static;
    }
  }

  & h2 {
    font-size: var(--text-5);
    margin-bottom: var(--space-5);
  }

  & h3 {
    margin-top: var(--space-12);
    margin-bottom: var(--space-6);
  }

  & p {
    line-height: 1.4;
  }

  & .order__total {
    margin-top: var(--space-7);
    padding-top: var(--space-6);
    border-top: 1px solid var(--color-grey-200);
  }

  & .order__shipping {
    margin-top: var(--space-7);
  }

  & .order__shipping--title {
    margin-top: var(--space-9);
  }

  & .order__shipping--sub-title {
    /* font-variant: all-small-caps; */
  }
`;

const OrderDateID = styled(Row)`
  @media only screen and (max-width: 28em) {
    & {
      flex-direction: column;
      align-items: flex-start;
    }

    & p:first-of-type {
      order: 1;
    }
  }
`;

function OrderDetails({ order }) {
  const navigate = useNavigate();

  const allStates = State.getStatesOfCountry(order.shipping.country);
  const shippingState = allStates.find(
    (state) => state.isoCode === order.shipping.county_state
  );

  const date = new Intl.DateTimeFormat(navigator.language, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(order.created * 1000)); // Mutiplying by 1000 because we are converting from seconds to miliseconds

  return (
    <>
      <StyledOrderDetails>
        <Heading as="h2">Thank you for your order</Heading>
        <OrderDateID $align="center" $justify="space-between">
          <p className="text-light text-small">Order date: {date}</p>
          <p className="text-light text-small">
            Order reference: {order.customer_reference}
          </p>
        </OrderDateID>

        <Heading as="h3">Order summary</Heading>
        <Row $direction="column" $gap={7}>
          {order.order.line_items.map((item, i) => (
            <ProductItemRow
              items={order.order.line_items}
              item={item}
              index={i}
              key={item.id}
            />
          ))}
        </Row>

        {/* <Heading as="h3">Order total</Heading> */}
        <Row $direction="column" $gap={4} className="order__total">
          <Row $align="center" $justify="space-between">
            <p className="text-small">Subtotal:</p>
            <p className="text-important">
              {formatCurrency(order.order.subtotal.raw)}
            </p>
          </Row>
          <Row $align="center" $justify="space-between">
            <p className="text-small">
              Shipping to {countryName.of(order.order.shipping.description)}:
            </p>
            <p className="text-important">
              {formatCurrency(order.order.shipping.price.raw)}
            </p>
          </Row>
          <Row $align="center" $justify="space-between">
            <p className="text-small">Total:</p>
            <p className="text-important">
              {formatCurrency(order.order.total.raw)}
            </p>
          </Row>
        </Row>

        <Heading as="h3">Additional information</Heading>
        <p className="text-important order__shipping--title">
          &mdash; Shipping info
        </p>
        <Row $direction="column" $gap={5} className="order__shipping">
          <Row $direction="column" $gap={1}>
            <p className="text-light text-small order__shipping--sub-title">
              Name:
            </p>
            <p className="text-important">{order.shipping.name}</p>
          </Row>
          <Row $direction="column" $gap={1}>
            <p className="text-light text-small order__shipping--sub-title">
              Street:
            </p>
            <p className="text-important">{order.shipping.street}</p>
          </Row>
          <Row $direction="column" $gap={1}>
            <p className="text-light text-small order__shipping--sub-title">
              City / State / Country:
            </p>
            <p className="text-important">
              {order.shipping.town_city} / {shippingState.name} /{" "}
              {countryName.of(order.shipping.country)}
            </p>
          </Row>
          <Row $direction="column" $gap={1}>
            <p className="text-light text-small order__shipping--sub-title">
              Postal code:
            </p>
            <p className="text-important">{order.shipping.postal_zip_code}</p>
          </Row>
        </Row>
      </StyledOrderDetails>
      <Button onClick={() => navigate("/")}>Back to home</Button>
    </>
  );
}

export default OrderDetails;
