import { useSelector } from "react-redux";
import styled from "styled-components";
import OrderGallery from "./OrderGallery";
import OrderDetails from "./OrderDetails";

const StyledOrderLayout = styled.div`
  display: grid;
  grid-template-columns: 45% 50%;
  gap: var(--space-9);

  position: relative;

  @media only screen and (max-width: 56.25em) {
    & {
      grid-template-columns: 1fr;
      gap: var(--space-12);
    }
  }
`;

function OrderLayout() {
  const { order } = useSelector((state) => state.order);

  return (
    <StyledOrderLayout>
      <OrderGallery items={order.order.line_items} />
      <OrderDetails order={order} />
    </StyledOrderLayout>
  );
}

export default OrderLayout;
