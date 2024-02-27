import { useMemo } from "react";
import { useCheckout } from "./useCheckout";
import { useCart } from "../cart/useCart";

import CheckoutForm from "./CheckoutForm";
import CheckoutDetails from "./CheckoutDetails";
import Row from "../../ui/Row";
import Loading from "../../ui/Loading";
import styled from "styled-components";

const StyledRow = styled(Row)`
  @media only screen and (max-width: 56.25em) {
    & {
      flex-direction: column;
      gap: var(--space-11);
    }
  }
`;

function CheckoutLayout() {
  const { isLoadingCart } = useCart();
  const { checkout, isLoadingCheckout } = useCheckout();
  const optimizedCheckout = useMemo(() => checkout, [checkout]);

  if (isLoadingCheckout || isLoadingCart) return <Loading type="checkout" />;

  return (
    <StyledRow $gap={6} style={{ position: "relative" }}>
      <CheckoutForm checkout={optimizedCheckout} />
      <CheckoutDetails checkout={optimizedCheckout} />
    </StyledRow>
  );
}

export default CheckoutLayout;
