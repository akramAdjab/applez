import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { cart as cartApi } from "../../services/apiCart";
import { updateCartId } from "../../redux/cartSlice";
import { useEffect } from "react";

export function useCart() {
  const dispatch = useDispatch();

  const { data: cart, isLoading: isLoadingCart } = useQuery({
    queryKey: ["cart"],
    queryFn: cartApi,
  });

  useEffect(
    function () {
      if (cart?.id) {
        dispatch(updateCartId(cart?.id));
        localStorage.setItem("cartId", cart?.id);
      }
    },
    [cart?.id, dispatch]
  );

  return { cart, isLoadingCart };
}
