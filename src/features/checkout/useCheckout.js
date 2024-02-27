import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { checkout as checkoutApi } from "../../services/apiCheckout";
import { useEffect } from "react";
import { updateCheckoutId } from "../../redux/checkoutSlice";

export function useCheckout() {
  const { cartId } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { data: checkout, isLoading: isLoadingCheckout } = useQuery({
    queryKey: ["checkout"],
    queryFn: () => checkoutApi(cartId),
    enabled: cartId !== null,
  });

  useEffect(
    function () {
      if (checkout?.id) {
        dispatch(updateCheckoutId(checkout?.id));
      }
    },
    [checkout?.id, dispatch]
  );

  return { checkout, isLoadingCheckout };
}
