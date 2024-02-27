import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import CartPopup from "../features/cart/CartPopup";
import Overlay from "./Overlay";
import IntroVideo from "./IntroVideo";

import { showHideCart } from "../redux/cartSlice";
// import { useCart } from "../features/cart/useCart";
// import { useCheckout } from "../features/checkout/useCheckout";
// import { useAvailableCountries } from "../features/checkout/useAvailableCountries";

function AppLayout() {
  const { showCart } = useSelector((state) => state.cart);
  const { showIntroVideo, path } = useSelector((state) => state.introVideo);
  const dispatch = useDispatch();

  // We are prefechting this DATA to make our app more performante
  // useCart();
  // useCheckout();
  // useAvailableCountries();

  if (showIntroVideo) return <IntroVideo path={path} />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {showCart && (
        <>
          <CartPopup />
          <Overlay onClick={() => dispatch(showHideCart())} />
        </>
      )}
    </>
  );
}

export default AppLayout;
