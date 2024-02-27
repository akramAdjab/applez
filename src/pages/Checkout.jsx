import CheckoutLayout from "../features/checkout/CheckoutLayout";
import SectionWithTitle from "../ui/SectionWithTitle";

function Checkout() {
  return (
    <SectionWithTitle shadowTitle="Get it now" mainTitle="Checkout">
      <CheckoutLayout />
    </SectionWithTitle>
  );
}

export default Checkout;
