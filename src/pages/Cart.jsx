import CartDetails from "../features/cart/CartDetails";
import SectionWithTitle from "../ui/SectionWithTitle";

function Cart() {
  return (
    <SectionWithTitle shadowTitle="Shopping" mainTitle="Cart">
      <CartDetails cartPage={true} />
    </SectionWithTitle>
  );
}

export default Cart;
