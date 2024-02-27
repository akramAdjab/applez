import { useDispatch } from "react-redux";
import { showHideCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowsPointingOut, HiOutlineXMark } from "react-icons/hi2";
import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import CartDetails from "./CartDetails";

const StyledCartPopup = styled.div`
  width: 120rem;
  padding: var(--space-9);
  border-radius: var(--border-radius-lg);
  background-color: var(--color-primary-50);
  z-index: 100;

  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;

  & h2 {
    flex-basis: 100%;
  }

  & h3 {
    display: flex;
    align-items: baseline;
    gap: var(--space-1);
  }

  @media only screen and (max-width: 76.25em) {
    & {
      width: 90%;
    }
  }

  @media only screen and (max-width: 37.5em) {
    & h2 {
      font-size: var(--text-5);
      white-space: pre;
    }
  }
`;

function CartPopup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleNavigate() {
    navigate("/cart");
    dispatch(showHideCart(false));
  }

  function handleClose() {
    dispatch(showHideCart(false));
  }

  return (
    <StyledCartPopup>
      <Row $align="center">
        <Heading as="h2">Shopping Cart</Heading>
        <Row $justify="flex-end">
          <Button
            $variation="secondary"
            $size="medium"
            onClick={handleNavigate}
          >
            <HiOutlineArrowsPointingOut />
          </Button>
          <Button $variation="danger" $size="medium" onClick={handleClose}>
            <HiOutlineXMark />
          </Button>
        </Row>
      </Row>

      <CartDetails />
    </StyledCartPopup>
  );
}

export default CartPopup;
